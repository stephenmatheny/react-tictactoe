import React from 'react'
import Box from './Box'

let rows = 5;

export default function Layout({ boxes, onClick }) {
    return (
        <div style={style}>
            {boxes.map((box, i) => (
                <Box
                    key={i}
                    value={box}
                    onClick={() => onClick(i)}
                />
            ))}
        </div>
    )
}

const style = {
    border: '4px solid lightblue',
    borderRadius: '10px',
    width: '320px',
    height: '320px',
    margin: '0 auto',
    display: 'grid',
    gridTemplate: `repeat(${rows}, 1fr) / repeat(${rows}, 1fr)`,
  };