import React, { Component } from "react";
import IsUserLoggedIn from  "./IsUserLoggedIn"
// Import IsUserLoggedIn here

class App extends Component {
  render() {
    const Users = [
      {
        name: "Matina",
        isUserLoggedIn: false
      },
      {
        name: "Joe",
        isUserLoggedIn: true
      },
      {
        name: "Tom",
        isUserLoggedIn: true
      },
      {
        name : "Nikita",
        isUserLoggedIn : false
      },
      {
        name : "Ramon",
        isUserLoggedIn : true
      },
      {
        name : "Jerk Chicken",
        isUserLoggedIn : false
      }
    ];
    return (
      <div className="App">
        <IsUserLoggedIn items={Users}/>
      </div>
    );
  }
}



export default App;
