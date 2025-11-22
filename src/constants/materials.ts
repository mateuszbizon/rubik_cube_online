import { MaterialItem } from "@/types";

export const MATERIALS_LINK_START = "/materialy"

export const MATERIALS_ITEMS: MaterialItem[] = [
    {
        name: "Metoda Fridrich",
        items: [
            {
                label: "Jak wstawić parę",
                href: `${MATERIALS_LINK_START}/jak-wstawic-pare`
            },
            {
                label: "Jak ustawić narożnik oraz krawędź na górną ścianę",
                href: `${MATERIALS_LINK_START}/jak-ustawic-naroznik-oraz-krawedz-na-gorna-sciane`
            },
        ]
    },
]