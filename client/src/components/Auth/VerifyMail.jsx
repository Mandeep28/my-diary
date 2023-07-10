import { useState } from "react";
import Verify from "./Verify";

const VerifyMail = () => {
  //  it can be
  //  loading (if request is pending ) ,
  //  success (if email is verify successfully) ,
  //  error ( is token is invalid or request failed with any reason)
  const [status, setStatus] = useState("loading");

  const verifySTatus = async() =>{
    // make api call

  }




  return (
    <section className="auth_section">
      <form className="bg-white p-4 px-5 rounded inner_auth_div">
        <div className="text-center">

        <Verify status={status} />
        </div>
      </form>
    </section>
  );
};

export default VerifyMail;
