export const api = {
  baseUrl: process.env.REACT_APP_API_BASE_URL,
  headers: {
    "user-token": `${localStorage.getItem("token")}`,
  },
};
