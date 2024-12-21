import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import ProfilePicturePlaceholder from '../../assets/images/topbar/profile-pic.svg';
import Pencil from '../../assets/images/settings/pencil.svg';
import { updateUserProfile } from '../../redux/actions/userActions';

const EditProfile = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const initialValues = {
    name: user.name || 'Charlene Reed',
    userName: user.userName || 'Charlene Reed',
    email: user.email || 'charlenereed@gmail.com',
    password: user.password || '',
    dob: user.dob || '1990-01-25',
    presentAddress: user.presentAddress || 'San Jose, California, USA',
    permanentAddress: user.permanentAddress || 'San Jose, California, USA',
    city: user.city || 'San Jose',
    postalCode: user.postalCode || '45962',
    country: user.country || 'USA',
    profilePicture: user.profilePicture || ProfilePicturePlaceholder,
  };

  const [profilePicture, setProfilePicture] = useState(
    initialValues.profilePicture
  );

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
  });

  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (values, { setSubmitting }) => {
    const updatedProfile = {
      ...values,
      profilePicture,
    };

    setTimeout(() => {
      dispatch(updateUserProfile(updatedProfile));
      console.log('Updated Profile:', updatedProfile);
      setSubmitting(false);
    }, 2000);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <div>
          <Form className="flex gap-[22px] md:gap-[57px] md:flex-row flex-col">
            <div className="w-[100px] relative m-auto md:mt-0">
              <img
                src={profilePicture}
                alt="Profile"
                className="w-[90px] h-[90px] rounded-full object-cover"
              />
              <label
                htmlFor="profilePicture"
                className="absolute bottom-0 right-[-5px] cursor-pointer"
              >
                <img src={Pencil} alt="edit" />
              </label>
              <input
                type="file"
                id="profilePicture"
                accept="image/*"
                className="hidden"
                onChange={handleProfilePictureChange}
              />
            </div>

            <div className="flex flex-col md:grid md:grid-cols-2 w-full gap-x-[30px] gap-y-[22px]">
              <div>
                <label htmlFor="name" className="block text-[13px] md:text-base text-primary">
                  Your Name
                </label>
                <Field
                  id="name"
                  type="text"
                  name="name"
                  className="w-full h-[50px] mt-[9px] md:mt-[11px] text-[12px] md:text-base text-[#718EBF] border rounded-[15px] px-[20px] py-2 focus:outline-none"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-xs"
                />
              </div>
              <div>
                <label
                  htmlFor="userName"
                  className="block text-[13px] md:text-base text-primary"
                >
                  User Name
                </label>
                <Field
                  id="userName"
                  type="text"
                  name="userName"
                  className="w-full h-[50px] mt-[9px] md:mt-[11px] text-[12px] md:text-base text-[#718EBF] border rounded-[15px] px-[20px] py-2 focus:outline-none"
                  disabled
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[13px] md:text-base text-primary">
                  Email
                </label>
                <Field
                  id="email"
                  type="email"
                  name="email"
                  className="w-full h-[50px] mt-[9px] md:mt-[11px] text-[12px] md:text-base text-[#718EBF] border rounded-[15px] px-[20px] py-2 focus:outline-none"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-xs"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-[13px] md:text-base text-primary"
                >
                  Password
                </label>
                <Field
                  id="password"
                  type="password"
                  name="password"
                  className="w-full h-[50px] mt-[9px] md:mt-[11px] text-[12px] md:text-base text-[#718EBF] border rounded-[15px] px-[20px] py-2 focus:outline-none"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-xs"
                />
              </div>
              <div>
                <label htmlFor="dob" className="block text-[13px] md:text-base text-primary">
                  Date of Birth
                </label>
                <Field
                  id="dob"
                  type="date"
                  name="dob"
                  className="w-full h-[50px] mt-[9px] md:mt-[11px] text-[12px] md:text-base text-[#718EBF] border rounded-[15px] px-[20px] py-2 focus:outline-none"
                />
                <ErrorMessage
                  name="dob"
                  component="div"
                  className="text-red-500 text-xs"
                />
              </div>
              <div>
                <label htmlFor="city" className="block text-[13px] md:text-base text-primary">
                  City
                </label>
                <Field
                  id="city"
                  type="text"
                  name="city"
                  className="w-full h-[50px] mt-[9px] md:mt-[11px] text-[12px] md:text-base text-[#718EBF] border rounded-[15px] px-[20px] py-2 focus:outline-none"
                />
                <ErrorMessage
                  name="city"
                  component="div"
                  className="text-red-500 text-xs"
                />
              </div>
              <div>
                <label
                  htmlFor="postalCode"
                  className="block text-[13px] md:text-base text-primary"
                >
                  Postal Code
                </label>
                <Field
                  id="postalCode"
                  type="text"
                  name="postalCode"
                  className="w-full h-[50px] mt-[9px] md:mt-[11px] text-[12px] md:text-base text-[#718EBF] border rounded-[15px] px-[20px] py-2 focus:outline-none"
                />
                <ErrorMessage
                  name="postalCode"
                  component="div"
                  className="text-red-500 text-xs"
                />
              </div>

              <div>
                <label
                  htmlFor="country"
                  className="block text-[13px] md:text-base text-primary"
                >
                  Country
                </label>
                <Field
                  id="country"
                  type="text"
                  name="country"
                  className="w-full h-[50px] mt-[9px] md:mt-[11px] text-[12px] md:text-base text-[#718EBF] border rounded-[15px] px-[20px] py-2 focus:outline-none"
                />
                <ErrorMessage
                  name="country"
                  component="div"
                  className="text-red-500 text-xs"
                />
              </div>

              <div className="col-span-2 flex justify-end mb-[20px] md:mt-[28px]">
                <button
                  type="submit"
                  className="bg-primary text-white text-[15px] md:text-[18px] text-center p-[10px] rounded-[9px] md:rounded-[15px] h-[40px] md:h-[50px] w-full md:w-[190px] shadow hover:bg-secondary focus:outline-none"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="loader w-5 h-5 border-2 border-t-white border-blue-400 rounded-full animate-spin m-auto"></div>
                  ) : (
                    'Save'
                  )}
                </button>
              </div>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default EditProfile;
