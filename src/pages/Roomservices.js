import React, { Component } from 'react'
import adminLayout from "../hoc/adminLayout"

class Roomservices extends Component {
    constructor(props){
        super(props);

        this.state = {}
    }
    render() {
    return (
      <div>
        hy Roomservices
      </div>
    )
  }
}

export default adminLayout(Roomservices);
