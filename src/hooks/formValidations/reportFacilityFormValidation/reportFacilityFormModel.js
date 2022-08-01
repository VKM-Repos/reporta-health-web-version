export default {
    formId: 'checkoutForm',
    formField: {
      facilityName: {
        name: 'facility_name',
        label: 'Facility name',
        placeholder: 'John Doe Hospital',
        requiredErrorMsg: 'Facility name is required'
      },
      facilityType: {
        name: 'facility_category',
        label: 'Facility type',
        placeholder: 'Hospital/Clinic',
        requiredErrorMsg: 'Facility type is required'
      },
      facilityAddress: {
        name: 'location',
        label: 'Facility address',
        placeholder: 'John Doe Street',
        requiredErrorMsg: 'Facility address is required'
      },
      complaints_factor:{
        name: 'complaints_factor',
        requiredErrorMsg: 'One or more  Complaints box need to be checked'
      }
    }
  };
  