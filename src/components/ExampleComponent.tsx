import React, { useState, Fragment } from "react";

//This Component will render a form as an example
export const ExampleComponent: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log(value);
    setValue("");
  };
  return (
    <Fragment>
      <section>
        <h1>Everything you submit is being console logged</h1>
      </section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </Fragment>
  );
};
