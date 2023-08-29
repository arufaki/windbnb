const api = "./src/stays.json";
export const staysApi = async () => {
  try {
    const res = await fetch(api);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error : ", error);
    throw error;
  }
};
