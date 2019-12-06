import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    static defaultProps = {
        name: 'default name'
    }
    static propTypes = {
        name: PropTypes.string,
        age: PropTypes.number.isRequired
    }

    state = {
        number: 0
    }

    render() {
        return (
            <div>
                Name: { this.props.name }<br/>
                Age: { this.props.age }<br />
                Number: {this.state.number}
                <button onClick={() => {
                    this.setState({
                        number: this.state.number + 1
                    })
                }}>Plus</button>
            </div>
        )
    }
}
// MyComponent.defaultProps = {
//     name: 'default name'
// }

// MyComponent.propTypes = {
//     name: PropTypes.string
// }

export default MyComponent;