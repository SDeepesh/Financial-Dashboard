import axios from 'axios';
import config from '../../config';

const Axios = axios.create({
  baseURL: config.BASE_URL,
});

export default Axios;
