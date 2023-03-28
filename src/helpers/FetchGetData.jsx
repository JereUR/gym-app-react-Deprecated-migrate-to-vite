export const FetchGetData = async ({ path }) => {
  try {
    const resp = await fetch(`/${path}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
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
