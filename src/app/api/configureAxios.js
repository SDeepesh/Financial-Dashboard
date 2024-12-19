import Axios from "../api/axios";
import config from "../../config";

const configureAxios = () => {
  Axios.defaults.baseURL = config.BASE_URL;
  Axios.defaults.headers.get["Accept"] = "application/json";
  Axios.defaults.headers.post["Accept"] = "application/json";
  Axios.defaults.headers.put["Accept"] = "application/json";

  Axios.interceptors.request.use(function (configuration) {
    const token = config.token;
    if (!configuration.headers.Authorization) {
      configuration.headers.Authorization = token ? `Bearer ${token}` : "";
    }
    return configuration;
  });
};
export default configureAxios;
