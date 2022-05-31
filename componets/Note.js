const Note = ({ note, onDelete }) => {
  return (
    <div className="note">
      <p>Created on: {note.date}</p>
      <h2>{note.name}</h2>
      <p>{note.text}</p>;<button className="edit-btn">Edit</button>
      <button className="delete-btn" onClick={() => onDelete(note.id)}>
        Delete
      </button>
    </div>
  );
};

export default Note;
