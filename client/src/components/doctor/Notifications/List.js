import React, { Component } from 'react';
import Item from './Item';
import ApprovalCard from './ApprovalCard';

class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "Name",
        }
    }

    

    componentWillMount() {
        this.setState({name: "xyz"});
    }

    render(){
        return (
            <div className = "ui container comments">
                <ApprovalCard>
                    <Item name={this.state.name}/>
                </ApprovalCard>
                <ApprovalCard>
                    <Item name={this.state.name}/>
                </ApprovalCard>
                
            </div>
        );
    }
}

export default List;