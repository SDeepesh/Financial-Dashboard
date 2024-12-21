import Axios from '../api/axios';

export const fetchCardData = async () => {
  try {
    const response = await Axios.get('8700e92a-9df6-4f04-87a0-62a3e4248c35');
    return response.data;
  } catch (error) {
    console.error('Error fetching cards:', error);
    throw error;
  }
};

export const fetchChartData = async () => {
  try {
    const response = await Axios.get('e2279c1b-c14d-4d2f-8ec4-25221629548b');
    return response.data;
  } catch (error) {
    console.error('Error fetching cards:', error);
    throw error;
  }
};

export const fetchFrequentTransfers = async () => {
  try {
    const response = await Axios.get('637c4593-c70d-401e-88ef-6ba568970e3d');
    return response.data;
  } catch (error) {
    console.error('Error fetching cards:', error);
    throw error;
  }
};
