import { useState }from 'react';
import largeCompanyLogo from '../assets/companyLogo.webp'
import "../css-mobile/MobileHeaderStyle.css"


function HeaderComponent() {

    const [isVisible, setIsVisible] = useState(false);

    return(
        <section className='mobileHeader'>
            <img src={largeCompanyLogo} style={{height: "100px", width: "100px"}} />
            <article>
                <button onClick={() => setIsVisible(!isVisible)}>Menu</button>

                <article className={isVisible ? "dropDownMenuStartPage visible" : "dropDownMenuStartPage hidden"}>
                    <p>Länk 1</p>
                    <p>Länk 2</p>
                    <p>Länk 3</p>
                </article>
            </article>
        </section>

    )
}

export default HeaderComponent;