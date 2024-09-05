import React, { useState, useEffect, useRef } from "react";
import { ImCross } from "react-icons/im";
import emailjs from "@emailjs/browser";
import { CircularProgress, Snackbar } from "@mui/material";
import "./formModal.css";

const FormModal = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [formData, setFormData] = useState({
    guardianName: "",
    guardianEmail: "",
    guardianPhone: "",
    childName: "",
    childAge: "",
    class: "",
  });

  const form = useRef();

  useEffect(() => {
    emailjs.init("Bul6mlBfyOKNaQceO");
  }, []);

  const validateForm = () => {
    const errors = {};
    if (!formData.guardianName) errors.guardianName = "Guardian Name is required";
    if (!formData.guardianEmail) errors.guardianEmail = "Guardian Email is required";
    if (!formData.guardianPhone) errors.guardianPhone = "Guardian Phone number is required";
    if (!formData.childName) errors.childName = "Child Name is required";
    if (!formData.childAge) errors.childAge = "Child Age is required";
    if (!formData.class) errors.class = "Class is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = formData.guardianEmail;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setFormErrors({ guardianEmail: "Please Enter a Valid Email..." });
      return;
    }

    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      setLoading(true);

      emailjs
        .sendForm("service_8n3brw9", "template_1lnkqwm", form.current)
        .then(
          (result) => {
            setOpen(true);
            setLoading(false);
            form.current.reset();
            setFormData({
              guardianName: "",
              guardianEmail: "",
              guardianPhone: "",
              childName: "",
              childAge: "",
              class: "",
            });
            setFormErrors({});
            onClose();
          },
          (error) => {
            console.log(error.text);
            setLoading(false);
          }
        );
    } else {
      setFormErrors(errors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
  };

  const handleFocus = (e) => {
    const { name } = e.target;
    setFormErrors({ ...formErrors, [name]: "" });
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
          <form ref={form} onSubmit={handleSubmit}>
            <input
              type="text"
              name="guardianName"
              value={formData.guardianName}
              onChange={handleChange}
              onFocus={handleFocus}
              placeholder="Guardian Name"
              required
            />
            {formErrors.guardianName && <p>{formErrors.guardianName}</p>}

            <input
              type="email"
              name="guardianEmail"
              value={formData.guardianEmail}
              onChange={handleChange}
              onFocus={handleFocus}
              placeholder="Guardian Email"
              required
            />
            {formErrors.guardianEmail && <p>{formErrors.guardianEmail}</p>}

            <input
              type="tel"
              name="guardianPhone"
              value={formData.guardianPhone}
              onChange={handleChange}
              onFocus={handleFocus}
              placeholder="Guardian Phone Number"
              required
            />
            {formErrors.guardianPhone && <p>{formErrors.guardianPhone}</p>}

            <input
              type="text"
              name="childName"
              value={formData.childName}
              onChange={handleChange}
              onFocus={handleFocus}
              placeholder="Child Name"
              required
            />
            {formErrors.childName && <p>{formErrors.childName}</p>}

            <input
              type="number"
              name="childAge"
              value={formData.childAge}
              onChange={handleChange}
              onFocus={handleFocus}
              placeholder="Child Age"
              min="4"
              required
            />
            {formErrors.childAge && <p>{formErrors.childAge}</p>}

            <input
              type="text"
              name="class"
              value={formData.class}
              onChange={handleChange}
              onFocus={handleFocus}
              placeholder="Class"
              required
            />
            {formErrors.class && <p>{formErrors.class}</p>}

            <button type="submit">
              {loading ? <CircularProgress /> : "Submit"}
            </button>
          </form>
        </div>
      </div>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        message="Email sent successfully!"
      />
    </div>
  );
};

export default FormModal;
