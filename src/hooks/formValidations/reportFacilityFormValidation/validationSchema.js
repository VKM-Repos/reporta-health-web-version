import * as Yup from 'yup';
import reportFacilityFormModel from "./reportFacilityFormModel";
const {
  formField: {
    facilityName,
    facilityType,
    facilityAddress,
  }
} = reportFacilityFormModel;

export default [
  Yup.object().shape({
    [facilityName.name]: Yup.string().required(`${facilityName.requiredErrorMsg}`),
    [facilityType.name]: Yup.string().required(`${facilityType.requiredErrorMsg}`),
    [facilityAddress.name]: Yup.string().required(`${facilityAddress.requiredErrorMsg}`),
  }),
];
