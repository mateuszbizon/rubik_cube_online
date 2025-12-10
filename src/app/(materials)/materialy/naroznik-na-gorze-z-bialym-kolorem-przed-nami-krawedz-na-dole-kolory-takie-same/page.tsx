import MaterialSingle from '@/components/common/MaterialSingle'
import React from 'react'

function page() {
  return (
    <>
        <MaterialSingle 
            title='Narożnik na górze z białym kolorem przed nami. Krawędź na dole. Kolory takie same' 
            desc={`Na samym początku biały kolor narożnika musi być skierowany na nas. Następnie należy ustawić narożnik tak aby znalazł się na tyle, ale wciąż na tej samej ścianie co krawędź. Następnie jednym ruchem do góry wyciągamy krawędź na górę i podjeżdzamy nią obok narożnika. Potem wracamy boczną ścianą na dół i mamy połączoną parę.`}
        >
            <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                <iframe style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} src="https://www.youtube.com/embed/G2oKVBf0mrM?si=out1zJxC4c6-KrPs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </MaterialSingle>
    </>
  )
}

export default page