import { MATERIALS_ITEMS } from "@/constants/materials"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function findMaterialItemByName(name: string) {
    return MATERIALS_ITEMS.find(item => item.name === name)
}