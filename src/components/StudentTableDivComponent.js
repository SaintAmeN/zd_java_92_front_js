import './StudentTable.css'

const StudentTableDivComponent = (props) => {

    const createStudentTableDivRow = (student) => {
        return (<div key={student.name + ' ' + student.surname}
                     className="table-row">
            <div className="table-td col-md-1">{student.id}</div>
            <div className="table-td col-md-2">{student.name}</div>
            <div className="table-td col-md-2">{student.surname}</div>
            <div className="table-td col-md-3">{student.birthDate}</div>
            <div className="table-td col-md-2">{student.index}</div>
            <div className="table-td col-md-2">{student.faculty}</div>
        </div>)
    }

    const emptyRow = () => {
        return (
            <div className="table-row">
                <div className="table-td col-md-12 centered-text">Table is empty</div>
            </div>)
    }

    return (<div className="student-table-container">
        <div className="student-table-header">
            Tabela studentów bez tabeli
        </div>
        <div className="student-table">
            <div className="table-div">
                <div className="table-thead">
                    <div className="table-th col-1">Id</div>
                    <div className="table-th col-md-2">Imie</div>
                    <div className="table-th col-md-2">Nazwisko</div>
                    <div className="table-th col-md-3">Data urodzenia</div>
                    <div className="table-th col-md-2">Numer indeksu</div>
                    <div className="table-th col-md-2">Kierunek</div>
                </div>
                <div className="table-tbody">
                    {
                        props.students.length > 0 ? props.students.map(createStudentTableDivRow) : emptyRow()
                    }
                </div>
            </div>
        </div>
    </div>);
}

export default StudentTableDivComponent;