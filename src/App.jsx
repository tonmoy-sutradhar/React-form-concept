import "./App.css";
import ReusableForm from "./Components/ReusableForm/ReusableForm";
// import HookForm from "./Components/HookForm/HookForm";
// import RefForm from "./Components/RefForm/RefForm";
// import SimpleForm from "./Components/SimpleForm/SimpleForm";
// import UseState from "./Components/UseState/UseState";

function App() {
  const handleSignUpSubmit = (data) => {
    console.log("Sign Up data", data);
  };

  const handlePUpdateSubmit = (data) => {
    console.log("Update data", data);
  };

  return (
    <>
      <h1 className="text-5xl font-bold text-center">React Form Master</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <UseState></UseState> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}

      <ReusableForm formTitle={"Sign Up"} handleSubmit={handleSignUpSubmit}>
        <div>
          <h1>sing up</h1>
          <p>please a sign up right now</p>
        </div>
      </ReusableForm>

      <ReusableForm
        formTitle={"Profile Update"}
        submitBtnTxt={"Update"}
        handleSubmit={handlePUpdateSubmit}
      >
        <div>
          <h1>Update</h1>
          <p>Update now</p>
        </div>
      </ReusableForm>
    </>
  );
}

export default App;
