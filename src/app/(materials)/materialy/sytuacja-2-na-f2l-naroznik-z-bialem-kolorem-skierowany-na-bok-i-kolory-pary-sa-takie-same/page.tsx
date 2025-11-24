import MaterialSingle from '@/components/common/MaterialSingle'
import React from 'react'

function page() {
  return (
    <>
        <MaterialSingle 
            title='Sytuacja 2 na F2L: Narożnik z białym kolorem skierowany na bok oraz kolory pary u góry takie same' 
            desc={`W tej sytuacji najważniejsze aby biały kolor narożnika trzymać zawsze z boku, prawej lub lewej strony. Wtedy unikniemy problemów z łączeniem elementów w parę. Aby połączyć parę, należy narożnikiem zjechać raz na dół, podjechać krawędzią obok narożnika, który był wcześniej na górze i wrócić narożnikiem. Jest jedna sytuacja trudna w której robi wyjątek i biały kolor narożnika trzymam przed sobą, tak aby rozbić trudną sytuację. Po rozbiciu, robimy tak jak wcześniej.`}
        >
            <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                <iframe style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} src="https://www.youtube.com/embed/VJAnCYfNNcA?si=kv6iP0ytXE84fP-8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </MaterialSingle>
    </>
  )
}

export default page