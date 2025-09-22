import { useOutletContext } from "react-router";
import DesktopStartPage from "../pages-desktop/DesktopStartPage.jsx";
import MobileStartPage from "../pages-mobile/MobileStartPage.jsx"


function StartPage() {

    const outletContext = useOutletContext() || {}; // default till tomt objekt
    const { fourDogsList = [] } = outletContext; // default till tom array

    return(
        <section className="startPage">
            <main className='mobileOnly'>
                <MobileStartPage fourDogsList={fourDogsList}/>
            </main>

             <main className='desktopOnly'>
                <DesktopStartPage />
             </main>
        </section>
    )
}


export default StartPage;