import { api, APIResponse } from "@/lib/api";
import { endpoints } from "@/config/endpoints";

export namespace AuthServices {
  export function getGoogleAuthUrl() {
    return api.get<APIResponse<{ link: string }>>(endpoints.auth.google.endpoint);
  }

  export function getMe() {
    return api.get<APIResponse<{ user: { email: string; firstName: string; lastName?: string } }>>(
      endpoints.auth.me.endpoint,
    );
  }
}
