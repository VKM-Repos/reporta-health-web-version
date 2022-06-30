import { useFormik } from "formik";
import * as Yup from "yup";

export const registerFacilityFormValidation = (onSubmitHandler) => {
  const formik = useFormik({
    initialValues: {
      daysOfOperation: "",
      typesOfService: "",
      medicalDoctors: "",
      dentists: "",
      nurse: "",
      midwives: "",
      juniorCommunityHealthExtensionWorker: "",
      healthInformationManagementOfficers: "",
      communityHealthOfficer: "",
      enviromentHealthOfficer: "",
      pharmacyTechnicians: "",
      labScientists: "",
      phamacists: "",
      dentalTechnicians: "",
    },
    validationSchema: Yup.object({
        daysOfOperation: Yup.string()
            .required("This field is empty!")
            .min(5, " too short")
            .max(200, "Too long"),
        typesOfService: Yup.string()
            .required("This field is empty!"),
        medicalDoctors: Yup.string()
            .required("This field is empty!"),
        dentists: Yup.string()
            .required("This field is empty!"),
        nurse: Yup.string()
            .required("This field is empty!"),
        midwives: Yup.string()
            .required("This field is empty!"),
        juniorCommunityHealthExtensionWorker: Yup.string()
            .required("This field is empty!"),
        healthInformationManagementOfficers: Yup.string()
            .required("This field is empty!"),
        communityHealthOfficer: Yup.string()
            .required("This field is empty!"),
        enviromentHealthOfficer: Yup.string()
            .required("This field is empty!"),
        pharmacyTechnicians: Yup.string()
            .required("This field is empty!"),
        labScientists: Yup.string()
            .required("This field is empty!"),
        phamacists: Yup.string()
            .required("This field is empty!"),
        dentalTechnicians: Yup.string()
            .required("This field is empty!")
    }),
    onSubmit: onSubmitHandler,
  });

  return formik;
};
