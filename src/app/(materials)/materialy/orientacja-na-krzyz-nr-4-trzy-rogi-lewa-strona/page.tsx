import MaterialSingle from '@/components/common/MaterialSingle'
import { Button } from '@/components/ui/button'
import React from 'react'

function page() {
  return (
    <>
        <MaterialSingle 
            title='Orientacja na krzyż nr 4 - trzy rogi lewa strona' 
            desc={`Rozwiązanie: L' U' L U' L' U2 L`}
        >
            <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                <iframe style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} src="https://www.youtube.com/embed/KbXBc76MTSI?si=cLCcIl2cZQD4Or1E" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </MaterialSingle>
        <div className='mt-10 space-y-5'>
            <p className='bigger-text'>
                Pobierz rozwiązania na wszystkie orientacje na krzyż w formacie PDF, klikając przycisk poniżej
            </p>
            <Button asChild>
                <a href={"/orientacje_krzyż.pdf"} download>
                    Pobierz
                </a>
            </Button>
        </div>
    </>
  )
}

export default page