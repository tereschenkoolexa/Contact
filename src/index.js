import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ContactList from "./Components/ContactList/ContactList";
import uuid from 'react-uuid'
import ContactAdd from './Components/ContactAdd/ConatctAdd';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Page404 from './Components/Page404/Page404';
import ContactEdit from './Components/ContactEdit/ContactEdit';

class App extends Component {

    state = {
        List:
            [
                {
                    id: uuid(),
                    name: "Andrii Riabii",
                    phone: "+38 (095) 41 66 765",
                    gmail: "cDuia@gmail.com",
                    street: "Rivne Sobor 16",
                    gender: "men",
                    avatar: 1,
                    isFavorite: true
                },
                {
                    id: uuid(),
                    name: "Vadim Pirogi",
                    phone: "+38 (065) 41 66 765",
                    gmail: "cIuia4@gmail.com",
                    street: "Rivne Sobor 126",
                    gender: "women",
                    avatar: 2,
                    isFavorite: false
                },
                {
                    id: uuid(),
                    name: "Vlad Shum",
                    phone: "+38 (095) 01 61 765",
                    gmail: "cuia1@gmail.com",
                    street: "Rivne Sobor 164",
                    gender: "men",
                    avatar: 5,
                    isFavorite: false
                },
                {
                    id: uuid(),
                    name: "Vitaliiiiii Pelekh",
                    phone: "+38 (096) 52 68 705",
                    gmail: "KcDOSia1@gmail.com",
                    street: "Rivne Sobor 164",
                    gender: "women",
                    avatar: 50,
                    isFavorite: true
                },
                {
                    id: uuid(),
                    name: "Alex Varenik",
                    phone: "+38 (091) 51 34 400",
                    gmail: "12cea1@gmail.com",
                    street: "Rivne Sobor 164",
                    gender: "men",
                    avatar: 69,
                    isFavorite: true
                }
            ]
    }

    setFavorite = id => {
        const index = this.state.List.findIndex(t => t.id === id)
        let tempList = this.state.List.slice();
        tempList[index].isFavorite = !tempList[index].isFavorite;

        this.setState(state => {
            return {
                isFavorite: !this.tempList
            }
        })
    }

    addContact = (name, phone, gmail, street, avatar, gender, isFavorite) => {

        const newContact = {
            id: uuid(),
            name: name,
            phone: phone,
            gmail: gmail,
            street: street,
            gender: gender,
            avatar: avatar,
            isFavorite: isFavorite
        }

        this.setState(state => {
            let tempList = this.state.List.slice();
            tempList.push(newContact);

            return {
                List: tempList
            }
        })

    }

    deleteContact = (id) => {
        let tempList = this.state.List.slice();
        const index = this.state.List.findIndex(item => item.id === id);
        tempList.splice(index, 1);

        this.setState({
            List: tempList
        })
    }
    
    searchContact =(event)=>{
        // let tempList = this.state.List.find(x => x.name.contains(nameSearch));
        console.log(event)
    }

    editContact = (id,name, phone, gmail, street, avatar, gender, isFavorite) => {

        const editContact = {
            id: id,
            name: name,
            phone: phone,
            gmail: gmail,
            street: street,
            gender: gender,
            avatar: avatar,
            isFavorite: isFavorite
        }
        console.log(editContact)
        // this.setState(state => {
        //     let tempList = this.state.List.slice();
        //     tempList.push(newContact);

        //     return {
        //         List: tempList
        //     }
        // })

    }
    
    render() {
        return (
            <Fragment>
                <Router>
                    <div className="body-image">
                        <header className="hat">
                            <nav class="navbar navbar-bg">
                                <div class="container">
                                    <div class="container-fluid navbar-padding">
                                        <div class="navbar-header div-head">
                                            <Link class="navbar-brand link-color" to="/">Contact book</Link>
                                        </div>
                                        <div>
                                            <div class="search-div">
                                        <div class="d6">
                                            <form>
                                                <input type="text" placeholder="Search" id="text-search"></input>
                                                <Link to="/" type="submit" class="search-button" /*onClick={this.searchContact(text-search)}*/></Link>
                                            </form>
                                        </div>
                                        </div>
                                        <ul class="nav navbar-nav div-contact">
                                            <li><Link to="/" class="link-color">List contacts</Link></li>
                                            <li><Link to="/addContact" class="link-color">Add contact</Link></li>

                                        </ul>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </header>
                        <main>

                            <Switch>

                                <Route
                                    path="/"
                                    exact
                                    render={() =>
                                        <ContactList
                                            Data={this.state.List}
                                            setFavorite={this.setFavorite}
                                            deleteContact={this.deleteContact}
                                            editContact={this.editContact}
                                        ></ContactList>
                                    }></Route>
                                <Route
                                    path="/addContact"
                                    exact
                                    render={() =>
                                        <ContactAdd
                                            addContact={this.addContact}
                                        ></ContactAdd>
                                    }></Route>
                                    <Route
                                    path="/editContact"
                                    exact
                                    render={() =>
                                        <ContactEdit
                                            addContact={this.editContact}
                                        ></ContactEdit>
                                    }></Route>
                                <Route
                                    path="*"
                                    render={() =>
                                        <Page404></Page404>
                                    }></Route>
                            </Switch>
                        </main>
                    </div>
                </Router>
            </Fragment>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));