import React, {Component} from 'react';
import gorService from '../services/gotServices'
import styled from 'styled-components';
import {ListGroup, ListGroupItem} from 'reactstrap';
import Spinner from '../spiner';
import ErrorMessege from '../errorMessege';

const CharsDetails = styled.div `
 background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    h4
     margin-bottom: 20px;
     text-align: center;
    
`;
const SelectError = styled.div`
    color: #fff;
    text-align: center;
    font-size: 26px;`;
export default class CharDetails extends Component {
    gotService = new gorService();
    state = {
        char: null,
        loading: true,
        error: false
    };

    componentDidMount() {
        this.updateChar();
    }

    componentDidUpdate(prevProps) {
        if (this.props.charId !== prevProps.charId) {
            this.updateChar();
        }

    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    updateChar() {
        const {charId} = this.props;
        if (!charId) {
            return;
        }
        this.gotService.getCharacter(charId)
            .then((char) => {
                this.setState({
                    char,
                    loading: false
                })
            })
    }



    render() {
        if (this.state.error) {
            return <ErrorMessege/>
        }
        if (this.state.loading) {
            console.log('spiner');
            return <Spinner/>
        }
        if (!this.state.char) {
            return <span className="select-error">Please celect a character</span>
        }

        const {name, gender, born, died, culture} = this.state.char;




        return (
            <CharsDetails>
                <h4>{name}</h4>
                <ListGroup className="list-group-flush">
                    <ListGroupItem className="d-flex justify-content-between">
                        <span className="term">Gender</span>
                        <span>{gender}</span>
                    </ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between">
                        <span className="term">Born</span>
                        <span>{born}</span>
                    </ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between">
                        <span className="term">Died</span>
                        <span className="died">{died}</span>
                    </ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between">
                        <span className="term">Culture</span>
                        <span>{culture}</span>
                    </ListGroupItem>
                </ListGroup>
            </CharsDetails>
        );
    }
}