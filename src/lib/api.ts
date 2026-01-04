import axios from "axios";
import { env } from "@/config/env";

export interface APIResponse<T> {
  message: string;
  payload: T;
}

export const api = axios.create({
  baseURL: env.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: true,
});
