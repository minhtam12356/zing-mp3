import React from 'react'
import ImageCustom, { ImageProps } from 'next/image';

export const Image = (props: ImageProps) => {
  const { } = props;

  return (
    <ImageCustom
      {...props}
    />
  )
}
