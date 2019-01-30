import React, {Component} from 'react';
import styled from 'styled-components';
import Spinner from '../spiner';
import ErrorMessege from '../errorMessege';

const ItemListUl = styled.ul`

li{cursor: pointer;}`;


export default class ItemList extends Component {

    state = {
        itemList: null,
        error: false,
        loading: true
    };

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    componentDidMount() {
        const{getData} = this.props;


      getData()
            .then((itemList) => {
                this.setState({
                    itemList,
                    loading: false
                })
            })
    }

    renderItems(arr){
        console.log(arr);
        return arr.map((item, i) =>{

            const label = this.props.renderItem(item);

            return(
                <li
                    key={item.id}
                    className="list-group-item"
                     onClick={ () => this.props.onItemSelected(item.id)}
                     >
                    {label}
                </li>
            )
        })
    }
    render() {
        const {itemList} = this.state;

        if(this.state.loading){
            return <Spinner/>
        }

        if (!itemList) {
            return <Spinner/>
        }
        const items =this.renderItems(itemList);
        return (
            <ItemListUl className="list-group">
                {items}
            </ItemListUl>
        );
    }
}