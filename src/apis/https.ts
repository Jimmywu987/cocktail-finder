import axios from "axios";
import { HttpMethodEnums } from "enums/HttpMethodEnums";

const instance = axios.create({
  baseURL: "/",
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log("error", error);
  }
);

export async function req(
  method: HttpMethodEnums,
  url: string,
  data: unknown = null
) {
  switch (method) {
    case HttpMethodEnums.GET:
      return instance.get(url, {
        params: data,
      });
    case HttpMethodEnums.POST:
      return instance.post(url, data);
    case HttpMethodEnums.PUT:
      return instance.put(url, data);
    case HttpMethodEnums.DELETE:
      return instance.delete(url, { params: data });
  }
}
