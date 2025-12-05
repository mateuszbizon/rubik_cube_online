import MaterialSingle from '@/components/common/MaterialSingle'
import React from 'react'

function page() {
  return (
    <>
        <MaterialSingle 
            title='Narożnik na dole z białym kolorem na bok. Krawędź góra. Kolory takie same' 
            desc={`Krawędź musi znaleźć się na przedniej ściane. Wtedy robi jeden ruch boczną ścianą do góry i łączymy w ten sposób parę, którę należy tylko zachować, poprzez ruch na przeciwną boczną ścianę.`}
        >
            <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                <iframe style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} src="https://www.youtube.com/embed/OXMahz5bz4k?si=tI_XhdQ_0pOOvhni" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </MaterialSingle>
    </>
  )
}

export default page