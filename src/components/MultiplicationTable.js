import {useState} from "react";

const MultiplicationTable = () => {
    // deklaracja zmiennych i stanu
    // zadeklarowaliśmy zmienną "number" oraz funkcję "setNumber" (setter)
    const [number, setNumber] = useState(0);
    console.log(number);

    // przetwarzania / funkcje (kod javascript żeby przygotować sobie rzeczy do dalszego wyświetlenia)
    // zbiór instrukcji który musi się wykonać przy każdym "renderingu"/odrysowaniu na ekranie
    let wiersze = [];
    for (let i = 0; i < number; i++) {
        let kolumny = [];
        for (let j = 0; j < number; j++) {
            kolumny.push(((i + 1) * (j + 1)));
        }
        wiersze.push(kolumny);
    }
    // Dla liczby 3
    // wiersze =  [
    //              [ 1, 2, 3 ]
    //              [ 2, 4, 6 ]
    //              [ 3, 6, 9 ]
    //            ]

    // funkcje które chcemy wywołać z HTML który znajduje się poniżej (return)
    const updateNumber = (newNumber) => {
        let number = document.getElementById('number_field').value
        console.log(number);

        setNumber(number);       // podmiana wartości
    }

    const createColumn = (kolumna) => {
        return (<td key={kolumna}>{kolumna}</td>)
    }

    const createRow = (wiersz) => {
        // [1, 2, 3]
        const kolumny = wiersz.map(createColumn);
        return (<tr key={wiersz}>{kolumny}</tr>);
    }

    // rendering/odrysowywanie - zwracamy html
    return (<div className="multiplication-table">
        <input type="number" id='number_field'/>

        <button onClick={updateNumber}>
            Kliknij mnie
        </button>

        <table>
            <tbody>
            {wiersze.map(createRow)}
            </tbody>
        </table>
    </div>);
}

export default MultiplicationTable;