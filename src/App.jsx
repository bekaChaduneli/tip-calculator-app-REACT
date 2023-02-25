import logo from "./images/logo.svg";
import dollar from "./images/icon-dollar.svg";
import BillInput from "./components/BillInput";
import Tip from "./components/Tip";
import People from "./components/People";
import person from "./images/icon-person.svg";
import Amount from "./components/Amount";
import { useState } from "react";

function App() {
  let valuesbox = [5, 10, 15, 25, 50];
  const [buttonValue, setButtonValue] = useState(0);
  const [customValue, setCustomValue] = useState(null);
  const [billValue, setBillValue] = useState(0);
  const [inputChange, setInputChange] = useState(false);
  const [billInputChange, setBillInputChange] = useState(false);
  const [peopleValue, setPeopleValue] = useState(0);

  const tipAmountValue =
    billValue > 0 && peopleValue > 0 && buttonValue > 0
      ? parseFloat(((billValue / 100) * buttonValue) / peopleValue).toFixed(2)
      : "0.00";

  const totalAmountValue =
    billValue > 0 && peopleValue > 0 && buttonValue > 0
      ? parseFloat((billValue + buttonValue) / peopleValue).toFixed(2)
      : "0.00";

  return (
    <div className="conteiner">
      <img className="mt-12 mb-10" src={logo} alt="logo" />
      <div className="box w-full h-full">
        <div>
          <BillInput
            setBillValue={setBillValue}
            billValue={billValue}
            dollar={dollar}
            billInputChange={billInputChange}
            setBillInputChange={setBillInputChange}
          />
          <Tip
            setButtonValue={setButtonValue}
            valuesbox={valuesbox}
            setCustomValue={setCustomValue}
            customValue={customValue}
            buttonValue={buttonValue}
          />
          <People
            peopleValue={peopleValue}
            person={person}
            inputChange={inputChange}
            setPeopleValue={setPeopleValue}
            setInputChange={setInputChange}
          />
        </div>
        <Amount
          billValue={billValue}
          setBillValue={setBillValue}
          peopleValue={peopleValue}
          setPeopleValue={setPeopleValue}
          buttonValue={buttonValue}
          customValue={customValue}
          setCustomValue={setCustomValue}
          setButtonValue={setButtonValue}
          totalAmountValue={totalAmountValue}
          tipAmountValue={tipAmountValue}
        />
      </div>
    </div>
  );
}

export default App;
