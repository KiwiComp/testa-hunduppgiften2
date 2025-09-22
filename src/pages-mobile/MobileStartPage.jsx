import "../css-mobile/MobileStartPage.css"
import { useState } from 'react';


function StartPageComponent({fourDogsList}) {

    const [selectedDog, setSelectedDog] = useState(null);


    return(
        <section className="mobileStartPage">
            <h1>Mobile Start Page</h1>
            <p>bf jashd jaskhf ajksfh akslfh aöskfh ajksfh aksjfh asf jkashf a
                h fksal fhajkshf ajkshf kasfh askjhf jkdsbg jsdkbg ajksdbg afds
                 djskg bshdjlbg fskdjhf nisdjkbg wisudHJF OSKDJHGF VUwsjdkhg rwS
                  HSDUGJP IsdjghwueisJKDHTG hfjshjhg dj gbjedshusdh UDHGFu suiGT 
                  UDHFY uedgh sdjhg uisd ghsijdgh ujosduht djkGH åoeuwdhg o¨sIDHG we 
                   hdsug uSLID GBNU TGS.
            </p>

            <h1>Here are some of our dogs</h1>
            <section className="mobileDisplayAllDogs">
                {fourDogsList?.map((dog) => (

                    <article className='mobileDisplaySingleDog' key={dog.name} onClick={() => setSelectedDog(dog)}>
                        <article className="mobileDogImgContainer">
                            <img src={dog.img} alt={dog.name} style={{ width: '100px', height: '100px' }} />
                        </article>
                        
                        <article className="mobileDogInfoContainer">
                            <p><strong>{dog.name}</strong></p>
                    </article>
                
            </article>
                ))}
            </section>


            {selectedDog && (
                <section className="mobileOverlaySelectedDog" onClick={() => setSelectedDog(null)}>
                    <section className="mobileOverlayWindowSelectedDog" onClick={(e) => e.stopPropagation()}>
                        <h2>{selectedDog.name}</h2>
                        <article className="mobileSelectedDogContainer">
                            <article className="mobileSelectedDogImgContainer">
                                {/* <img src={selectedDog.img} alt="" style={{ width: '300px', height: '300px' }}/> */}
                                <img src={selectedDog.img} alt="" />
                            </article>

                            <article className="mobileSelectedDogInfoContainer">

                                <article className="mobileSelectedDogInfoDogDetailsContainer">
                                    <p><strong>Name:</strong> {selectedDog.name}</p>
                                    <p><strong>Age:</strong> {selectedDog.age} years old</p>
                                    <p><strong>Breed:</strong> {selectedDog.breed}</p>
                                    <p><strong>Sex:</strong> {selectedDog.sex}</p>
                                </article>

                                <article className="mobileSelectedDogInfoOwnerDetailsContainer">
                                    <p><strong>Owner:</strong> {selectedDog.owner.name} {selectedDog.owner.lastName}</p>
                                    <p><strong>Phone:</strong> {selectedDog.owner.phoneNumber}</p>
                                </article>
                            </article>
                            
                        </article>
                    </section>
                </section>
            )}

            <h4>Thanks!</h4>

        </section>
    )
}


export default StartPageComponent;