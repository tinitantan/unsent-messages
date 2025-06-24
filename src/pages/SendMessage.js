import { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

export default function SendMessage() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, 'messages'), { name, message });
      console.log("Message stored with ID:", docRef.id);
      setStatus('Message sent!');
      setName('');
      setMessage('');
    } catch (err) {
      console.error("Error adding message:", err);
      setStatus('Failed to send message.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Their Name"
        required
      />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Your Message"
        required
      />
      <button type="submit">Send</button>
      <p>{status}</p>
    </form>
  );
}
