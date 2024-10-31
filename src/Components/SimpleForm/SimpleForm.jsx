const SimpleForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.email.value);
    console.log(e.target.number.value);
    console.log("Form submit....!");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1 className="text-center text-xl font-bold mt-14">
          --- This is From container ---
        </h1>
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
            type="number"
            name="number"
          />
        </div>

        <div className="text-center mt-2">
          {/* <button className="bg-cyan-600 rounded-lg p-2">Submit</button> */}
          <input
            className="bg-cyan-600 rounded-lg p-2"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    </div>
  );
};

export default SimpleForm;
