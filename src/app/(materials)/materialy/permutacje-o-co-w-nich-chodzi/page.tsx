import MaterialSingle from '@/components/common/MaterialSingle'
import { Button } from '@/components/ui/button'
import React from 'react'

function page() {
  return (
    <>
        <MaterialSingle 
            title='Permutacje. O co w nich chodzi' 
            desc={`Na samym początku w przygodzie z permutacjami, najlepiej podzielić je na dwie grupy. Pierwsza grupa składa się z 4 permutacji, w których zamieniamy tylko krawędzie. Są to permutacje: U (rowerek), U', H oraz Z. Druga grupa to 17 permutacji z których przechodzimy do grupy pierwszej, wykonując sanki (permutacja A) jeśli mamy światełka lub permutację Y jeśli nie mamy światełek ani nie ma grupy pierwszej - wtedy na każdej ścianie będą narożniki składające się z kolorów przeciwnych np. niebieski i zielony lub czerwony i pomarańczowy. W rezultacie potrzebujemy tylko 6 permutacji aby szybciej rozwiązać ostatni etap, zmiast od razu się uczyć 21 :)`}
        >
            <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                <iframe style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} src="https://www.youtube.com/embed/CJAI2iPbSUQ?si=Aka7h_vSHJeAlZ5-" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </MaterialSingle>
        <div className='mt-10 space-y-5'>
            <p className='bigger-text'>
                Pobierz rozwiązania na podstawowe permutacje w formacie PDF, klikając przycisk poniżej
            </p>
            <Button asChild>
                <a href={"/permutacje_podstawowe.pdf"} download>
                    Pobierz
                </a>
            </Button>
        </div>
    </>
  )
}

export default page