import Img1 from '../assets/images/Frame 2540.png'
import Img2 from '../assets/images/Frame 2542.png';
import Img3 from '../assets/images/img about 3.svg';
import Quote from '../assets/images/quote.svg';

export default function AboutUs() {
    return (
        <section id="about" className="m-0 md:m-20 mt-20">
            <div>
                <h1 className="text-5xl text-center md:text-left font-bold text-h1">
                    About Us
                </h1>
                <p className="text-li text-center md:text-left m-auto md:m-0 w-[50%] mt-5 md:mt-5">
                    We are a team of passionate individuals who are dedicated to providing the best possible experience for our customers
                </p>

                <div>
                    <img src={Img1} alt="img1" className='mt-20 md:rounded-2xl m-0' />
                </div>

                
                <div className="mt-45 flex flex-col md:flex-row gap-8 items-center">
                    {/* Quote Icon and Text */}
                    <div className="flex-1 flex flex-col gap-4">
                        <img src={Quote} alt="quote" className="w-10 h-10" />
                        <p className="text-li">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>

                    {/* Image 2 */}
                    <div className="flex-1 min-w-[50%]">
                        <img
                            src={Img2}
                            alt="img2"
                            className="w-full h-auto md:rounded-lg  shadow-lg object-cover"
                            style={{ minWidth: '350px' }} 
                        />
                    </div>
                </div>
            </div>

            <div className='min-w-[60%] md:flex-row lg:flex gap-20 text-center md:text-left items-center mt-25'>
                    <img src={Img3} alt="img3" className='mt-20 m-auto w-160'/>
                    <div>
                        <h1 className='text-5xl text-center md:text-left font-bold text-h1 mb-5 mt-20'>The Team</h1>
                        <p className='text-li mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <p className='text-li mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
            </div>
        </section>
    );
}