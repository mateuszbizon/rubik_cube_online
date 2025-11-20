import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

function MaterialsPage() {
  return (
    <>
        <h1 className='heading2 heading-margin-bottom'>Materiały do nauki</h1>
        <div className='grid md:grid-cols-2 gap-10 text-center'>
            <div className='offer-card'>
                <h3 className='heading3'>
                    Materiały dla metody Fridrich
                </h3>
                <p className='little-bigger-text'>
                    W materiałach tych znajdziesz porady jak zacząć metodę Fridrich. Są tu też pokazane pierwsze kroki na etapie F2L, który jest sercem tej metody. Nie może też zabraknąć omówienia etapów OLL oraz PLL.
                </p>
                <div className='flex justify-center mt-auto'>
                    <Button asChild>
                        <Link href={"/oferta/metoda-podstawowa"}>
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