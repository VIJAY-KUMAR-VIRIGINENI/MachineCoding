import React, { FC, useState } from "react";
import "./style.css";

interface FormData {
  name: string;
  email: string;
  contact: string;
  age: number;
}

interface FormErrors {
  name?: string;
  email?: string;
  contact?: string;
  age?: string;
}

const UserForm: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    contact: "",
    age: 0,
  });
  const [errors, setErrors] = useState<FormErrors>({});

  // Generic change handler for inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "age" ? Number(value) : value,
    }));
  };

  // Validate form fields
  const validate = (): boolean => {
    let valid = true;
    const newErrors: FormErrors = {};

    if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters long.";
      valid = false;
    }

    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
      valid = false;
    }

    if (formData.contact.trim().length !== 10) {
      newErrors.contact = "Enter a valid 10-digit mobile number.";
      valid = false;
    }

    if (formData.age < 18) {
      newErrors.age = "You must be at least 18 years old.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // Form submission handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      // Proceed with form submission logic
      console.log("Form data is valid!", formData);
      // Optionally, reset the form or send the data to an API.
    } else {
      console.log("Validation errors:", errors);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <div className="error">{errors.name}</div>}
        </label>

        <label>
          Email:
          <input
            type="text"
            name="email"
            placeholder="Enter valid Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </label>

        <label>
          Contact:
          <input
            type="text"
            name="contact"
            placeholder="Enter valid mobile number"
            value={formData.contact}
            onChange={handleChange}
          />
          {errors.contact && <div className="error">{errors.contact}</div>}
        </label>

        <label>
          Age:
          <input
            type="number"
            name="age"
            placeholder="Enter your age"
            value={formData.age}
            onChange={handleChange}
          />
          {errors.age && <div className="error">{errors.age}</div>}
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
