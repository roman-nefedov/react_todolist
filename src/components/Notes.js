import React from 'react';

function Notes({notes}) {
    

    return (
        <ul className="list-group">
            {notes.map(note => (
                <li 
                    className="list-group-item note"
                    key={note.id}
                    >
                        <div>
                            <strong>{note.title}</strong>
                            <small>{new Date().toLocaleString()}</small>
                        </div>
                        <button className="btn btn-outline-danger btn-sm" type="button">
                            &times;
                        </button>
                </li>
            ))}
        </ul>
    )
}

export default Notes;
