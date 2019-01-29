import React, {Component} from 'react';
import gotService from '../services/gotServices'
import styled from 'styled-components';
import Spinner from '../spiner';
import ErrorMessege from '../errorMessege';

const ItemListUl = styled.ul`
cursor: pointer;
ul{cursor: pointer;}`;


export default class ItemList extends Component {

    gorService = new gotService();
    state = {
        charList: null,
        error: false,
        loading: true
    };
    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    componentDidMount() {
        this.gorService.getAllCharacters()
            .then((charList) => {
                this.setState({
                    charList,
                    loading: false
                })
            })
    }

    renderItems(arr){

        return arr.map((item, i) =>{
            const idd =  item;
            const idkey = idd.url.slice(idd.url.length -2);

            return(
                <li
                    key={idkey}
                    className="list-group-item"
                     onClick={ () => this.props.onCharSelected(idkey)}
                     >
                    {item.name}
                </li>
            )
        })
    }
    render() {
        const {charList} = this.state;

        if(this.state.loading){
            return <Spinner/>
        }

        if (!charList) {
            return <Spinner/>
        }
        const items =this.renderItems(charList);
        return (
            <ItemListUl className="list-group">
                {items}
            </ItemListUl>
        );
    }
}