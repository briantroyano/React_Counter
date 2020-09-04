import React, { Component } from "react";
import piggy from "../images/piggy.jpg";
import "../images/styles.css";

class Counter extends Component {
  
    // imageUrl: piggy,
    // tags : ['tag1','tag2','tag3']
  

  styles = {
    fontSize: 40,
    fontWeight: "bold",
  };

  // constructor() {
  //     super()
  //     this.handleIncrement = this.handleIncrement.bind(this)
  // }

  doHandleIncrement = () => {
    this.handleIncrement({ id: 1 });
  };

  render() {
    return (
      <div>
        {this.props.children}

        {/* <img  className='photo' src={piggy}  alt=""/> */}
        {/* <span  style = {this.styles} className='badge badge-primary m-2'>{this.formatCount()}</span> */}
        {/* {this.state.tags.map(tag => <li key={tag}>{ tag }</li>)} */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn"
        >
          Increment
        </button>
        <button
          onClick={ () => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm.m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
