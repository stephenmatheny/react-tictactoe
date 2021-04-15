import React, { useState } from 'react'
import Layout from './Layout'

export default function Game() {
    const rows = 5;

    const [layout, setLayout] = useState(Array(rows*rows).fill(null))
    const [xIsNext, setXisNext] = useState(true)
    const winner = checkWinner(layout)

    const handleClick = (i) => {
        const layoutState = [...layout]
        if(winner || layoutState[i]) return;
        layoutState[i] = xIsNext ? 'X' : 'O'
        setLayout(layoutState)
        setXisNext(!xIsNext)
    }

    return (
        <React.Fragment>
            <Layout boxes={layout} onClick={handleClick} />
            <div style={styles}>
                <p style={pStyle}>
                    {winner ? 'Winner: ' + winner : 'Next Player ' + (xIsNext ? 'X' : 'O')}
                </p>
            </div>
            <button onClick={() => window.location.reload()}>RESET</button>
        </React.Fragment>
    )
}

export function checkWinner(boxes) {
    // const rows = 3;
    // const consecutive = 3;
    // let lines = [
    //     // [0,1,2],
    //     // [3,4,5],
    //     // [6,7,8],
    //     // [0,3,6],
    //     // [1,4,7],
    //     // [2,5,8],
    //     // [0,4,8],
    //     // [2,4,6],
    // ]
    
    // HORIZONTALS
    const rows = 5;
    let lines = [];
    let consecutive = 4;
    let combosPerRow = rows - consecutive + 1;
    let a = 0;

    for(let i=0; i<rows; i++) {
        for(let k=0; k<combosPerRow; k++) {
            lines.push([]);
            for(let j=0; j<consecutive; j++) {
                lines[lines.length-1].push(a);
                a++;
            }
            a = a-(consecutive-1);
        }
        a = a+(consecutive-1);
    }

    console.log(lines);

    // WRONG [[0,1,2,3],[4,5,6,7],[8,9,10,11]....]
    // RIGHT [[0,1,2,3]....a=4....,[1,2,3,4],
    // [5,6,7,8],[6,7,8,9]....]

    // directionCount = lines.length;
    // // VERTICALS
    // a=0;
    // for(let i=0; i<rows; i++) {
    //     lines.push([]);
    //     for(let j=0; j<consecutive; j++) {
    //         lines[i+directionCount].push(a);
    //         a = a+rows;
    //     }
    //     a = 0+(i+1);
    // }
    // console.log(lines)

    // directionCount = directionCount+rows-consecutive+1;
    // // VERTICALS
    // a=0;
    // for(let i=0; i<rows; i++) {
    //     lines.push([]);
    //     for(let j=0; j<consecutive; j++) {
    //         lines[i+directionCount].push(a);
    //         a = a+rows;
    //     }
    //     a = 0+(i+1);
    // }

// CHANGE THIS!!!
    for(let i=0; i<lines.length; i++) {
        const [w,x,y,z] = lines[i]
        if(boxes[w] && boxes[w] === boxes[x] && boxes[w] === boxes[y] && boxes[w] === boxes[z]) {
            return boxes[x];
        }
    }

    let count = 0;
    for(let i=0; i<boxes.length; i++) {
        if(boxes[i]) {
            count++;
        }
    }
    if(count===boxes.length) {
        return "CAT";
    }

    return null;
}

const styles = {
    width: '200px',
    margin: '20px auto',
}

const pStyle = {
    color: 'green',
}