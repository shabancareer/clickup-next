const API_BASE_URL = "http://localhost:8080"; // NestJS server

export const fetchData = async () => {
  //   console.log(fetchData);
  const response = await fetch(`${API_BASE_URL}`);
  console.log(response);
  return response.json();
};
