import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cn } from "../../lib/utils"

// --- Botón Unificado ---
export const Button = React.forwardRef(({ className, ...props }, ref) => (
  <button
    className={cn("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:opacity-50 h-10 px-4 py-2", className)}
    ref={ref} {...props} />
))

// --- Tabs Unificadas ---
export const Tabs = TabsPrimitive.Root
export const TabsList = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.List ref={ref} className={cn("inline-flex h-10 items-center justify-center rounded-md p-1", className)} {...props} />
))
export const TabsTrigger = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger ref={ref} className={cn("inline-flex items-center justify-center px-3 py-1.5 text-sm font-medium transition-all focus-visible:outline-none disabled:pointer-events-none data-[state=active]:bg-white data-[state=active]:text-blue-900 data-[state=active]:shadow-sm", className)} {...props} />
))
export const TabsContent = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Content ref={ref} className={cn("mt-2 focus-visible:outline-none", className)} {...props} />
))
