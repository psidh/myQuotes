import Image from 'next/image'
import NavBar from './components/NavBar';
import Top from './components/top';
import Quotes from './components/quotes';
import Footer from './components/footer';
import Blog from './components/random';
export default function Home() {
  return (
  <div style={{ fontFamily: 'Ambit, sans-serif'}}>
  <main  className='bg-gradient-to-r from-blue-200 to-blue-50 dark:bg-gradient-to-t dark:from-blue-900 dark:to-blue-950 font-ambit' >
    <NavBar/>
    <Top />
    <Quotes />
    <Blog />
    <Footer />
  </main>
  </div>
  );
}
