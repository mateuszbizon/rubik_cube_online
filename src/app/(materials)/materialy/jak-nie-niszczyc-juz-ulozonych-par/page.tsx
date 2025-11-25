import MaterialSingle from '@/components/common/MaterialSingle'
import React from 'react'

function page() {
  return (
    <>
        <MaterialSingle 
            title='Jak nie niszczyć już ułożonych par' 
            desc={`Za każdym razem gdy robimy ruch boczną ścianą podczas rozbijania elementów, trzeba sprawdzić czy z tyłu po tej samej stronie, znajduje się już ułożona para. Jeśli tak należy w miejsce ułożonej pary wstawić jakąś nieułożoną. Robimy to tak że obracamy całą kostkę, a następnie wracamy tak aby nasza para nad którą pracujemy była znowu z przodu.`}
        >
            <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                <iframe style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} src="https://www.youtube.com/embed/GXLLCVmYgiM?si=h9Cs0dsmBU3WzsHA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </MaterialSingle>
    </>
  )
}

export default page