import React from 'react'
import { Image } from '@/components';

interface ICard {
  title?: string;
  content?: string;
  link?: string;
  image?: {
    src?: string;
    alt?: string;
  };
}

export const Card = (props: ICard) => {
  const { title = '', content = '', image } = props;
  const { src = '', alt = '' } = image ?? {};

  return (
    <div>
      <div className="card" style={{ height: '100%', width: 200 }}>
        <div className="card-image cursor-pointer overflow-hidden relative">
          <Image
            src={src}
            alt={alt}
            width={200}
            height={200}
            style={{ maxHeight: 200, maxWidth: 200, width: '100%', height: '100%' }}
            quality={100}
            className='image hover:scale-110 duration-700'
          />
          <div className="backdrop"></div>
        </div>
        <div className="card-title mt-2 font-bold text-ellipsis overflow-hidden text-nowrap" style={{ maxWidth: 200, width: '100%' }}>{title}</div>
        <div className="card-content text-ellipsis overflow-hidden text-nowrap">{content}</div>
      </div>
    </div>
  )
}
