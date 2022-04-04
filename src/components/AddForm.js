import s from "./AddForm.module.css";

import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  city: "",
  breed: "",
  description: "",
  isVaccinated: "",
  // photoUrl:
  //   "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg",
  // owner: {
  //   name: "Jason Smith",
  //   photoUrl:
  //     "https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg",
  // },
  contactDetail: {
    phone: "",
    instagram: "",
    email: "",
    facebook: "",
  },
  age: {
    year: 0,
    month: 0,
  },

  // uid: "6bGS2DN0ZGk4XamMf0xo", auto generate
};
const reqMsg = "This field is required";
const phoneMsg = "Enter a valid phone number";
const yrMnMsg = "Possible value 0 to 12";

const validationSchema = Yup.object({
  name: Yup.string().required(reqMsg),
  city: Yup.string().required(reqMsg),
  breed: Yup.string().required(reqMsg),
  isVaccinated: Yup.boolean().required(reqMsg),
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

const AddForm = ({ subHandler, progress }) => {
  return (
    <div className={s.main}>
      <Formik
        initialValues={initialValues}
        onSubmit={subHandler}
        validationSchema={validationSchema}
      >
        <Form>
          {/* name */}
          <div>
            <label htmlFor="name">Name : </label>
            <Field
              className={s.txtInp}
              name="name"
              type="text"
              placeholder="name"
            />
            <ErrorMessage name="name" render={Error} />
          </div>

          {/* city */}
          <div>
            <label htmlFor="city">City : </label>
            <Field
              className={s.txtInp}
              name="city"
              type="text"
              placeholder="city"
            />
            <ErrorMessage name="city" render={Error} />
          </div>

          {/* breed */}
          <div>
            <label htmlFor="breed">Breed : </label>
            <Field
              className={s.txtInp}
              name="breed"
              type="text"
              placeholder="breed"
            />
            <ErrorMessage name="breed" render={Error} />
          </div>

          {/* description */}
          <div>
            <label htmlFor="description">Description : </label>
            <Field
              className={s.txtInp}
              name="description"
              type="text"
              placeholder="description"
              as="textarea"
            />
            <ErrorMessage name="description" render={Error} />
          </div>

          {/* vaccination status */}
          <div>
            <label htmlFor="isVaccinated">Vaccination Status : </label>
            <Field
              className={s.txtInp}
              name="isVaccinated"
              type="text"
              placeholder="isVaccinated"
              as="select"
            >
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </Field>
            <ErrorMessage name="isVaccinated" render={Error} />
          </div>

          {/* age */}
          <div>
            <div>
              <label htmlFor="age.year">Year : </label>
              <Field
                className={s.txtInp}
                name="age.year"
                type="number"
                placeholder="age.year"
              />
              <ErrorMessage name="age.month" render={Error} />
            </div>
            <div>
              <label htmlFor="age.month">Months : </label>
              <Field
                className={s.txtInp}
                name="age.month"
                type="number"
                placeholder="age.month"
              />
              <ErrorMessage name="age.month" render={Error} />
            </div>
          </div>

          {/* contact details */}
          <div>
            <div>
              <label htmlFor="contactDetail.phone">Phone : </label>
              <Field
                className={s.txtInp}
                name="contactDetail.phone"
                type="number"
                placeholder="contactDetail.phone"
              />
              <ErrorMessage name="contactDetail.phone" render={Error} />
            </div>
            <div>
              <label htmlFor="contactDetail.instagram">Instagram : </label>
              <Field
                className={s.txtInp}
                name="contactDetail.instagram"
                type="text"
                placeholder="contactDetail.instagram"
              />
              <ErrorMessage name="contactDetail.instagram" render={Error} />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="contactDetail.email">Email : </label>
              <Field
                className={s.txtInp}
                name="contactDetail.email"
                type="text"
                placeholder="contactDetail.email"
              />
              <ErrorMessage name="contactDetail.email" render={Error} />
            </div>
            <div>
              <label>Facebook : </label>
              <Field
                className={s.txtInp}
                name="contactDetail.facebook"
                type="text"
                placeholder="contactDetail.facebook"
              />
              <ErrorMessage name="contactDetail.facebook" render={Error} />
            </div>
          </div>

          {/* end */}

          <button disabled={progress !== 0 && progress < 100} type="submit">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddForm;
