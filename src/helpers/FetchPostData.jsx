export const FetchPostData = async ({ path, data }) => {
  try {
    const resp = await fetch(`/${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data }),
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
