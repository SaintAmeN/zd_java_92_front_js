import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import StudentTableComponent from "./components/StudentTableComponent";
import StudentTableDivComponent from "./components/StudentTableDivComponent";

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
                {/*<StudentTableComponent></StudentTableComponent> /!*otwieramy i zamykamy*!/*/}
                <StudentTableComponent/>                        {/*tag ktory nie ma tresci i jest zamkniety*/}
                <StudentTableDivComponent/>

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