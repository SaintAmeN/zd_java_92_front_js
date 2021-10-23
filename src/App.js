import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

// # Rodzaje wartości/deklaracji zmiennych/stalych
// stała 'liczba' = 5
const liczba = 5;

// zmienna 'innaLiczba' = 10
// var innaLiczba = 10;

// zadeklaruj coś = 20
let cos = 20;

// # Rodzaje wartości/deklaracji zmiennych/stalych

function App() {

    const multiplicationButtonOnClick = () => {
        var liczbaWFunkcji = '10'
        if (liczbaWFunkcji == '10') {
            // system out println
            console.log("String True: " + liczbaWFunkcji);
        } else {
            console.log("String False: " + liczbaWFunkcji);
        }
        if (liczbaWFunkcji == 10) {
            // system out println
            console.log("Integer True: " + liczbaWFunkcji);
        } else {
            console.log("Integer False: " + liczbaWFunkcji);
        }

        if (liczbaWFunkcji === '10') {
            // system out println
            console.log("String === True: " + liczbaWFunkcji);
        } else {
            console.log("String === False: " + liczbaWFunkcji);
        }
        if (liczbaWFunkcji === 10) {
            // system out println
            console.log("Integer === True: " + liczbaWFunkcji);
        } else {
            console.log("Integer === False: " + liczbaWFunkcji);
        }
    }

    const createMultiplicationTable = (x, y) => {
        console.log('X: ' + x + ', Y: ' + y);

        for (let i = 0; i < y; i++) {
            let wiersz = '';
            for (let j = 0; j < x; j++) {
                wiersz += ((i + 1) * (j + 1)) + ' ';
            }
            console.log(wiersz);
        }
    }

    return (
        <div className="App">
            <div className="header">
                <img src={'gopher.png'} className="header-icon"/>
                <div className="header-app-name">
                    SDA Frontend
                </div>
            </div>
            <div className="content-introduction"></div>
            {/* TODO: na razie pusty, później coś dodać*/}
            <div className="content">
                <div className="student-table-container">
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
                </div>
                <div className="student-table-container">
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
                </div>

                <hr/>
                <div className="multiplication-table">
                    <input type="number" id='number_x'/>
                    <input type="number" id='number_y'/>

                    <button onClick={() => {
                        let numberX = document.getElementById('number_x').value
                        let numberY = document.getElementById('number_y').value

                        // multiplicationButtonOnClick();
                        createMultiplicationTable(numberX, numberY);
                    }}>
                        Kliknij mnie
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;

/* Kierunek (enum): INFORMATYKA, FILOZOFIA, ... */
/* Student: int id, String imie, String nazwisko, Date dataUrodzenia; String nrIndeksu, Kierunek kierunek;
*/