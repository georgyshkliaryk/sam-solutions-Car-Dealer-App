import React from "react";
import {useEffect} from "react";

import {Link} from "react-router-dom";

import "./Users.scss";

import WOW from "wowjs";

class Users extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }


    componentDidMount() {
    }

    getLogins = () => {
       return Object.values(sessionStorage).join(" ");
    };


    render() {
        return (
            <div className={"users__container"}>

                <span>Users on site: </span><br/>
                    {/*{this.props.users.key}*/}



                <div> {this.getLogins()} </div>



            </div>
        );
    }
}


export default Users;