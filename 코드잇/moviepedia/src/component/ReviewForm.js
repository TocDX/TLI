import { useState } from "react";
import FileInput from "./Fileinput";

function ReviewForm() {
  const [values, setValues] = useState({
    title: "",
    rating: 0,
    content: "",
    imgFile: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  const handleChange = (name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  return (
    <form className="ReviewForm" onSubmit={handleSubmit}>
      <FileInput
        name="imgFile"
        value={values.imgFile}
        onChange={handleChange}
      />
      <input
        name="title"
        value={values.title}
        onChange={handleInputChange}
      ></input>
      <input
        name="rating"
        type="number"
        value={values.rating}
        onChange={handleChange}
      ></input>
      <textarea
        name="content"
        value={values.content}
        onChange={handleChange}
      ></textarea>
      <button type="submit">확인</button>
    </form>
  );
}

export default ReviewForm;
