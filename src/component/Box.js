import React from 'react'

export default function Box({ value, onClick }) {
    return (
        <button
            style={style}
            onClick={onClick}>
            {value}
        </button>
    )
}

const style = {
    background: '#fff',
    border: '2px solid lightblue',
    fontSize: '5px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none',
}