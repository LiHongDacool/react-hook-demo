export const dva = {
  config: {
    onError(err) {
      err.preventDefault();
      console.error(err.message);
    }, 
    //测试
  },
};
