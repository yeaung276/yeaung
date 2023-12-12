import NImage from 'next/image'
import { ComponentProps } from 'react';

 
export default async function Image({src, ...props}: ComponentProps<typeof NImage>) {
  return (
    <NImage
    src={`${process.env.NODE_ENV === 'production' ? '/yeaung' : ''}${src}`}
    {...props}
    />
  )
}