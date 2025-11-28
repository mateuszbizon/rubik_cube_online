import { MaterialItem } from "@/types";

export const MATERIALS_LINK_START = "/materialy"

export const MATERIALS_ITEMS: MaterialItem[] = [
    {
        name: "Metoda Fridrich podstawy",
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
            {
                label: "Sytuacja 3 na F2L: Narożnik z białem kolorem skierowany na bok i kolory pary są różne",
                href: `${MATERIALS_LINK_START}/sytuacja-3-na-f2l-naroznik-z-bialem-kolorem-skierowany-na-bok-i-kolory-pary-sa-rozne`
            },
            {
                label: "Jak nie niszczyć już ułożonych par",
                href: `${MATERIALS_LINK_START}/jak-nie-niszczyc-juz-ulozonych-par`
            },
            {
                label: "Notacja kostki Rubika",
                href: `${MATERIALS_LINK_START}/notacja-kostki-rubika`
            },
            {
                label: "Orientacja na krzyż nr 1 - samochód",
                href: `${MATERIALS_LINK_START}/orientacja-na-krzyz-nr-1-samochod`
            },
        ]
    },
]