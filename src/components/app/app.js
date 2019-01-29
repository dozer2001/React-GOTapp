import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';


export default class App extends Component {
    constructor() {
        super();
        this.state = {
            dis: true
        };
        this.CharDissepia = this.CharDissepia.bind(this)
    }

    CharDissepia(){
        if(this.state.dis) {
            this.setState({
                dis: false
            })
        }else{
            this.setState({
                dis: true
            })
        }
    }

    render() {
        const {dis} = this.state;
        const dissepia = dis? <RandomChar/> : null;
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
                <Row>
                    <Col md='6'>
                        <ItemList/>
                    </Col>
                    <Col md='6'>
                        <CharDetails/>
                    </Col>
                </Row>
            </Container>
            </>
        )
    }
};
