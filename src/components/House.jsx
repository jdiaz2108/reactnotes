import React, {Component} from 'react';

class House extends Component {

    constructor(props) {
        super(props);
        this.house = this.props.house
        this.state = { 
                house: this.house,
                color: 'red',
                user: {
                    id: 1,
                    name: 'Nombre usuario'
                }
            }

        this.changeColor = this.changeColor.bind(this)
    }

    changeColor = (value) => {
        this.setState({user: {
            ...this.state.user, name: value.target.value
            }
        });

        console.log(this.state)
    }
     
    render() {
        let color = this.state.color;
        return (
            <div>
                <h5 style={{display: 'inline', marginRight: '1rem'}}>
                    {this.state.color} - { this.state.user.name }
                </h5>
                <input type="text" name="" value={this.state.user.name} onChange={ this.changeColor } style={{ marginRight: '1rem' }}/>
                <button onClick={this.changeColor }>
                    Change value
                </button>
            </div>
        )
    }
}

export default House;