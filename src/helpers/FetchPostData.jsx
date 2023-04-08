export const FetchPostData = async ({ path, data}) => {
  const token = localStorage.getItem("token");
  let headers={}

  console.log({data})

  if(path==="signup" || path==="login"){
    headers={
      "Content-Type": "application/json",
        Origin: "http://localhost:3001",
        "X-Requested-With": "XMLHttpRequest",
        "credentials": 'include'
    }
  }
  else{
    headers={
      "Content-Type": "application/json",
        Origin: "http://localhost:3001",
        "X-Requested-With": "XMLHttpRequest",
        "credentials": 'include',
        "Authorization": `${token}`,
    }
  }

  try {
    const resp = await fetch(`http://localhost:3001/${path}`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
      withCredentials: true
    });

    if (!resp.ok) {
      throw new Error("Error en la respuesta del servidor");
    }

    if(path === "login" || path === "signup"){
      localStorage.setItem('token', resp.headers.get("Authorization"))
    }

    const dataRes = await resp.json();
    return dataRes;
  } catch (error) {
    return error;
  }
};