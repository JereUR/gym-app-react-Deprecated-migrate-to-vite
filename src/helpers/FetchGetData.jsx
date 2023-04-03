export const FetchGetData = async (path) => {
  try {
    return await fetch(path, {
      credentials: 'include',
      headers: {
        'Origin': 'http://localhost:3001',
        'X-Requested-With': 'XMLHttpRequest'
      }
    });
  } catch (error) {
    return error;
  }
};

