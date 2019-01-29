import React, {Component} from 'react';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import {Col, Row, Container} from 'reactstrap';
import ErrorMessege from '../errorMessege';

export default class CharacterPage extends  Component{

    state = {
        selectedChar: 130
    };

    onCharSelected = (id) => {
        this.setState({
            selectedChar: id,
            error: false
        })
    };
    componentDidCatch() {
        console.log('error');
        this.setState({
            error: true
        })
    }

        render(){
            if(this.state.error){
                return <ErrorMessege/>
            }
            return(
                <Row>
                    <Col md='6'>
                        <ItemList onCharSelected={this.onCharSelected}/>
                    </Col>
                    <Col md='6'>
                        <CharDetails charId={this.state.selectedChar}/>
                    </Col>
                </Row>
            )
        }
}