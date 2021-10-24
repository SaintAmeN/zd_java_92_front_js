import './StudentTable.css'

const StudentTableComponent = (props) => {

    const createStudentTableRow = (student) => {
        return (<tr key={student.name + ' ' + student.surname}>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.surname}</td>
            <td>{student.birthDate}</td>
            <td>{student.index}</td>
            <td>{student.faculty}</td>
        </tr>)
    }

    return (<div className="student-table-container">
        <div className="student-table-header">
            Tabela studentów
        </div>
        <div className="student-table">
            <table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Imie</th>
                    <th>Nazwisko</th>
                    <th>Data urodzenia</th>
                    <th>Numer indeksu</th>
                    <th>Kierunek</th>
                </tr>
                </thead>
                <tbody>
                { props.students.map(createStudentTableRow) }
                </tbody>
            </table>
        </div>
    </div>);
}

export default StudentTableComponent;