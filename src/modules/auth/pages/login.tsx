"use client";
import Image from "next/image";
import SkyImage from "@/assets/space.jpg";
import { Button } from "@/components/ui/button";
import { GoogleIcon } from "@hugeicons/core-free-icons";
import { useMutation } from "@tanstack/react-query";
import { endpoints } from "@/config/endpoints";
import { AuthServices } from "@/services";

export function Login() {
  const loginMutation = useMutation({
    mutationKey: [endpoints.auth.google.query],
    mutationFn: AuthServices.getGoogleAuthUrl,
    onSuccess: (data) => {
      if (data?.data?.payload.link) {
        window.location.assign(data?.data?.payload?.link);
      }
    },
  });

  return (
    <main className={"flex items-center justify-between min-h-dvh w-full"}>
      <div className={"w-1/2 flex gap-2 flex-col items-center justify-center"}>
        <h1>Welcome to Ravix Studio</h1>
        <Button
          loading={loginMutation.isPending}
          icon={GoogleIcon}
          size={"lg"}
          onClick={() => loginMutation.mutate()}
        >
          Login With Google
        </Button>
      </div>
      <div className={"w-1/2 h-screen relative"}>
        <Image src={SkyImage} alt={"Sky's image"} fill={true} />
      </div>
    </main>
  );
}
