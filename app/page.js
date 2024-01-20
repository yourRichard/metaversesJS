import { Footer, Navbar } from '../components';
import CarCanvas from '../components/canvas/Car';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';
import CarPage from '../sections/CarPage';

const Page = () => (
  <div className='bg-primary-black overflow-hidden'>
    <Navbar />
    <Hero />
    <div className='relative'>
      <About />
      <div className=' gradient-03 z-0'/>
      <Explore /> 
      <CarPage/>
    </div>
    <div className='relative'>
      <GetStarted />
      <div className=' gradient-04 z-0'/>
      <WhatsNew />
    </div> 
    <World />
    <div>
      <Insights />
      <div className=' gradient-05 z-0'/>
      <Feedback />
    </div>
    <Footer />
  </div>
);

export default Page;
