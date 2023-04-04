export const FetchGetData = async (path /*, token */) => {
  try {
    return await fetch(`http://localhost:3001/api/v1/${path}`, {
      credentials: "include",
      headers: {
        'Origin': 'http://localhost:3001',
        'X-Requested-With': 'XMLHttpRequest'
      }
    })
    .then(response => {
      console.log(response.headers); // <--- Agregar esta línea
      // ...
    });
  } catch (error) {
    return error;
  }
};
