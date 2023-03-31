export const FetchGetData = async (path) => {
  try {
    return await fetch(path);
  } catch (error) {
    return error;
  }
};
