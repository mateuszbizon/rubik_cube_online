import React from 'react'
import Container from '../Container'
import { Mic, Smile, Video, Wifi } from 'lucide-react'

function RequireSection() {
  return (
    <section className='py-section bg-dark text-white'>
        <Container>
            <h2 className='heading2 text-center mb-16'>Co jest potrzebne aby zacząć naukę kostki Rubika online?</h2>
            <Container className='space-y-14 h-auto w-full max-w-[600px] px-0'>
                <div className='relative rounded-2xl bg-black p-7 space-y-3'>
                    <div className='absolute -top-6 left-10 rounded-full bg-dark size-12 flex justify-center items-center'>
                        <Wifi className='size-6' />
                    </div>
                    <h3 className='bigger-text'>Połączenie inernetowe</h3>
                    <p className='md:text-lg'>Jedna rzecz która jest <strong>wymagana</strong> aby móc połączyć się i rozmawiać ze sobą to jest właśnie działający internet. Fajnie gdyby jeszcze inernet był w miarę szybki żeby nie przerywało zajęć.</p>
                </div>

                <div className='relative rounded-2xl bg-black p-7 space-y-3'>
                    <div className='absolute -top-6 left-10 rounded-full bg-dark size-12 flex justify-center items-center'>
                        <Video className='size-6' />
                    </div>
                    <h3 className='bigger-text'>Kamera</h3>
                    <p className='md:text-lg'>Podczas zajęć wygodne jest jak mogę zobaczyć jak uczeń układa kostkę. W ten sposób widzę popełniane przez niego błedy i jesteśmy w stanie szybciej je poprawić.</p>
                </div>

                <div className='relative rounded-2xl bg-black p-7 space-y-3'>
                    <div className='absolute -top-6 left-10 rounded-full bg-dark size-12 flex justify-center items-center'>
                        <Mic className='size-6' />
                    </div>
                    <h3 className='bigger-text'>Mikrofon</h3>
                    <p className='md:text-lg'>Na platformie na której uczymy jest dostępny czat za pomocą którego możemy rozmawiać. Jednak nie jest to tak wygodne jak gdy obie strony mają działający mikrofon.</p>
                </div>

                <div className='relative rounded-2xl bg-black p-7 space-y-3'>
                    <div className='absolute -top-6 left-10 rounded-full bg-dark size-12 flex justify-center items-center'>
                        <Smile className='size-6' />
                    </div>
                    <h3 className='bigger-text'>Pozytywne nastawienie :)</h3>
                    <p className='md:text-lg'>Dobry humor i uśmiech na twarzy to już połowa sukcesu. Każdy kto przychodzi z pozytywną energią, poprawia od razu jakość rozmowy. Lekcja staje się przyjemniejsza i nie popełnia się tyle błędów ;)</p>
                </div>
            </Container>
        </Container>
    </section>
  )
}

export default RequireSection