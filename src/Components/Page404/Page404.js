import React, { Fragment, Component } from "react";
import "./Page404.css";

class Page404 extends Component{
    render() 
    {
    return (
        <Fragment>
            
            <div className="container">
                <h4 className="text-error-404">Pokamis` error 404</h4>
            <div className="centre">
            <a className="button-error-404"  href="./">Back to List</a>
            </div>
            </div>
        </Fragment>
    )
    }
}

export default Page404;