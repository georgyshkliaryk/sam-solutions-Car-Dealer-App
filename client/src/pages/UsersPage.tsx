import React from "react";
import { Link } from "react-router-dom";
// @ts-ignore
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Users from "../components/Users/Users";
import Login from "../components/Login/Login";

class UsersPage extends React.Component<any, {}> {
    state = {
        users: sessionStorage.getItem("login"),
    };
    constructor(props: any) {
        super(props);


        
    }



    componentDidMount() {
    }

    render() {
        return (
            <>
                
                <Header lang={"hidden"}/>
                <Users users={this.state.users}/>
                <Footer/>

            </>
        );
    };
}

export default UsersPage;