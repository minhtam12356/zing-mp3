'use client'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { Image } from '../image';

export const Search = (props: {
  placeholder?: string;
}) => {
  const { placeholder = "Tìm kiếm bài hát, nghệ sĩ, lời bài hát..." } = props;
  const [textSearch, setTextSearch] = useState('');

  const onClearTextSearch = () => {
    setTextSearch('')
  }

  const onChangeTextSearch = (event: React.ChangeEvent<HTMLInputElement> | undefined) => {
    setTextSearch(event?.target?.value ?? '')
  }

  return (
    <div className="search flex items-center">
      <Image 
        src='/search.png'
        alt='search icon'
        width={18}
        height={18}
        className='ml-3'
      />
      <input 
        className="search-input"
        value={textSearch}
        onChange={onChangeTextSearch}
        type="text" 
        placeholder={placeholder} 
      />
      {textSearch ? <div className="mr-4 cursor-pointer" onClick={onClearTextSearch}>X</div> : <></>}
    </div>
  )
}
