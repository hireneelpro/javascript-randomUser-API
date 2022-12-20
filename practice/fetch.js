export const fetchRandom = async (url) => {
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data);
    return data;
  } catch (error) {
    throw new Error("there is some problem");
  }
};
