import { TechnologyType } from "@/types";

const technologies: { [id: string] : TechnologyType; } = {
    "next": {
        label: "Next.js",
        icon: `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
                <path d="M7.00376 12.9952V6.99523L14.7488 17.6452C12.8321 18.8357 10.5383 19.2629 8.32164 18.8421C6.10497 18.4214 4.1272 17.1834 2.78013 15.3734C1.43306 13.5634 0.814956 11.3135 1.04827 9.06932C1.28159 6.82518 2.3493 4.75052 4.03989 3.25635C5.73048 1.76218 7.92062 0.957506 10.1764 1.00173C12.4322 1.04596 14.5892 1.93585 16.2199 3.49514C17.8506 5.05442 18.8362 7.16933 18.9814 9.4209C19.1266 11.6725 18.4207 13.8964 17.0038 15.6522M13.0038 9.99524V6.99524" stroke="white" stroke-opacity="0.4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `,
        link: "https://nextjs.org/",
    },
    "vue": {
        label: "Vue.js",
        icon: `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 18" fill="none">
                <path d="M14.5 1L10 9L5.5 1M1 1L10 17L19 1" stroke="white" stroke-opacity="0.4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `,
        link: "https://vuejs.org/",
    },
    "django": {
        label: "Django",
        icon: `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 20" fill="none">
                <path d="M10.5 5V13.5L8.48499 13.701C8.10719 13.7395 7.7255 13.6983 7.3646 13.5801C7.0037 13.4619 6.67161 13.2694 6.38979 13.0148C6.10797 12.7602 5.88268 12.4494 5.72849 12.1024C5.5743 11.7553 5.49463 11.3798 5.49463 11C5.49463 10.6202 5.5743 10.2447 5.72849 9.89765C5.88268 9.5506 6.10797 9.23975 6.38979 8.9852C6.67161 8.73065 7.0037 8.53805 7.3646 8.41985C7.7255 8.30165 8.10719 8.26048 8.48499 8.299L10.5 8.5M14.5 5V5.01M14.5 8V13.586C14.5 14.491 14.14 15.36 13.5 16M1.5 4C1.5 3.20435 1.81607 2.44129 2.37868 1.87868C2.94129 1.31607 3.70435 1 4.5 1H16.5C17.2956 1 18.0587 1.31607 18.6213 1.87868C19.1839 2.44129 19.5 3.20435 19.5 4V16C19.5 16.7956 19.1839 17.5587 18.6213 18.1213C18.0587 18.6839 17.2956 19 16.5 19H4.5C3.70435 19 2.94129 18.6839 2.37868 18.1213C1.81607 17.5587 1.5 16.7956 1.5 16V4Z" stroke="white" stroke-opacity="0.4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `,
        link: "https://www.djangoproject.com/",
    },
    "typescript": {
        label: "Typescript",
        icon: `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
                <path d="M13 15.5C13.32 15.82 13.754 16 14.207 16H14.75C15.44 16 16 15.44 16 14.75V14.5C16 14.1022 15.842 13.7206 15.5607 13.4393C15.2794 13.158 14.8978 13 14.5 13C14.1022 13 13.7206 12.842 13.4393 12.5607C13.158 12.2794 13 11.8978 13 11.5V11.25C13 10.56 13.56 10 14.25 10H14.793C15.246 10 15.68 10.18 16 10.5M7 10H11M9 10V16M19 17V3C19 2.46957 18.7893 1.96086 18.4142 1.58579C18.0391 1.21071 17.5304 1 17 1H3C2.46957 1 1.96086 1.21071 1.58579 1.58579C1.21071 1.96086 1 2.46957 1 3V17C1 17.5304 1.21071 18.0391 1.58579 18.4142C1.96086 18.7893 2.46957 19 3 19H17C17.5304 19 18.0391 18.7893 18.4142 18.4142C18.7893 18.0391 19 17.5304 19 17Z" stroke="white" stroke-opacity="0.4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `,
        link: "https://www.typescriptlang.org/",
    },
    "tailwindcss": {
        label: "TailwindCSS",
        icon: `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 14" fill="none">
                <path d="M9.667 1C7.177 1 5.623 2.222 5 4.667C5.933 3.444 7.023 2.987 8.267 3.292C8.977 3.466 9.484 3.972 10.045 4.532C10.961 5.444 12.045 6.5 14.333 6.5C16.823 6.5 18.377 5.278 19 2.833C18.067 4.056 16.977 4.513 15.733 4.208C15.023 4.034 14.516 3.528 13.955 2.968C13.039 2.056 11.98 1 9.667 1ZM5.667 7.5C3.177 7.5 1.623 8.722 1 11.167C1.933 9.944 3.023 9.487 4.267 9.792C4.977 9.966 5.484 10.472 6.045 11.032C6.961 11.944 8.02 13 10.333 13C12.823 13 14.377 11.778 15 9.333C14.067 10.556 12.977 11.013 11.733 10.708C11.023 10.534 10.516 10.028 9.955 9.468C9.039 8.556 7.98 7.5 5.667 7.5Z" stroke="white" stroke-opacity="0.4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `,
        link: "https://tailwindcss.com/",
    },
    "react": {
        label: "React.js",
        icon: `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 20" fill="none">
                <path d="M5.85702 7.00003C3.22002 7.68003 1.50002 8.84503 1.50002 10.175C1.50002 12.282 5.90502 14 11.35 14C12.09 14 12.61 13.961 13.3 13.903M9.33701 13.9C8.92401 13.304 8.53101 12.767 8.15701 12.1C5.40601 7.20001 4.66901 2.33001 6.52701 1.22701C7.67701 0.530009 9.57401 1.48001 11.501 3.48101M5.929 13.387C5.227 16.075 5.369 18.103 6.489 18.782C8.272 19.862 11.876 16.824 14.532 11.978C14.892 11.308 15.215 10.649 15.5 10M11.5 16.52C13.428 18.52 15.317 19.47 16.478 18.773C18.328 17.671 17.599 12.801 14.845 7.90001C14.461 7.22301 14.068 6.69601 13.665 6.10001M17.16 13C19.772 12.313 21.5 11.15 21.5 9.82403C21.5 7.71403 17.092 6.00003 11.655 6.00003C10.908 6.00003 10.389 6.02903 9.69997 6.08703M7.50002 10C7.78502 9.34003 8.10702 8.69203 8.46802 8.02203C11.115 3.17803 14.721 0.132033 16.514 1.22103C17.624 1.90003 17.776 3.92703 17.074 6.61403M11.76 10.0151H11.75C11.74 10.1451 11.63 10.2551 11.49 10.2551C11.4231 10.2517 11.3599 10.223 11.3134 10.1747C11.267 10.1263 11.2407 10.0621 11.24 9.99506C11.24 9.85506 11.35 9.74506 11.48 9.74506H11.47C11.6 9.73506 11.72 9.85506 11.72 9.98506" stroke="white" stroke-opacity="0.4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `,
        link: "https://react.dev/",
    },
    "strapi": {
        label: "Strapi",
        icon: `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="none">
                <g opacity="0.4">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7648 0H5.88931V6.05535H11.9447V12.1107H18V0.235159C18 0.105292 17.8947 0 17.7648 0Z" fill="white"/>
                    <path d="M5.88931 6.05535H11.9447C11.9447 6.29051 11.9447 6.05535 11.9447 6.29051C11.9447 6.52566 11.9447 12.1107 11.9447 12.1107H6.12447C5.99461 12.1107 5.88931 12.0054 5.88931 11.8755V6.05535Z" fill="white" fill-opacity="0.42"/>
                    <path d="M11.9447 12.1107H18L12.1454 17.9653C12.0713 18.0394 11.9447 17.9869 11.9447 17.8822V12.1107Z" fill="white" fill-opacity="0.42"/>
                    <path d="M5.88931 6.05535H0.11781C0.0130467 6.05535 -0.0393938 5.92871 0.0346812 5.85464L5.88931 0V6.05535Z" fill="white" fill-opacity="0.42"/>
                </g>
            </svg>
        `,
        link: "https://strapi.io/",
    },
    "framermotion": {
        label: "Framer Motion",
        icon: `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="none">
                <path d="M9 9L1 1V17L17 1V17L13 13M17 9L9 17L5 13" stroke="white" stroke-opacity="0.4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `,
        link: "https://motion.dev/",
    },

}

const Technology = ({technology}: {technology: string}) => {
    return(
        <a className="w-full md:w-60 h-16 md:h-20 bg-white bg-opacity-[0.02] border border-white border-opacity-10 rounded-md flex justify-center items-center gap-2 duration-100 cursor-pointer hover:bg-opacity-5"  target="_blank" rel="noopener noreferrer" href={technologies[technology].link}>
            <span className="w-4 h-4 md:w-[18px] md:h-[18px] flex justify-center items-center" dangerouslySetInnerHTML={{__html: technologies[technology].icon}}></span>
            <span className="text-white text-opacity-40 font-bold text-sm md:text-base tracking-tight">{technologies[technology].label}</span>
        </a>
    )
}

export default Technology;