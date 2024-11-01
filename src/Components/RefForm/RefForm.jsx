import { useEffect, useRef } from "react";

const RefForm = () => {
  const refName = useRef(null);
  const refEmail = useRef(null);
  const refPassword = useRef(null);

  useEffect(() => {
    refName.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refName.current.value);
    console.log(refEmail.current.value);
    console.log(refPassword.current.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1 className="text-center text-xl font-bold mt-14">
          --- This is From container ---
        </h1>
        <div className="text-center mt-6  ">
          <input
            ref={refName}
            className="border-2  border-blue-600 rounded-md p-1 "
            type="text"
            name="name"
          />
        </div>

        <div className="text-center mt-6 ">
          <input
            ref={refEmail}
            className="border-2  border-blue-600 rounded-md "
            type="email"
            name="email"
          />
        </div>

        <div className="text-center mt-6 ">
          <input
            required
            ref={refPassword}
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
            value="Submit"
          />
        </div>
      </form>
    </div>
  );
};

export default RefForm;
<h1>RefForm</h1>;
