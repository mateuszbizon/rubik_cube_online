import MaterialSingle from '@/components/common/MaterialSingle'
import React from 'react'

function page() {
  return (
    <>
        <MaterialSingle 
            title='Rower' 
            desc={`Ostatni etap w metodzie podstawowej, w której na każdej ścianie mamy światełka i musimy znaleźć tzw. ścianę czyli światełka plus kolor pomiędzy nimi taki sam. Ścianę ustawiamy na przód tym razem i wykonujemy historyjkę. Po jej wykonaniu kostka powinna być ułożona. Jeśli nie, wykonujemy historyjkę jeszcze raz. Jeśli nie znajdziemy ściany, wykonujemy historyjkę z dowolnej pozycji i po jej wykonaniu powinniśmy mieć już ścianę do ustawienia.`}
        >
            <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                <iframe style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} src="https://www.youtube.com/embed/T9PGX6Cgp4U?si=AaikZtufxAYruSAn" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </MaterialSingle>
    </>
  )
}

export default page