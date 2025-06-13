import React from 'react'
import Container from '../Container'
import { Mic, Smile, Video, Wifi } from 'lucide-react'
import { CardSpotlight } from '../ui/card-spotlight'

function RequireSection() {
  return (
    <section className='py-section bg-dark text-white'>
        <Container>
            <h2 className='heading2 text-center mb-16'>Co jest potrzebne aby zacząć naukę kostki Rubika online?</h2>
            <Container className='space-y-14 h-auto w-full max-w-[600px] px-0'>
                <CardSpotlight className='relative rounded-2xl bg-black p-7 space-y-3'>
                    <div className='absolute -top-6 left-10 rounded-full bg-dark size-12 flex justify-center items-center'>
                        <Wifi className='size-6' />
                    </div>
                    <h3 className='bigger-text relative'>Połączenie inernetowe</h3>
                    <p className='md:text-lg relative'>Aby rozpocząć naukę układania kostki Rubika online, potrzebne jest działające połączenie z internetem. Najlepiej, jeśli jest ono stabilne i w miarę szybkie – wtedy lekcje online przebiegają bez zakłóceń i można bez problemu rozmawiać oraz widzieć ruchy na kostce.</p>
                </CardSpotlight>

                <CardSpotlight className='relative rounded-2xl bg-black p-7 space-y-3'>
                    <div className='absolute -top-6 left-10 rounded-full bg-dark size-12 flex justify-center items-center'>
                        <Video className='size-6' />
                    </div>
                    <h3 className='bigger-text relative'>Kamera</h3>
                    <p className='md:text-lg relative'>Podczas lekcji układania kostki Rubika online, bardzo pomocne jest, gdy mogę widzieć, jak uczeń układa kostkę. Dzięki temu łatwiej zauważyć błędy i skuteczniej przekazać wskazówki. Nauka kostki Rubika online staje się wtedy bardziej efektywna i przyjemna.</p>
                </CardSpotlight>

                <CardSpotlight className='relative rounded-2xl bg-black p-7 space-y-3'>
                    <div className='absolute -top-6 left-10 rounded-full bg-dark size-12 flex justify-center items-center'>
                        <Mic className='size-6' />
                    </div>
                    <h3 className='bigger-text relative'>Mikrofon</h3>
                    <p className='md:text-lg relative'>Na platformie na której odbywają się zajęcia jest dostępny czat, jednak podczas nauki układania kostki Rubika online, znacznie lepiej sprawdza się bezpośrednia rozmowa głosowa. Dlatego warto mieć sprawny mikrofon, by móc zadawać pytania i szybciej zrozumieć wskazówki.</p>
                </CardSpotlight>

                <CardSpotlight className='relative rounded-2xl bg-black p-7 space-y-3'>
                    <div className='absolute -top-6 left-10 rounded-full bg-dark size-12 flex justify-center items-center'>
                        <Smile className='size-6' />
                    </div>
                    <h3 className='bigger-text relative'>Pozytywne nastawienie :)</h3>
                    <p className='md:text-lg relative'>Podczas nauki kostki Rubika online, dobry humor i pozytywna energia naprawdę robią różnicę! Zajęcia przebiegają wtedy w miłej atmosferze, a uczniowie uczą się szybciej i z większą przyjemnością. Uśmiech na twarzy i pozytywne nastawienie to połowa sukcesu ;)</p>
                </CardSpotlight>
            </Container>
        </Container>
    </section>
  )
}

export default RequireSection