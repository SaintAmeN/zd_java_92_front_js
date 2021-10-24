import {useState} from "react";

const MultiplicationTable = () => {
    // zadeklarowaliśmy zmienną "numbers" oraz funkcję "setNumbers" (setter)
    const [numbers, setNumbers] = useState([]);
    console.log(numbers);

    return (<div className="multiplication-table">
        <input type="number" id='number_field'/>

        <button onClick={() => {
            let number = document.getElementById('number_field').value
            console.log(number);

            let copiedNumbers = [...numbers];     // przepisanie kolekcji
            copiedNumbers.push(number);      // dodanie do kolekcji elementu

            setNumbers(copiedNumbers);       // podmiana kolekcji
        }}>
            Kliknij mnie
        </button>

        <table>
            <thead>
            <tr>
                <th>Liczba</th>
            </tr>
            </thead>
            <tbody>
            {
                numbers.map(value => {
                    return (<tr key={'element-'+value}><td>{value}</td></tr>)
                })
            }
            </tbody>
        </table>
    </div>);
}

export default MultiplicationTable;