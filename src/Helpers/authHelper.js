export const Authenticate = (data) => {
  console.log("data in Authenticate", data);
  if (typeof window != undefined) {
    localStorage.setItem("auth", JSON.stringify(data));
  }
};

export const isAuthenticated = () => {
  if (typeof window == undefined) {
    return false;
  }
  if (localStorage.getItem("auth")) {
    return JSON.parse(localStorage.getItem("auth"));
  } else {
    return false;
  }
};
