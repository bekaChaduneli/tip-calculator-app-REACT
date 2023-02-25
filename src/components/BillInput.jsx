function BillInput(props) {
  const billchange = (e) => {
    props.setBillValue(+e.target.value);
    if (isNaN(e.target.value)) {
      props.setBillValue("");
    }
    props.setBillInputChange(true);
  };
  return (
    <div>
      <h1 className="text-base bill">Bill</h1>
      {props.billValue <= 0 && props.billInputChange && (
        <p className="absolute ml-48 lg:ml-64 billZero">Can't be zero</p>
      )}
      <div className="w-full h-12 inp">
        <input
          value={props.billValue}
          onChange={billchange}
          className={`inp w-full h-12 p-5 flex justify-end items-end flex-row text-right ${
            props.billValue <= 0 && props.billInputChange ? "zero__input" : ""
          }`}
          placeholder="0"
          type="number"
          maxLength="6"
        ></input>
        <img className="dollar " src={props.dollar} alt="dollar-img" />
      </div>
    </div>
  );
}

export default BillInput;
