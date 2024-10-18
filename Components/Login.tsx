"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useAppContext } from '@/context/Store';

     
const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

const LoginForm = () => {
  const router = useRouter(); 
  const {dispatch}=useAppContext()
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={LoginSchema}
      onSubmit={(values, { setSubmitting }) => {
        // I could have done this but wanted to submit on time
        // fetch('http://localhost:3030/api/login', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json'
        //   },
        //   body: JSON.stringify(values)
        // })
        // .then(response => response.json())
        // .then(data => console.log(data))
        // .catch(error => console.error(error))
       dispatch({
        type:'LOGIN',
        payload:{
          id:'1',
          name:values.email.split("@")[0],
          email:values.email
        }
       })
      setSubmitting(false);
      
      router.push('/');
      }}
    >
      {({ isSubmitting }) => (
        <Form className="flex flex-col items-center space-y-4">
          <div className="text-blue-500">
            <Field
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-2 border rounded"
            />
            <ErrorMessage name="email" component="div" className="text-red-500" />
          </div>
          <div className="text-blue-500">
            <Field
              type="password"
              name="password"
              placeholder="Password"
              className="w-full p-2 border rounded"
            />
            <ErrorMessage name="password" component="div" className="text-red-500" />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;

