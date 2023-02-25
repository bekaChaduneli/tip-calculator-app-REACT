function Amount(props) {
  const resetClick = () => {
    if (
      props.billValue > 0 ||
      props.peopleValue > 0 ||
      props.buttonValue > 0 ||
      props.customValue > 0
    ) {
      props.setBillValue(0);
      props.setPeopleValue(0);
      props.setButtonValue(0);
      props.setCustomValue(0);
    }
  };

  return (
    <div className="w-full h-64 rounded-2xl amount p-6 lg:ml-16 lg:min-h-full">
      <div className="tip-amount flex w-full justify-between mt-3 lg:mt-5">
        <div className="flex flex-col">
          <h1 className="text-white text-base">Tip Amount</h1>
          <p className="person text-xs mt-1">/ person</p>
        </div>
        <h1 className="tip-price text-3xl mt-1 lg:text-5xl">
          {props.tipAmountValue}
        </h1>
      </div>
      <div className="total-amount flex w-full justify-between mt-6 lg:mt-10">
        <div className="flex flex-col">
          <h1 className="text-white text-base">Total</h1>
          <p className="person text-xs mt-1">/ person</p>
        </div>
        <h1 className="tip-price text-3xl mt-1 lg:text-5xl">
          {props.totalAmountValue}
        </h1>
      </div>
      <button
        onClick={resetClick}
        className={`w-full h-12 mt-8 rounded text-xl ${
          props.buttonValue > 0 ||
          props.peopleValue > 0 ||
          props.buttonValue > 0
            ? "reset"
            : "reseted"
        }`}
      >
        RESET
      </button>
    </div>
  );
}

export default Amount;
