"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

/**
 * Modal
 * Intended Usage: Overlays, complex form inputs, focused reading.
 * Implements a light blur backdrop, micro-lift reveal, and focus trapping logic conceptually.
 */
export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  // Prevent body scroll when open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-text-primary/5 backdrop-blur-sm"
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="pointer-events-auto relative w-full max-w-lg overflow-hidden rounded-card border border-border-strong bg-surface-elevated p-8 shadow-premium-hover focus:outline-none"
              role="dialog"
              aria-modal="true"
              tabIndex={-1}
            >
              <button
                onClick={onClose}
                className="absolute right-6 top-6 rounded-full p-2 text-text-muted transition-colors hover:bg-surface hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
              
              {title && (
                <h2 className="heading-3 mb-6 pr-8">{title}</h2>
              )}
              
              <div className="body-base">
                {children}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

/*
  Example Usage:
  <Modal isOpen={open} onClose={() => setOpen(false)} title="Consultation Details">
    Modal Content...
  </Modal>
*/
