import React, {Component} from 'react';

import styled from 'styled-components';

const ItemListUl = styled.ul`
cursor: pointer;
ul{cursor: pointer;}`;


export default class ItemList extends Component {

    render() {
        return (
            <ItemListUl className="list-group">
                <li className="list-group-item">
                    John Snow
                </li>
                <li className="list-group-item">
                    Brandon Stark
                </li>
                <li className="list-group-item">
                    Geremy
                </li>
            </ItemListUl>
        );
    }
}