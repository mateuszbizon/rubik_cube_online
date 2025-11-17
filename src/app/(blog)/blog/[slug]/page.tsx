import SubPageHero from '@/components/sections/SubPageHero'
import Container from '@/components/ui/container'
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
        <SubPageHero title={blog.title!} />
        <section className='pb-section bg-white'>
            <Container className='pt-5'>
                {blog.mainImage && (
                    <figure className='relative aspect-video'>
                        <Image src={urlFor(blog.mainImage).url()} alt={blog.mainImage.alt || ""} fill className='object-contain' />
                    </figure>
                )}
            </Container>
            <Container className='bg-background-light/70 rounded-2xl py-10 mt-10 max-w-[700px]'>
                <div className='prose prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:xl:text-4xl prose-h2:font-bold'>
                    {Array.isArray(blog.body) && <PortableText value={blog.body} />}
                </div>
            </Container>
        </section>
    </>
  )
}

export default SingleBlogPage