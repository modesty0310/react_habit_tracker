import React, {memo} from 'react';

const HabitAddForm = memo(props => {
  const inputRef = React.createRef();

  const onSubmit = event => {
    event.preventDefault(); // button클릭후 화면 refrash되는것을 막아줌,
    const name = inputRef.current.value;
    name && props.onAdd(name);
    inputRef.current.value = ""
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <input 
        ref={inputRef}
        type="text" 
        className="add-input" 
        placeholder="Habit"/>
      <button className="add-button">Add</button>
    </form>
  );
})

export default HabitAddForm;

