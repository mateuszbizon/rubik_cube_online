import MaterialSingle from '@/components/common/MaterialSingle'
import React from 'react'

function page() {
  return (
    <>
        <MaterialSingle 
            title='Żółta ściana - warsztat samochodowy' 
            desc={`Obracamy kostkę tak aby biała ściana znalazła się na górze. Każdy nasz element co składa się z trzech kolorów w tym z żółtego, to jest nasze koło w naszym warsztacie. Te koło musi znaleźć się na dole, po prawej stronie. Żółty kolor nie jest istotny gdzie się patrzy, czy na nas czy na prawą stronę. W obu przypadkach jest dobrze. Ruchy wykonujemy takie jak przy robieniu żółtego krzyża, tylko bez ruchów przednich, jak na filmie. Gdy już obrócimy nasze koło żółtym kolorem na doł, podstawiamy następne koło, tak aby znalazło się z prawej strony na dole. Tutaj bardzo ważne aby podstawić następne koło dolną ścianką. Nie obracamy całej kostki. Ruchy te powtarzamy aż do ułożenia całej żółtej ściany.`}
        >
            <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                <iframe style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} src="https://www.youtube.com/embed/DusWC8hPUOw?si=Xg9zE9tHplRRTcMQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </MaterialSingle>
    </>
  )
}

export default page