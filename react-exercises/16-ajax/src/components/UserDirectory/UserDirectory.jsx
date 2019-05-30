import React, { Component } from "react";
import "./UserDirectory.css";
import axios from 'axios'

/**
 * Please read the README.md first.
 *
 * PART I: Make an AJAX call
 *
 * Update the component to use AJAX and lifecycle hooks.
 * You will be using the Random User API. Use this URL:
 * https://randomuser.me/api?results=500&inc=name,email,picture
 *
 * Display a loading symbol when the app is loading the users.
 * Display an error message when the AJAX request is rejected.
 * You can fake an AJAX request being rejected by replacing the
 * API's URL with one that doesn't exist.
 *
 * PART II: Get the search bar to work.
 *
 * Using events and state with React, get the search bar to work. The search bar should
 * search by first name, last name, and first name and last name together.
 * The search bar should be case insensitive. For a demo,
 * @see https://www.screencast.com/t/h1N9DohcF
 *
 * Hint: you could use string.match(). (I was able solve this with plain text
 * instead of a regular expression).
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
 * or other string functions.
 *
 * As an a bonus, create a separate User component and refactor the component
 * below to use the separate User component.
 */

class UserDirectory extends Component {
  state = {
    users: [],
    isLoading: true,
    hasError: false
  };

  componentDidMount() {
    axios({ method: "GET", url: "https://randomuser.me/api?results=500&inc=name,email,picture"})
      .then(response => { // e.g. { data: data: { [{ first_name: ... },{ first_name: ... }] } }
        console.log(response)
        this.setState({
          users: response.data.results,
          isLoading: false,
          hasError: false
        });
      })
      .catch(() => this.setState({ hasError: true, isLoading: false }));
  }

  handleChange = e => {
    console.log(e.target.value)
    let updatedList = this.state.users.filter(u => {
      if(u.name.first[0] === e.target.value.toLowerCase() || u.name.last[0] === e.target.value.toLowerCase()) console.log("yup")
    })
  }

  render() {
    if(this.state.isLoading) return <div  className="text-center">... Loading</div>
    return (
      <div className="UserDirectory">
        <div className="Search">
          <input
            type="search"
            placeholder="Search..."
            aria-label="Search"
            className="search"
            onChange={e => this.handleChange(e)}
          />
        </div>
        <div className="UserDirectory-users">
          {/* Display loading and errors here */}
          {this.state.users.length > 0 &&
            this.state.users.map((user, index) => {
              /**
               * @const {string} name full name in title case
               * @example John Smith
               */
              const name =
                user.name.first[0].toUpperCase() +
                user.name.first.substring(1) +
                " " +
                user.name.last[0].toUpperCase() +
                user.name.last.substring(1);

              return (
                <div className="card" key={"user-" + index}>
                  <div className="card-section media-object">
                    <div className="thumbnail">
                      <img src={user.picture.medium} alt="" />
                    </div>
                    <div className="media-object-section align-self-middle">
                      <div>
                        <span className="h6">{name}</span>
                        <br />
                        <a href={"mailto:" + user.email}>{user.email}</a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default UserDirectory;
