import MaterialSingle from '@/components/common/MaterialSingle'
import React from 'react'

function page() {
  return (
    <>
        <MaterialSingle 
            title='Krawędź poprawnie wstawiona. Narożnik u góry z białym kolorem do góry nad krawędzią' 
            desc={`Rozwiązanie: (R U R' U') x3 lub od tyłu w taki sposób: (U R U' R') x3. Można wybrać rozwiązanie której najlepiej nam pasuje. Proponuje jednak wybrać opcję do tyłu, gdyż zaoszczędza nam to jeden ruch w przypadku gdy narożnik jest odsunięty (ruch U) oraz nie zmieniamy układu ręki.`}
        >
            <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                <iframe style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} src="https://www.youtube.com/embed/7Su4UcLKVh8?si=2_EOf4Io1t3oZp2-" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </MaterialSingle>
    </>
  )
}

export default page