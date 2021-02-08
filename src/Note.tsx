import React from 'react';
import styled from 'styled-components';

const Black = styled.button`
    width: 40px;
    height: 130px;
    background: black;
    position: absolute;
    margin: 1px;
    margin-left: -20px;

    :active {
        background: #333;
    }
`

const White = styled.button`
    width: 60px;
    height: 200px;
    background: white;
    margin: 1px;
    border: 1px solid black;
    box-shadow: 2px 5px;

    :active {
        background: #eee;
    }
`


type Props = {
    color: string;
    note: string;
    clickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Note: React.FC<Props> = ({ color, note, clickHandler }) =>
    color === 'white' ? (
        <White value={note} onClick={clickHandler} />
    ) : (
            <Black value={note} onClick={clickHandler} />
        );

export default Note;