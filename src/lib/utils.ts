import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Small helper for combining conditional Tailwind classes without ending up
// with conflicting utilities (e.g. two different "px-*" values). clsx builds
// the class string from conditions/arrays, twMerge resolves the conflicts.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
