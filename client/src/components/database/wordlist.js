import React from 'react'
import WordCard from "./wordcard"
/** @jsxImportSource @emotion/react */
// import { css } from '@emotion/react';
import styled from '@emotion/styled'

function WordList({ words, currentUser }) {

    const userwords = words.map((word) => (
        <WordCard
            id={word.defid}
            aword={word}
            currentUser={currentUser}
        />
    ))
 
    return (
        <div>
            <List>
                {userwords}
            </List>
        </div>
    )
}

const List = styled.div`    
width: auto;
position: relative;
  	left: 30px;
  	top: 30px;
  	right: 30px;
  	bottom: 30px;
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-auto-rows: minmax(100px, auto);
gap: 0.5rem;
  @media screen and (max-width: 748px){
        display: flex;
        flex-direction: column;
        height: auto;
    }

`

export default WordList  