"use client";

import { useState } from "react";
import { Check, Eye, EyeOff } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { EyeOffIcon } from "lucide-react";
import Image from "next/image";

const SingUpPage = () => {
  const [showPass, setShowPass] = useState(false);
  const [image, setImage] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050816] px-4">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-0 h-72 w-72 bg-cyan-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 bg-blue-500/20 blur-3xl rounded-full"></div>

      {/* Card */}
      <div className="relative w-full max-w-2xl rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-2xl p-6 md:p-10 shadow-2xl">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-black text-white">
            Create Account
          </h1>

          <p className="text-gray-400 mt-2 text-sm md:text-base">
            Join the E-Sports arena and build your profile
          </p>

          {/* Image Preview */}
          {image && (
            <div className="flex justify-center mt-5">
              <Image
                src={image}
                alt="preview"
                className="h-20 w-20 rounded-full border-2 border-cyan-400 object-cover"
              />
            </div>
          )}
        </div>

        {/* Form */}
        <Form className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* Name */}
          <TextField
            isRequired
            name="name"
            className="col-span-1 md:col-span-2"
            validate={(value) => {
              if (value.length < 3) return "Name must be at least 3 characters";
              return null;
            }}
          >
            <Label className="text-white font-blod">Name</Label>
            <Input placeholder="John Doe" className="rounded-xl" />
            <FieldError />
          </TextField>

          {/* Email */}
          <TextField
            isRequired
            name="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label className="text-white font-blod">Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>

          {/* Image URL */}
          <TextField
            isRequired
            name="image"
          >
            <Label className="text-white font-blod">Image URL</Label>
            <Input
              placeholder="Image link"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
            <FieldError />
          </TextField>

          {/* Password */}
          <TextField
            isRequired
            name="password"
            type={showPass ? "text" : "password"}
            className="col-span-1 md:col-span-2"
            validate={(value) => {
              if (value.length < 8) return "Min 8 characters required";
              if (!/[A-Z]/.test(value)) return "Add 1 uppercase letter";
              if (!/[0-9]/.test(value)) return "Add 1 number";
              return null;
            }}
          >
            <Label className="text-white font-blod">Password</Label>

            <div className="relative">
              <Input placeholder="Enter password" />

              {/* Toggle */}
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showPass ? <EyeOffIcon /> : <Eye />}
              </button>
            </div>

            <Description>
              Must include uppercase + number + 8+ characters
            </Description>

            <FieldError />
          </TextField>

          {/* Buttons */}
          <div className="col-span-1 md:col-span-2 flex flex-col md:flex-row gap-3 mt-2">
            
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-3 rounded-xl hover:scale-[1.02] transition"
            >
              <Check /> Create Account
            </Button>

            <Button
              type="reset"
              variant="secondary"
              className="w-full rounded-xl"
            >
              Reset
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SingUpPage;