import cookie from "js-cookie";
// import Router from "next/router";

export const signup = (user) => {
  return fetch(`https://gfgkiit-backend.herokuapp.com/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const removeStaff = (id) => {
  return fetch(`https://gfgkiit-backend.herokuapp.com/signup`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(id),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const login = async (user) => {
  try {
    const response = await fetch(
      `https://gfgkiit-backend.herokuapp.com/login`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    );

    if (response) {
      console.log(response);
      return response.json();
    }
  } catch (error) {
    console.log(error);
  }

  // .then((response) => {
  //   console.log(response.json());
  //   return response.json();
  // })
  // .catch((err) => {
  //   return err;
  // });
};

export const signout = (next) => {
  removeCookie("token");
  removeLocalStorage("user");
  fetch(`https://gfgkiit-backend.herokuapp.com/signout`, {
    method: "GET",
  })
    .then((response) => {
      console.log("signout success");
    })
    .catch((err) => {
      console.log(err);
    });
};

// set cookie
export const setCookie = (key, value) => {
  if (process.browser) {
    cookie.set(key, value, {
      expires: 1,
    });
  }
};

export const removeCookie = (key) => {
  if (process.browser) {
    cookie.remove(key, {
      expires: 1,
    });
  }
};

export const getAllUsers = () => {
  return fetch(`https://gfgkiit-backend.herokuapp.com/allusers`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
// get cookie
export const getCookie = (key) => {
  if (process.browser) {
    return cookie.get(key);
  }
};
// localstorage
export const setLocalStorage = (key, value) => {
  if (process.browser) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const removeLocalStorage = (key) => {
  if (process.browser) {
    localStorage.removeItem(key);
  }
};
// autheticate user by pass data to cookie and localstorage
export const authenticate = (data, next) => {
  setCookie("token", data.token);
  setLocalStorage("user", data.user);
  next();
};

export const isAuth = () => {
  if (process.browser) {
    const cookieChecked = getCookie("token");
    if (cookieChecked) {
      if (localStorage.getItem("user"))
        return JSON.parse(localStorage.getItem("user"));
      else return false;
    }
  }
};

export const updateUser = (user, next) => {
  if (process.browser) {
    if (localStorage.getItem("user")) {
      let auth = JSON.parse(localStorage.getItem("user"));
      auth = user;
      localStorage.setItem("user", JSON.stringify(auth));
      next();
    }
  }
};

export const forgotPassword = (email) => {
  return fetch(`https://gfgkiit-backend.herokuapp.com/forgot-password`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(email),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const resetPassword = (resetInfo) => {
  return fetch(`https://gfgkiit-backend.herokuapp.com/reset-password`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(resetInfo),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
