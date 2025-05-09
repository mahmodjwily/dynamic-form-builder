import React, { ReactNode } from "react";

import { Logo } from "@/components/Logo";
import { UserButton } from "@clerk/nextjs";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen min-w-full bg-background max-h-screen">
      <nav className="flex items-center justify-between border-b border-border h-[60px] px-4 py-2">
        <Logo />
        <div className="flex gap-4 items-center">
          <ThemeSwitcher />
          <UserButton />
        </div>
      </nav>
      <main className="flex w-full flex-1">{children}</main>
    </div>
  );
}
