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

export default {
    [facility.name]: '',
    [facilityType.name]: '',
    [state.name]: '',
    [lga.name]: '',
    [email.name]: '',
    [cac_reg.name]: '',
    [website.name]: '',
    [ownership.name]: '',
    [facilityLevel.name]: '',
    [operationHours.name]: '',
    [licenceStatus.name]: '',
    [registrationStatus.name]: '',
    [operationStatus.name]: '',
    [typesOfService.name]: '',
    [medicalDoctors.name]: '',
    [dentists.name]: '',
    [nurses.name]: '',
    [midwives.name]: '',
    [communityHealthExtensionWorker.name]: '',
    [communityHealthOfficer.name]: '',
    [enviromentHealthOfficer.name]: '',
    [pharmacyTechnicians.name]: '',
    [labScientists.name]: '',
    [phamacists.name]: '',
    [dentalTechnicians.name]: ''

}
