import Image from 'next/image'
import NavBar from './components/NavBar';
import Top from './components/top';
import Quotes from './components/quotes';
import Footer from './components/footer';
export default function Home() {
  return (<main className='dark:bg-gradient-to-r dark:from-blue-900 dark:to-pink-900' >
    <NavBar/>
    <Top />
    <Quotes />
    <Footer />
  </main>
  )
}
