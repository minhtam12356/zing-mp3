'use client'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'

export const Search = (props: {
  placeholder?: string;
}) => {
  const { placeholder = "Tìm kiếm bài hát, nghệ sĩ, lời bài hát..." } = props;
  const [textSearch, setTextSearch] = useState('');

  const onChangeTextSearch = (event: React.ChangeEvent<HTMLInputElement> | undefined) => {
    setTextSearch(event?.target?.value ?? '')
  }

  return (
    <div className="search w-full md:w-1/2 px-3">
      {/* <FontAwesomeIcon icon={faHouse} /> */}
      <input 
        id="grid-last-name" 
        className="radius-20 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
        value={textSearch}
        onChange={onChangeTextSearch}
        type="text" 
        placeholder={placeholder} 
      />
    </div>
  )
}
