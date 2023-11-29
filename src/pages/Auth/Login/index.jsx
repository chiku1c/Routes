import "../../../App.css";
import { useState } from "react";
import Input from "../../../components/Inputs";
import Button from "../../../components/Button/Index";
import validateEmail from "../../../utils";

export default function Login() {
  const [formData, setFormData] = useState({
    email: { value: "", isTouched: false, isValid: false },
    password: { value: "", isTouched: false, isValid: false },
  });

  const handleInputChange = (field, value) => {
    let isValid;
    if (field === "email") isValid = validateEmail(value);
    else if (field === "password") isValid = value.length >= 6;

    setFormData((prevData) => ({
      ...prevData,
      [field]: { isTouched: true, value, isValid },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;
    window.alert(
      `Submitted: \n Email: ${email.value} \n Password: ${password.value}`
    );
  };

  const { email, password } = formData;
  const formIsValid = email.isValid && password.isValid;

  return (
    <div className="App">
      <div className="form-container">
        {["email", "password"].map((field) => (
          <Input
            key={field}
            name={field}
            type={field === "password" ? "password" : "text"}
            label={field.charAt(0).toUpperCase() + field.slice(1)}
            onChange={(e) => handleInputChange(field, e.target.value)}
            isValid={formData[field].isValid}
            isTouched={formData[field].isTouched}
            placeholder={
              field === "email"
                ? "Email..."
                : field === "password"
                ? "password"
                : ""
            }
            value={formData[field].value}
            errorMsg={
              field === "email"
                ? "Enter a valid email"
                : field === "password"
                ? "Minimum 6 characters"
                : ""
            }
          />
        ))}
        <Button
          text="REGISTER"
          onClick={handleSubmit}
          disabled={!formIsValid}
        />
      </div>
    </div>
  );
}
