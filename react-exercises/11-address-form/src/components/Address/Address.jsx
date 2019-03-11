import React, { Component } from 'react';
import './Address.css';
class Address extends Component {
  state = {
    firstName: null,
    lastName: null,
    City: null,
    State: null,
    City: null,
    ZipCode: null
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <form className="form-horizontal">
              <fieldset>
                <div className="control-group">
                  <label id="first" className="control-label">
                    First Name
                  </label>
                  <input
                    id="full-name"
                    name="full-name"
                    type="text"
                    placeholder="full name"
                    className="input-xlarge"
                  />
                  <div className="control-group">
                    <label className="control-label">Last Name</label>
                    <input
                      id="full-name"
                      name="full-name"
                      type="text"
                      placeholder="last name"
                      className="input-xlarge"
                    />
                  </div>
                </div>
                <div className="control-group">
                  <label className="control-label">Address Line 1</label>
                  <div className="controls">
                    <input
                      id="address-line1"
                      name="address-line1"
                      type="text"
                      placeholder="address line 1"
                      className="input-xlarge"
                    />
                    <p className="help-block">
                      Street address, P.O. box, company name, c/o
                    </p>
                  </div>
                </div>

                <div className="control-group">
                  <label className="control-label">City / Town</label>
                  <div className="controls">
                    <input
                      id="city"
                      name="city"
                      type="text"
                      placeholder="city"
                      className="input-xlarge"
                    />
                  </div>
                  <div className="control-group">
                    <label className="control-label">
                      State / Province / Region
                    </label>
                    <div className="controls">
                      {/* Create a state select box using the states array located in the assets folder */}
                      <select className="input-xlarge" />
                      <p className="help-block" />
                    </div>
                  </div>
                </div>

                <div className="control-group">
                  <label className="control-label">Zip / Postal Code</label>
                  <div className="controls">
                    <input
                      id="postal-code"
                      name="postal-code"
                      type="text"
                      placeholder="zip or postal code"
                      className="input-xlarge"
                    />
                    <p className="help-block" />
                  </div>
                </div>

                <div className="control-group">
                  <label className="control-label">Country</label>
                  <div className="controls">
                    <select
                      id="country"
                      name="country"
                      className="input-xlarge"
                    />
                    {/* refactor this select to import the countries array located in assets folder and create a dropdown by looping through countries array
                     */}
                  </div>
                </div>
              </fieldset>
            </form>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Address;
