import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import CharacterPage from '../characterPage';
import ErrorMessege from '../errorMessege';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
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
        console.log(1);
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
                        <button onClick={this.CharDissepia}>Kilck me</button>
                    </Col>
                </Row>
                <CharacterPage/>
                <Row>
                    <Col md='6'>
                        <ItemList onItemSelected={this.onItemSelected}
                                  getData={this.gotService.getAllBooks}
                                  renderItem={(item) => (item.name)}/>
                    </Col>
                    <Col md='6'>
                        <CharDetails charId={this.state.selectedChar}/>
                    </Col>
                </Row>
                <Row>
                    <Col md='6'>
                        <ItemList onItemSelected={this.onItemSelected}
                                  getData={this.gotService.getAllHouses}
                                  renderItem={(item) => item.name}/>
                    </Col>
                    <Col md='6'>
                        <CharDetails charId={this.state.selectedChar}/>
                    </Col>
                </Row>
            </Container>
            </>
        )
    }
};
