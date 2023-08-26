import Image from 'next/image'
import NavBar from './components/NavBar';
import Top from './components/top';
import Quotes from './components/quotes';
import Footer from './components/footer';
export default function Home() {
  return (<main className='dark:bg-black bg-white' >
    <NavBar/>
    <Top />
    <Quotes />
    <Footer />
  </main>
  )
}
