"use client";

import {Envelope} from "@gravity-ui/icons";
import {Button, Input, Label, Modal, Surface, TextField} from "@heroui/react";

export function EditButton() {
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
                Fill out the form below and we'll get back to you. The modal adapts automatically
                when the keyboard appears on mobile.
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form className="flex flex-col gap-4">
                  <TextField className="w-full" name="name" type="text" variant="secondary">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>
                  <TextField className="w-full" name="email" type="email" variant="secondary">
                    <Label>Email</Label>
                    <Input placeholder="Enter your email" />
                  </TextField>
                  <TextField className="w-full" name="phone" type="tel" variant="secondary">
                    <Label>Phone</Label>
                    <Input placeholder="Enter your phone number" />
                  </TextField>
                  <TextField className="w-full" name="company" variant="secondary">
                    <Label>Company</Label>
                    <Input placeholder="Enter your company name" />
                  </TextField>
                  <TextField className="w-full" name="message" variant="secondary">
                    <Label>Message</Label>
                    <Input placeholder="Enter your message" />
                  </TextField>
                </form>
              </Surface>
            </Modal.Body>
            <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button slot="close">Send Message</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}