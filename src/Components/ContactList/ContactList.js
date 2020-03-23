import React, { Fragment } from "react";
import "./ContactList.css";
import ContactItem from "../ContactItem/ContactItem";

const ContactList = ({Data, setFavorite, deleteContact}) => {
    console.log("This",Data)

    const singleContact = Data.map(item =>{
        return(
    <ContactItem 
        key={item.id}
        name={item.name}
        phone={item.phone}
        gmail={item.gmail}
        street={item.street}
        gender={item.gender}
        avatar={item.avatar}
        isFavorite={item.isFavorite}
        setFavorite={()=>setFavorite(item.id)}
        deleteContact={()=>deleteContact(item.id)}
    ></ContactItem>
        );
    });
    return (
        <Fragment>
            <div className="second-bg">
                <div className="container">
                    <p>Contact list:</p>
                </div>
            </div>
            <ul className="list container">
            {singleContact}
            </ul>
        </Fragment>
    )
}

export default ContactList;