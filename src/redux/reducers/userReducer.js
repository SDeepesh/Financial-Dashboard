const initialState = {
  name: '',
  userName: '',
  email: '',
  password: '',
  dob: '',
  presentAddress: '',
  permanentAddress: '',
  city: '',
  postalCode: '',
  country: '',
  profilePicture: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USER_DATA':
      return { ...state, ...action.payload };
    case 'UPDATE_USER_PROFILE':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default userReducer;
