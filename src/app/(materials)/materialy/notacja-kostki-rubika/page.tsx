import MaterialSingle from '@/components/common/MaterialSingle'
import React from 'react'

function page() {
  return (
    <>
        <MaterialSingle 
            title='Notacja kostki Rubika' 
            desc={`Notacja czyli jak w szybki i uniwersalny sposób pokazać którą ścianą ruszamy i w którym kierunku. Ściany są odpowiednio oznaczone literkami: Góra - U, Lewo - L, Prawo - R, Przód - F, Dół - D, Tył - B. Dodatkowo musimy wiedzieć w jakim kierunku obracamy ścianę, tj. w kierunku zgodnym do ruchów wskazówek zegara albo przeciwnie. Jeśli mamy ruch zgodny do ruchów wskazówek zegara, oznaczamy to literą przypisaną do danej ściany. Jeśli jest przeciwnie do ruchów wskazówek zegara wtedy mamy np. U' czyli dodajemy tylko apostrof z prawej strony litery u góry i czytamy to jako "prim". Mamy jeszcze ruchy podwójne np. R2 zamiast R R lub R' R'`}
        >
            <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                <iframe style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} src="https://www.youtube.com/embed/UQOgt-jUULE?si=YpU1aXwvbGfZdATU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </MaterialSingle>
    </>
  )
}

export default page