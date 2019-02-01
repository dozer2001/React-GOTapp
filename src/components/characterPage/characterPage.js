import React, {Component} from 'react';
import ItemList from '../itemList';
import ItemDetails,{Field} from '../itemDetails';
import {Col, Row, Container} from 'reactstrap';
import ErrorMessege from '../errorMessege';
import gotService from '../services/gotServices';
import RowBlock from '../rowBlock';


export default class CharacterPage extends  Component{
    gotService = new gotService();
    state = {
        selectedChar: 130,
        error: false
    };

    onItemSelected = (id) => {
        this.setState({
            selectedChar: id,
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
                      getData={this.gotService.getAllCharacters}
                      renderItem={({name,gender}) => `${name} (${gender})`}
            />
            );

            const charDetals= (
                <ItemDetails id={this.state.selectedChar}
                             getData={this.gotService.getCharacter}>
                    <Field field='gender' label='Gender'/>
                    <Field field='born' label='Born'/>
                    <Field field='died' label='Died'/>
                    <Field field='culture' label='Culture'/>
                </ItemDetails>
            );
            return(
                <RowBlock left={itemList} right={charDetals}/>
            )
        }
}