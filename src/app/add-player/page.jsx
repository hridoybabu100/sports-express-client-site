"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Form,
  Input,
  Label,
  TextField,
  Button,
  FieldError,
  Description,
  TextArea,
} from "@heroui/react";
import Image from "next/image";

const AddPlayerForm = () => {
  const [image, setImage] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050816] px-4 py-10 relative overflow-hidden">

      {/* Glow */}
      <div className="absolute top-10 left-10 h-72 w-72 bg-cyan-500/20 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-10 right-10 h-72 w-72 bg-blue-500/20 blur-3xl rounded-full animate-pulse" />

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl p-6 md:p-10"
      >

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black text-white">
            Add New Player
          </h1>
          <p className="text-gray-400 text-sm mt-2">
            Create player profile for your esports system
          </p>
        </div>

        {/* Image Preview */}
        {image && (
          <div className="flex justify-center mb-6">
            <Image
              src={image}
              alt="preview"
              className="h-24 w-24 rounded-full border-2 border-cyan-400 object-cover"
            />
          </div>
        )}

        {/* Form */}
        <Form className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* Name */}
          <TextField name="name" isRequired>
            <Label className="text-white">Player Name</Label>
            <Input placeholder="Lionel Messi" />
            <FieldError />
          </TextField>

          {/* Country */}
          <TextField name="country" isRequired>
            <Label className="text-white">Country</Label>
            <Input placeholder="Argentina" />
            <FieldError />
          </TextField>

          {/* Team */}
          <TextField name="team">
            <Label className="text-white">Team</Label>
            <Input placeholder="Inter Miami" />
            <FieldError />
          </TextField>

          {/* Salary */}
          <TextField name="salary" isRequired>
            <Label className="text-white">Salary</Label>
            <Input type="number" placeholder="$50000" />
            <FieldError />
          </TextField>

          {/* Image URL */}
          <TextField name="image" className="md:col-span-2">
            <Label className="text-white">Image URL</Label>
            <Input
              placeholder="https://example.com/image.jpg"
              onChange={(e) => setImage(e.target.value)}
            />
            <Description className="text-gray-400 text-xs">
              Paste a valid image URL for preview
            </Description>
            <FieldError />
          </TextField>

          {/* Category */}
          <TextField name="category">
            <Label className="text-white">Category</Label>
            <Input placeholder="Football / Cricket / Esports" />
            <FieldError />
          </TextField>

          {/* Sports */}
          <TextField name="sports">
            <Label className="text-white">Sports Type</Label>
            <Input placeholder="Football" />
            <FieldError />
          </TextField>

          {/* Description */}
          <TextField name="description" className="md:col-span-2">
            <Label className="text-white">Description</Label>
            <TextArea placeholder="Write player details..." />
            <FieldError />
          </TextField>

          {/* Button */}
          <div className="md:col-span-2">
            <motion.div whileTap={{ scale: 0.97 }}>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-3 rounded-xl hover:scale-[1.02] transition"
              >
                Add Player
              </Button>
            </motion.div>
          </div>
        </Form>
      </motion.div>
    </div>
  );
};

export default AddPlayerForm;