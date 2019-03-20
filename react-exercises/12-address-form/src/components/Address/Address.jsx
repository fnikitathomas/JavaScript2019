import React, { Component } from "react";
import countries from '../../assets/countries'
import states from '../../assets/states'
import "./Address.css";
// Import data from "assets/countries.js" and "assets/states.js" here

class Address extends Component {
  state = {
    firstName: "",
    lastName: "",
    addressLine1: "",
    city: "",
    state: "",
    postalCode: "",
    ZipCode: "",
    country: "",
    submitted: false
  };

  handleChange = e => this.setState({[e.target.name] : e.target.value})

  handleSubmit = e => {
    e.preventDefault()
    this.setState({submitted : true})
  }

  render() {
    const {submitted,ZipCode, ...captured} = this.state
    return (
      <form className="container mt-4" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName" className="control-label">
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={this.handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName" className="control-label">
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            onChange={this.handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="addressLine1" className="control-label">
            Address Line 1
          </label>
          <input
            id="addressLine1"
            name="addressLine1"
            type="text"
            onChange={this.handleChange}
            className="form-control"
          />
          <p className="help-block text-muted">
            Street address, P.O. box, company name, c/o
          </p>
        </div>

        <div className="form-group">
          <label htmlFor="city" className="control-label">
            City / Town
          </label>
          <input id="city" name="city" type="text" onChange={this.handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="state" className="control-label">
            State / Province / Region
          </label>
          {/* Loop through the states you imported here */}
          <select id="state" name="state" value={this.state.state} onChange={this.handleChange} 
            className="form-control">
            <option value="">Please choose an option</option>
            {states.map(s => <option key={(Math.random() * 1)} value={s}>{s}</option>)}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="postalCode" className="control-label">
            Zip / Postal Code
          </label>
          <input
            id="postalCode"
            name="postalCode"
            type="text"
            onChange={this.handleChange}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="country" className="control-label">
            Country
          </label>
          {/* Loop through the countries you imported here */}
          <select id="country" name="country" value={this.state.country} onChange={this.handleChange} 
            className="form-control">
            <option value="">Please choose an option</option>
            {countries.map(c => <option key={(Math.random() * 1)} value={c}>{c}</option>)}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>

        {/*
         * Find a way to only display this once the form has been submitted.
         * Hint: You will need to change this "this.condtion" below to something else
         */}
        {this.state.submitted && (
          <div className="card card-body bg-light mt-4 mb-4">
            Results:
            <ul className="list-unstyled mb-0">
              {/* Add <li></li> tags here */}
              {Object.entries(captured).map(([k,v]) => <li key={(Math.random() * 1)}>{k} : {v}</li>)}
            </ul>
          </div>
        )}
      </form>
    );
  }
}

export default Address;
