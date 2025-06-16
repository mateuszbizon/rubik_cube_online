import React, { Suspense } from 'react'
import Container from '../Container'
import RecentBlogs from '../blog/RecentBlogs'
import GridLoading from '../ui/grid-loading'

function RecentBlogsSection() {
  return (
    <section className='py-section bg-light/50'>
        <Container>
            <h2 className='heading2 text-center text-dark mb-10'>Ostatnie wpisy na bloga</h2>
            <Suspense fallback={<GridLoading />}>
                <RecentBlogs />
            </Suspense>
        </Container>
    </section>
  )
}

export default RecentBlogsSection