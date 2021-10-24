import './StudentTable.css'

const StudentTableDivComponent = () => {

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
                    <div className="table-row">
                        <div className="table-td col-md-1">1</div>
                        <div className="table-td col-md-2">Paweł</div>
                        <div className="table-td col-md-2">Gaweł</div>
                        <div className="table-td col-md-3">2021-10-10</div>
                        <div className="table-td col-md-2">123666</div>
                        <div className="table-td col-md-2">INFORMATYKA</div>
                    </div>
                    <div className="table-row">
                        <div className="table-td col-md-1">2</div>
                        <div className="table-td col-md-2">Jan</div>
                        <div className="table-td col-md-2">Kowalski</div>
                        <div className="table-td col-md-3">2011-03-11</div>
                        <div className="table-td col-md-2">123665</div>
                        <div className="table-td col-md-2">HYDRAULIKA</div>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default StudentTableDivComponent;