import { GET_ALL_BLOGS_QUERYResult } from '@/sanity/types'
import Link from 'next/link'
import React from 'react'
import Image from "next/image"
import { urlFor } from '@/sanity/lib/image'
import { ExternalLink } from 'lucide-react'

type BlogCardProps = {
    blog: GET_ALL_BLOGS_QUERYResult[0]
}

function BlogCard({ blog }: BlogCardProps) {
  return (
    <Link href={`/blog/${blog.slug?.current}`} key={blog._id} target='_blank' title={`Blog: ${blog.title}`}>
        <div className='bg-white rounded-2xl p-5 space-y-5 border border-gray/50'>
            {blog.mainImage && (
                <figure className='relative w-full aspect-video rounded-xl overflow-hidden'>
                    <Image src={urlFor(blog.mainImage).url()} alt={blog.mainImage.alt || ""} fill className='object-cover' />
                </figure>
            )}
            <p className='font-medium text-lg line-clamp-2'>{blog.title}</p>
            <p className='flex gap-2 items-center'>Zobacz bloga <ExternalLink className='size-5' /></p>
        </div>
    </Link>
  )
}

export default BlogCard