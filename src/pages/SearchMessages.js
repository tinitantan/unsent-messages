import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

export default function SearchMessages() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const querySnapshot = await getDocs(collection(db, 'messages'));
    const data = querySnapshot.docs.map(doc => doc.data());
    setResults(data.filter(d => d.name.toLowerCase() === search.toLowerCase()));
  };

  return (
    <>
      <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search for your name" />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {results.map((r, i) => <li key={i}>{r.message}</li>)}
      </ul>
    </>
  );
}
