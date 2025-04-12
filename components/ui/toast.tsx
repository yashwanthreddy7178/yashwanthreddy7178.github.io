"use client"

import { X } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function Toaster() {
  const { toasts, dismiss } = useToast()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <div className="fixed bottom-0 right-0 z-50 flex w-full flex-col items-end gap-2 p-4 md:max-w-[420px]">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
            className={`w-full rounded-lg border p-4 shadow-md ${
              toast.variant === "destructive"
                ? "border-red-200 bg-red-50 text-red-900 dark:border-red-900 dark:bg-red-950 dark:text-red-50"
                : "border-border bg-background text-foreground"
            }`}
          >
            <div className="flex justify-between gap-2">
              <div className="flex-1">
                <h3 className="font-medium">{toast.title}</h3>
                {toast.description && <p className="mt-1 text-sm opacity-90">{toast.description}</p>}
              </div>
              <button
                onClick={() => dismiss(toast.id)}
                className="rounded-md p-1 hover:bg-muted"
                aria-label="Close toast"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
