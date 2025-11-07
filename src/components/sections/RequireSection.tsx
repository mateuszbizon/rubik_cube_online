import React from 'react'
import { Mic, Smile, Video, Wifi } from 'lucide-react'
import { CardSpotlight } from '../ui/card-spotlight'
import Container from '../ui/container'
import AnimatedContent from '../animations/AnimatedContent/AnimatedContent'

function RequireSection() {
  return (
    <section className='py-section bg-foreground text-white'>
        <Container>
            <AnimatedContent direction='horizontal'>
                <h2 className='heading2 text-center heading-margin-bottom'>
                    Co jest potrzebne, aby rozpocząć kurs kostki Rubika online?
                </h2>
            </AnimatedContent>
            <Container className='space-y-14 max-w-[700px] px-0'>
                <AnimatedContent >
                    <CardSpotlight className='relative rounded-2xl bg-black p-7 space-y-3'>
                        <div className='absolute -top-6 left-10 rounded-full bg-foreground size-12 flex justify-center items-center'>
                            <Wifi className='size-6' />
                        </div>
                        <h3 className='bigger-text relative'>Połączenie internetowe</h3>
                        <p className='md:text-lg relative'>Aby rozpocząć kurs kostki Rubika online, wystarczy stabilne połączenie z internetem. Im lepsza jakość połączenia, tym płynniej przebiegają lekcje – bez opóźnień, z dobrą widocznością i swobodną rozmową. Dzięki temu nauka staje się przyjemniejsza i bardziej efektywna.</p>
                    </CardSpotlight>
                </AnimatedContent>

                <AnimatedContent >
                    <CardSpotlight className='relative rounded-2xl bg-black p-7 space-y-3'>
                        <div className='absolute -top-6 left-10 rounded-full bg-foreground size-12 flex justify-center items-center'>
                            <Video className='size-6' />
                        </div>
                        <h3 className='bigger-text relative'>Kamera</h3>
                        <p className='md:text-lg relative'>Podczas kursu układania kostki Rubika online bardzo ważne jest, żebym mógł widzieć, jak uczeń układa kostkę. Wtedy łatwiej wskazać błędy i zaproponować konkretne poprawki. Dzięki temu cały kurs kostki Rubika przebiega sprawniej, a postępy widać już po kilku zajęciach.</p>
                    </CardSpotlight>
                </AnimatedContent>

                <AnimatedContent >
                    <CardSpotlight className='relative rounded-2xl bg-black p-7 space-y-3'>
                        <div className='absolute -top-6 left-10 rounded-full bg-foreground size-12 flex justify-center items-center'>
                            <Mic className='size-6' />
                        </div>
                        <h3 className='bigger-text relative'>Mikrofon</h3>
                        <p className='md:text-lg relative'>Na platformach, gdzie prowadzę kurs kostki Rubika, jest dostępny czat, ale najlepiej sprawdza się rozmowa głosowa. Warto mieć sprawny mikrofon – dzięki temu uczeń może od razu zadawać pytania i lepiej zrozumieć wskazówki. To duże ułatwienie w nauce.</p>
                    </CardSpotlight>
                </AnimatedContent>

                <AnimatedContent >
                    <CardSpotlight className='relative rounded-2xl bg-black p-7 space-y-3'>
                        <div className='absolute -top-6 left-10 rounded-full bg-foreground size-12 flex justify-center items-center'>
                            <Smile className='size-6' />
                        </div>
                        <h3 className='bigger-text relative'>Pozytywne nastawienie :)</h3>
                        <p className='md:text-lg relative'>Podczas kursu kostki Rubika online pozytywne nastawienie naprawdę ma znaczenie. Dobra energia i uśmiech sprawiają, że nauka idzie szybciej, a każda nowa umiejętność daje satysfakcję. W końcu to ma być nie tylko nauka, ale też zabawa i relaks.</p>
                    </CardSpotlight>
                </AnimatedContent>
            </Container>
        </Container>
    </section>
  )
}

export default RequireSection