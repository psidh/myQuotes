import Image from 'next/image'
import NavBar from './components/NavBar';
import Top from './components/top';
import Quotes from './components/quotes';
import Footer from './components/footer';
import Blog from './components/random';
export default function Home() {
  return (<main className='bg-gradient-to-r from-blue-200 to-blue-50 dark:bg-gradient-to-r dark:from-blue-900 dark:to-blue-900 font-ambit' >
    <NavBar/>
    <Top />
    <Quotes />
    <Blog />
    <Footer />
  </main>
  );
}
