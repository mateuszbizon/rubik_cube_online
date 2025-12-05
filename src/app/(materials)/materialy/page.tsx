import { Button } from '@/components/ui/button'
import { findMaterialItemByName } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

function MaterialsPage() {
  return (
    <>
        <h1 className='heading2 heading-margin-bottom'>Materiały do nauki</h1>
        <div className='grid md:grid-cols-2 gap-10 text-center'>
            <div className='offer-card'>
                <h3 className='heading3'>
                    Materiały dla metody Fridrich (podstawy)
                </h3>
                <p className='little-bigger-text'>
                    W materiałach tych znajdziesz porady jak zacząć metodę Fridrich. Są tu też pokazane pierwsze kroki na etapie F2L, który jest sercem tej metody. Nie może też zabraknąć omówienia etapów OLL oraz PLL.
                </p>
                <div className='flex justify-center mt-auto'>
                    <Button asChild>
                        <Link href={findMaterialItemByName("Metoda Fridrich podstawy")?.items[0].href!}>
                            Materiały
                        </Link>
                    </Button>
                </div>
            </div>
            <div className='offer-card'>
                <h3 className='heading3'>
                    Zaawansowane sytuacje na F2L
                </h3>
                <p className='little-bigger-text'>
                    Materiały te są przeznaczone dla osób, które już znają podstawy metody Fridrich i chcą poszerzyć swoją wiedzę o bardziej zaawansowane techniki układania par na etapie F2L.
                </p>
                <div className='flex justify-center mt-auto'>
                    <Button asChild>
                        <Link href={findMaterialItemByName("F2L zaawansowane")?.items[0].href!}>
                            Materiały
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    </>
  )
}

export default MaterialsPage