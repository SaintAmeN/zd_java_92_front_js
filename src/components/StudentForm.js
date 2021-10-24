import './StudentForm.css'

import {Button, Col, Container, Row} from "react-bootstrap";
import {Input} from "@material-ui/core";

const StudentForm = () => {

    return (
        <div>
            <Container>
                <Row>
                    Fromularz dodawania studenta:
                </Row>
                <Row>
                    <Container>
                        <Row>
                            <Col md={2}>
                                <label className={'form-input-label'}>Imie:</label>
                            </Col>
                            <Col md={4}>
                                <Input placeholder={'Imie'} className={'form-input-field'}></Input>
                            </Col>
                            <Col md={2}>
                                <label className={'form-input-label'}>Nazwisko:</label>
                            </Col>
                            <Col md={4}>
                                <Input placeholder={'Nazwisko'} className={'form-input-field'}></Input>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={2}>
                                <label className={'form-input-label'}>Data urodzenia:</label>
                            </Col>
                            <Col md={4}>
                                <Input placeholder={'Data urodzenia'} className={'form-input-field'}></Input>
                            </Col>
                            <Col md={2}>
                                <label className={'form-input-label'}>Numer indeksu:</label>
                            </Col>
                            <Col md={4}>
                                <Input placeholder={'Numer indeksu'} className={'form-input-field'}></Input>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <Button className={'form-input-button'}>Reset/Clear</Button>
                            </Col>
                            <Col md={6}>
                                <Button className={'form-input-button'}>Confirm</Button>
                            </Col>
                        </Row>
                    </Container>
                </Row>
            </Container>
        </div>
    )
}

export default StudentForm;