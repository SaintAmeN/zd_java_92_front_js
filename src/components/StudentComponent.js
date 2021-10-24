import StudentTableComponent from "./StudentTableComponent";
import StudentTableDivComponent from "./StudentTableDivComponent";
import StudentForm from "./StudentForm";
import {useEffect, useState} from "react";

const StudentComponent = () => {
    // stworzenie listy studentów - z inicjalną listą = []
    const [studentList, setStudentList] = useState([]);

    // funkcja której można użyć żeby dodać nowego studenta
    const addStudent = (name, surname, birthDate, index, faculty) => {
        const student = {
            'id': bumpCounter(),
            'name': name,
            'surname': surname,
            'birthDate': birthDate,
            'index': index,
            'faculty': faculty
        }

        // [] - deklaracja listy/slice
        // ...studentList - skopiowanie elementów
        // [...studentList] - zadeklarowanie listy z kopią elementów
        let studentListCopy = [...studentList];
        studentListCopy.push(student);          // push dodaje element do listy

        setStudentList(studentListCopy);

        console.log('Dodano studenta: ' + student);
    }

    const removeStudent = (studentId) => {
        let studentListCopy = [...studentList]; // stworzenie kopi listy
        for (let i = 0; i < studentListCopy.length; i++) {
            if (studentListCopy[i].id === studentId){
                studentListCopy.splice(i, 1); // splice usuwa z pozycji o numerze 'i' ilość elementów: 1
                break;
            }
        }

        setStudentList(studentListCopy);
    }

    const bumpCounter = () => {
        // pobierze licznik
        let currentCounter = getCounter();

        // zwiekszy i zapisze
        currentCounter++;
        localStorage.setItem('student-next-id', currentCounter);

        // zwroci zwiekszony
        return currentCounter;
    }

    const getCounter = () => {
        let nextId = localStorage.getItem('student-next-id');
        // if (zmienna) false gdy:
        //      - zmienna = 0
        //      - zmienna = false
        //      - zmienna = null
        //      - zmienna = undefined

        if (nextId){
            return nextId;
        }
        return 1;
    }

    return (<>
        <StudentTableComponent students={studentList}/> {/*tag ktory nie ma tresci i jest zamkniety*/}
        <StudentTableDivComponent students={studentList} removeStudentFunction={removeStudent}/>

        <hr/>
        <StudentForm addStudentFunction={addStudent}/>
    </>);
}

export default StudentComponent;