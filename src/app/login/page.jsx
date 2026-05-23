"use client";

import { useState } from "react";
import { motion } from "framer-motion";
// import { Eye, EyeOff, LogIn, Chrome } from "lucide-react";
import {
  Button,
  Form,
  Input,
  Label,
  TextField,
  FieldError,
  Description,
} from "@heroui/react";
import { DiChrome } from "react-icons/di";
import { FaChrome } from "react-icons/fa";

const LoginPage = () => {
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050816] px-4 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-10 left-10 h-72 w-72 bg-cyan-500/20 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-10 right-10 h-72 w-72 bg-blue-500/20 blur-3xl rounded-full animate-pulse" />

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl p-6 md:p-8"
      >
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-black text-white">Welcome Back</h1>
          <p className="text-gray-400 text-sm mt-2">
            Login to continue your esports journey
          </p>
        </div>

      

        {/* Divider */}
        <div className="flex items-center gap-3 mb-5">
          <div className="h-px flex-1 bg-white/10" />
          <span className="text-gray-500 text-xs">OR</span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        {/* Form */}
        <Form className="space-y-5">

          {/* Email */}
          <TextField name="email" isRequired>
            <Label className="text-white">Email</Label>
            <Input
              placeholder="john@example.com"
              className="rounded-xl"
            />
            <FieldError />
          </TextField>

          {/* Password */}
          <TextField name="password" isRequired>
            <Label className="text-white">Password</Label>

            {/* Input with Eye inside */}
            <div className="relative">
              <Input
                type={showPass ? "text" : "password"}
                placeholder="Enter password"
                className="rounded-xl pr-10 w-full"
              />

              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition"
              >
                {/* {showPass ? <EyeOff size={18} /> : <Eye size={18} />} */}
              </button>
            </div>

            <Description className="text-gray-400 text-xs">
              Use strong password for better security
            </Description>

            <FieldError />
          </TextField>

          {/* Login Button */}
          <motion.div whileTap={{ scale: 0.97 }}>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 hover:scale-[1.02] transition"
            >
              {/* <LogIn size={18} /> */}
              Login
            </Button>
          </motion.div>
        </Form>


        {/* Divider */}
        <div className="flex items-center gap-3 my-5">
          <div className="h-px flex-1 bg-white/10" />
          <span className="text-gray-500 text-xs">OR</span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

          {/* Google Login */}
        <button className="w-full mt-5 flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white py-3 rounded-xl transition mb-5">
          <FaChrome size={18}  className="text-purple"/>
          Continue with Google
        </button>

        {/* Footer */}
        <p className="text-center text-gray-400 text-sm mt-6">
          Don’t have an account?{" "}
          <span className="text-cyan-400 cursor-pointer hover:underline">
            Sign up
          </span>
        </p>
      </motion.div>
    </div>
  );
};

export default LoginPage;