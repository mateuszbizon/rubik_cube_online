export type NavItem = {
    name: string
    href: string
    section: string | null
}

export const NAV_ITEMS_LIST: NavItem[] = [
    {
        name: "Początek",
        href: "#hero",
        section: "hero"
    },
    {
        name: "O mnie",
        href: "#about",
        section: "about"
    },
    {
        name: "Lekcja",
        href: "#lesson",
        section: "lesson"
    },
    {
        name: "Oferta",
        href: "#offer",
        section: "offer"
    },
    {
        name: "Opinie",
        href: "#reviews",
        section: "reviews"
    },
    {
        name: "Blog",
        href: "/blog",
        section: null
    },
]

export const BLOG_NAV_ITEMS_LIST: NavItem[] = [
    {
        name: "Główna",
        href: "/",
        section: null
    },
    {
        name: "O mnie",
        href: "/#about",
        section: null
    },
    {
        name: "Lekcja",
        href: "/#lesson",
        section: null
    },
    {
        name: "Oferta",
        href: "/#offer",
        section: null
    },
    {
        name: "Opinie",
        href: "/#reviews",
        section: null
    }
]