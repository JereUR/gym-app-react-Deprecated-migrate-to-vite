import { toast } from "react-hot-toast";

export const FetchPostData = async ({ path, data, message = "" }) => {
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

    if (message !== "") {
      toast.success(
        { message },
        {
          position: "top-right",
          duration: 6000,
          style: {
            background: "rgba(215, 250, 215)",
            fontSize: "1rem",
            fontWeight: "500",
          },
        }
      );
    }

    const dataRes = await resp.json();
    return dataRes;
  } catch (error) {
    toast.error(
      { error },
      {
        position: "top-right",
        duration: 6000,
        style: {
          background: "rgba(250, 215, 215)",
          fontSize: "1rem",
          fontWeight: "500",
        },
      }
    );

    return error;
  }
};
