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
    h4{
     margin-bottom: 20px;
     text-align: center;}
    
`;
const SelectError = styled.div`
    color: #fff;
    text-align: center;
    font-size: 26px;`;

const Field = ({char, field, label}) => {
    return (
        <ListGroupItem className="d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{char[field]}</span>
        </ListGroupItem>
    )
};
export {
    Field
}
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
            return <Spinner/>
        }
        if (!this.state.char) {
            return <span className="select-error">Please celect a character</span>
        }
        const {char} = this.state;
        const {name} = char;

        return (
            <CharsDetails>
                <h4>{name}</h4>
                <ListGroup className="list-group-flush">
                    {
                        React.Children.map(this.props.children, (child) =>{
                            return React.cloneElement(child, {char})
                    })
                    }
                </ListGroup>
            </CharsDetails>
        );
    }
}