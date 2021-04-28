import React from 'react';

function Notes({notes}) {
    

    return (
        <ul className="list-group">
            {notes.map(note => (
                <li 
                    className="list-group-item note"
                    key={note.id}
                    >
                        {note.title}
                        <button className="btn btn-outline-danger btn-sm" type="button">
                            &times;
                        </button>
                </li>
            ))}
        </ul>
    )
}

export default Notes;