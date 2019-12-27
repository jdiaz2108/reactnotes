import React, {Component} from 'react';

class Note extends Component {

    constructor(props) {
        super(props);
        this.id = this.props.id
    }

    render() {
        return (
        <div key="{this.id}">
            {this.id}
        </div>
        )
    }
}

export default Note;