import Container from '@/components/Container'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { GET_ALL_BLOGS_QUERY } from '@/sanity/lib/queries'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

async function BlogPage() {
    const blogs = await client.fetch(GET_ALL_BLOGS_QUERY)

  return (
    <div className='py-10'>
        <Container>
            <h1 className='heading1 mb-10'>Blogi</h1>
            <p className='bigger-text mb-7'>Poniżej znajdziesz listę wszystkich blogów utworzonych na tej stronie</p>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10'>
                {blogs.map(item => (
                    <Link href={`/blog/${item.slug?.current}`} key={item._id} target='_blank' title={`Blog: ${item.title}`}>
                        <div className='bg-white rounded-2xl p-5 space-y-5 border border-gray/50'>
                            {item.mainImage && (
                                <figure className='relative w-full aspect-video rounded-xl overflow-hidden'>
                                    <Image src={urlFor(item.mainImage).url()} alt={item.mainImage.alt || ""} fill className='object-cover' />
                                </figure>
                            )}
                            <p className='font-medium text-lg line-clamp-2'>{item.title}</p>
                            <p className='flex gap-2 items-center'>Zobacz bloga <ExternalLink className='size-5' /></p>
                        </div>
                    </Link>
                ))}
            </div>
        </Container>
    </div>
  )
}

export default BlogPage