import s from "./AddForm.module.css";

import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  city: "",
  breed: "",
  description: "",
  isVaccinated: "false",
  contactDetail: {
    phone: "",
    instagram: "",
    email: "",
    facebook: "",
  },
  age: {
    year: "",
    month: "",
  },
};
const reqMsg = "This field is required";
const phoneMsg = "Enter a valid phone number";
const yrMnMsg = "Possible value 0 to 12";

const validationSchema = Yup.object({
  name: Yup.string().required(reqMsg),
  city: Yup.string().required(reqMsg),
  breed: Yup.string().required(reqMsg),
  isVaccinated: Yup.boolean(),
  contactDetail: Yup.object().shape({
    email: Yup.string().email("Invalid email").required(reqMsg),
    phone: Yup.string().min(10, phoneMsg).max(10, phoneMsg),
  }),
  age: Yup.object().shape({
    year: Yup.number()
      .positive("This value cant be negative")
      .min(0, yrMnMsg)
      .max(12, yrMnMsg)
      .required("Required"),
    month: Yup.number()
      .positive("This value cant be negative")
      .min(0, yrMnMsg)
      .max(12, yrMnMsg)
      .required("Required"),
  }),
});

const Error = (msg) => (
  <div style={{ color: "red" }} className={s.err}>
    {msg}
  </div>
);

const AddForm = ({ subHandler, progress, className }) => {
  return (
    <div className={`${s.main} ${className}`}>
      <Formik
        initialValues={initialValues}
        onSubmit={subHandler}
        validationSchema={validationSchema}
      >
        <Form>
          {/* name */}
          <div className={s.inpCtr}>
            <label htmlFor="name">Name* : </label>
            <Field
              className={s.txtInp}
              name="name"
              type="text"
              placeholder="Enter dog's name"
            />
            <ErrorMessage name="name" render={Error} />
          </div>

          {/* city */}
          <div className={s.inpCtr}>
            <label htmlFor="city">City* : </label>
            <Field
              className={s.txtInp}
              name="city"
              type="text"
              placeholder="Dog's location"
            />
            <ErrorMessage name="city" render={Error} />
          </div>

          {/* breed */}
          <div className={s.inpCtr}>
            <label htmlFor="breed">Breed* : </label>
            <Field
              className={s.txtInp}
              name="breed"
              type="text"
              placeholder="Breed of the dog"
            />
            <ErrorMessage name="breed" render={Error} />
          </div>

          {/* description */}
          <div className={s.inpCtr}>
            <label htmlFor="description">Description : </label>
            <Field
              className={s.txtInp}
              name="description"
              type="text"
              placeholder="Something about the dog"
              as="textarea"
            />
            <ErrorMessage name="description" render={Error} />
          </div>

          {/* vaccination status */}
          <div className={s.inpCtr}>
            <label htmlFor="isVaccinated">Is your dog vaccinated* : </label>
            <Field
              className={s.txtInp}
              name="isVaccinated"
              type="text"
              as="select"
            >
              <option value={false}>No</option>
              <option value={true}>Yes</option>
            </Field>
            <ErrorMessage name="isVaccinated" render={Error} />
          </div>

          {/* age */}
          <div>
            <div className={s.inpCtr}>
              <label htmlFor="age.year">Year* : </label>
              <Field
                className={s.txtInp}
                name="age.year"
                type="number"
                placeholder="Age of your dog (years)"
              />
              <ErrorMessage name="age.month" render={Error} />
            </div>
            <div className={s.inpCtr}>
              <label htmlFor="age.month">Months* : </label>
              <Field
                className={s.txtInp}
                name="age.month"
                type="number"
                placeholder="Age of your dog (months)"
              />
              <ErrorMessage name="age.month" render={Error} />
            </div>
          </div>

          {/* contact details */}
          <div className={s.inpCtr}>
            <label htmlFor="contactDetail.email">Email* : </label>
            <Field
              className={s.txtInp}
              name="contactDetail.email"
              type="text"
              placeholder="Email"
            />
            <ErrorMessage name="contactDetail.email" render={Error} />
          </div>
          <div className={s.inpCtr}>
            <label htmlFor="contactDetail.phone">Phone : </label>
            <Field
              className={s.txtInp}
              name="contactDetail.phone"
              type="number"
              placeholder="Phone number"
            />
            <ErrorMessage name="contactDetail.phone" render={Error} />
          </div>
          <div className={s.inpCtr}>
            <label htmlFor="contactDetail.instagram">
              Instagram Username:{" "}
            </label>
            <Field
              className={s.txtInp}
              name="contactDetail.instagram"
              type="text"
              placeholder="Instagram Username"
            />
            <ErrorMessage name="contactDetail.instagram" render={Error} />
          </div>
          <div className={s.inpCtr}>
            <label>Facebook Link: </label>
            <Field
              className={s.txtInp}
              name="contactDetail.facebook"
              type="text"
              placeholder="Facebook Link"
            />
            <ErrorMessage name="contactDetail.facebook" render={Error} />
          </div>

          {/* end */}

          <button
            className={`btn btn-solid ${s.fBtn}`}
            disabled={progress !== 0 && progress < 100}
            type="submit"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddForm;
