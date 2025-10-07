// src/components/shared/ProgressBarProvider.tsx

"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export function ProgressBarProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <ProgressBar
        height="4px"
        color="#30B498"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
}
