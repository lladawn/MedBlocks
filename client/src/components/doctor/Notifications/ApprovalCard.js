import React, {Component} from 'react';

class ApprovalCard extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div className="ui card">
                <div className="content">{this.props.children}</div>
                <div className="extra content">
                    <div className="ui two buttons">
                        <div className="ui basic green button">Approve</div>
                        <div className="ui basic red button">Decline</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ApprovalCard;