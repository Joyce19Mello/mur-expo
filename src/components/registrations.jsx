import { useState } from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};

export const Registrations = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email, message)
  }

  return (
    <div id="registrations" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Inscrição</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div id="row">
          <form name="sentMessage" validate onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder="Name"
                    required
                    onChange={handleChange}
                  />
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    required
                    onChange={handleChange}
                  />
                  <p className="help-block text-danger"></p>
                </div>
              </div>
            </div>
            <div className="form-group">
              <textarea
                name="message"
                id="message"
                className="form-control"
                rows="4"
                placeholder="Message"
                required
                onChange={handleChange}
              ></textarea>
              <p className="help-block text-danger"></p>
            </div>
            <div id="success"></div>
            <button type="submit" className="btn btn-custom btn-lg">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
