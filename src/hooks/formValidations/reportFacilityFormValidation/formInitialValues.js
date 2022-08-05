import reportFacilityFormModel from "./reportFacilityFormModel";
const {
  formField: {
    facilityName,
    facilityType,
    facilityAddress,
    complaints_factor,
  }
} = reportFacilityFormModel;

export default {
    [facilityName.name]: '',
    [facilityType.name]: '',
    [facilityAddress.name]: '',
    [complaints_factor.name]: []
    

}
