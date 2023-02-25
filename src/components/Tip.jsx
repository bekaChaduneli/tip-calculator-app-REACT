function Tip(props) {
  const buttonClickHandler = (e) => {
    props.setButtonValue(+e.target.value);
    console.log(e.target.value);
    props.setCustomValue("");
  };
  const customChange = (e) => {
    props.setButtonValue(+e.target.value);

    props.setCustomValue(+e.target.value);
    if (isNaN(+e.target.value)) {
      props.setCustomValue("");
    }

    if (e.target.value >= 100) {
      props.setCustomValue(100);
    }
  };
  return (
    <>
      <h1 className="text-base bill mb-2 mt-10 mb-3">Select Tip %</h1>
      <div className="tip grid gap-4">
        {props.valuesbox.map((percent) => {
          return (
            <button
              value={percent}
              onClick={buttonClickHandler}
              className={`text-white text-2xl w-full h-12 rounded ${
                percent === props.buttonValue ? "active__percent" : "percent"
              }`}
              key={percent}
            >
              {percent}%
            </button>
          );
        })}
        <input
          value={props.customValue}
          onChange={customChange}
          className="custom rounded text-2xl h-12 rounded text-center flex items-center justify-center text-right"
          type="number"
          name="tips"
          placeholder="Custom"
          min="0"
          required
        ></input>
      </div>
    </>
  );
}

export default Tip;

//text-white text-2xl w-full h-12 percent rounded
