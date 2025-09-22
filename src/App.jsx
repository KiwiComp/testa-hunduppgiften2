import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "./css-mobile/Mobile.css"
import HeaderComponent from './components-mobile/MobileHeaderComponent'
import FooterComponent from './components-mobile/MobileFooterComponent'
import StartPageComponent from './pages-mobile/MobileStartPage'
import DesktopHeaderComponent from './components-desktop/DesktopHeaderComponent'
import { Outlet } from 'react-router'

function App() {
  

  const [dogList, setDogList] = useState([]);
  const [fourDogsList, setFourDogsList] = useState([]);


  useEffect(() => {
    if (dogList.length === 0) {
      fetchFromApi()
    }
    console.log(dogList)
    
  }, [])


  const fetchFromApi = async () => {
    console.log("1. Click")
    const baseUrl = "https://api.jsonbin.io/v3/b/";
    const binId = "68cd197eae596e708ff3bcf1";
    const apiKey = "$2a$10$HulJZZ.ZrVsw115/WjTVeu.j9MNoofezjJ67C7NKvbK6moVrCYZmy";

    const response = await fetch(`${baseUrl}${binId}`, {
      method: 'GET',
      headers: {
        "X-Master-Key": apiKey
      }
    })
    console.log("2. Reponse.", response)

    const data = await response.json();
    console.log("3. Data.", data)

    setDogList(data.record.record);
    console.log("4. Dog list.", dogList);
    generateFourRandomIndexes(data.record.record);
  }

  const generateFourRandomIndexes = (dogList) => {
    const shuffled = [...dogList].sort(() => 0.5 - Math.random());
    const listOfFourDogs = shuffled.slice(0,4);
    setFourDogsList(listOfFourDogs);
    console.log("Four dogs list: ", listOfFourDogs);
  }




  return (
    <section>
      {/* ------------- MOBILE ONLY ------------- */}
      <main className='mobileOnly'>
        <section className='mobileGrid'>
          <section>
            <HeaderComponent />
          </section>

          <section className='mobileMainCointent'>
            <Outlet context={{ fourDogsList, dogList }}/>
          </section>

          <section className='mobileFooter'>
            <FooterComponent />
          </section>
        </section>
      </main>




      {/* ------------- DESKTOP ONLY ------------- */}
      <main className='desktopOnly'>
        <section className='mobileGrid'>
          <section>
            <DesktopHeaderComponent />
          </section>

          <section className='mobileMainCointent'>
            <Outlet />
          </section>

          <section className='mobileFooter'>
            <FooterComponent />
          </section>
        </section>
      </main>
    </section>
  )
}

export default App
