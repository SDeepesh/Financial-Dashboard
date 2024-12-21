// userActions.js
export const setUser = (user) => ({
  type: 'SET_USER',
  payload: user,
});

// New action for updating user profile
export const updateUserProfile = (updatedProfile) => ({
  type: 'UPDATE_USER_PROFILE',
  payload: updatedProfile,
});
