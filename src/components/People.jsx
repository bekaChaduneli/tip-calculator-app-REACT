function People(props) {
  const peoplechange = (e) => {
    props.setPeopleValue(e.target.value);
    if (isNaN(e.target.value)) {
      props.setPeopleValue("");
    }

    props.setInputChange(true);
  };
  return (
    <>
      <h1 className="bill mt-8 text-base mb-2">Number of People</h1>
      {props.peopleValue <= 0 && props.inputChange && (
        <p className="absolute ml-48 lg:ml-64 zero">Can't be zero</p>
      )}
      <div className="w-full h-12 inp mb-8">
        <input
          value={props.peopleValue}
          onChange={peoplechange}
          className={`inp w-full h-12 p-5 flex justify-end items-end flex-row text-right ${
            props.peopleValue <= 0 && props.inputChange ? "zero__input" : ""
          }`}
          placeholder="5"
          type="number"
          name="tips"
        ></input>
        <img className="dollar" src={props.person} alt="person-img" />
      </div>
    </>
  );
}

export default People;
