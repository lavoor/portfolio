const Coopstep = ({color, title, description, step}: {color: string, title: string, description: string, step: number}) => {
    return (
        <div className="w-full flex flex-col">
            <h3 className={`tracking-wider ${color} font-black text-sm md:text-base`}>KROK {step}</h3>
            <h2 className="tracking-tight font-black text-2xl xl:text-3xl 2xl:text-4xl">{title}</h2>
            <p className="tracking-tight text-white text-opacity-50 text-base xl:text-lg 2xl:text-xl font-medium md:mt-1">{description}</p>
        </div>
    )
}

export default Coopstep;