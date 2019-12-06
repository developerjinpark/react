import React, { Component } from 'react';

class IterationSample extends Component{
    state = {
        names : ['snowman', 'ice', 'snow', 'wind'],
        temp: ''
    }
    handleChange = (e) => {
        this.setState({
            temp: e.target.value
        });
    }
    handleClick = () => {
        this.setState({
            names: this.state.names.concat(this.state.temp),
            temp: ''
        });
    }
    handleDoubleClick = (index) => {
        // const {names} = this.state;
        this.setState({
            // names : [
            //     ...names.slice(0, index),
            //     ...names.slice(index+1, names.length)
            // ]
            names: this.state.names.filter( (n, i) => i !== index)
        })
    }
    render() {
        const nameList = this.state.names.map( (n, k) => <li key={k} onDoubleClick={()=>this.handleDoubleClick(k)}>{n}</li>);
        return (
            <div>
                <ul>
                    {nameList}
                </ul>
                <input type="text" onChange={this.handleChange} value={this.state.temp}/>
                <button onClick={this.handleClick}>Add List</button>
            </div>
        );
    }
}

export default IterationSample;