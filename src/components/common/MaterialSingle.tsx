import React, { PropsWithChildren } from 'react'

type MaterialSingleProps = PropsWithChildren & {
    title: string
    desc: string
}

function MaterialSingle({ title, children, desc }: MaterialSingleProps) {
  return (
    <div>
        <h1 className='heading2 heading-margin-bottom'>{title}</h1>
        {children}
        <p className='little-bigger-text mt-10'>
            {desc}
        </p>
    </div>
  )
}

export default MaterialSingle