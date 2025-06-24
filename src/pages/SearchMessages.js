import { useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

export default function SearchMessages() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const [status, setStatus] = useState('');
  const [modalMessage, setModalMessage] = useState(null);

  const handleSearch = async () => {
    if (!search.trim()) {
      setStatus('Please enter a name to search.');
      setResults([]);
      return;
    }

    setStatus('Searching...');
    try {
      const querySnapshot = await getDocs(collection(db, 'messages'));
      const data = querySnapshot.docs.map(doc => {
        const d = doc.data();
        return {
          name: d.name,
          message: d.message,
          createdAt: d.createdAt,
        };
      });

      const filtered = data.filter(d => d.name.toLowerCase() === search.toLowerCase());

      if (filtered.length === 0) {
        setStatus('No messages found.');
      } else {
        setStatus(`${filtered.length} Post${filtered.length > 1 ? 's' : ''} Found`);
      }

      setResults(filtered);
    } catch (err) {
      setStatus('Failed to fetch messages.');
      setResults([]);
      console.error(err);
    }
  };

  // Format Firestore timestamp or fallback
  const formatDate = (timestamp) => {
    if (!timestamp) return "Unknown time";
    if (timestamp.toDate) {
      return timestamp.toDate().toLocaleString();
    }
    if (timestamp instanceof Date) {
      return timestamp.toLocaleString();
    }
    return "Invalid date";
  };

  // Close modal when clicking outside content
  const handleModalClick = (e) => {
    if (e.target.id === 'modalOverlay') {
      setModalMessage(null);
    }
  };

  // Helper to truncate long messages with ellipsis for preview
  const truncate = (str, n = 100) => {
    if (!str) return '';
    return str.length > n ? str.slice(0, n) + '…' : str;
  };

  return (
    <>
      <div
        style={{
          maxWidth: '480px',
          margin: '3rem auto',
          padding: '2rem',
          borderRadius: '10px',
          border: '2px solid #eee',
          backgroundColor: '#f9f9f9',
          fontFamily: 'Arial, sans-serif',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          minHeight: "auto"
        }}
      >
        <h2
          style={{
            margin: 0,
            marginBottom: '1rem',
            color: '#1c1c1c',
            textAlign: 'center',
          }}
        >
          THE ARCHIVE
        </h2>

        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search for a name..."
          style={{
            padding: '0.75rem 1rem',
            fontSize: '1rem',
            borderRadius: '6px',
            border: '1.5px solid #b5c18e',
            outlineColor: '#d3debc',
            transition: 'border-color 0.3s',
            fontFamily: 'Arial, sans-serif',
          }}
          onFocus={e => (e.target.style.borderColor = '#7a8b67')}
          onBlur={e => (e.target.style.borderColor = '#b5c18e')}
        />

        <button
          onClick={handleSearch}
          style={{
            padding: '0.75rem 1rem',
            fontSize: '1.1rem',
            backgroundColor: '#b5c18e',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: '600',
            transition: 'background-color 0.3s',
            fontFamily: 'Arial, sans-serif',
          }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#a0b177')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#b5c18e')}
        >
          Search
        </button>

        <p
          style={{
            margin: 0,
            fontWeight: '600',
            color: status.startsWith('Found ') ? '#1c1c1c' : status.includes('Failed') ? '#c94c4c' : '#4b7a3a',
            textAlign: 'center',
            fontSize: '1rem',
            minHeight: '24px',
            fontFamily: 'Arial, sans-serif',
          }}
        >
          {status}
        </p>

        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            maxHeight: '250px',
            overflowY: 'auto',
            borderTop: results.length ? '1px solid #b5c18e' : 'none',
          }}
        >
          {results.map((r, i) => (
            <li
              key={i}
              style={{
                backgroundColor: '#d3debc',
                marginBottom: '0.75rem',
                padding: '0.75rem 1rem',
                borderRadius: '6px',
                color: '#201e1c',
                fontSize: '1rem',
                boxShadow: 'inset 0 0 5px #b5c18e',
                cursor: 'pointer',
              }}
              onClick={() => setModalMessage(r)}
              title="Click to view full message"
            >
              <p
                style={{
                  margin: 0,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  maxWidth: '100%',
                }}
              >
                {truncate(r.message, 100)}
              </p>
              <small style={{ color: '#7a8b67', fontSize: '0.8rem' }}>
                Posted at: {formatDate(r.createdAt)}
              </small>
            </li>
          ))}
        </ul>
      </div>

      {/* Modal */}
      {modalMessage && (
        <div
          id="modalOverlay"
          onClick={handleModalClick}
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
          }}
        >
          <div
            style={{
              backgroundColor: '#f9f9f9',
              padding: '2rem',
              borderRadius: '10px',
              maxWidth: '90vw',
              maxHeight: '80vh',
              overflowY: 'auto',
              boxShadow: '0 0 15px rgba(0,0,0,0.3)',
              fontFamily: 'Arial, sans-serif',
              position: 'relative',
              color: '#201e1c',
              width: '400px',
            }}
          >
            <button
              onClick={() => setModalMessage(null)}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'transparent',
                border: 'none',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                color: '#7a8b67',
              }}
              aria-label="Close modal"
            >
              &times;
            </button>

            <h3 style={{ marginTop: 0, marginBottom: '1rem' }}>
              For: {modalMessage.name}
            </h3>
            <p style={{ whiteSpace: 'pre-wrap' }}>{modalMessage.message}</p>
            <small style={{ color: '#7a8b67', fontSize: '0.8rem' }}>
              Posted at: {formatDate(modalMessage.createdAt)}
            </small>
          </div>
        </div>
      )}
    </>
  );
}
