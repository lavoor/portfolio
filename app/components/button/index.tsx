const Button = ({text, borderColor, bgColor, textDark}: {text: string, borderColor: string, bgColor: string, textDark?: boolean}) => {
    return(
        <div className={`w-full md:w-max text-center relative group py-2 md:py-3 px-6 md:px-10 rounded-full border overflow-hidden cursor-pointer ${borderColor}`}>
            <div className={`absolute duration-500 ease-in-out top-0 left-0 w-[0%] h-full group-hover:w-full ${bgColor}`}></div>
            <span className={`relative z-10 duration-500 font-semibold text-sm md:text-base tracking-tight ${textDark ? 'group-hover:text-black group-hover:text-opacity-70' : ''} `}>{text}</span>
        </div>
    )
}

export default Button;