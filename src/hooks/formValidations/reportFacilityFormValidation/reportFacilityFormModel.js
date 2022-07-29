export default {
    formId: 'checkoutForm',
    formField: {
      facilityName: {
        name: 'facilityName',
        label: 'Facility name',
        placeholder: 'John Doe Hospital',
        requiredErrorMsg: 'Facility name is required'
      },
      facilityType: {
        name: 'facilityType',
        label: 'Facility type',
        placeholder: 'Hospital/Clinic',
        requiredErrorMsg: 'Facility type is required'
      },
      facilityAddress: {
        name: 'facilityAddress',
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
  