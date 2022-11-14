import React, { Component } from "react";

export class Fullname extends Component {
  state = {
    name: "",
    surname: "",
    fullname: "",
  };
  getFullname(){
    this.setState({
        fullname:this.state.name+" "+this.state.surname
    })
  }
  render() {
    const { fullname} = this.state;
    return (
      <div>
        <input
          type="text"
          onChange={(e) => {
            this.setState({ name: e.target.value });
          }}
        />
        <input
          type="text"
          onChange={(e) => {
            this.setState({ surname: e.target.value });
          }}
        />
        <button onClick={this.getFullname.bind(this)}>Fullname</button>
        <p>{fullname}</p>
      </div>
    );
  }
}

export default Fullname;
