import { useContext } from "react";
import { LoginContext } from "../context/LoginProvider";

function LoginForm() {
  const { formData, handleChange } = useContext(LoginContext);

  const showUser = () => {
    console.log(formData.email);
    console.log(formData.password);
  };

  return (
    <div>
      <input
        type="email"
        name="email"
        placeholder="Enter email address"
        value={formData.email}
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Enter password"
        value={formData.password}
        onChange={handleChange}
      />

      <button onClick={showUser}>Click me</button>
    </div>
  );
}

export default LoginForm;
