export const FetchDeleteData = async ({path}) => {
    const token=localStorage.getItem("token");
    try {
      const resp = await fetch(`http://localhost:3001/${path}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Origin: "http://localhost:3001",
          "X-Requested-With": "XMLHttpRequest",
          "credentials": 'include',
          "Authorization": `${token}`,
        },
        withCredentials: true
      });
  
      if (!resp.ok) {
        throw new Error("Error en la respuesta del servidor");
      }

      localStorage.removeItem("token");
  
      const dataRes = await resp.json();
      return dataRes;
    } catch (error) {
      return error;
    }
  };