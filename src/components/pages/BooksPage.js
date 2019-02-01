import React, {Component} from 'react';
import ItemList from '../itemList';
import ItemDetails,{Field} from '../itemDetails';
import {Col, Row, Container} from 'reactstrap';
import ErrorMessege from '../errorMessege';
import gotService from '../services/gotServices';
import RowBlock from '../rowBlock';


export default class BooksPage extends Component{
    gotService = new gotService();
    state = {
        selectedBooks: 2,
        error: false
    };

    onItemSelected = (id) => {

        this.setState({
            selectedBooks: id,
            error: false
        })
    };
    componentDidCatch() {

        this.setState({
            error: true
        })
    }

    render(){
        if(this.state.error){
            return <ErrorMessege/>
        }


        const itemList = (
            <ItemList onItemSelected={this.onItemSelected}
                      getData={this.gotService.getAllBooks}
                      renderItem={(item) => `${item.name} `}
            />
        );

        const bookDetals= (
            <ItemDetails id={this.state.selectedBooks}
                         getData={this.gotService.getBook}>
                <Field field='name' label='Name'/>
                <Field field='numberOfPages' label='NumberOfPages'/>
                <Field field='publiser' label='Publiser'/>
                <Field field='released' label='Released'/>
            </ItemDetails>
        );
        return(
            <RowBlock left={itemList} right={bookDetals}/>
        )
    }
}