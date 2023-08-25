import React from 'react'
import Image from 'next/image'

interface Props {
  src: string
  alt: string
  width: number
  height: number
}

const ImageMemo: React.FC<Props> = ({ src, alt, width, height }) => {
  const memoizedImage = React.useMemo(
    () => <Image src={src} alt={alt} width={width} height={height} />,
    [src, alt, width, height],
  )

  return memoizedImage
}

export default ImageMemo
