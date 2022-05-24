import axios from "axios";
import { useRouter } from "next/router";

const useAxios = () => {
  const router = useRouter();
  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      return Promise.reject(error);
    }
  );
  axios.defaults.headers.common["Accept-language"] = router.locale;
  axios.defaults.baseURL = "https://core.poprey.com/api";
  axios.defaults.headers.post["Content-Type"] = "application/json";

  return axios;
};

export default useAxios;
