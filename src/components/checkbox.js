//creating a checkbox UI component 
//add in some props to the checkbox UI component, 

const Checkbox = ({ label, value, checked, onChange }) => {
    return (
      <label>
        <input
          type="checkbox"
          checked={checked}
          value={value}
          onChange={onChange}
        />
        {label}
      </label>
    );
  };
  
  export default Checkbox;
  