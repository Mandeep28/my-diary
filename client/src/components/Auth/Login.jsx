import { useFormik } from "formik";
import { FcGoogle } from "react-icons/fc";
import { MdEmail, MdLock } from "react-icons/md";
import { Link } from "react-router-dom";

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const { handleChange, values, handleBlur, handleSubmit } = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <form onSubmit={handleSubmit} className="px-3">
      <h3 className="my-3 text-center text-capitalize">
        {" "}
        Login to{" "}
        <Link
          to="/"
          className="text-dark link-underline link-underline-opacity-0"
        >
          magic notes
        </Link>
      </h3>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          <MdEmail className="mx-1 fs-5" /> Email Address{" "}
          <span className="text-danger mx-1">*</span>
        </label>
        <input
          type="text"
          name="email"
          id="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          autoComplete="off"
          placeholder="name@example.com"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          <MdLock className="mx-1 fs-5" /> Password{" "}
          <span className="text-danger mx-1">*</span>
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="*****"
          autoComplete="off"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          className="form-control"
        />
      </div>
      <div className="mb-3 text-end">
        <p>
          <Link
            to="/auth/forgot"
            className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
          >
            Forgot Password?
          </Link>
        </p>
      </div>
      <button className="btn btn-primary my-2 mx-auto d-block">Login</button>

      <div className="mt-3 text-center">
        <p className="text-uppercase fs-6">or</p>
        <button className="btn btn-outline-dark fs-6">
          <FcGoogle className="mx-1 fs-5" /> Login With Google
        </button>
      </div>
    </form>
  );
};

export default Login;
