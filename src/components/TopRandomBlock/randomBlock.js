import React from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap';
import styled from 'styled-components';

const Term = styled.span`
font-weight: bold;`;
const TopRandomBlock = ({item}) => {
    const {name, gender, born, died, culture} = item;
    return (
        <>
        <h4>Random Character: {name}</h4>
        <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-between">
                <Term>Gender </Term>
                <span>{gender}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
                <Term>Born </Term>
                <span>{born}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
                <Term>Died </Term>
                <span>{died}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
                <Term>Culture </Term>
                <span>{culture}</span>
            </li>
        </ul>
        </>
    )
};
export default TopRandomBlock;