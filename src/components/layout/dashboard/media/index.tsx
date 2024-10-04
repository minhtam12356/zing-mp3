import React from 'react'
import { Image } from '@/components';

interface IMedia {
  title?: string;
  content?: string;
  link?: string;
  image?: {
    src?: string;
    alt?: string;
  };
}

export const Media = (props: IMedia) => {
  const { title = '', content = '', image } = props;
  const { src = '', alt = '' } = image ?? {};

  return (
    <div>
      <div className="media">
        <div className="media-image cursor-pointer overflow-hidden relative">
          <Image
            src={src}
            alt={alt}
            width={40}
            height={40}
            style={{ maxHeight: 40, maxWidth: 40, width: '100%', height: '100%' }}
            quality={100}
            className='image hover:scale-110 duration-700'
          />
          <div className="backdrop"></div>
        </div>
        <div className="">
          <div className="media-title font-bold text-ellipsis overflow-hidden text-nowrap" style={{ maxWidth: 200, width: '100%' }}>{title}</div>
          <div className="media-content text-ellipsis overflow-hidden text-nowrap">{content}</div>
        </div>
      </div>
    </div>
  )
}
