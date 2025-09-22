import smallCompanyLogo from '../assets/companyLogo.webp'
import "../css-desktop/desktopHeader.css"


function DesktopHeaderComponent() {


    return(
        <section className="desktopHeader">
            <section className="desktopLeftHeader">
                <img 
                    src={smallCompanyLogo} 
                    alt="Small company logo that navigates to start page." 
                    style={{height: "40px", width: "40px" }}
                />
                
            </section>
            <section className="desktopRightHeader">
                <h3>All Dogs</h3>
                <h3>All Owners</h3>
                <h3>All Activities</h3>
            </section>
        </section>
    )
}


export default DesktopHeaderComponent;