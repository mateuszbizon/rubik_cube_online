import React from 'react'
import Container from '../ui/container'

function MySkillVideoSection() {
  return (
    <section className='py-section bg-white'>
        <Container>
            <h2 className='heading2 text-center heading-margin-bottom'>Zobacz mnie w akcji</h2>
            {/* <video src="https://vimeo.com/reviews/e34e9005-0066-427d-8c76-4e5ec4c83d63/videos/1136462682" controls className='w-full aspect-video max-w-[1000px] mx-auto rounded-2xl'></video> */}
            <div style={{ padding: "56.25% 0 0 0", position: "relative" }}><iframe src="https://player.vimeo.com/video/1136462682?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerPolicy="strict-origin-when-cross-origin" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} title="przykladowe_ulozenia"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
        </Container>
    </section>
  )
}

export default MySkillVideoSection