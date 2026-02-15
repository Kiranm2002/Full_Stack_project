import React, { useState } from "react";
import "./App.css";
const API_URL = "http://backend:3000/api/users";

function App() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    gender: "",
    dob: "",
    address: "",
    country: "",
    password: "",
  });

  const [profilePhoto, setProfilePhoto] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setProfilePhoto(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    if (profilePhoto) {
      data.append("profilePhoto", profilePhoto);
    }

    try {
      const res = await fetch("http://65.0.94.115:3000/api/users", {
        method: "POST",
        body: data, // ⚠️ NO Content-Type header when using FormData
      });

      const result = await res.json();
      alert(result.message || "Form submitted");

    } catch (error) {
      console.error(error);
      alert("Error submitting form");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>User Registration</h2>

        <label>Full Name</label>
        <input type="text" name="fullname" required onChange={handleChange} />

        <label>Email</label>
        <input type="email" name="email" required onChange={handleChange} />

        <label>Phone Number</label>
        <input type="tel" name="phone" required onChange={handleChange} />

        <label>Gender</label>
        <div className="gender-options">
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              required
              onChange={handleChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={handleChange}
            />
            Female
          </label>
        </div>

        <label>Date of Birth</label>
        <input type="date" name="dob" required onChange={handleChange} />

        <label>Address</label>
        <textarea name="address" rows="3" required onChange={handleChange}></textarea>

        <label>Country</label>
        <select name="country" required onChange={handleChange}>
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="Canada">Canada</option>
          <option value="UK">UK</option>
        </select>

        <label>Password</label>
        <input type="password" name="password" required onChange={handleChange} />

        <label>Profile Photo</label>
        <input type="file" accept="image/*" name="profilePhoto" onChange={handleFileChange} />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;
