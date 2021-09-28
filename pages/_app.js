import '../styles/globals.css';
import Navbar from '../components/Navbar/Navbar'

function MyApp({ Component: Pages, pageProps }) {
  return (
    <>
      <Navbar />
      <Pages {...pageProps} />      
    </>
  );
}

export default MyApp;
