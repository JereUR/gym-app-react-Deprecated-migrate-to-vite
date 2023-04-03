export const FetchPostData = async (path, data /* ,token */) => {
  try {
    const resp = await fetch(`http://localhost:3001/api/v1/${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Origin: "http://localhost:3001",
        "X-Requested-With": "XMLHttpRequest",
      },
      body: JSON.stringify(data),
    });

    if (!resp.ok) {
      throw new Error("Error en la respuesta del servidor");
    }

    const dataRes = await resp.json();
    return dataRes;
  } catch (error) {
    return error;
  }
};
