import { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { serverTimestamp } from "firebase/firestore";

export default function SendMessage() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, 'messages'), { name, message, createdAt: serverTimestamp() });
      console.log("Message stored with ID:", docRef.id);
      setStatus('🎉 Message sent!');
      setName('');
      setMessage('');
    } catch (err) {
      console.error("Error adding message:", err);
      setStatus('❌ Failed to send message.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
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
        gap: '1.25rem',
        // boxShadow removed here
      }}
    >
      <h2 style={{ margin: 0, marginBottom: '1rem', color: '#1c1c1c', textAlign: 'center' }}>
        SEND A MESSAGE
      </h2>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Name"
        required
        style={{
          padding: '0.75rem 1rem',
          fontSize: '1rem',
          borderRadius: '6px',
          border: '1.5px solid #b5c18e',
          outlineColor: '#d3debc',
          transition: 'border-color 0.3s',
          fontFamily: 'Arial, sans-serif',
        }}
        onFocus={(e) => (e.target.style.borderColor = '#7a8b67')}
        onBlur={(e) => (e.target.style.borderColor = '#b5c18e')}
      />

      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Message..."
        required
        rows={5}
        style={{
          padding: '0.75rem 1rem',
          fontSize: '1rem',
          borderRadius: '6px',
          border: '1.5px solid #b5c18e',
          outlineColor: '#d3debc',
          resize: 'vertical',
          transition: 'border-color 0.3s',
          fontFamily: 'Arial, sans-serif',
        }}
        onFocus={(e) => (e.target.style.borderColor = '#7a8b67')}
        onBlur={(e) => (e.target.style.borderColor = '#b5c18e')}
      />

      <button
        type="submit"
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
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#a0b177')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#b5c18e')}
      >
        Submit
      </button>

      <p
        style={{
          margin: 0,
          height: '1.5rem',
          fontWeight: '600',
          color: status.includes('Failed') ? '#c94c4c' : '#4b7a3a',
          textAlign: 'center',
          fontSize: '1rem',
          minHeight: '24px',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        {status}
      </p>
    </form>
  );
}
