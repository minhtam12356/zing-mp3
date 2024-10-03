import React from 'react'

export const Arrow = (props: { type: 'right' | 'left' }) => {
  const { type } = props;

  return (
    <button className="button">
      <i className="icon ic-back">{type}</i>
    </button>
  )
}
