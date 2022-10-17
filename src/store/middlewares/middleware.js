export const middleware = () => {
  return (next) => {
    return (action) => {
      return next(action);
    };
  };
};
