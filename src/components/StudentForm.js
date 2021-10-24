import './StudentForm.css'

import {Button, Col, Container, Row} from "react-bootstrap";
import {Input, InputLabel, MenuItem, Select} from "@material-ui/core";
import {useState} from "react";

// props = properties przekazywana przy tworzeniu komponentu
const StudentForm = (props) => {
    const [faculty, setFaculty] = useState();

    const facultyChanged = (event) => {
        setFaculty(event.target.value);
    }

    const submitStudent = () => {
        let imie = document.getElementById('input-imie').value;
        let nazwisko = document.getElementById('input-nazwisko').value;
        let dataUr = document.getElementById('input-birth-date').value;
        let index = document.getElementById('input-index').value;

        console.log(imie + " " + nazwisko + " " + dataUr + " " + index + " " + faculty)
        props.addStudentFunction(imie, nazwisko, dataUr, index, faculty);
    }

    return (
        <div className={'form-wrapper'}>
            <Container className={'form-container'}>
                <Row className={'form-title'}>
                    Fromularz dodawania studenta:
                </Row>
                <Row>
                    <Container>
                        <Row className={'form-row'}>
                            <Col md={2}>
                                <label className={'form-input-label'}>Imie:</label>
                            </Col>
                            <Col md={4}>
                                <Input id={'input-imie'} placeholder={'Imie'} className={'form-input-field'}/>
                            </Col>
                            <Col md={2}>
                                <label className={'form-input-label'}>Nazwisko:</label>
                            </Col>
                            <Col md={4}>
                                <Input id={'input-nazwisko'} placeholder={'Nazwisko'} className={'form-input-field'}/>
                            </Col>
                        </Row>
                        <Row className={'form-row'}>
                            <Col md={4}>
                                <label className={'form-input-label'}>Data urodzenia:</label>
                            </Col>
                            <Col md={8}>
                                <Input id={'input-birth-date'} placeholder={'Data urodzenia'}
                                       className={'form-input-field'}/>
                            </Col>
                        </Row>
                        <Row className={'form-row'}>
                            <Col md={4}>
                                <label className={'form-input-label'}>Numer indeksu:</label>
                            </Col>
                            <Col md={8}>
                                <Input id={'input-index'} placeholder={'Numer indeksu'} className={'form-input-field'}/>
                            </Col>
                        </Row>
                        <Row className={'form-row'}>
                            <InputLabel id='input-faculty-label'>Faculty</InputLabel>
                            <Select id='input-faculty' labelId='input-faculty-label' onChange={facultyChanged}>
                                <MenuItem value={'Informatics'}>Informatics</MenuItem>
                                <MenuItem value={'Hydraulics'}>Hydraulics</MenuItem>
                            </Select>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <Button className={'form-input-button'}>Reset/Clear</Button>
                            </Col>
                            <Col md={6}>
                                <Button className={'form-input-button'} onClick={submitStudent}>Confirm</Button>
                            </Col>
                        </Row>
                    </Container>
                </Row>
            </Container>
        </div>
    )
}

export default StudentForm;