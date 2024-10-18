
"use client"
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const RegisterSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Too Short!').required('Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Required'),
  userType: Yup.string().required('Required'),
});

const RegisterForm = () => {
  return (
    <Formik
      initialValues={{ name: '', email: '', password: '', confirmPassword: '', userType: 'user' }}
      validationSchema={RegisterSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-6">
          <div className="space-y-2">
            <Field
              type="text"
              name="name"
              placeholder="Full Name"
              className="w-full p-3 bg-gray-50 text-gray-800 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition duration-300"
            />
            <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
          </div>
          <div className="space-y-2">
            <Field
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-3 bg-gray-50 text-gray-800 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition duration-300"
            />
            <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
          </div>
          <div className="space-y-2">
            <Field
              type="password"
              name="password"
              placeholder="Password"
              className="w-full p-3 bg-gray-50 text-gray-800 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition duration-300"
            />
            <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
          </div>
          <div className="space-y-2">
            <Field
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="w-full p-3 bg-gray-50 text-gray-800 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition duration-300"
            />
            <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm" />
          </div>
          <div className="space-y-2">
            <Field
              as="select"
              name="userType"
              className="w-full p-3 bg-gray-50 text-gray-800 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition duration-300"
            >
              <option value="user">User</option>
            </Field>
            <ErrorMessage name="userType" component="div" className="text-red-500 text-sm" />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300"
          >
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
