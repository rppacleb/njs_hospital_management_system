import { cookie } from "@src/utils/cache/cookie";
import { COOKIES } from "@src/utils/enum";
import axios from "axios";

// Set withCredentials & withXSRFToken to true if using a cookie sesion
axios.defaults.withCredentials = false;
axios.defaults.withXSRFToken = true;

export default class API {
  constructor() {
    this.rqx = axios.create({
      baseURL: `${process.env.NEXT_PUBLIC_BE_API_URL}`,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "X-Requested-With",
        "Cache-Control": "no-store, no-cache",
        "Content-Type": "application/json",
        "X-Client-Key": process.env.NEXT_PUBLIC_API_CLIENT_KEY,
        "X-Timezone-Offset": String(new Date().getTimezoneOffset() * -1),
      },
    });

    this.rqx.interceptors.request.use(
      (config) => {
        // CHECK IF HAS WEB TOKEN FOR AUTHORIZATION & LOCALE
        const webtoken = cookie.get(COOKIES.JWT);
        const locale = cookie.get(COOKIES.LOCALE);

        // CONFIGURE HEADER
        if (webtoken) config.headers.Authorization = `Bearer ${webtoken}`;
        if (locale) {
          config.headers["Accept-Language"] = locale;
          config.headers["x-locale"] = locale;
        }

        // REMOVE COOKIE FOR SECURITY BEFORE RETURN - COMMENT delete if not needed
        delete config.headers.cookie;
        return config;
      },
      (error) => {
        if (error.response) return Promise.reject(error.response);
        return Promise.reject(error);
      }
    );

    this.rqx.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.response) return Promise.reject(error.response);
        return Promise.reject(error);
      }
    );
  }

  async get(service, params) {
    return this.rqx.get(service, { params });
  }

  async post(service, params) {
    return this.instance.post(service, { params });
  }

  async put(service, params) {
    return this.instance.put(service, { params });
  }

  async patch(service, params) {
    return this.instance.patch(service, { params });
  }

  async delete(service, params) {
    return this.instance.delete(service, { params });
  }
}

export const rqx = new API();
