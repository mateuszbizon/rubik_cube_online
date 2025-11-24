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
            {
                label: "Sytuacja na F2L: Narożnik z białem kolorem do góry skierowany",
                href: `${MATERIALS_LINK_START}/sytuacja-na-f2l-naroznik-z-bialem-kolorem-do-gory-skierowany`
            },
            {
                label: "Sytuacja 2 na F2L: Narożnik z białem kolorem skierowany na bok i kolory pary są takie same",
                href: `${MATERIALS_LINK_START}/sytuacja-2-na-f2l-naroznik-z-bialem-kolorem-skierowany-na-bok-i-kolory-pary-sa-takie-same`
            },
        ]
    },
]