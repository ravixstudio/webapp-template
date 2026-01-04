import { api, APIResponse } from "@/lib/api";
import { endpoints } from "@/config/endpoints";

export namespace AuthServices {
  export function getGoogleAuthUrl() {
    return api.get<APIResponse<{ link: string }>>(endpoints.auth.google.endpoint);
  }
}
