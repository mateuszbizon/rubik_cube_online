import Container from '@/components/Container'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { GET_SINGLE_BLOG_QUERY } from '@/sanity/lib/queries'
import { PortableText } from 'next-sanity'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import React from 'react'

type Props = {
    params: Promise<{ slug: string }>
}

async function SingleBlogPage({ params }: Props) {
    const slug = (await params).slug
    const blog = await client.fetch(GET_SINGLE_BLOG_QUERY, {
        slug
    })

    if (!blog) return notFound()

  return (
    <>
        <section className='header-background py-section rounded-b-4xl'>
            <Container>
                <h1 className='heading1 text-dark text-center'>{blog.title}</h1>
            </Container>
        </section>
        <section className='pb-section'>
            <Container>
                {blog.mainImage && (
                    <figure className='relative aspect-video -mt-8'>
                        <Image src={urlFor(blog.mainImage).url()} alt={blog.mainImage.alt || ""} fill className='object-contain' />
                    </figure>
                )}
                <div className='prose mt-10'>
                    {Array.isArray(blog.body) && <PortableText value={blog.body} />}
                </div>
            </Container>
        </section>
    </>
  )
}

export default SingleBlogPage