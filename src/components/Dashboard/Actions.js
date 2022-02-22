export const uploadProductPhoto = async (photo, token , setUploadState) => {

    setUploadState({
        isLoading:"1",
        value:50
      })

    
  return await fetch(`${API}/single-image`, {
    method: "POST",
    headers: {
      Accept: "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
    body: photo,
  })
    .then((response) => {
        setUploadState({
            isLoading:"1",
            value:70
          })
        
      handleResponse(response);
      // console.log("*************", response);
      setUploadState({
        isLoading:"1",
        value:75
      })
      return response.json();
    })
    .catch((err) => console.log(err));
};