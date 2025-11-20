import { MaterialItem } from "@/types";

export const MATERIALS_LINK_START = "/materialy"

export const MATERIALS_ITEMS: MaterialItem[] = [
    {
        name: "Metoda Fridrich",
        items: [
            {
                label: "Początek",
                href: `${MATERIALS_LINK_START}/poczatek`
            },
            {
                label: "Początek2",
                href: `${MATERIALS_LINK_START}/poczatek`
            }
        ]
    },
    {
        name: "Metoda Fridrich2",
        items: [
            {
                label: "Początek2",
                href: `${MATERIALS_LINK_START}/poczatek`
            }
        ]
    }
]