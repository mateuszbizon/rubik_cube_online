import { MATERIALS_ITEMS } from '@/constants/materials'
import { NAV_ITEMS_LIST } from '@/constants/navItemsList'
import { client } from '@/sanity/lib/client'
import { GET_ALL_BLOGS_QUERY } from '@/sanity/lib/queries'
import type { MetadataRoute } from 'next'
 
export const baseUrl = "https://www.kurskostkirubika.pl"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const blogs = await client.withConfig({
        useCdn: false
    }).fetch(GET_ALL_BLOGS_QUERY)

    const blogLinks = blogs.map(post => ({
        url: `${baseUrl}/blog/${post.slug?.current}`,
        lastModified: post._createdAt,
        priority: 0.8,
    }))

    const navLinks = NAV_ITEMS_LIST.map(item => ({
        url: `${baseUrl}${item.href}`,
        lastModified: new Date(),
        priority: 0.8,
    }))

    const materialLinks = MATERIALS_ITEMS.map(item => {
        return item.items.map(subItem => ({
            url: `${baseUrl}${subItem.href}`,
            lastModified: new Date(),
            priority: 0.8,
        }))
    })

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1,
    },
    ...navLinks,
    {
      url: `${baseUrl}/zaczynam-nauke`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/oferta/kurs-dla-dzieci`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/oferta/kurs-kostki-2x2`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/oferta/kurs-kostki-4x4`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/oferta/kurs-pyraminx`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/oferta/kurs-skewb`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/oferta/kurs-speedcubingu`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/oferta/metoda-fridrich`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/oferta/metoda-podstawowa`,
      lastModified: new Date(),
      priority: 0.8,
    },
    ...blogLinks,
    ...materialLinks.flat(),
  ]
}