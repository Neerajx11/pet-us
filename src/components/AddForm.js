import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Button from "./Button";

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
  <div className="text-xs font-semibold tracking-wide text-red-900">{msg}</div>
);

const inpCls =
  "w-full px-2 py-2 my-2 text-sm font-semibold tracking-wide border border-solid rounded-sm placeholder:tracking-wide border-bgprimary placeholder:text-sm text-bgprimary";

const AddForm = ({ subHandler, progress, className }) => {
  return (
    <div className={`${className}`}>
      <Formik
        initialValues={initialValues}
        onSubmit={subHandler}
        validationSchema={validationSchema}
      >
        <Form>
          {/* name */}
          <div className="mb-4 font-semibold text-primary">
            <label htmlFor="name">Name* :</label>
            <Field
              className={inpCls}
              name="name"
              type="text"
              placeholder="Enter dog's name"
            />
            <ErrorMessage name="name" render={Error} />
          </div>

          {/* city */}
          <div className="mb-4 font-semibold text-primary">
            <label htmlFor="city">City* :</label>
            <Field
              className={inpCls}
              name="city"
              type="text"
              placeholder="Dog's location"
            />
            <ErrorMessage name="city" render={Error} />
          </div>

          {/* breed */}
          <div className="mb-4 font-semibold text-primary">
            <label htmlFor="breed">Breed* :</label>
            <Field
              className={inpCls}
              name="breed"
              type="text"
              placeholder="Breed of the dog"
            />
            <ErrorMessage name="breed" render={Error} />
          </div>

          {/* description */}
          <div className="mb-4 font-semibold text-primary">
            <label htmlFor="description">Description :</label>
            <Field
              className={inpCls}
              name="description"
              type="text"
              placeholder="Something about the dog"
              as="textarea"
            />
            <ErrorMessage name="description" render={Error} />
          </div>

          {/* vaccination status */}
          <div className="mb-4 font-semibold text-primary">
            <label htmlFor="isVaccinated">Is your dog vaccinated* :</label>
            <Field
              className={inpCls}
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
            <div className="mb-4 font-semibold text-primary">
              <label htmlFor="age.year">Year* :</label>
              <Field
                className={inpCls}
                name="age.year"
                type="number"
                placeholder="Age of your dog (years)"
              />
              <ErrorMessage name="age.month" render={Error} />
            </div>
            <div className="mb-4 font-semibold text-primary">
              <label htmlFor="age.month">Months* :</label>
              <Field
                className={inpCls}
                name="age.month"
                type="number"
                placeholder="Age of your dog (months)"
              />
              <ErrorMessage name="age.month" render={Error} />
            </div>
          </div>

          {/* contact details */}
          <div className="mb-4 font-semibold text-primary">
            <label htmlFor="contactDetail.email">Email* :</label>
            <Field
              className={inpCls}
              name="contactDetail.email"
              type="text"
              placeholder="Email"
            />
            <ErrorMessage name="contactDetail.email" render={Error} />
          </div>
          <div className="mb-4 font-semibold text-primary">
            <label htmlFor="contactDetail.phone">Phone :</label>
            <Field
              className={inpCls}
              name="contactDetail.phone"
              type="number"
              placeholder="Phone number"
            />
            <ErrorMessage name="contactDetail.phone" render={Error} />
          </div>
          <div className="mb-4 font-semibold text-primary">
            <label htmlFor="contactDetail.instagram">Instagram Username:</label>
            <Field
              className={inpCls}
              name="contactDetail.instagram"
              type="text"
              placeholder="Instagram Username"
            />
            <ErrorMessage name="contactDetail.instagram" render={Error} />
          </div>
          <div className="mb-4 font-semibold text-primary">
            <label>Facebook Link:</label>
            <Field
              className={inpCls}
              name="contactDetail.facebook"
              type="text"
              placeholder="Facebook Link"
            />
            <ErrorMessage name="contactDetail.facebook" render={Error} />
          </div>

          {/* end */}

          <Button
            className="mt-12 w-max"
            text="Submit"
            disabled={progress !== 0 && progress < 100}
            type="submit"
          >
            Submit
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddForm;
