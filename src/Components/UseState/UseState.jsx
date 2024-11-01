import { useState } from "react";

const UseState = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // console.log(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    // console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // This is use for Page doesn't reload
    {
      if (error.length < 6) {
        // console.log("Password must be more than 6 characters.");
        setError("Password must be more than 6 characters.");
      } else {
        setError("");
        console.log(name, "||", email, "||", password);
        console.log("Submitted Done..");
      }
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1 className="text-center text-xl font-bold mt-14">
          --- This is From container ---
        </h1>
        <div className="text-center mt-6 ">
          <input
            value={"Tonmoy sutradhar"}
            onChange={handleNameChange}
            className="border-2  border-blue-600 rounded-md "
            type="text"
            name="name"
          />
        </div>

        <div className="text-center mt-6 ">
          <input
            onChange={handleEmailChange}
            className="border-2  border-blue-600 rounded-md "
            type="email"
            name="email"
          />
        </div>

        <div className="text-center mt-6 ">
          <input
            required
            onChange={handlePasswordChange}
            className="border-2  border-blue-600 rounded-md "
            type="password"
            name="Password"
          />
        </div>

        <div className="text-center mt-2">
          {/* <button className="bg-cyan-600 rounded-lg p-2">Submit</button> */}
          <input
            className="bg-cyan-600 rounded-lg p-2"
            type="submit"
            value="Submit"
          />
          {error && <p>{error}</p>}
        </div>
      </form>
    </div>
  );
};

export default UseState;
