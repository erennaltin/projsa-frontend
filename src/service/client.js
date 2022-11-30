import axios from "axios";
import * as Keychain from "react-native-keychain";

import { API_TIMOEUT_MS, API_URL,  } from "../config/Constants";
import * as RootNavigation from "../routing/RootNavigation";
import { showSnackbar } from '../helpers/Utils';

const requestInterceptor = (req) => {
  console.log("[REQUEST]", req);
  return req;
};

const responseInterceptor = (res) => {
  console.log("[RESPONSE]", res);
  return res;
};

const axiosClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    "Accept-Language": "en-US",
  },
  timeout: API_TIMOEUT_MS,
});

axiosClient.interceptors.request.use(requestInterceptor);
axiosClient.interceptors.response.use(responseInterceptor);

const makeRequest = async (url, type, body, config) => {

  try {
    if (type === "GET") {
      return config ? await axiosClient.get(url, config) : await axiosClient.get(url);
    } else if (type === "POST") {
      return config ? await axiosClient.post(url, body, config) : await axiosClient.post(url, body);
    }
  } catch (error) {
    console.log("cath url", url);
    console.log("MakeReqERROR", JSON.parse(JSON.stringify(error)));
    const statusCode = error?.response?.status;
    if (statusCode === 401) {
      RootNavigation.signOut();
    }
    if (statusCode === 426) {
      error.response = {data: {message: "Please update Jingle App from your application store"}};
    }
    return error.response;
  }
};

const get = async (url, config) => {
  return await makeRequest(url, "GET", null, config);
};

const post = async (url, body, config) => {
  return await makeRequest(url, "POST", body, config);
};

export { get, post };
