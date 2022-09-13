import React, { Component } from 'react'
import adminLayout from "../hoc/adminLayout"

class Sports extends Component {
    constructor(props){
        super(props);

        this.state = {}
    }
    render() {
    return (
      <div>
        hy Sports
      </div>
    )
  }
}

export default adminLayout(Sports);
