import Image1 from '../assets/images/img1.svg'
import Image2 from '../assets/images/img2.svg'
import Image3 from '../assets/images/img3.svg'

export default function Statistics () {
    return (
        <section className='w-full py-32 px-6 md:px-20 bg-[#F0F1F6]'>
            
            <div className='text-center lg:m-15 md:m-15 mb-20 '>
            <h2 className="text-3xl font-poppins text-h1 font-bold">
                Advanced Statistics
            </h2>
            <p className='text-li font-poppins font-medium max-w-lg mx-auto'>
            Track how your links are performing across the web with our 
            advanced statistics dashboard.
            </p>
            </div>

            <div className='lg:flex gap-15 relative'>
            
            <div className="absolute bg-primary top-1/2 left-1/2 -translate-x-1/2 md:top-1/2 md:left-0 md:translate-x-0 w-2 md:w-full h-full md:h-2 bg-teal md:translate-y-20 hidden md:block"></div>


            <div className='bg-white p-[20px] lg:w-[35%] relative rounded-2xl  shadow-2xl'>
                <img src={Image1} alt="img1" className='inline-block -mt-14 w-20' />
                <div className='lg:mt-10 md:mt-5'>
                <h2 className='text-[1.4rem] font-poppins font-bold text-h1'>Brand Recognition</h2>
                <p className='font-poppins w-[86%] text-li mt-3 '>Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.
                </p>
                </div>
            </div>

            <div className='bg-white p-[20px] lg:w-[35%] relative top-10 rounded-2xl shadow-2xl'>
                <img src={Image2} alt="img2" className='inline-block -mt-14 w-20' />
                <div className='lg:mt-10 md:mt-5'>
                <h2 className='text-[1.4rem] font-poppins font-bold text-h1'>Detailed Records</h2>
                <p className='font-poppins w-[86%] text-li mt-3 '>Gain insights into who is clicking your links. Knowing when and where 
                people engage with your content helps inform better decisions.
                </p>
                </div>
            </div>

            <div className='bg-white p-[20px] lg:w-[35%] relative top-20 rounded-2xl shadow-2xl'>
                <img src={Image3} alt="img3" className='inline-block -mt-14 w-20' />
                <div className='lg:mt-10 md:mt-5'>
                <h2 className='text-[1.4rem] font-poppins font-bold text-h1'>Fully Customizable</h2>
                <p className='font-poppins w-[86%] text-li mt-3 '>Improve brand awareness and content discoverability through customizable 
                links, supercharging audience engagement.
                </p>
                </div>
            </div>

            </div>

    </section>
    )
}

