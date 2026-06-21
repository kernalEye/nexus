"use client";

import Link from "next/link";
import { Eye, EyeOff, Lock } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ResetPasswordForm() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        // <div className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900/70 backdrop-blur-xl p-8">

        //     <div className="mb-8">
        //         <h1 className="text-3xl font-bold text-white">
        //             KernalEye
        //         </h1>

        //         <p className="text-zinc-400 mt-2">
        //             Reset Your Password
        //         </p>
        //     </div>

        //     <form className="space-y-5">
        //         <div>
        //             <label className="text-zinc-300 text-sm">
        //                 current Password
        //             </label>

        //             <input
        //                 type="password"
        //                 placeholder="••••••••"
        //                 className="w-full mt-2 bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white"
        //             />
        //         </div>

        //         <div>
        //             <label className="text-zinc-300 text-sm">
        //                 New Password
        //             </label>

        //             <div className="relative mt-2">
        //                 <input
        //                     type={showPassword ? "text" : "password"}
        //                     className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white"
        //                 />

        //                 <button
        //                     type="button"
        //                     onClick={() => setShowPassword(!showPassword)}
        //                     className="absolute right-3 top-3 text-zinc-400"
        //                 >
        //                     {showPassword ? <EyeOff /> : <Eye />}
        //                 </button>
        //             </div>
        //         </div>

        //         <button
        //             className="w-full bg-blue-600 hover:bg-blue-700 transition rounded-lg py-3 text-white font-medium"
        //         >
        //             Reset Password
        //         </button>

        //         <div className="text-center text-zinc-400">
        //             Remember your password?
        //             <Link
        //                 href="/login"
        //                 className="text-blue-500 ml-2"
        //             >
        //                 Log In
        //             </Link>
        //         </div>
        //     </form>
        // </div>

        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="w-full max-w-[540px] rounded-2xl border border-white/[0.06] bg-black/30 backdrop-blur-md p-8 lg:p-10 shadow-2xl shadow-black/40 relative group"
        >
            {/* Outer border illumination touch */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />

            {/* Header Heading Context */}
            <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white tracking-tight mb-1.5">Reset password</h3>
                <p className="text-sm text-slate-400 font-light">Enter your new password below</p>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                {/* Email Address Form Input */}
                <div>
                    <label className="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">Current Password</label>
                    <div className="relative group/input">
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within/input:text-indigo-400 transition-colors duration-200">
                            <Lock className="w-4 h-4" />
                        </span>
                        <input
                            type="password"
                            placeholder="Enter your current password"
                            className="w-full pl-11 pr-4 py-3 bg-[#0c0c1d] border border-white/[0.08] rounded-xl text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-all duration-200"
                        />
                    </div>
                </div>

                {/* Security Password Form Input */}
                <div>
                    <label className="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">New Password</label>
                    <div className="relative group/input">
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within/input:text-indigo-400 transition-colors duration-200">
                            <Lock className="w-4 h-4" />
                        </span>
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your new password"
                            className="w-full pl-11 pr-11 py-3 bg-[#0c0c1d] border border-white/[0.08] rounded-xl text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-all duration-200"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
                        >
                            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                    </div>
                </div>

                {/* Primary Action Interactive Submit Button */}
                <button
                    type="submit"
                    className="w-full relative py-3 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-[#815bf5] to-[#3b82f6] hover:opacity-95 shadow-lg shadow-indigo-600/20 active:scale-[0.99] transition-all duration-150 mt-2 overflow-hidden group/btn"
                >
                    <span className="relative z-10">Reset Password</span>
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-200" />
                </button>
            </form>

            {/* Alternative View Redirection Prompt */}
            <div className="text-center mt-8 text-xs text-slate-500">
                Don&apos;t have an account?{' '}
                <Link href="/signup" className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors">
                    Sign up
                </Link>
            </div>

        </motion.div>
    );
}