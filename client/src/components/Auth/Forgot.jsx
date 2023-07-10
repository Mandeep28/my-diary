
import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Forgot = () =>{
const [email , SetEmail] = useState("");


    return(
        <section 
        className=" p-1 auth_section"
        >
           <div className="bg-white p-4 px-5 rounded inner_auth_div">
            <h3 className="text-center my-2 text-primary">Forgot Password</h3>
            <p className="description text-center">A forgot password email send to your email id. (If an existing account found)  Click on that link to forgot your password</p>
            <div className="mb-3">
        <label htmlFor="email" className="form-label ms-2">
         <MdEmail className="mx-1 fs-5"/> Email Address  <span className="text-danger mx-1">*</span>
        </label>
        <input
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={(e) => SetEmail(e.target.value)}
          placeholder="name@example.com"
          className="form-control border border-primary"
        />
      </div>

      <button className=" my-2 mx-auto d-block btn btn-primary">Send</button>
      <p className="my-3 text-center">
        Remember Password ? <Link to="/auth/" className="mx-1 link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">Click Here to login</Link>
      </p>
           </div>
        </section>
    )
}


export default Forgot