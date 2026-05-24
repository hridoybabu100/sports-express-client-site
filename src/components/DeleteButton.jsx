"use client";

import {TriangleExclamation} from "@gravity-ui/icons";
import {AlertDialog, Button} from "@heroui/react";

export function DeleteButton() {
  return (
    <AlertDialog>
       <Button className="group  relative overflow-hidden rounded-2xl border border-red-500/30 bg-red-500/10 px-6 py-3 font-semibold text-red-400 backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:border-red-500 hover:text-white hover:shadow-[0_0_25px_rgba(239,68,68,0.5)]">
                  {/* Shine Effect */}
                  <span className="absolute left-[-100%] top-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-700 group-hover:left-[100%]"></span>

                  <span className="relative z-10 flex items-center gap-2">
                    {/* Trash Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M9 7h6m-1-3H10a1 1 0 00-1 1v2h6V5a1 1 0 00-1-1z"
                      />
                    </svg>
                    Delete
                  </span>
                </Button>
      <AlertDialog.Backdrop
        className="bg-linear-to-t from-red-950/90 via-red-950/50 to-transparent dark:from-red-950/95 dark:via-red-950/60"
        variant="blur"
      >
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[420px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header className="items-center text-center">
              <AlertDialog.Icon status="danger">
                <TriangleExclamation className="size-5" />
              </AlertDialog.Icon>
              <AlertDialog.Heading>Permanently delete your account?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This action cannot be undone. All your data, settings, and content will be
                permanently removed from our servers. The dramatic red backdrop emphasizes the
                severity and irreversibility of this decision.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer className="flex-col-reverse">
              <Button className="w-full" slot="close">
                Keep Account
              </Button>
              <Button className="w-full" slot="close" variant="danger">
                Delete Forever
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}