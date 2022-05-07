import type { NextPage } from 'next'
import HomeScreen from "../Screens/HomeScreen/HomeScreen";
import LogScreen from "../Screens/LogScreen/LogScreen";


const Home: NextPage = () => {
  return (
    <div>
      {/*<HomeScreen/>*/}
      <LogScreen/>
    </div>
  )
}

export default Home;