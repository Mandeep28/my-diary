import { FcGoogle } from "react-icons/fc";
import { MdEmail, MdLock } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { useFormik } from "formik";
import { Link } from "react-router-dom";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const Register = () => {
  const { handleChange, values, handleBlur, handleSubmit } = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form className="px-3" onSubmit={handleSubmit}>
      <h3 className="my-3 text-center text-capitalize">
        Register to{" "}
        <Link
          to="/"
          className="text-dark link-underline link-underline-opacity-0"
        >
          magic notes
        </Link>
      </h3>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          <FaUserAlt className="mx-1 fs-6" /> Name{" "}
          <span className="text-danger mx-1">*</span>
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="John Doe"
          autoComplete="off"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.name}
          required
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          <MdEmail className="mx-1 fs-5" /> Email Address{" "}
          <span className="text-danger mx-1">*</span>
        </label>
        <input
          type="email"
          name="email"
          id="email"
          autoComplete="off"
          placeholder="name@example.com"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
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
          autoComplete="off"
          placeholder="*****"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          className="form-control"
        />
      </div>

      <button className="btn btn-danger my-2 mx-auto d-block">Register</button>

      <div className="mt-3 text-center">
        <p className="text-uppercase fs-6">or</p>
        <button className="btn btn-outline-dark fs-6">
          <FcGoogle className="mx-1 fs-5" /> Register With Google
        </button>
      </div>
    </form>
  );
};

export default Register;
