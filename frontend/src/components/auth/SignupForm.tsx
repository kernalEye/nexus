"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";

export default function SignUpPage() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="w-full max-w-[480px] py-8 lg:py-12">
            <motion.div
                className="w-full rounded-2xl max-w-[480px] border border-white/[0.06] bg-[#070714]/80 backdrop-blur-xl p-6 lg:p-7 shadow-2xl shadow-black/40 relative"
            >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />

                <div className="text-center mb-5">
                    <h3 className="text-2xl font-bold text-white tracking-tight mb-1.5">
                        Create account
                    </h3>
                    <p className="text-sm text-slate-400 font-light">
                        Get started with your free developer account
                    </p>
                </div>

                <form onSubmit={(e) => e.preventDefault()} className="space-y-1.5">
                    <div>
                        <label className="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">
                            Full Name
                        </label>
                        <div className="relative group/input">
                            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within/input:text-indigo-400 transition-colors duration-200">
                                <User className="w-4 h-4" />
                            </span>
                            <input
                                type="text"
                                placeholder="John Doe"
                                className="w-full pl-11 pr-4 py-3 bg-[#0c0c1d] border border-white/[0.08] rounded-xl text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-all duration-200"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">
                            Work Email
                        </label>
                        <div className="relative group/input">
                            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within/input:text-indigo-400 transition-colors duration-200">
                                <Mail className="w-4 h-4" />
                            </span>
                            <input
                                type="email"
                                placeholder="john@example.com"
                                className="w-full pl-11 pr-4 py-3 bg-[#0c0c1d] border border-white/[0.08] rounded-xl text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-all duration-200"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">
                            Password
                        </label>
                        <div className="relative group/input">
                            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within/input:text-indigo-400 transition-colors duration-200">
                                <Lock className="w-4 h-4" />
                            </span>
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Create secure password"
                                className="w-full pl-11 pr-11 py-3 bg-[#0c0c1d] border border-white/[0.08] rounded-xl text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-all duration-200"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
                            >
                                {showPassword ? (
                                    <EyeOff className="w-4 h-4" />
                                ) : (
                                    <Eye className="w-4 h-4" />
                                )}
                            </button>
                        </div>
                    </div>

                    <div className="flex items-start gap-2.5 text-xs pt-1 text-slate-400 leading-normal">
                        <input
                            type="checkbox"
                            required
                            className="mt-0.5 w-4 h-4 rounded bg-[#0c0c1d] border-white/[0.1] text-indigo-600 focus:ring-0 accent-indigo-500 transition-all duration-200"
                        />
                        <span>
                            I agree to the{" "}
                            <Link href="#" className="text-indigo-400 hover:underline">
                                Terms of Service
                            </Link>{" "}
                            and{" "}
                            <Link href="#" className="text-indigo-400 hover:underline">
                                Privacy Policy
                            </Link>
                            .
                        </span>
                    </div>

                    <button
                        type="submit"
                        className="w-full relative py-3 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-[#815bf5] to-[#3b82f6] hover:opacity-95 shadow-lg shadow-indigo-600/20 active:scale-[0.99] transition-all duration-150 mt-2 overflow-hidden group/btn"
                    >
                        <span className="relative z-10">Get Started</span>
                        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-200" />
                    </button>

                    <div className="relative flex items-center justify-center my-6 py-1.5">
                        <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
                        <span className="relative z-10 px-3 text-[11px] uppercase tracking-widest text-slate-500 bg-[#070714]">
                            or sign up with
                        </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3.5">
                        <button
                            type="button"
                            className="flex items-center justify-center gap-2.5 py-2.5 bg-[#0a0a1a] hover:bg-[#101026] border border-white/[0.05] hover:border-white/[0.1] rounded-xl text-xs font-medium text-slate-300 transition-all duration-200"
                        >
                            <svg
                                className="w-4 h-4 text-white fill-current"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            GitHub
                        </button>
                        <button
                            type="button"
                            className="flex items-center justify-center gap-2.5 py-2.5 bg-[#0a0a1a] hover:bg-[#101026] border border-white/[0.05] hover:border-white/[0.1] rounded-xl text-xs font-medium text-slate-300 transition-all duration-200"
                        >
                            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                                <path
                                    fill="#EA4335"
                                    d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.114-5.137 4.114-3.414 0-6.19-2.775-6.19-6.19 0-3.414 2.776-6.19 6.19-6.19 1.483 0 2.844.525 3.918 1.4L21.1 4.5A11.93 11.93 0 0 0 12.24 0c-6.627 0-12 5.373-12 12s5.373 12 12 12c6.912 0 12.24-4.854 12.24-12.24 0-.53-.054-1.018-.147-1.475H12.24Z"
                                />
                            </svg>
                            Google
                        </button>
                    </div>
                </form>

                <div className="text-center mt-5 text-xs text-slate-500">
                    Already have an account?{" "}
                    <Link
                        href="/login"
                        className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
                    >
                        Sign in
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}
