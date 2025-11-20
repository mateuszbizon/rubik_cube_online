export type Image = {
    src: string;
    alt: string;
}

export type NavLink = {
    label: string;
    href: string;
}

export type NavItem = {
    label: string;

} & ({
    isLink: true;
    href: string;
} | {
    isLink: false;
    menu: NavLink[];
    href?: string;
})

export type SingleOffer = {
    firstText: string;
    secondText: string;
    thirdText: string;
    fourText: string;
    fiveText?: string;
    sixText?: string;
    image: Image;
}

export type MaterialItem = {
    name: string
    items: NavLink[]
}