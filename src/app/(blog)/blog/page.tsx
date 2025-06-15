import BlogCard from '@/components/cards/BlogCard'
import Container from '@/components/Container'
import { client } from '@/sanity/lib/client'
import { GET_ALL_BLOGS_QUERY } from '@/sanity/lib/queries'
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
                    <BlogCard key={item._id} blog={item} />
                ))}
            </div>
        </Container>
    </div>
  )
}

export default BlogPage