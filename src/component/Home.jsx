import { useThisContext } from "./Content/usercontext";

function Home() {
  const { name, setName, email, setEmail, phone, setPhone, handleSubmit } =
    useThisContext();
  return (
    <div className="container my-5 ">
      <div className="row ">
       <div className="col-12">
        <div className="col-md-10 mx-auto col-lg-5 form-control">
            <h2 className="display-4 fw-bold lh-1 text-light mb-4">
               <span className="text-danger">Enter Your Details</span>
            </h2>
          <form
            className="p-4 p-md-5 border rounded bg-dark "
            onSubmit={(e) => handleSubmit(e, { name, email, phone })}
          >
            
            <div className="mb-3">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="nameInput"
                placeholder="Enter the Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="emailInput"
                placeholder="###@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone">Phone</label>
              <input
                type="number"
                className="form-control"
                id="Number"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="form-check mb-3">
              <input
                type="checkbox"
                className="form-check-input"
                id="rememberCheck"
              />
              <label className="form-check-label" htmlFor="rememberCheck">
                Remember me
              </label>
            </div>
            <button className="btn btn-primary w-100" type="submit">
              Add
            </button>
          </form>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
