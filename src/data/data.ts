import { ILinks, IMatters, ISkillsAbout } from "@interfaces";

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
import PeopleSvg from '@images/svg/people.svg';
import FastSvg from '@images/svg/fast.svg';
export const skillsAbout: ISkillsAbout[] = [
    {title: 'the quick fox jumps over the lazy dog', subtitle: 'Things on a very small scale ...', SvgImage: PeopleSvg},
    {title: 'the quick fox jumps over the lazy dog', subtitle: 'Things on a very small scale ...', SvgImage: FastSvg}
]