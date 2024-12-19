const initialState = {
    transactions: [],
  };
  
  const transactionReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_TRANSACTIONS':
        return {
          ...state,
          transactions: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default transactionReducer;
  