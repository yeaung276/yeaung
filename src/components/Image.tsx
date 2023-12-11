"use client"
import NImage from 'next/image'
import { ComponentProps } from 'react';
 
const imageLoader = ({ src, width, quality }: any) => {
  const isProd = process.env.NODE_ENV === 'production';
  return `${isProd ? '/yeaung' : ''}/${src}?w=${width}&q=${quality || 75}`
}
 
export default function Image({...props}: ComponentProps<typeof NImage>) {
  return (
    <NImage
      loader={imageLoader}
      {...props}
    />
  )
}