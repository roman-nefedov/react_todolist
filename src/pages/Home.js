import React, {Fragment, useContext, useEffect} from 'react';
import Form from '../components/Form';
import { Loader } from '../components/Loader';
import Notes from '../components/Notes';
import { FirebaseContext } from '../context/firbase/firebaseContext';

function Home() {
    // temp array of local notes
    // const notes = new Array(3)
    //     .fill('')
    //     .map((_, index) => ({id: index, title: `Note ${index + 1}`}));
    const {loading, notes, fetchNotes, removeNote} = useContext(FirebaseContext);
    useEffect(() => {
        fetchNotes();
    }, [])

    return (
        <Fragment>
            <Form />
            <hr/>
            {loading 
            ? <Loader />
            : <Notes notes={notes} onRemove={removeNote}/>
            }
        </Fragment>
    )

}

export default Home;
