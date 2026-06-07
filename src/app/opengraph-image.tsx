import { ImageResponse } from "next/og";

import { SITE_INFO } from "@/lib/constants/site";

export const alt = "Priyanshu Barman";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div tw="relative flex h-full w-full bg-neutral-900 text-white">
      <div
        style={{ transform: "rotate(-36deg)" }}
        tw="absolute -inset-x-1/2 -inset-y-6 flex border p-2 border-neutral-700 bg-black"
      >
        <div tw="h-full w-full border border-neutral-700 bg-neutral-800" />
      </div>

      <div tw="flex flex-col items-center p-20 justify-center text-center w-full">
        <div tw="flex flex-col items-center">
          <img
            alt="avatar"
            height={190}
            width={190}
            src={`${SITE_INFO.url}/avatar.png`}
            tw="rounded-2xl bg-white"
          />
          <h1 tw="mt-14 text-6xl font-semibold tracking-tighter">
            Priyanshu Barman
          </h1>
          <span tw="mt-4 text-4xl leading-[1.25] tracking-tighter text-neutral-100">
            Full-Stack Developer
          </span>
        </div>
      </div>
    </div>,
    {
      ...size,
    },
  );
}
