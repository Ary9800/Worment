import React, { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
//  import "./Registration.css"; 

const RegistrationForm = ({ onAddUser, editedUser }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    contactNo: "",
    country: "",
    state: "",
    city: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'contactNo' && !/^\d*$/.test(value)) {
      window.alert("only numbers allowed");
      return;
    }
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  useEffect(() => {
    if (editedUser) {
      setFormData(editedUser);
    }
  }, [editedUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(formData).every((field) => field.trim() !== "")) {
      onAddUser(formData);
      setFormData({
        firstName: "",
        lastName: "",
        age: "",
        gender: "",
        contactNo: "",
        country: "",
        state: "",
        city: "",
        address: "",
      });
    } else {
      window.alert("ALL FIELDS ARE COMPULSORY");
    }
  };
  const handleClear = () => {
    setFormData({
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      contactNo: "",
      country: "",
      state: "",
      city: "",
      address: "",
    });
  };

  return (
    <div>
     
      <form className="needs-validation" noValidate onSubmit={handleSubmit}>
        <div className="row g-3 mb-3" >
          <div className="col-md-2">
            <label htmlFor="validationCustom01" className="form-label">First name</label>
          </div>
          <div className="col-md-3 mb-7">
            <input type="text" className="form-control" id="validationCustom01" name="firstName" value={formData.firstName} onChange={handleChange} required />
          </div>

          <div className="col-md-2 mb-3">
            <label htmlFor="validationCustom02" className="form-label">Last name</label>
          </div>
          <div className="col-md-3">
            <input type="text" className="form-control" id="validationCustom02" name="lastName" value={formData.lastName} onChange={handleChange} required />
          </div>
        </div>

        <div className="row g-3 mb-3">
          <div className="col-md-1">
            <label htmlFor="validationCustom03" className="form-label">Age</label>
          </div>
          <div className="col-md-4">
            <input type="number" className="form-control" id="validationCustom03" name="age" value={formData.age} onChange={handleChange} required />
          </div>

          <div className="col-md-2">
            <label htmlFor="validationCustom04" className="form-label">Gender</label>
          </div>
          <div className="col-md-5">
            <div className="d-flex align-items-center">
              <div className="form-check mr-3 col-4">
                <input
                  type="radio"
                  className="form-check-input"
                  id="male"
                  name="gender"
                  value="male"
                  checked={formData.gender === "male"}
                  onChange={handleChange}
                  required
                />
                <label className="form-check-label" htmlFor="male">Male</label>
              </div>

              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  id="female"
                  name="gender"
                  value="female"
                  checked={formData.gender === "female"}
                  onChange={handleChange}
                  required
                />
                <label className="form-check-label" htmlFor="female">Female</label>
              </div>
            </div>
          </div>
        </div>


        <div className="row g-6 mb-3 ">
          <div className="col-md-2">
            <label htmlFor="validationCustom07" className="form-label">Contact No</label>
            </div>
            <div className="col-md-3">
            <input type="tel" className="form-control" id="validationCustom07" name="contactNo" value={formData.contactNo} onChange={handleChange} pattern="[0-9]*" required />
          </div>

          <div className="col-md-2">
            <label htmlFor="validationCustom04" className="form-label">Country</label>
            </div>
            <div className="col-md-3">
            <input type="text" className="form-control" id="validationCustom04" name="country" value={formData.country} onChange={handleChange} required />
          </div>
        </div>

        <div className="row g-6 mb-3">
          <div className="col-md-2">
            <label htmlFor="validationCustom05" className="form-label">State</label>
            </div>
            <div className="col-md-3">
            <input type="text" className="form-control" id="validationCustom05" name="state" value={formData.state} onChange={handleChange} required />
          </div>

          <div className="col-md-1">
            <label htmlFor="validationCustom06" className="form-label">City</label>
            </div>
            <div className="col-md-3">
            <input type="text" className="form-control" id="validationCustom06" name="city" value={formData.city} onChange={handleChange} required />
          </div>
        </div>

        <div className="row g-3 mb-3">
          <div className="col-md-2">
            <label htmlFor="validationCustom09" className="form-label">Address</label>
            </div>
            <div className="col-md-3">
            <input type="text" className="form-control" id="validationCustom09" name="address" value={formData.address} onChange={handleChange} required />
          </div>
        </div>
        <div className="row g- mb-3">
          <div className="col-md-2"></div>
          <div className="col-md-3">
          <button className="btn btn-primary" type="submit">{editedUser ? "Update Form" : "Submit Form"}</button>
          </div>
        <div className="col-md-4">
        <button className="btn btn-secondary" type="button" onClick={handleClear}>Clear Form</button>
        </div>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;