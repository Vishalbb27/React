//class component
import React, { Component } from 'react';

export default class Class1 extends Component{
    constructor(props){
        super(props);
        this.state = {
            username : props.name
        }
    }
    newSate=() =>{
        this.setState({username:"James"}); //setstate triggers ui method to update the ui
    }
    render() {
        return (
            <div>
                <h1>Class Component</h1>
                <p><label>Username : {this.state.username}</label></p>
                <button onClick={this.newSate}>Change State</button>
            </div>
        );
    }
}