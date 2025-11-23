import MaterialSingle from '@/components/common/MaterialSingle'
import React from 'react'

function page() {
  return (
    <>
        <MaterialSingle 
            title='Jak ustawić narożnik oraz krawędź na górną ścianę' 
            desc={`Jeśli oba elementy pary nie znajdują się na górnej ściance, trzeba tak je ustawić aby jeden z elementów był nad drugim na tej samej ściance z tym że jeden jest na górnej ściance a drugi na dole. Po ruchu bocznej ścianki do góry, element z dołu dajem na przeciwną stronę i wracamy boczną ścianką na dół. Ruchy: R U R'. Jeśli oba elementy są na dole obok siebie, należy wykonać ruch bocznej ścianki do góry, a nastepnie wykonać ruch w stronę tylnej ścianki, ale ruch wykonujemy górną ścianką. Następnie wracamy boczną ścianką na dół. Ruchy: R U' R'`}
        >
            <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                <iframe style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} src="https://www.youtube.com/embed/CISnZTz65hk?si=WEnDbQ7dNogT-tNA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </MaterialSingle>
    </>
  )
}

export default page