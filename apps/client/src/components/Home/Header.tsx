"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  House,
  LogIn,
  ShoppingBag,
  Store,
} from "lucide-react";
import Image from "next/image";
import { useCart } from "@/hooks/useCart";
// 1. Import Clerk Components
import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import UserAvatar from "./UserAvatar";

const menuItems: { name: string; src: string }[] = [
  { name: "Home", src: "/" },
  { name: "Shop", src: "/shop" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const cart = useCart().cart;
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <nav className="fixed top-0 z-50 w-full backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center cursor-pointer">
            <Image
              src={"/logo-text2.png"}
              alt="logo-text"
              width={100}
              height={30}
              style={{ width: "clamp(45vw, 1000px)", height: "auto" }}
              className="z-11 pointer-events-auto block"
              priority
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-10">
            <div className="flex items-center gap-6 md:gap-8 bg-black/20 px-3 py-1 rounded-2xl border border-white/5">
              {/* HOME */}
              <Link href="/" className="relative group p-2 transition-all duration-500">
                <div className="absolute inset-0 rounded-full bg-white/0 scale-50 transition-all duration-700 group-hover:scale-100 group-hover:bg-white/5" />
                <House strokeWidth={1.2} className="relative z-10 h-5 w-5 text-[#F6F7F4]" />
                <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-2 py-1 text-[10px] tracking-wider uppercase text-zinc-400 bg-[#111]/90 backdrop-blur-md rounded-md border border-white/5 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 pointer-events-none whitespace-nowrap">Home</span>
              </Link>

              {/* SHOP */}
              <Link href="/shop" className="relative group p-2 transition-all duration-500">
                <div className="absolute inset-0 bg-white/0 rounded-full group-hover:bg-white/5 transition-all duration-700 scale-50 group-hover:scale-100" />
                <Store strokeWidth={1.2} className="relative z-10 w-5 h-5 text-[#F6F7F4]" />
                <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-2 py-1 text-[10px] tracking-wider uppercase text-zinc-400 bg-[#111]/90 backdrop-blur-md rounded-md border border-white/5 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 pointer-events-none whitespace-nowrap">Shop</span>
              </Link>

              {/* CLERK AUTH SECTION */}
              <div className="relative flex items-center justify-center cursor-pointer">
                <SignedOut>
                  <SignInButton mode="modal" >
                    <button className="relative group text-[10px] cursor-pointer uppercase tracking-widest text-[#F6F7F4] hover:text-white transition-colors px-2">
                      <LogIn strokeWidth={1.2} className="relative z-10 w-5 h-5" />
                      <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-2 py-1 text-[10px] tracking-wider uppercase text-zinc-400 bg-[#111]/90 backdrop-blur-md rounded-md border border-white/5 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 pointer-events-none whitespace-nowrap">Login</span>
                    </button>
                  </SignInButton>
                </SignedOut>
                <SignedIn>
                  <UserAvatar />
                </SignedIn>
              </div>

              {/* SHOPPING BAG */}
              <Link href="/cart" className="relative group p-2 transition-all duration-500">
                <div className="absolute inset-0 bg-white/0 rounded-full group-hover:bg-white/5 transition-all duration-700 scale-50 group-hover:scale-100" />
                <ShoppingBag strokeWidth={1.2} className="relative z-10 w-5 h-5 text-[#F6F7F4]" />
                {totalItems > 0 && (
                  <span className="absolute top-1 right-1 w-2 h-2 bg-[#ffc800] rounded-full animate-pulse" />
                )}
                <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-2 py-1 text-[10px] tracking-wider uppercase text-zinc-400 bg-[#111]/90 backdrop-blur-md rounded-md border border-white/5 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 pointer-events-none whitespace-nowrap">Bag</span>
              </Link>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="relative z-50 flex h-6 w-6 flex-col items-end justify-center gap-1.5 lg:hidden"
          >
            <motion.span animate={open ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }} className="h-px w-6 bg-white" />
            <motion.span animate={open ? { opacity: 0 } : { opacity: 1 }} className="h-px w-4 bg-white" />
            <motion.span animate={open ? { rotate: -45, y: -4, width: "24px" } : { rotate: 0, y: 0, width: "16px" }} className="h-px bg-white" />
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#080808] lg:hidden flex flex-col items-center justify-center gap-8"
          >
            {menuItems.map((item, i) => (
              <Link href={item.src} key={item.name} onClick={() => setOpen(false)}>
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-3xl font-light tracking-widest text-zinc-200"
                >
                  {item.name}
                </motion.span>
              </Link>
            ))}

            <Link href="/cart" onClick={() => setOpen(false)}>
              <motion.span className="text-3xl font-light tracking-widest text-zinc-200">Bag ({totalItems})</motion.span>
            </Link>

            {/* Mobile Auth */}
            <div className="mt-4">
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="text-2xl font-light tracking-[0.2em] text-[#ffc800]">LOGIN</button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserAvatar />
              </SignedIn>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;