export interface ILinks {
    title: string,
    href: string,
}
export interface ILinksSvg {
    title: string
    SvgImage: string
    href?: string
}
export interface ISkillsAbout {
    title: string,
    subtitle: string,
    SvgImage: string
}
export interface IReviews {
    name: string,
    subtitle: string,
    rating: number,
    text: string,
    image: string
}
export interface IAttorneys {
    position: string,
    name: string,
    subtitle: string
    photo: string
}
export interface ISelect {
    title: string,
}