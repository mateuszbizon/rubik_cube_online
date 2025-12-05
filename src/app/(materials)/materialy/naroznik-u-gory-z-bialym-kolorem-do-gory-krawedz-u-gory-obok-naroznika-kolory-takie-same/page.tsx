import MaterialSingle from '@/components/common/MaterialSingle'
import React from 'react'

function page() {
  return (
    <>
        <MaterialSingle 
            title='Narożnik u góry z białym kolorem do góry. Krawędź u góry obok narożnika. Kolory takie same' 
            desc={`W tej sytuacji należy ustawić narożnik tak aby znalazł się na dole, za pomocą trzy ruchowca lub wstawieniem pary. Nastepnie wykonujemy sytuacje które wczesniej pokazałem, gdzie narożnik jest właśnie na dole, a krawędź u góry.`}
        >
            <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                <iframe style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} src="https://www.youtube.com/embed/McENeIMzK9I?si=sBsbzbD4X8a6SNtt" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </MaterialSingle>
    </>
  )
}

export default page