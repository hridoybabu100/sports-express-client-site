"use client";
import { motion } from "framer-motion";
import { Envelope } from "@gravity-ui/icons";
import {
  Form,
  Input,
  Label,
  TextField,
  Button,
  FieldError,
  Description,
  TextArea,
  Modal,
  Surface,
} from "@heroui/react";
import { toast } from "react-toastify";
import { redirect } from "next/navigation";

export function EditButton({ player }) {
  // console.log('all Players', player);
  const { _id } = player;

  const onSubmit = async (e) => {
    e.preventDefault();
    // console.log('e is a e', e);

    const formData = new FormData(e.target);
    const newPlayer = Object.fromEntries(formData.entries());
    console.log("New Player", newPlayer);

    const res = await fetch(`http://localhost:5000/sports/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlayer),
    });

    const data = await res.json();
    // console.log('New Player is a', data);
    if (data) {
      toast.success("Player Editing Sucessfully Complete");
      redirect("/palyer");
    }
  };

  return (
    <Modal>
      <Button className="group relative overflow-hidden rounded-2xl border border-cyan-400/30 bg-cyan-500/10 px-6 py-3 font-semibold text-cyan-300 backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:border-cyan-400 hover:text-white hover:shadow-[0_0_25px_rgba(34,211,238,0.5)]">
        {/* Shine Effect */}
        <span className="absolute left-[-100%] top-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-700 group-hover:left-[100%]"></span>

        <span className="relative z-10 flex items-center gap-2">
          {/* Edit Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11 5h2m-1-1v2m6.364 1.636l-9.9 9.9a2 2 0 01-.878.515l-3 1a1 1 0 01-1.264-1.264l1-3a2 2 0 01.515-.878l9.9-9.9a2.121 2.121 0 013 3z"
            />
          </svg>
          Edit
        </span>
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <Envelope className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Contact Us</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                Fill out the form below and we'll get back to you. The modal
                adapts automatically when the keyboard appears on mobile.
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <Form
                  onSubmit={onSubmit}
                  className="grid grid-cols-1 md:grid-cols-2 gap-5"
                >
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
                    <Input placeholder="https://example.com/image.jpg" />
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
                        Edit Player
                      </Button>
                    </motion.div>
                  </div>
                </Form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
