import acmeLogo from "@/assets/logo-acme.png"
import pulseLogo from "@/assets/logo-pulse.png"
import echoLogo from "@/assets/logo-echo.png"
import celestialLogo from "@/assets/logo-celestial.png"
import quantumLogo from "@/assets/logo-quantum.png"
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";

export const LOGOS = [acmeLogo, pulseLogo, echoLogo, celestialLogo, quantumLogo, acmeLogo, pulseLogo, echoLogo, celestialLogo, quantumLogo]

export const TABS = [
    {
        icon: "/assets/lottie/vroom.lottie",
        title: "User-friendly dashboard",
        isNew: false,
        backgroundPositionX: 0,
        backgroundPositionY: 0,
        backgroundSizeX: 150,
    },
    {
        icon: "/assets/lottie/click.lottie",
        title: "One-click optimization",
        isNew: false,
        backgroundPositionX: 98,
        backgroundPositionY: 100,
        backgroundSizeX: 135,
    },
    {
        icon: "/assets/lottie/stars.lottie",
        title: "Smart keyword generator",
        isNew: true,
        backgroundPositionX: 100,
        backgroundPositionY: 27,
        backgroundSizeX: 177,
    },
];

export const TESTIMONIALS = [
    {
        text: "“This product has completely transformed how I manage my projects and deadlines”",
        name: "Sophia Perez",
        title: "Director @ Quantum",
        avatarImg: avatar1,
    },
    {
        text: "“These AI tools have completely revolutionized our SEO entire strategy overnight”",
        name: "Jamie Lee",
        title: "Founder @ Pulse",
        avatarImg: avatar2,
    },
    {
        text: "“The user interface is so intuitive and easy to use, it has saved us countless hours”",
        name: "Alisa Hester",
        title: "Product @ Innovate",
        avatarImg: avatar3,
    },
    {
        text: "“Our team's productivity has increased significantly since we started using this tool”",
        name: "Alec Whitten",
        title: "CTO @ Tech Solutions",
        avatarImg: avatar4,
    },
];