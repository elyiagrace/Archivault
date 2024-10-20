import React, { useEffect, useState } from 'react';

const AllEntries = () => {
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        // Fetch the finished entries from your API or data source
        const fetchEntries = async () => {
            try {
                const response = await fetch('/api/finished-entries'); // Adjust the URL as needed
                const data = await response.json();
                setEntries(data);
            } catch (error) {
                console.error('Error fetching entries:', error);
            }
        };

        fetchEntries();
    }, []);

    return (
        <div>
            <h1>All Finished Entries</h1>
            <ul>
                {entries.map((entry) => (
                    <li key={entry.id}>{entry.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default AllEntries;