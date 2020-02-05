import React, {Component} from 'react';

class Note extends Component {

    constructor(props) {
        super(props);
        this.note = this.props.note
    }

    render() {
        return (
            <div>
                {this.note.content}
            </div>
        )
    }
}

export default Note;