export const FetchGetData = async (path) => {
  const token=localStorage.getItem("token");
  let headers={}

  if (token === null) {
    headers={
      Origin: "http://localhost:3001",
      "X-Requested-With": "XMLHttpRequest",
    }
  }else{
    headers={
      Origin: "http://localhost:3001",
      "X-Requested-With": "XMLHttpRequest",
      "Authorization": `${token}`,
    }
  }
  
  try {
      return await fetch(`http://localhost:3001/${path}`, {
        credentials: "include",
        headers: headers,
        withCredentials: true,
      });
  } catch (error) {
      return error;
  }
};
