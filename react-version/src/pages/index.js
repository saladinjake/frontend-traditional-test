
import { Layout } from '../layout/Layout';
import { AppProvider } from "../context"
import HomePage from "../components/Body/Body"

const Home = () => {
  return (
    <>
      <AppProvider>
        <Layout>
           <HomePage/>
        </Layout>
      </AppProvider>
    </>

  );
};

export default Home;