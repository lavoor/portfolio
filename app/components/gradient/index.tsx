const Gradient = () => {
    return(
        <div className="-z-10 absolute w-full">
            <div className="absolute w-[1000px] h-[770px] bg-[#9E00FF] bg-opacity-5 blur-[500px] rounded-full -left-[250px] -rotate-12"></div>
            <div className="absolute w-[580px] h-[460px] bg-[#FFB800] bg-opacity-5 blur-[500px] rounded-full top-[360px] left-0"></div>
            <div className="absolute w-[640px] h-[520px] bg-[#489CFF] bg-opacity-5 blur-[500px] rounded-full top-[162px] right-[202px]"></div>
            <div className="absolute w-[665px] h-[500px] bg-[#9668E6] bg-opacity-5 blur-[500px] rounded-full top-[444px] -right-[23px] rotate-12"></div>
        </div>
    )
}

export default Gradient;