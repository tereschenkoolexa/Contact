import React, { Fragment, Component } from "react";
import "./ContactAdd.css";

class ContactAdd extends Component{

    state = {
        name: null,
        phone:null,
        gmail:null,
        street:null,
        gender: null,
        avatar: null,
        isFavorite: null

    };

    getName = (event) =>{
        console.log(event.target.value);
        this.setState({
            name: event.target.value
        })
    }

    getPhone = (event) =>{
        console.log(event.target.value);
        this.setState({
            phone: event.target.value
        })
    }

    getGmail = (event) =>{
        console.log(event.target.value);
        this.setState({
            gmail: event.target.value
        })
    }

    getStreet = (event) =>{
        console.log(event.target.value);
        this.setState({
            street: event.target.value
        })
    }

    getGender = (event) =>{
        console.log(event.target.value);
        this.setState({
            gender: event.target.value
        })
    }

    getAvatar = (event) =>{
        console.log(event.target.value);
        this.setState({
            avatar: event.target.value
        })
    }
    
    getIsFavorite = (event) =>{
        console.log(event.target.value);
        this.setState({
            isFavorite: event.target.value
        })
    }

    setData = (event) =>{
        event.preventDefault();
        console.log("send");
        const  {name, phone,gmail,street,avatar, gender,isFavorite}= this.state;
        this.props.addContact(name, phone,gmail,street,avatar,gender,isFavorite);
    }


    render() 
    {
        return(
        <Fragment>
            <div className="second-bg">
                <div className="container">
                    <p>Add contact:</p>
                </div>
            </div>
            <div className="container ">          
                  <form onSubmit={this.setData} className="second-bg">
                      <div class="padding-add-contact">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Name contact</label>
                        <input onChange={this.getName} type="text" class="form-control" placeholder="Enter name"></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Address contact</label>
                        <input onChange={this.getStreet} type="text" class="form-control" placeholder="Enter address"></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Phone contact</label>
                        <input onChange={this.getPhone} type="tel" class="form-control" placeholder="Enter phone"></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email contact</label>
                        <input onChange={this.getGmail} type="email" class="form-control" placeholder="Enter email"></input>
                    </div>
                     <div class="form-group">
                        <label for="exampleInputEmail1">Number avatar</label>
                        <input onChange={this.getAvatar} type="number" min="1" max="99" class="form-control" placeholder="Enter number avatar"></input>
                    </div>
                    <div class="form-group">
                        <label for="sel1">Gender Select</label>
                        <select multiple class="form-control custom-select select-gender" id="sel1" onChange={this.getGender}>
                        <option value="men" class="option-gender">Men</option>
                        <option value="women" class="option-gender">Women</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <div>
                            <label for="isFavoriteRadioButton">Favorite</label>
                            <select multiple class="form-control custom-select select-gender" id="isFavoriteRadioButton" onChange={this.getIsFavorite}>
                            <option value={1} class="option-gender">Yes</option>
                            <option value={0} class="option-gender">No</option>
                            </select>
                        </div>
                    </div>
                    </div>
                    <button type="submit" class="button-item">Submit</button>
                </form>
                </div>

        </Fragment>
        )
    }

}


export default ContactAdd;