import React from 'react'
import Container from '../ui/container'
import { SingleOffer } from '@/types';
import { BASIC_METHOD_OFFER } from '@/constants/offers';
import Image from 'next/image';
import ContactSection from './ContactSection';

type SingleOfferSectionProps = {
    title?: string;
    offer?: SingleOffer
}

function SingleOfferSection({ title = "Metoda podstawowa", offer = BASIC_METHOD_OFFER }: SingleOfferSectionProps) {
  return (
    <>
        <section className='py-section bg-background-dark'>
            <Container>
                <h2 className='heading3 text-center heading-margin-bottom'>{title}</h2>
                <div className={`grid md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3 lg:h-[600px] gap-x-5 gap-y-10 md:text-lg text-center font-medium`}>
                    <div className='single-offer-card lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2'>
                        <p>{offer.firstText}</p>
                    </div>
                    <div className='single-offer-card lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2'>
                        <p>{offer.secondText}</p>
                    </div>
                    {offer.fiveText && (
                        <div className='single-offer-card lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3'>
                            <p>{offer.fiveText}</p>
                        </div>
                    )}
                    <figure className={`relative rounded-2xl w-full aspect-square max-h-[400px] lg:aspect-auto lg:max-h-none lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-4 overflow-hidden`}>
                        <Image src={offer.image.src} alt={offer.image.alt} fill className='object-cover' />
                    </figure>
                    {offer.sixText && (
                        <div className='single-offer-card lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-3'>
                            <p>{offer.sixText}</p>
                        </div>
                    )}
                    <div className={`single-offer-card lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4`}>
                        <p>{offer.thirdText}</p>
                    </div>
                    <div className={`single-offer-card lg:col-start-3 lg:col-end-4 lg:row-start-3 lg:row-end-4`}>
                        <p>{offer.fourText}</p>
                    </div>
                </div>
            </Container>
        </section>
        <ContactSection title='Nie czekaj więcej. Spróbuj swoich sił' />
    </>
  )
}

export default SingleOfferSection