import { client } from '@/sanity/lib/client'
import { GET_ALL_BLOGS_QUERY } from '@/sanity/lib/queries'
import React from 'react'
import BlogCard from '../cards/BlogCard'

async function AllBlogs() {
    const blogs = await client.withConfig({
        useCdn: false
    }).fetch(GET_ALL_BLOGS_QUERY)

  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10'>
        {blogs.map(item => (
            <BlogCard key={item._id} blog={item} />
        ))}
    </div>
  )
}

export default AllBlogs