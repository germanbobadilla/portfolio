import '../styles/globals.css';
import Layout from '../components/Layout'

function MyApp({ Component: Pages, pageProps }) {
  return (
    <>
      <Layout>
      <Pages {...pageProps} />      
      </Layout>
    </>
  );
}

export default MyApp;
