import { Formik ,Form,Field,ErrorMessage, yupToFormErrors } from 'formik';
import React from 'react';
import * as Yup from "yup";

export default function BasicForm() {
  let myhobbies = ["music","circket","basketball"];
  let myredio = ["ssc","hsc","graduation","postgraduation"];
  let cities =["Surat","Vadodara","Ahemdabad","Rajkot","Jamnagar"];

  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(10, 'Too Long!')
      .required('Please enter the firstname'),

      lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(15, 'Too Long!')
      .required('Please enter the lastname'),

      Address: Yup.string()
      .min(2, 'Too Short!')
      .max(30, 'Too Long!')
      .required('Please enter the Address'),
 
      hobbies: Yup.array()
      .min(1)
       .required("at least one item needs to be here"),
      
       email: Yup.string()
       .email('Invalid email')
       .required('Please enter the valid email'),

       phonenumber: Yup.number()
       .typeError("That doesn't look like a phone number")
       .positive("A phone number can't start with a minus")
       .integer("A phone number can't include a decimal point")
       .min(10)
       .required('A phone number is required'),
      
       birthdate: Yup.date()
      .max(new Date(Date.now() - 567648000000), "You must be at least 18 years")
      .required("Birhdate is required"),

      
      password: Yup.string()
      .required("Please Enter Password")
      .min(8, 'Your password is too short.'),
      
      
      confirmpassword: Yup.string()
            .oneOf([null, Yup.ref('password')], ' Password should be match')
            .required(' Please enter the Password'),
      

      city: Yup.string()
      .min(1)
      .required("Please select your city"),
      
       education: Yup.string()
      .min(1)
      .required("Please select one filed"),

      zipcoad: Yup.string()
    .length(6)
    .required("please enter zipcoad")
    
      

    });
  return (
    
    <div>
<Formik initialValues = {{
    firstName :'',
    lastName :'',
    Address :'',
    hobbies:[],
    education : '',
    city:'',
    email:'',
    phonenumber:'',
    birthdate:'',
    password:'',
    confirmpassword:'',
    zipcoad:'',

}}
validationSchema= {SignupSchema}
onSubmit = {(values)=>{
    console.log(values);
}
}
>
    <Form>
      <h1>REGISTRATION FORM</h1>
      <div>
    <label htmlFor='firstName'>FirstName:-</label>
    <Field id="firstName" name="firstName" placeholder="FirstName" type="text"/>
    <ErrorMessage name="firstName" />
    </div>

    <div>
    <label htmlFor='firstName'>LastName:-</label>
    <Field id="lastName" name="lastName" placeholder="LastName" type="text"/>
    <ErrorMessage name="lastName" />
    </div>

     <div>
    <label htmlFor='Address'>Address:-</label>
    <Field id="Address" name="Address" placeholder="Address" type="text"/>
    <ErrorMessage name="Address" />
    </div>

     <div>
    <label htmlFor='email'>Email:-</label>
    <Field id="Address" name="email" placeholder="Email" type="email"/>
    <ErrorMessage name="email" />
    </div>
    <div>
    <label htmlFor='number'>Phone Number:-</label>
    <Field id="Address" name="phonenumber" placeholder="phonenumber" type="tel"/>
    <ErrorMessage name="phonenumber" />
    </div>
    <div>
      <label>Birth-Date:-</label>
      <Field id="Address" name="birthdate" placeholder="birthdate" type="date"/>
      <ErrorMessage name="birthdate" />
    </div>
    <div>
      <label>Password:-</label>
      <Field id="Address" name="password" placeholder="password" type="password"/>
      <ErrorMessage name="password" />
    </div>
    <div>
      <label> Confirm Password:-</label>
      <Field id="Address" name="confirmpassword" placeholder="confirm-password" type="password"/>
      <ErrorMessage name="confirmpassword" />
    </div>





    <div role="group" aria-labelledby="checkbox-group">
      <label>Hobbies:-</label>
  {
    myhobbies.map((value)=>{
      return(<label>
              <Field type="checkbox" name="hobbies" value={value} />
              {value}
      </label>)

    })
      }
      <ErrorMessage name="hobbies" />

  <div>
    <label>city:-</label>
  <Field name="city" as="select">
   {
    cities.map((value)=>{
      return(<option value={value}>{value}</option>)
    })
   }
   </Field>
   <ErrorMessage name="city" />

   </div>
    </div>

<div>
  <label>Education:-</label>
    <div role="group" aria-labelledby="my-radio-group">
    {
  myredio.map((value)=>{
    return(<label> 
      <Field type="radio" name="education" value={value} />
        {value}
        <ErrorMessage name="education" />

    </label>       )
  })


}
   </div>
   </div>
   <div>
      <label>Zipcoad</label>
      <Field id="Address" name="zipcoad" placeholder="zipcoad" type="zipcoad"/>
      <ErrorMessage name="zipcoad" />
    </div>
   
    <button type='submit' >submit</button>
    
    </Form>


</Formik>

    </div>
  )
}
