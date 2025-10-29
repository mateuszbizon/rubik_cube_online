import AllBlogs from '@/components/blog/AllBlogs'
import Container from '@/components/ui/container'
import GridLoading from '@/components/ui/grid-loading'
import React, { Suspense } from 'react'

function BlogPage() {
  return (
    <div className='py-10'>
        <Container>
            <h1 className='heading1 mb-10'>Blogi</h1>
            <p className='bigger-text mb-7'>Poniżej znajdziesz listę wszystkich blogów utworzonych na tej stronie</p>
            <Suspense fallback={<GridLoading />}>
                <AllBlogs />
            </Suspense>
        </Container>
    </div>
  )
}

export default BlogPage