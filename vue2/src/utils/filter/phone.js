export default {
  //加密手机号 18856562963->188 **** 2963
  encryptPhoneNo(input) {
    if (input) {
      input = input.substring(0, 3) + " **** " + input.substr(input.length - 4);
    }
    return input;
  },
};
