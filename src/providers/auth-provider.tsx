"use client";
import { useQuery } from "@tanstack/react-query";
import { endpoints } from "@/config";
import { AuthServices } from "@/services";
import { useEffect } from "react";
import { useUserStore } from "@/store";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { setUser } = useUserStore();

  const { data } = useQuery({
    queryKey: [endpoints.auth.me.query],
    queryFn: AuthServices.getMe,
  });

  useEffect(() => {
    if (data?.data.payload.user.email) {
      setUser(data?.data.payload.user);
    }
  }, [data?.data.payload.user]);

  return <>{children}</>;
}
