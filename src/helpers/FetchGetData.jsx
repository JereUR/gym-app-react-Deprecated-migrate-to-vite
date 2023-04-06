export const FetchGetData = async (path) => {
  const token=localStorage.getItem("token");

  if (token === null) {
    try {
      return await fetch(`http://localhost:3001/${path}`, {
        credentials: "include",
        headers: {
          Origin: "http://localhost:3001",
          "X-Requested-With": "XMLHttpRequest",
        },
        withCredentials: true,
      });
    } catch (error) {
      return error;
    }
  } else {
    try {
      return await fetch(`http://localhost:3001/${path}`, {
        credentials: "include",
        headers: {
          Origin: "http://localhost:3001",
          "X-Requested-With": "XMLHttpRequest",
          "Authorization": `${token}`,
        },
        withCredentials: true,
      });
    } catch (error) {
      return error;
    }
  }
};
