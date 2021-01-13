import React, { Component } from "react";
import "../css/RegistrationForm.css";

// sets page title dynamically
document.title = "Event Registration Form";

export default class RegistrationForm extends Component {
  render() {
    return (
      <div>
        {/* form art */}
        <div className="form-art"></div>
        {/* header */}
        <div className="card-container">
          <div className="card_title">
            <div className="container-title">
              <h1 className="form-title">GeeksForGeeks</h1>
              <p className="form-subtitle">Registration Form</p>
            </div>
            <div className="form-header-logo">
            </div>
          </div>
          {/* body */}
          <div className="col">
            <div className="card_content">
              <div className="container">
                <form>
                  <div className="form-element">
                    <input
                      type="text"
                      name="full_name"
                      placeholder="Full Name"
                      required
                    />
                  </div>
                  <div className="form-element">
                    <input
                      type="number"
                      name="roll_no"
                      placeholder="Roll No"
                      required
                    />
                  </div>
                  <div className="form-element">
                    <select name="year" required>
                      <option>--Year--</option>
                      <option>1st Year</option>
                      <option>2nd Year</option>
                      <option>3rd Year</option>
                      <option>4th Year</option>
                    </select>
                  </div>
                  <div className="form-element">
                    <input
                      type="number"
                      max="10"
                      name="whatsapp_number"
                      placeholder="Your WhatsApp No"
                      required
                    />
                  </div>
                  <div className="form-element">
                    <input
                      type="text"
                      name="code_chef_id"
                      placeholder="Your codechef handle"
                      required
                    />
                  </div>
                  <div className="form-element">
                    <button>Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
