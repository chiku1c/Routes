import "../../../App.css";
import { useState } from "react";
import validateEmail from "../../../utils";
import Input from "../../../components/Inputs";
import Button from "../../../components/Button/Index";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    FirstName: { value: "", isTouched: false, isValid: false },
    LastName: { value: "", isTouched: false, isValid: false },
    email: { value: "", isTouched: false, isValid: false },
    password: { value: "", isTouched: false, isValid: false },
    confirmPwd: { value: "", isTouched: false, isValid: false },
  });

  const handleInputChange = (field, value) => {
    let isValid;
    if (field === "email") isValid = validateEmail(value);
    else if (field === "password") isValid = value.length >= 6;
    else if (field === "confirmPwd")
      isValid = value === formData.password.value;
    else isValid = value.trim() !== "";

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
    navigate("/");
  };

  const { email, password, confirmPwd, FirstName, LastName } = formData;
  const formIsValid =
    email.isValid &&
    password.isValid &&
    confirmPwd.isValid &&
    FirstName.isValid &&
    LastName.isValid;

  return (
    <div className="App">
      <div className="form-container">
        {["FirstName", "LastName", "email", "password", "confirmPwd"].map(
          (field) => (
            <Input
              key={field}
              name={field}
              type={
                field === "password" || field === "confirmPwd"
                  ? "password"
                  : "text"
              }
              label={
                field === "confirmPwd"
                  ? "Confirm password"
                  : field === "FirstName"
                  ? "First Name"
                  : field === "LastName"
                  ? "Last Name"
                  : field.charAt(0).toUpperCase() + field.slice(1)
              }
              onChange={(e) => handleInputChange(field, e.target.value)}
              isValid={formData[field].isValid}
              isTouched={formData[field].isTouched}
              placeholder={
                field === "email"
                  ? "Email..."
                  : field === "password"
                  ? "Password..."
                  : field === "FirstName"
                  ? "First Name "
                  : field === "LastName"
                  ? "Last Name"
                  : "Confirm password..."
              }
              value={formData[field].value}
              errorMsg={
                field === "email"
                  ? "Enter a valid email"
                  : field === "password"
                  ? "Minimum 6 characters"
                  : "Field cannot be empty"
              }
            />
          )
        )}
        <Button
          text="REGISTER"
          onClick={handleSubmit}
          disabled={!formIsValid}
        />
      </div>
    </div>
  );
};

export default Registration;
