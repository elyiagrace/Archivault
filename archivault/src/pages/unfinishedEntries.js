import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UnfinishedEntries = () => {
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        // Fetch unfinished entries from the server
        axios.get('/api/unfinished-entries')
            .then(response => {
                setEntries(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the entries!', error);
            });
    }, []);

    const handleEdit = (id) => {
        // Redirect to the edit page for the specific entry
        window.location.href = `/edit-entry/${id}`;
    };

    return (
        <div className="gallery">
            {entries.map(entry => (
                <div key={entry.id} className="entry-card">
                    <h3>{entry.title}</h3>
                    <p>{entry.description}</p>
                    <button onClick={() => handleEdit(entry.id)}>Edit</button>
                </div>
            ))}
        </div>
    );
};

export default UnfinishedEntries;