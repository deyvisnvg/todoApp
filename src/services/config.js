import axios from "axios";
import { success, failed } from "./response";

const config = axios.create({
  baseURL: "https://652ab3c64791d884f1fd3fea.mockapi.io/api/v1/",
  headers: {
    "Content-Type": "application/json",
  },
});

export async function makeHttpRequest({ method, url, id, body }) {
  const requests = {
    post: async () => await config.post(url, body),
    get: async () => {
      const endpoint = id ? `${url}/${id}` : url;
      return await config.get(endpoint);
    },
    put: async () => await config.put(`${url}/${id}`, body),
    delete: async () => await config.delete(`${url}/${id}`),
  };

  try {
    const { data } = await requests[method]();
    return success(data);
  } catch (error) {
    return failed(error);
  }
}