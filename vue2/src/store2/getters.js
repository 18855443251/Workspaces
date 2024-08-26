const getters = {
  lockNum: (state) => state.user.lockNum,
  logoutNum: (state) => state.user.logoutNum,
  name: (state) => state.user.name,
  // age: state => state.user.age,
  cityObj: (state) => state.user.cityObj,
  age: (state) => {
    return state.user.age;
  },
};
export default getters;
