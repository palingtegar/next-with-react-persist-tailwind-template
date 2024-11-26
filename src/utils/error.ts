import { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";

export const handleError = (error: AxiosError | unknown) => {
  if (error instanceof AxiosError) {
    toast.error(error.response?.data?.message || error.message);
    console.error(error.response?.data);
  } else {
    toast.error(
      "Error Apa dah gatau ga ada di message backend, masukin console.error dulu"
    );
  }
};

export const handleSuccess = (response: AxiosResponse | unknown) => {
  if (isAxiosResponse(response)) {
    const message = response.data?.message || "Operation successful!";
    toast.success(message);
  } else {
    toast.success("Operation successful!");
  }
};

const isAxiosResponse = (response: unknown): response is AxiosResponse => {
  return (response as AxiosResponse).data !== undefined;
};