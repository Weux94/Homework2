import React, { Component } from "react";


class ListClass extends Component {
    constructor(props) {
        super(props);
        setTimeout(() => {
            this.setState({
                list: this.state.list.concat('Kiev'),

            })
        }, 1000)

    }
    state = { ...this.props }
    render() {
        const { list = [], color } = this.state;


        return list.length ? <ul style={{ color }}> 

            {list.map((item, index) => <li key={index} style= {{backgroundColor: `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`}}>{item}</li>)}
        </ul> : null;

        
    }

}

export default ListClass;