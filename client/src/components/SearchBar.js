import React, { Component } from 'react';

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            term: ""
        };
    }

    onInputChange = (event) => {
        // console.log(event.target.value)

    }

    render(){
        return(
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <input 
                            type="text" 
                            value={this.state.term}
                            placeholder={`Search ${this.props.category}`} 
                            onChange={event => this.setState({term: event.target.value.toUpperCase() })} 
                        />
                    </div>
                </form>
            </div>
        );
    }

}

export default SearchBar;