import React, { Component } from "react";
 
class Home extends Component {
  render() {
	  const greeting = "Welcome to React";
    return (
      <div>
        <h2>{greeting}</h2>
        <p>This App is all about ReactJs.</p>
      </div>
    );
  }
}
 
export default Home;