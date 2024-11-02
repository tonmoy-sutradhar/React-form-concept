const ReusableForm = ({
  formTitle,
  handleSubmit,
  submitBtnTxt = "Submit",
  children,
}) => {
  const handleLocalSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      Password: e.target.password.value,
    };
    handleSubmit(data);
  };
  return (
    <div>
      {/* <h1 className="text-center text-xl font-bold mt-14">{formTitle}</h1> */}
      {children}
      

      <form onSubmit={handleLocalSubmit}>
        <div className="text-center mt-6 ">
          <input
            className="border-2  border-blue-600 rounded-md "
            type="text"
            name="name"
          />
        </div>

        <div className="text-center mt-6 ">
          <input
            className="border-2  border-blue-600 rounded-md "
            type="email"
            name="email"
          />
        </div>

        <div className="text-center mt-6 ">
          <input
            className="border-2  border-blue-600 rounded-md "
            type="password"
            name="password"
          />
        </div>

        <div className="text-center mt-2">
          {/* <button className="bg-cyan-600 rounded-lg p-2">Submit</button> */}
          <input
            className="bg-cyan-600 rounded-lg p-2"
            type="submit"
            value={submitBtnTxt}
          />
        </div>
      </form>
    </div>
  );
};

export default ReusableForm;
