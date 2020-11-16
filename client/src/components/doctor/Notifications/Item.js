import React, { Component } from 'react';
import avatar from '../../img/user-logo.png'

class Item extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return (
            <div className="comment">
                <a href="/doctor" className="avatar">
                    <img alt="avatar" src={avatar} style={{width: '30px'}} />
                </a>
                <div className="content">
                    <a href="/doctor" className="author">
                        {this.props.name}
                    </a>
                    <div className="metadata">
                        <span className="date">Today at 6:00PM</span>
                    </div>
                    
                    <div className="text">In need of treatment.</div>
                </div>
            </div>
        );
    }
}

export default Item;