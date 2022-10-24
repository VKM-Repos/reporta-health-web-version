import * as Yup from 'yup';
import registerFacilityFormModel from "./registerFacilityFormModel";
const {
  formField: {
    facility,
    facilityType,
    state,
    lga,
    email,
    cac_reg,
    website,
    ownership,
    facilityLevel,
    operationHours,
    licenceStatus,
    registrationStatus,
    operationStatus,
    typesOfService,
    medicalDoctors,
    dentists,
    nurses,
    midwives,
    communityHealthExtensionWorker,
    communityHealthOfficer,
    enviromentHealthOfficer,
    pharmacyTechnicians,
    labScientists,
    phamacists,
    dentalTechnicians
  }
} = registerFacilityFormModel;

export default [
  Yup.object().shape({
    [facility.name]: Yup.string().required(`${facility.requiredErrorMsg}`),
    [facilityType.name]: Yup.string().required(`${facilityType.requiredErrorMsg}`),
    [state.name]: Yup.string().required(`${state.requiredErrorMsg}`),
    [lga.name]: Yup.string().required(`${lga.requiredErrorMsg}`),
  }),
  Yup.object().shape({
    [email.name]: Yup.string().required(`${email.requiredErrorMsg}`),
    [cac_reg.name]: Yup.string().required(`${cac_reg.requiredErrorMsg}`),
    [website.name]: Yup.string().required(`${website.requiredErrorMsg}`),
  }),
  Yup.object().shape({
    [ownership.name]: Yup.string().required(`${ownership.requiredErrorMsg}`),
    [facilityLevel.name]: Yup.string().required(`${facilityLevel.requiredErrorMsg}`),
    [operationHours.name]: Yup.string().required(`${operationHours.requiredErrorMsg}`),
    [licenceStatus.name]: Yup.string().required(`${licenceStatus.requiredErrorMsg}`),
    [registrationStatus.name]: Yup.string().required(`${registrationStatus.requiredErrorMsg}`),
  }),
  Yup.object().shape({
    [operationStatus.name]: Yup.string().required(`${operationStatus.requiredErrorMsg}`),
    [medicalDoctors.name]: Yup.string().required(`${medicalDoctors.requiredErrorMsg}`),
    [dentists.name]: Yup.string().required(`${dentists.requiredErrorMsg}`),
    [nurses.name]: Yup.string().required(`${nurses.requiredErrorMsg}`),
    [midwives.name]: Yup.string().required(`${midwives.requiredErrorMsg}`),
    [communityHealthExtensionWorker.name]: Yup.string().required(`${communityHealthExtensionWorker.requiredErrorMsg}`),
    [communityHealthOfficer.name]: Yup.string().required(`${communityHealthOfficer.requiredErrorMsg}`),
    [enviromentHealthOfficer.name]: Yup.string().required(`${enviromentHealthOfficer.requiredErrorMsg}`),
    [pharmacyTechnicians.name]: Yup.string().required(`${pharmacyTechnicians.requiredErrorMsg}`),
    [labScientists.name]: Yup.string().required(`${labScientists.requiredErrorMsg}`),
    [phamacists.name]: Yup.string().required(`${phamacists.requiredErrorMsg}`),
    [dentalTechnicians.name]: Yup.string().required(`${dentalTechnicians.requiredErrorMsg}`)
  })
];
