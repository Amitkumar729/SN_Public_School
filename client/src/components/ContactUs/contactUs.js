import React, { useEffect, useRef, useState } from "react";
import "./contactUs.css";
import emailjs from "@emailjs/browser";
import { Snackbar, CircularProgress } from "@mui/material";

const ContactUs = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [formValues, setFormValues] = useState({
    guardianName: "",
    guardianEmail: "",
    guardianPhone: "",
    childName: "",
    childAge: "",
    childClass: "",
  });

  const form = useRef();

  useEffect(() => {
    emailjs.init("Bul6mlBfyOKNaQceO");
  }, []);

  const validateForm = () => {
    const errors = {};
    if (!formValues.guardianName)
      errors.guardianName = "Guardian Name is required";
    if (!formValues.guardianEmail)
      errors.guardianEmail = "Guardian Email is required";
    if (!formValues.guardianPhone)
      errors.guardianPhone = "Guardian Phone number is required";
    if (!formValues.childName) errors.childName = "Child Name is required";
    if (!formValues.childAge) errors.childAge = "Child Age is required";
    if (!formValues.childClass) errors.childClass = "Child Class is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = formValues.guardianEmail;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setFormErrors({ guardianEmail: "Please Enter a Valid Email..." });
      return;
    }

    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      setLoading(true);

      console.log("Form data:", formValues);

      emailjs
        .sendForm("service_8n3brw9", "template_1lnkqwm", form.current)
        .then(
          (result) => {
            setOpen(true);
            setLoading(false);
            form.current.reset();
            setFormValues({
              guardianName: "",
              guardianEmail: "",
              guardianPhone: "",
              childName: "",
              childAge: "",
              childClass: "",
            });
            setFormErrors({});
          },
          (error) => {
            console.log(error.text);
            setLoading(false);
          }
        );
      // console.log("Submited...")
    } else {
      setFormErrors(errors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
  };

  const handleFocus = (e) => {
    const { name } = e.target;
    setFormErrors({ ...formErrors, [name]: "" });
  };

  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        <div className="contact-left">
          <img src="/assets/appointment.jpg" alt="Contact Banner" />
        </div>
        <div className="contact-right">
          <div className="contact-header">
            <h4>Make An Appointment</h4>
          </div>
          <div className="contact-form">
            <form className="form-container" ref={form} onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="guardianName">Guardian Name</label>
                  <input
                    type="text"
                    id="guardianName"
                    name="guardianName"
                    value={formValues.guardianName}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="guardianEmail">Guardian Email</label>
                  <input
                    type="email"
                    id="guardianEmail"
                    name="guardianEmail"
                    value={formValues.guardianEmail}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="guardianPhone">Guardian No.</label>
                  <input
                    type="tel"
                    id="guardianPhone"
                    name="guardianPhone"
                    value={formValues.guardianPhone}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="childName">Child Name</label>
                  <input
                    type="text"
                    id="childName"
                    name="childName"
                    value={formValues.childName}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="childAge">Child Age</label>
                  <input
                    type="number"
                    id="childAge"
                    name="childAge"
                    value={formValues.childAge}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    min="4"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="childClass">Class</label>
                  <input
                    type="number"
                    id="childClass"
                    name="childClass"
                    value={formValues.childClass}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    required
                  />
                </div>
              </div>

              <button type="submit" className="submit-button">
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
          // anchorOrigin={{ vertical: "top", horizontal: "center" }}
          severity="success"
        />
      </div>
    </div>
  );
};

export default ContactUs;
