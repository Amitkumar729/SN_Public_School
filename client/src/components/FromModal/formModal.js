import React, { useState } from "react";
import "./formModal.css";
import { ImCross } from "react-icons/im";

const FormModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    guardianName: "",
    guardianEmail: "",
    guardianPhone: "",
    childName: "",
    childAge: "",
    class: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Here you would typically send the data to a server
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-container">
      <div className="modal-wrapper">
        <div className="modal-header">
          <img src="/assets/navLogo.png" alt="School logo" />
          <h4>S.N.PUBLIC SCHOOL</h4>
          <ImCross className="close-button" onClick={onClose} />
        </div>
        <div className="modal-form-container">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="guardianName"
              value={formData.guardianName}
              onChange={handleChange}
              placeholder="Guardian Name"
              required
            />
            <input
              type="email"
              name="guardianEmail"
              value={formData.guardianEmail}
              onChange={handleChange}
              placeholder="Guardian Email"
              required
            />
            <input
              type="tel"
              name="guardianPhone"
              value={formData.guardianPhone}
              onChange={handleChange}
              placeholder="Guardian Phone Number"
              required
            />
            <input
              type="text"
              name="childName"
              value={formData.childName}
              onChange={handleChange}
              placeholder="Child Name"
              required
            />
            <input
              type="number"
              name="childAge"
              value={formData.childAge}
              onChange={handleChange}
              placeholder="Child Age"
              min="4"
              required
            />
            <input
              type="text"
              name="class"
              value={formData.class}
              onChange={handleChange}
              placeholder="Class"
              required
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormModal;