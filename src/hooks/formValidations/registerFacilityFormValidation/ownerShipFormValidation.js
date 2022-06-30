import { useFormik } from "formik";
import * as Yup from "yup";

export const registerFacilityFormValidation = (onSubmitHandler) => {
  const formik = useFormik({
    initialValues: {
      ownership: "",
      level: "",
      operationHours: "",
      licenceStatus: "",
      registrationStatus: "",
      premisesStatus: "",
    },
    validationSchema: Yup.object({
      ownership: Yup.string()
        .required("This field is empty!")
        .min(5, " too short")
        .max(200, "Too long"),
      level: Yup.string()
        .required("This field is empty!"),
      operationHours: Yup.string()
        .required("This field is empty!"),
      licenceStatus: Yup.string()
        .required("This field is empty!"),
      registrationStatus: Yup.string()
        .required("This field is empty!"),
      premisesStatus: Yup.string()
        .required("This field is empty!")
    }),
    onSubmit: onSubmitHandler,
  });

  return formik;
};
