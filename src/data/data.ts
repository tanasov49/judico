import { ILinks, IMatters } from "@interfaces";

export const linksMenuNav: ILinks[] = [
    {title: 'home', href: '/'},
    {title: 'product', href: '/product'},
    {title: 'pricing', href: '/pricing'},
    {title: 'contact', href: '/contact'}
]
import SvgImage1 from '@images/svg/svg1.svg';
import SvgImage2 from '@images/svg/svg2.svg';
import SvgImage3 from '@images/svg/svg3.svg';

export const mattersClient: IMatters[] = [
    {title: 'Frauds or Mislead', SvgImage: SvgImage1},
    {title: 'Bailes & Warrants', SvgImage: SvgImage2},
    {title: 'Federal Drug Crimes', SvgImage: SvgImage3},
    {title: 'Traffic Related Crimes', SvgImage: SvgImage2},
    {title: 'Family Law', SvgImage: SvgImage3},
    {title: 'Business Law', SvgImage: SvgImage2}
]