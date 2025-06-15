import { defineQuery } from "next-sanity";

export const GET_ALL_BLOGS_QUERY = defineQuery(`
    *[_type == "post"] | order(_createdAt desc) {
        _id, _createdAt, title, slug, categories[]->, mainImage
    }
`)