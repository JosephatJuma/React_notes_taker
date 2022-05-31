import { useState } from "react";
const AddNote = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const d = new Date();
  const day = d.getDate();
  const month = d.getMonth();
  const year = d.getFullYear();
  const hour = d.getHours();
  const minutes = d.getMinutes();
  const secs = d.getSeconds();

  const [date, setDate] = useState(
    day + "-" + month + "-" + year + " " + hour + ":" + minutes + ":" + secs
  );

  const submitNote = (e) => {
    e.preventDefault();
    if (!name) {
      alert("Please enter the title of the note!");
      return;
    }
    onAdd({ name, text, date });
    setName("");
    setText("");
  };
  return (
    <form className="add-form" onSubmit={submitNote}>
      <div className="form-control">
        <label>
          <h3>TITLE</h3>
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>
          <h3>Date:</h3>
        </label>
        <input type="text" name="" id="" value={date} />
      </div>
      <div className="form-control-text-area">
        <label>
          <h3>ADD TEXT</h3>
        </label>
        <textarea
          name="text"
          id="text"
          cols="50"
          rows="10"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
      </div>
      <div className="form-control-check">
        <label>Auto save changes</label>
        <input type="checkbox" name="" id="" />
      </div>
      <div className="form-control">
        <input
          type="submit"
          name="save"
          id="save"
          value="Save"
          className="btn btn-control"
        />
      </div>
    </form>
  );
};

export default AddNote;
