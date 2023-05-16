import {
    IAttorneys,
    ILinks,
    ILinksSvg,
    IReviews,
    ISelect,
    ISkillsAbout,
} from "@interfaces";

export const linksMenuNav: ILinks[] = [
    { title: "home", href: "/" },
    { title: "product", href: "/product" },
    { title: "pricing", href: "/pricing" },
    { title: "contact", href: "/contact" },
];
import SvgImage1 from "@images/svg/svg1.svg";
import SvgImage2 from "@images/svg/svg2.svg";
import SvgImage3 from "@images/svg/svg3.svg";

export const mattersClient: ILinksSvg[] = [
    { title: "Frauds or Mislead", SvgImage: SvgImage1 },
    { title: "Bailes & Warrants", SvgImage: SvgImage2 },
    { title: "Federal Drug Crimes", SvgImage: SvgImage3 },
    { title: "Traffic Related Crimes", SvgImage: SvgImage2 },
    { title: "Family Law", SvgImage: SvgImage3 },
    { title: "Business Law", SvgImage: SvgImage2 },
];
import PeopleSvg from "@images/svg/people.svg";
import FastSvg from "@images/svg/fast.svg";
export const skillsAbout: ISkillsAbout[] = [
    {
        title: "the quick fox jumps over the lazy dog",
        subtitle: "Things on a very small scale ...",
        SvgImage: PeopleSvg,
    },
    {
        title: "the quick fox jumps over the lazy dog",
        subtitle: "Things on a very small scale ...",
        SvgImage: FastSvg,
    },
];
import Client1 from "@images/client1.png";
import Client2 from "@images/client2.png";
import Client3 from "@images/client3.png";
export const reviewsClients: IReviews[] = [
    {
        name: "Regina Miles",
        subtitle: "Designer",
        rating: 4,
        text: "This proved to be impossible using the traditional concepts of space and time. Einstein developed a new view of time first and then space. This proved to be impossible using the traditional concepts of space and time. Einstein developed a new view of time first and then space.",
        image: Client1,
    },
    {
        name: "Regina Miles",
        subtitle: "Designer",
        rating: 4,
        text: "This proved to be impossible using the traditional concepts of space and time. Einstein developed a new view of time first and then space. This proved to be impossible using the traditional concepts of space and time. Einstein developed a new view of time first and then space.",
        image: Client2,
    },
    {
        name: "Regina Miles",
        subtitle: "Designer",
        rating: 4,
        text: "This proved to be impossible using the traditional concepts of space and time. Einstein developed a new view of time first and then space. This proved to be impossible using the traditional concepts of space and time. Einstein developed a new view of time first and then space.",
        image: Client3,
    },
];
import AshleyPhoto from "@images/layer_ceo.png";
import RoneyPhoto from "@images/ceo.png";
import AviePhoto from "@images/layer.png";
import BenPhoto from "@images/co_founder.png";
export const attorneys: IAttorneys[] = [
    {
        name: "Ashley Fletcher",
        subtitle: "the quick fox jumps over the lazy dog",
        position: "LAYER & CEO",
        photo: AshleyPhoto,
    },
    {
        name: "Rodney Stratton",
        subtitle: "the quick fox jumps over the lazy dog",
        position: "CEO",
        photo: RoneyPhoto,
    },
    {
        name: "Avie Beaton",
        subtitle: "the quick fox jumps over the lazy dog",
        position: "LAYER CIVIL LAW",
        photo: AviePhoto,
    },
    {
        name: "Ben Jonson",
        subtitle: "the quick fox jumps over the lazy dog",
        position: "CO FOUNDER & CEO",
        photo: BenPhoto,
    },
];
export const selectsDepartaments: ISelect[] = [
    { title: "List Entry # 1" },
    { title: "List Entry # 1" },
    { title: "List Entry # 2" },
    { title: "List Entry # 3" },
    { title: "List Entry # 4" },
    { title: "List Entry # 5" },
];
export const selectTimes: ISelect[] = [
    { title: "4:00 Available" },
    { title: "5:00 Available" },
    { title: "6:00 Available" },
    { title: "7:00 Available" },
    { title: "8:00 Available" },
];

import FacebookSvg from "../images/svg/facebook.svg?url";
import InstagramSvg from "../images/svg/instagram.svg?url";
import TwitterSvg from "../images/svg/twitter.svg?url";
import YoutubeSvg from "../images/svg/youtube.svg?url";
export const linksSocial: ILinksSvg[] = [
    { title: "facebook", SvgImage: FacebookSvg, href: "facebook.com" },
    { title: "instagram", SvgImage: InstagramSvg, href: "inctagram.com" },
    { title: "twitter", SvgImage: TwitterSvg, href: "twitter.com" },
    { title: "twitter", SvgImage: YoutubeSvg, href: "youtube.com" },
];
export const linksCompanyMenu: ILinks[] = [
    {title: 'About Us', href: '/about'},
    {title: 'Carrier', href: '/carrier'},
    {title: 'We are hiring', href: '/hiring'},
    {title: 'Blog', href: '/blog'}
]
export const linksFeaturesMenu: ILinks[] = [
    {title: 'Business Marketing', href: '/marketing'},
    {title: 'User Analytic', href: '/analytic'},
    {title: 'Live Chat', href: '/live_chat'},
    {title: 'Unlimited Support', href: '/unlimited_support'},
]
export const linksResourcesMenu: ILinks[]= [
    {title: 'IOS & Android', href: '/iosandandroid'},
    {title: 'Watch a Demo', href: '/watch_demo'},
    {title: 'Customers', href: '/customers'},
    {title: 'API', href: '/api'},
]