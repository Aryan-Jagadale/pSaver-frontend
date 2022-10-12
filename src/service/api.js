import axios from "axios";
import { API_NOTIFICATION_MESSSAGES, SERVICE_URLS } from "../constants/config";
import { getAccessToken, getType } from "../utils/common-utils";

const API_URL = "http://localhost:5000/";

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    "content-type": "application/json",
  },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    //console.log('Config',config);
    if (config.TYPE.params) {
      config.params = config.TYPE.params;
    } else if (config.TYPE.query) {
      config.url = config.url+'/'+ config.TYPE.query;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    //Stop global loader here
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return processResponse(response);
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(ProcessError(error));
  }
);

///////////////////////////////
// If success -> returns { isSuccess: true, data: object }
// If fail -> returns { isFailure: true, status: string, msg: string, code: int }
//////////////////////////////
const processResponse = (response) => {
  if (response?.status === 200) {
    console.log("API..response",response);
    return { isSuccess: true, data: response.data };
  } else {
    return {
      isFailure: true,
      status: response?.status,
      msg: response?.msg,
      code: response?.code,
    };
  }
};

///////////////////////////////
// If success -> returns { isSuccess: true, data: object }
// If fail -> returns { isError: true, status: string, msg: string, code: int }
//////////////////////////////
const ProcessError = async (error) => {
  //there are 3 types of error which is in if else statement
  if (error.response) {
    // Request made and server responded with a status code
    // that falls out of the range of 2xx

    console.log("Error in response:", error.toJSON());
    return {
      isError: true,
      msg: API_NOTIFICATION_MESSSAGES.responseFailure,
      code: error.response.status,
    };
  } else if (error.request) {
    // The request was made but no response was received
    console.log("ERROR IN REQUEST: ", error.toJSON());
    return {
      isError: true,
      msg: API_NOTIFICATION_MESSSAGES.requestFailure,
      code: "",
    };
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log("ERROR IN happened in request: ", error.toJSON());
    return {
      isError: true,
      msg: API_NOTIFICATION_MESSSAGES.networkError,
      code: "",
    };
  }
};

const API = {};

for (const [key, value] of Object.entries(SERVICE_URLS)) {
  // showUploadProgress,showDownloadProgress are for loader
  API[key] = (body, showUploadProgress, showDownloadProgress) =>
    axiosInstance({
      method: value.method,
      url: value.url,
      data: value.method === 'DELETE'? {} : body,
      responseType: value.responseType,
      headers: {
        authorization: getAccessToken(),
      },
      TYPE: getType(value, body),
      onUploadProgress: function (progressEvent) {
        if (showUploadProgress) {
          let percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          showUploadProgress(percentCompleted);
        }
      },
      onDownloadProgress: function (progressEvent) {
        if (showDownloadProgress) {
          let percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          showDownloadProgress(percentCompleted);
        }
      },
    });
}

export { API };
