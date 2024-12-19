import Axios from "../api/axios";

export const fetchCardData = async () => {
  try {
    const response = await Axios.get('8700e92a-9df6-4f04-87a0-62a3e4248c35');
    return response.data;
  } catch (error) {
    console.error('Error fetching cards:', error);
    throw error; // Re-throw to handle it further up if needed
  }
};
