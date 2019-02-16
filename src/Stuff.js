import React, { Component } from "react";
import Child from "./Home";
 
class Stuff extends Component {
  render() {
    return (
      <div>
        <h2>Content</h2>
		<div><Child/></div>
        <ol>
          <li>ReactJs</li>
          <li>ReduxJs</li>
          <li>React-Redux</li>
        </ol>
      </div>
    );
  }
}
 
export default Stuff;