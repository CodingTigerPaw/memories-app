import React from 'react'
import { useFormik } from 'formik'

const validate = values =>{
  const errors = {}

  if( !values.name.lenght <= 10){
    errors.name = 'name is too short'
  }

  return errors
}

const Form = () => {
  const Formik = useFormik({
  initialValues:{
    name:'marcin',
    surname: '',
  },
  validate,
  onSubmit: values =>{
    console.log(values)
  }
})

  return (
    <div>
    <form onSubmit={Formik.handleSubmit}>
            <label htmlFor="">name</label> <br/>
            <input type="text" name="name" 
            value={Formik.values.name} 
            onChange={Formik.handleChange} 
            /><br/>
            <label htmlFor="">surname</label> <br/>
            <input type="text" name="surname" 
            value={Formik.values.surname} 
            onChange={Formik.handleChange} 
            />
            <button type='submit'>OK</button>
            {Formik.errors.name ? <>nazwa jest za krótka </> : <> </>}
    
    </form>

    </div>
  )
}

export default Form