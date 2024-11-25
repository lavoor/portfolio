const Gradient = () => {
    return(
        <div className="-z-10 absolute w-full h-full max-w-100vw overflow-hidden">
            <div className="absolute w-[1000px] h-[770px] bg-[#9E00FF] bg-opacity-10 blur-[100px] rounded-full -left-[250px] -rotate-12"></div>
            <div className="absolute w-[580px] h-[460px] bg-[#FFB800] bg-opacity-10 blur-[100px] rounded-full top-[360px] left-0"></div>
            <div className="absolute w-[640px] h-[520px] bg-[#489CFF] bg-opacity-10 blur-[100px] rounded-full top-[162px] right-[202px]"></div>
            <div className="absolute w-[665px] h-[500px] bg-[#9668E6] bg-opacity-10 blur-[100px] rounded-full top-[444px] -right-[23px] rotate-12"></div>
            <div className="absolute w-[1000px] h-[770px] bg-[#FFB800] bg-opacity-10 blur-[100px] rounded-full top-[750px] right-[90px]"></div>
            <div className="absolute w-[1020px] h-[760px] bg-[#489CFF] bg-opacity-10 blur-[100px] rounded-full top-[1100px] -left-[100px] -rotate-45"></div>
            <div className="absolute w-[1020px] h-[700px] bg-[#FFFFFF] bg-opacity-10 blur-[100px] rounded-full top-[2500px] -right-[180px]"></div>
            <div className="absolute w-[1020px] h-[500px] bg-[#FFFFFF] bg-opacity-10 blur-[100px] rounded-full top-[2500px] left-[72px] -rotate-12"></div>
            <div className="absolute w-[1200px] h-[500px] bg-[#FFB800] bg-opacity-10 blur-[100px] rounded-full -rotate-12 top-[3800px] -left-[220px]"></div>
        </div>
    )
}

export default Gradient;