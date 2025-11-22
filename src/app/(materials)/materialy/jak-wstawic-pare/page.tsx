import MaterialSingle from '@/components/common/MaterialSingle'
import React from 'react'

function page() {
  return (
    <>
        <MaterialSingle 
            title='Jak wstawić parę' 
            desc={`Narożnik oraz krawędź połączona ze sobą kolorami, tworzy tzw. połączoną parę lub slot. Aby wstawić taką parę poprawnie, należy najpierw górny kolor takiej pary ustawić tak aby przednia ścianka miała taki sam kolor. Wtedy drugi kolor pary będzie po przeciwnej stronie oraz miejsce gdzie mam wstawić parę będzie też po drugiej stronie na dole. Aby wstawić taką parę należy wykonać ruchy pokazane na filmie lub jeśli ktoś zna notację można wykonać ruchy: R U' R' i na lewą rękę: L' U L.`}
        >
            <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                <iframe style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} src="https://www.youtube.com/embed/cl7Of11thRA?si=6koNsKJKEpuSQ0rg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </MaterialSingle>
    </>
  )
}

export default page