import { useFormik } from "formik";
import * as Yup from "yup";

export const registerFacilityFormValidation = (onSubmitHandler) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      type: "",
      country: "",
      state: "",
      lga: ""
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("This field is empty!")
        .min(5, " too short")
        .max(200, "Too long"),
      type: Yup.string()
        .required("This field is empty!"),
      country: Yup.string()
        .required("This field is empty!"),
      state: Yup.string()
        .required("This field is empty!"),
      lga: Yup.string()
        .required("This field is empty!")
    }),
    onSubmit: onSubmitHandler,
  });

  return formik;
};
