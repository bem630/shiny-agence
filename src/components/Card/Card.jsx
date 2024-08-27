import React from 'react'
import PropTypes from 'prop-types'

export default function Card({ label, title, picture }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: 15 }}>
        <span>{label}</span>
        <img src={picture} alt="freelance" height={80} width={80} />
        <span>{title}</span>
    </div>
  )
}

Card.PropTypes = {
    label: PropTypes.string,
    title: PropTypes.string,
    picture: PropTypes.string,
}