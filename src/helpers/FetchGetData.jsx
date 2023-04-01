export const FetchGetData = async (path/*, token */) => {
  try {
    return await fetch(path,
    {headers: {
      'Origin': 'http://localhost:3001',
      /* "X-CSRF-Token": token, */
    }});
  } catch (error) {
    return error;
  }
};
