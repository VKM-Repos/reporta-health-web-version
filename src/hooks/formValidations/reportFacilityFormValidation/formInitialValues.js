import reportFacilityFormModel from "./reportFacilityFormModel";
const {
  formField: {
    facilityName,
    facilityType,
    facilityAddress,
  }
} = reportFacilityFormModel;

export default {
    [facilityName.name]: '',
    [facilityType.name]: '',
    [facilityAddress.name]: '',
    

}
