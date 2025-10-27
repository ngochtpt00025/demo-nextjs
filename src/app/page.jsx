import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Banner from '@/components/ui/Banner';
import BrowserTheRange from '@/components/ui/BrowserTheRange';
const HomePage = () => {
  return (
    <>
    <Header/>
    <Banner/>
    <BrowserTheRange/>
    <Footer/>
    </>
  )
}

export default HomePage;