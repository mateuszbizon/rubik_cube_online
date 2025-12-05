import MaterialSingle from '@/components/common/MaterialSingle'
import React from 'react'

function page() {
  return (
    <>
        <MaterialSingle 
            title='Narożnik na dole z białym kolorem przed nami. Krawędź góra. Kolory takie same' 
            desc={`Rozwiązanie: (R U' R') i wstawiamy parę. Krawędź musi znaleźć się na tej samej ściance, co jest narożnik.`}
        >
            <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                <iframe style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} src="hhttps://www.youtube.com/embed/BL46xq13CfE?si=1QUx_Kkiv-PklqOI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </MaterialSingle>
    </>
  )
}

export default page