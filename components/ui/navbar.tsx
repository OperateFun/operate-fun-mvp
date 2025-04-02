"use client";

import { useState } from "react";
import { Github, Menu, Plus, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { SettingsButton } from "@/components/ui/SettingsDrawer";

import { cn } from "@/lib/utils";

import Logo from "@/public/logo-white.svg";

import { useChatContext } from "@/app/contexts/ChatContext";
import { useSteelContext } from "@/app/contexts/SteelContext";

import { Button } from "./button";

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const { clearInitialState } = useChatContext();
  const { resetSession } = useSteelContext();

  const handleNewChat = async () => {
    // Clear all state
    clearInitialState();
    resetSession();

    // Navigate to home page
    router.push("/chat");
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-[--gray-3] bg-[--gray-1]">
      <div className="mx-auto px-4">
        <div className="relative flex h-14 w-full items-center justify-between">
          {/* Left Side */}
          <div className="z-10 flex items-center gap-2.5 md:flex">
            <Button
              variant="outline"
              size="sm"
              className="hidden h-8 rounded-full border-[--gray-3] bg-[--gray-1] text-[--gray-11] md:flex"
              onClick={handleNewChat}
            >
              <Plus className="size-4" />
              <span className="px-1 font-geist">New Chat</span>
            </Button>

            {/* Mobile Menu Button */}
            <button className="p-2 md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <X className="size-5 text-[#ededed]" />
              ) : (
                <Menu className="size-5 text-[#ededed]" />
              )}
            </button>
          </div>

          {/* Logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Link href="/" className="flex items-center justify-center">
              <div className="flex size-8 items-center justify-center">
                <Image src={Logo} alt="operate.fun logo" className="size-9" />
              </div>
            </Link>
          </div>

          {/* Right Side */}
          <div className="hidden items-center gap-2.5 md:flex">
            <SettingsButton />
            <Button
              variant="outline"
              size="sm"
              className="h-8 rounded-full border-[--gray-3] bg-[--gray-1] text-[--gray-11]"
              asChild
            >
              <Link href="https://github.com/OperateFun" target="_blank">
                <Github className="size-4" />
                <span className="px-1 font-geist">Github</span>
              </Link>
            </Button>

            {/* <Button
              size="sm"
              className="bg-[--gray-12] rounded-full hover:bg-[--gray-12]/90 h-8"
            >
              <span className="px-1 text-[--gray-1] font-geist">Sign In</span>
            </Button> */}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "border-b border-[#282828] bg-neutral-900 md:hidden",
          isMenuOpen ? "block" : "hidden"
        )}
      >
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 p-4">
          <Button
            variant="outline"
            className="h-8 w-full justify-center rounded-full border-[#282828] bg-neutral-900 text-[#afafaf]"
            asChild
          >
            <Link href="https://github.com/OperateFun" target="_blank">
              <Github className="size-4" />
              <span className="px-1 font-geist">Github</span>
            </Link>
          </Button>

          <Button
            variant="outline"
            className="h-8 w-full justify-center rounded-full border-[#282828] bg-neutral-900 text-[#ededed]"
            onClick={handleNewChat}
          >
            <Plus className="size-4" />
            <span className="px-1 font-geist">New Chat</span>
          </Button>

          {/* <Button className="w-full bg-[#ededed] rounded-full hover:bg-[#ededed]/90 justify-center h-8">
            <span className="px-1 text-neutral-900 font-geist">Sign In</span>
          </Button> */}

          {/* Footer */}
          <div className="mt-6 flex flex-col items-center gap-2">
            <p className="font-geist text-base font-medium leading-tight text-[#ededed]">
              © Operate Fun · 2025
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}
