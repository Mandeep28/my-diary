import { useFormik } from 'formik'

import { MdLock } from 'react-icons/md'

const initialValues = {
  password : "" ,
  cpassword : ""
}


const Reset = () => {

  const {handleChange, values, handleBlur  , handleSubmit } = useFormik ({
    initialValues : initialValues ,
    onSubmit : (values)=>{
      console.log(values)

    } 

  })



  return (
    <section className="auth_section">
    <form onSubmit={handleSubmit} className="bg-white p-4 px-5 rounded inner_auth_div">
      <h3 className="my-3 text-center text-primary">Reset Password</h3>
      <div className="mb-3">
      <label htmlFor="password" className="form-label">
        <MdLock className="mx-1 fs-5"/> Password  <span className="text-danger mx-1">*</span>
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
      <div className="mb-3">
      <label htmlFor="cpassword" className="form-label">
        <MdLock className="mx-1 fs-5"/>Confirm Password  <span className="text-danger mx-1">*</span>
        </label>
        <input
          type="password"
          name="cpassword"
          id="cpassword"
          placeholder="*****"
          autoComplete="off"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.cpassword}
          className="form-control"
        />
      </div>
      <button className="btn btn-primary mx-auto my-2 d-block">Reset Password</button>

      </form>
    </section>
  )
}

export default Reset
