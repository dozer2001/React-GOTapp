import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import CharacterPage from '../pages/characterPage';
import BooksPage from '../pages/BooksPage';
import HousesPage from '../pages/HousesPage';
import ErrorMessege from '../errorMessege';
import ItemList from '../itemList';
import ItemDetails from '../itemDetails';
import gotService from '../services/gotServices';



export default class App extends Component {
    constructor() {
        super();
        this.state = {
            dis: true,
            error: false
        };
        this.CharDissepia = this.CharDissepia.bind(this)
    }

    gotService = new gotService();

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    CharDissepia() {
        this.setState(() => {
            return {
                dis: !this.state.dis
            }
        })

    }

    render() {
        const dissepia = this.state.dis ? <RandomChar/> : null;
        if (this.state.error) {
            return <ErrorMessege/>
        }
        return (
            <>
            <Container>
                <Header/>
            </Container>
            <Container>
                <Row>
                    <Col lg={{size: 5, offset: 0}}>
                        {dissepia}
                        <button onClick={this.CharDissepia}>Klick me</button>
                    </Col>
                </Row>
                <CharacterPage/>
                <BooksPage/>
                <HousesPage/>

            </Container>
            </>
        )
    }
};
