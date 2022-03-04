import fetch from "isomorphic-fetch";
export const uploadPhoto = async (photo ) => {

  
    return await fetch(`https://gfgkiit-backend.herokuapp.com/single-image`, {
      method: "POST",
      headers: {
        Accept: "multipart/form-data",
      },
      body: photo,
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => console.log(err));
  };