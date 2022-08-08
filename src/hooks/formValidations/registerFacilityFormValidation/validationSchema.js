import * as Yup from 'yup';
import registerFacilityFormModel from "./registerFacilityFormModel";
const {
  formField: {
    hospitalName,
    facilityType,
    country,
    state,
    lga,
    email,
    councilRegistrationNumber,
    facilityAddress,
    website,
    ownership,
    facilityLevel,
    operationHours,
    licenceStatus,
    registrationStatus,
    premisesStatus,
    daysOfOperation,
    typesOfService,
    medicalDoctors,
    dentists,
    nurses,
    midwives,
    juniorCommunityHealthExtensionWorker,
    healthInformationManagementOfficers,
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
    [hospitalName.name]: Yup.string().required(`${hospitalName.requiredErrorMsg}`),
    [facilityType.name]: Yup.string().required(`${facilityType.requiredErrorMsg}`),
    [country.name]: Yup.string().required(`${country.requiredErrorMsg}`),
    [state.name]: Yup.string().required(`${state.requiredErrorMsg}`),
    [lga.name]: Yup.string().required(`${lga.requiredErrorMsg}`),
  }),
  Yup.object().shape({
    [email.name]: Yup.string().required(`${email.requiredErrorMsg}`),
    [councilRegistrationNumber.name]: Yup.string().required(`${councilRegistrationNumber.requiredErrorMsg}`),
    [facilityAddress.name]: Yup.string().required(`${facilityAddress.requiredErrorMsg}`),
    [website.name]: Yup.string().required(`${website.requiredErrorMsg}`),
  }),
  Yup.object().shape({
    [ownership.name]: Yup.string().required(`${ownership.requiredErrorMsg}`),
    [facilityLevel.name]: Yup.string().required(`${facilityLevel.requiredErrorMsg}`),
    [operationHours.name]: Yup.string().required(`${operationHours.requiredErrorMsg}`),
    [licenceStatus.name]: Yup.string().required(`${licenceStatus.requiredErrorMsg}`),
    [registrationStatus.name]: Yup.string().required(`${registrationStatus.requiredErrorMsg}`),
    [premisesStatus.name]: Yup.string().required(`${premisesStatus.requiredErrorMsg}`),
  }),
  Yup.object().shape({
    [daysOfOperation.name]: Yup.string().required(`${daysOfOperation.requiredErrorMsg}`),
    [typesOfService.name]: Yup.string().required(`${typesOfService.requiredErrorMsg}`),
    [medicalDoctors.name]: Yup.string().required(`${medicalDoctors.requiredErrorMsg}`),
    [dentists.name]: Yup.string().required(`${dentists.requiredErrorMsg}`),
    [nurses.name]: Yup.string().required(`${nurses.requiredErrorMsg}`),
    [midwives.name]: Yup.string().required(`${midwives.requiredErrorMsg}`),
    [juniorCommunityHealthExtensionWorker.name]: Yup.string().required(`${juniorCommunityHealthExtensionWorker.requiredErrorMsg}`),
    [healthInformationManagementOfficers.name]: Yup.string().required(`${healthInformationManagementOfficers.requiredErrorMsg}`),
    [communityHealthOfficer.name]: Yup.string().required(`${communityHealthOfficer.requiredErrorMsg}`),
    [enviromentHealthOfficer.name]: Yup.string().required(`${enviromentHealthOfficer.requiredErrorMsg}`),
    [pharmacyTechnicians.name]: Yup.string().required(`${pharmacyTechnicians.requiredErrorMsg}`),
    [labScientists.name]: Yup.string().required(`${labScientists.requiredErrorMsg}`),
    [phamacists.name]: Yup.string().required(`${phamacists.requiredErrorMsg}`),
    [dentalTechnicians.name]: Yup.string().required(`${dentalTechnicians.requiredErrorMsg}`)
  })
];
