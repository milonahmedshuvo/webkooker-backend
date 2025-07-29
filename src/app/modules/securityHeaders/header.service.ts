import axios, { AxiosResponse, AxiosError } from "axios";

export interface HeaderMap {
  [key: string]: string;
}

export const fetchHeaders = async (url: string): Promise<HeaderMap> => {
  try {
    const response: AxiosResponse = await axios.head(url);
    const headers: HeaderMap = {};

    for (const [key, value] of Object.entries(response.headers)) {
      headers[key.toLowerCase()] = Array.isArray(value) ? value.join(", ") : String(value);
    }

    return headers;
  } catch (error: any) {
    const errMsg = error?.message || "Unknown error";
    throw new Error("Unable to fetch headers: " + errMsg);
  }
};

// Optional: Grouping the service as an object
export const headerService = {
  fetchHeaders,
};


