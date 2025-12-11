import MaterialSingle from '@/components/common/MaterialSingle'
import React from 'react'

function page() {
  return (
    <>
        <MaterialSingle 
            title='Żółty krzyż' 
            desc={`Podczas tworzenia żółtego krzyża, możemy trafić wcześniej na 3 etapy. Pierwszym etapem jest tzw. kropka gdzie żaden zółty element (papuga), nie jest skierowany żółtym kolorem do góry. To jest najdłuższa sytuacja, ale też najprostsza, gdyż wystarczy trzymać zółty kolor do góry, a przód jest nieistotny jaki kolor. Drugim etapm jest haczyk, który musi ustawiony jak godzina 9 lub 21 na zegarze. Trzecim i ostatnim etapem jest linia, która musi być ustawiona poziomo. W każdej z tych sytuacji wykonujemy ruchy jak na filmie.`}
        >
            <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                <iframe style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} src="https://www.youtube.com/embed/RQDxlfhLegg?si=9hR43k3MPy3BaP8k" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </MaterialSingle>
    </>
  )
}

export default page