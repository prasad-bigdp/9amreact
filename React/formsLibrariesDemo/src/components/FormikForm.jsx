import React from 'react'
import { Formik } from 'Formik'
 import * as Yup from "yup"
function FormikForm ()
{
    let initialValues = {
        email: "",
        password:""
    }
    const SignupSchema = Yup.object().shape({
        email: Yup.string().email("Invalid email").required("Required"),
            password:Yup.string().min(8,"minimum 8 characters required").required("Required")
		})
  return (
		<div>
			<h1>This is a basic Form</h1>
			<Formik
				initialValues={initialValues}
				validationSchema={SignupSchema}
				onSubmit={(values) => {
					console.log(values.email, values.password)
				}}>
				{({ values, handleChange, handleBlur, handleSubmit, errors }) => (
					<form>
						<div>
							<input
                              type='email'
                              name='email'
								placeholder='Enter email'
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.email}
							/>
							{errors.email && <p>{errors.email}</p>}
						</div>
						<div>
							<input
                              type='password'
                              name='password'
								placeholder='Enter password'
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.password}
							/>
							{errors.password && <p>{errors.password}</p>}
                      </div>
                      <button type='submit' onClick={handleSubmit}>
                          submit
                      </button>
					</form>
				)}
			</Formik>
		</div>
	)
}

export default FormikForm
