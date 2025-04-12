const Hero = ({title="Bridging Marketing and Learning with Technology", subtitle = "Your Partner in Digital Success and Learning"}) => {
    return (
      <>
        <section>
          <div className="bg-[#081b29] h-50 text-[#00abf0]">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-5xl py-12 pl-4">{title}</h1>
              <p className="text-white m-y text-3xl pl-4">{subtitle}</p>
            </div>
          </div>
        </section>
      </>
    );
}

export default Hero