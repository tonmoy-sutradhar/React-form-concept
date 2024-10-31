const UseState = () => {
  const handleSubmit = (e) => {};
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
        </div>
      </form>
    </div>
  );
};

export default UseState;
