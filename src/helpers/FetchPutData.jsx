export const FetchPutData = async ({ path, data }) => {
    const token = localStorage.getItem("token");
  
    try {
      const resp = await fetch(`http://localhost:3001/${path}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Origin: "http://localhost:3001",
          "X-Requested-With": "XMLHttpRequest",
          credentials: "include",
          Authorization: `${token}`,
        },
        body: JSON.stringify(data),
        withCredentials: true,
      });
  
      if (!resp.ok) {
        throw new Error("Error en la respuesta del servidor");
      }
  
      if (path === "login" || path === "signup") {
        localStorage.setItem("token", resp.headers.get("Authorization"));
      }
  
      const dataRes = await resp.json();
      return dataRes;
    } catch (error) {
      return error;
    }
};