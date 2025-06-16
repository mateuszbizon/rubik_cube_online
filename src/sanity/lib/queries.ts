import { defineQuery } from "next-sanity";

export const GET_ALL_BLOGS_QUERY = defineQuery(`
    *[_type == "post"] | order(_createdAt desc) {
        _id, _createdAt, title, slug, categories[]->, mainImage
    }
`)

export const GET_SINGLE_BLOG_QUERY = defineQuery(`
    *[_type == "post" && slug.current == $slug][0] {
        _id, _createdAt, title, categories[]->, body[], mainImage
    }    
`)