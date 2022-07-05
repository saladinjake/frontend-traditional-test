import { Layout } from '../layout/Layout'
import { AppProvider } from '../context'
import HomePage from '../components/Body/Body'
import Rightside from "../components/Rightside/Rightside"
const Home = () => {

  return (
    <>
      <AppProvider>
        <Layout>
          <HomePage 
            pageTitle={"Dashboard"}
          > 
            <Rightside/>
          </HomePage>
        </Layout>
      </AppProvider>
    </>
  )
}

export default Home
