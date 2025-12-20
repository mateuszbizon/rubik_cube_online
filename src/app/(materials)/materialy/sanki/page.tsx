import MaterialSingle from '@/components/common/MaterialSingle'
import React from 'react'

function page() {
  return (
    <>
        <MaterialSingle 
            title='Sanki' 
            desc={`Przed ostatni etap w metodzie podstawowej w której musimy wyszukać tzw. światełka, czyli te same kolory na ścianie po bokach. Kolor pomiędzy światełkami może być taki sami, ale nie musi. Światełka ustawiamy na tył i wykonujemy historyjkę. Jeśli nie znajdziemy żadnych światełek, wykonujemy historyjkę z dowolnej pozycji i po jej wykonaniu powinniśmy mieć już światełka do ustawienia.`}
        >
            <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                <iframe style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} src="https://www.youtube.com/embed/zxmKLGsvKhM?si=aq9tDxVvuAD4iw5K" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </MaterialSingle>
    </>
  )
}

export default page