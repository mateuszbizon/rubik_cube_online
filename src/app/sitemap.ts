import { client } from '@/sanity/lib/client'
import { GET_ALL_BLOGS_QUERY } from '@/sanity/lib/queries'
import type { MetadataRoute } from 'next'
 
export const baseUrl = "https://naukakostkirubikaonline.vercel.app"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const blogs = await client.fetch(GET_ALL_BLOGS_QUERY)

    const blogLinks = blogs.map(post => ({
        url: `${baseUrl}/blog/${post.slug?.current}`,
        lastModified: post._createdAt,
        priority: 0.8,
    }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      priority: 0.8,
    },
    ...blogLinks
  ]
}