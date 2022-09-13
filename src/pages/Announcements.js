import React, { Component } from 'react'
import adminLayout from "../hoc/adminLayout"

class Announcements extends Component {
    constructor(props){
        super(props);

        this.state = {}
    }
    render() {
    return (
      <div>
        hy Announcements
      </div>
    )
  }
}

export default adminLayout(Announcements);
