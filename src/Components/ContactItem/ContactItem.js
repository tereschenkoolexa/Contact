import React, { Fragment, Component } from "react";
import "./ContactItem.css";
import { BrowserRouter as Link } from "react-router-dom";

class ContactItem extends Component {
    state = {
        name: this.props.name,
        phone: this.props.phone,
        gmail: this.props.gmail,
        street: this.props.street,
        gender: this.props.gender,
        avatar: this.props.avatar,
        isFavorite: this.props.isFavorite
    };

    randomImage() {
        const randomAvatar = Math.floor(Math.random() * Math.floor(99));
        this.setState({
            avatar: randomAvatar
        });
    }

    render() {
        const { name, phone, gmail, street, gender, avatar } = this.state;
        const URL = `https://api.randomuser.me/portraits/${gender}/${avatar}.jpg`;

        let starStyle = "fa fa-star-o fa-2x star";
        if (this.props.isFavorite == true) {
            starStyle = "fa fa-star fa-2x star";
        }

        return (
            <Fragment>
                <li className="contact-item">
                    <img src={URL} alt="contact image"></img>
                    <h2>{name}</h2>
                    <p>{phone}</p>
                    <p>{gmail}</p>
                    <p>{street}</p>
                    <button className="button-item" onClick={this.randomImage.bind(this)}>Ranmdom image</button>
                    <div className="head-div-icon">
                        <div className="item-div-icon">
                            <i onClick={this.props.setFavorite} className={starStyle} aria-hidden="true"></i>
                        </div>
                        <div className="item-div-icon">
                        <Link to="/editContact" ><i className="fa fa-pencil fa-2x pencil"></i></Link>
                            
                        </div>
                        <div className="item-div-icon">
                            <i onClick={this.props.deleteContact} className="fa fa-trash-o fa-2x trash"></i>
                        </div>
                    </div>
                </li>
            </Fragment>
        )
    }



    // setFavorite()
    // {
    //     this.setState({
    //         isFavorite: !this.state.isFavorite
    //     });
    //     console.log(this.state.isFavorite);
    // }
}



export default ContactItem;