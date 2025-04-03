import HeroImage from '../assets/images/illustration-working.svg'

export default function Hero({headline, paragraph}) {
    return (
        <>
        <section className="w-full py-10 px-6 md:px-20 bg-white animate-fade-in">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center">
            <div className="w-full md:w-1/2 mb-10 md:mb-0">
              <img 
                src={HeroImage}
                alt="Person working at desk" 
                className="w-full mx-auto"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-very-dark-violet leading-tight mb-4 font-poppins text-h1">
                {headline}
              </h1>
              <p className="text-grayish-violet text-lg mb-8 max-w-lg font-poppins text-li">
                {paragraph}
              </p>
              <a href="#" className="bg-primary text-white px-[30px] py-[15px] font-bold rounded-4xl cursor-pointer font-poppins hover:opacity-70 transition-opacity ease-in">Get Started</a>
            </div>
          </div>
        </section>
        </>
    )
}