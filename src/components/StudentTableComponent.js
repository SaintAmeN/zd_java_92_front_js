import './StudentTable.css'

const StudentTableComponent = () => {

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
                <tr>
                    <td>1</td>
                    <td>Paweł</td>
                    <td>Gaweł</td>
                    <td>2021-10-10</td>
                    <td>123666</td>
                    <td>INFORMATYKA</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jan</td>
                    <td>Kowalski</td>
                    <td>2011-03-11</td>
                    <td>123665</td>
                    <td>HYDRAULIKA</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>);
}

export default StudentTableComponent;