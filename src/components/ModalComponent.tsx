import React from "react";
import { motion } from "framer-motion";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../components/ui/alert-dialog";
import { Button } from "../components/ui/button";

interface ModalComponentProps {
  onConfirm: () => void;
  onCancel: () => void;
  showModal: boolean;
}

const ModalComponent: React.FC<ModalComponentProps> = ({
  onConfirm,
  onCancel,
  showModal,
}) => {
  return (
    <AlertDialog open={showModal} onOpenChange={onCancel}>
      <motion.div
        className="nomx-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <AlertDialogContent>
          <motion.div
            className="bg-white p-6 rounded shadow-lg nomx-5"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
          >
            <AlertDialogHeader>
              <AlertDialogTitle className="nomb-8">
                Are you absolutely sure?
              </AlertDialogTitle>
              <AlertDialogDescription>
                Are you sure you want to submit the form? This action cannot be
                undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter className="nomt-12">
              <AlertDialogCancel asChild>
                <Button variant="secondary" onClick={onCancel}>
                  Cancel
                </Button>
              </AlertDialogCancel>
              <AlertDialogAction asChild>
                <Button onClick={onConfirm}>Confirm</Button>
              </AlertDialogAction>
            </AlertDialogFooter>
          </motion.div>
        </AlertDialogContent>
      </motion.div>
    </AlertDialog>
  );
};

export default ModalComponent;
