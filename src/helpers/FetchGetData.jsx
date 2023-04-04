export const FetchGetData = async (path /*, token */) => {
  try {
    return await fetch(`http://localhost:3001/api/v1/${path}`, {
      credentials: "include",
      headers: {
        'Origin': 'http://localhost:3001',
        'X-Requested-With': 'XMLHttpRequest'
      }
    })
  } catch (error) {
    return error;
  }
};
