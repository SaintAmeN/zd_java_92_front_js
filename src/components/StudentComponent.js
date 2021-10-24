import StudentTableComponent from "./StudentTableComponent";
import StudentTableDivComponent from "./StudentTableDivComponent";
import StudentForm from "./StudentForm";
import {useEffect, useState} from "react";

const StudentComponent = () => {
    // stworzenie listy studentów - z inicjalną listą = []
    const [studentList, setStudentList] = useState([]);

    // funkcja której można użyć żeby dodać nowego studenta
    const addStudent = (name, surname, birthDate, index) => {
        const student = {
            'id': bumpCounter(),
            'name': name,
            'surname': surname,
            'birthDate': birthDate,
            'index': index
        }

        // [] - deklaracja listy/slice
        // ...studentList - skopiowanie elementów
        // [...studentList] - zadeklarowanie listy z kopią elementów
        let studentListCopy = [...studentList];
        studentListCopy.push(student);          // push dodaje element do listy

        setStudentList(studentListCopy);

        console.log('Dodano studenta: ' + student);
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
        <StudentTableDivComponent students={studentList}/>

        <hr/>
        <StudentForm addStudentFunction={addStudent}/>
    </>);
}

export default StudentComponent;