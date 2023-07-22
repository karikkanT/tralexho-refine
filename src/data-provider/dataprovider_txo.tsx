import axios from "axios";
import { DataProvider, HttpError } from "@refinedev/core";
import { stringify } from "query-string";
import { Console } from "console";


// Error handling with axios interceptors
const axiosInstance = axios.create();

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const customError: HttpError = {
            ...error,
            message: error.response?.data?.message,
            statusCode: error.response?.status,
        };

        return Promise.reject(customError);
    },
);

export const txo_dataProvider = (apiUrl: string): DataProvider => ({
    
      getList: async ({ resource, pagination, sorters }) => {
        const url = `${apiUrl}`;
        console.log(url);
        const { current = 1, pageSize = 10 } = pagination ?? {};
    
        const query: {
        _start?: number;
        _end?: number;
        _sort?: string;
        _order?: string;
        } = {
        _start: (current - 1) * pageSize,
        _end: current * pageSize,
        };
    
        if (sorters && sorters.length > 0) {
        query._sort = sorters[0].field;
        query._order = sorters[0].order;
        }
    
        const { data, headers } = await axiosInstance.get(
        `${url}?${stringify(query)}`,
        );
    
        const total = +headers["x-total-count"];
    
        return {data,total,};
    },
    getOne: async ({ resource, id }) => {
        const url = `${apiUrl}/${resource}/${id}`;

        const { data } = await axiosInstance.get(url);

        return {
            data,
        };
    },
      
    create: async ({ resource, variables }) => {
        const url = `${apiUrl}/${resource}`;

        const { data } = await axiosInstance.post(url, variables);

        return {
            data,
        };
    },
      update: async ({ resource, id, variables }) => {
        const url = `${apiUrl}/${resource}/${id}`;

        const { data } = await axiosInstance.patch(url, variables);

        return {
            data,
        };
    },
      deleteOne: async ({ resource, id, variables }) => {
        const url = `${apiUrl}/${resource}/${id}`;

        const { data } = await axiosInstance.delete(url, {
            data: variables,
        });

        return {
            data,
        };
    },
      getApiUrl: () => {
        // Get the URL of the API
        return apiUrl;
      },
  });