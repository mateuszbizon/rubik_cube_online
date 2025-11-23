import MaterialSingle from '@/components/common/MaterialSingle'
import React from 'react'

function page() {
  return (
    <>
        <MaterialSingle 
            title='Sytuacja 1 na F2L: narożnik z białem kolorem skierowany do góry' 
            desc={`Pierwsza sytuacja na F2l tj. gdy narożnik skierowany jest kolorem białym do góry. Ważne aby narożnik oraz krawędź nie były połączone. Krawędź łączymy kolorem przednim krawędzi do kolory środka. Następnie przesuwamy przednią ścianę w kierunku koloru przeciwnego do koloru górnego krawędzi. Na koniec podjeżdzamy narożnikiem nad krawędź i w ten sposób powinna być połączona para.`}
        >
            <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                <iframe style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} src="https://www.youtube.com/embed/pijC3ECpP_I?si=x4ctvrv_zKkSpPBQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </MaterialSingle>
    </>
  )
}

export default page