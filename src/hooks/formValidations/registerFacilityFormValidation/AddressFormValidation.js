import { useFormik } from "formik";
import * as Yup from "yup";

export const registerFacilityFormValidation = (onSubmitHandler) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      councilRegistrationNumber: "",
      address: "",
      website: ""
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("This field is empty!")
        .min(5, " too short")
        .max(200, "Too long"),
        councilRegistrationNumber: Yup.string()
        .required("This field is empty!"),
        address: Yup.string()
        .required("This field is empty!"),
        website: Yup.string()
        .required("This field is empty!")
    }),
    onSubmit: onSubmitHandler,
  });

  return formik;
};
