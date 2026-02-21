"use client";

import { useState, useRef, useEffect } from "react";
import { useUser, useClerk } from "@clerk/nextjs";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { User, LogOut, Package } from "lucide-react";

const UserAvatar = () => {
    const { user } = useUser();
    const { signOut } = useClerk();
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const firstLetter = user?.firstName?.[0] || user?.username?.[0] || user?.emailAddresses?.[0]?.emailAddress?.[0] || "U";

    // Close dropdown on click outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div ref={dropdownRef} className="relative flex items-center justify-center">
            {/* Avatar Circle */}
            <button
                onClick={() => setOpen((prev) => !prev)}
                className="w-6 h-6 rounded-full border b-white flex items-center justify-center cursor-pointer"
            >
                <span className="text-xs text-white uppercase leading-none select-none">
                    {firstLetter}
                </span>
            </button>

            {/* Dropdown */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.95 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="absolute top-full right-0 mt-3 w-44 rounded-xl border border-white/10 bg-[#111]/95 backdrop-blur-xl shadow-2xl overflow-hidden"
                    >
                        {/* User Info */}
                        <div className="px-4 py-3 border-b border-white/5">
                            <p className="text-xs font-medium text-white truncate">
                                {user?.firstName || user?.username || "User"}
                            </p>
                            <p className="text-[10px] text-zinc-500 truncate">
                                {user?.emailAddresses?.[0]?.emailAddress}
                            </p>
                        </div>

                        {/* Menu Items */}
                        <div className="py-1">
                            <Link
                                href="/user"
                                onClick={() => setOpen(false)}
                                className="flex items-center gap-2.5 px-4 py-2.5 text-xs text-zinc-300 hover:bg-white/5 hover:text-white transition-colors"
                            >
                                <User className="w-3.5 h-3.5" />
                                Profile
                            </Link>
                            <Link
                                href="/orders"
                                onClick={() => setOpen(false)}
                                className="flex items-center gap-2.5 px-4 py-2.5 text-xs text-zinc-300 hover:bg-white/5 hover:text-white transition-colors"
                            >
                                <Package className="w-3.5 h-3.5" />
                                See Orders
                            </Link>
                            <button
                                onClick={() => {
                                    setOpen(false);
                                    signOut();
                                }}
                                className="flex items-center gap-2.5 w-full px-4 py-2.5 text-xs text-zinc-300 hover:bg-white/5 hover:text-red-400 transition-colors cursor-pointer"
                            >
                                <LogOut className="w-3.5 h-3.5" />
                                Logout
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default UserAvatar;
