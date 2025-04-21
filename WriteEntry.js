import React, { useState } from 'react';
import axios from 'axios';

const WriteEntry = () => {
  const [content, setContent] = useState('');
  const [summary, setSummary] = useState('');
  const [emotion, setEmotion] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!content.trim()) return;

    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/entries', { content });
      setSummary(response.data.summary);
      setEmotion(response.data.emotion);
    } catch (err) {
      console.error("Error submitting entry:", err);
      alert("Something went wrong.");
    }
    setLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-4">Write Your Journal</h1>

      <textarea
        className="w-full h-48 p-3 border border-gray-300 rounded-lg mb-4 resize-none"
        placeholder="Write what's on your mind..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button
        className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? 'Analyzing...' : 'Submit'}
      </button>

      {summary && (
        <div className="mt-6 bg-gray-100 p-4 rounded">
          <h2 className="font-semibold mb-2">🧠 Summary</h2>
          <p>{summary}</p>
        </div>
      )}

      {emotion && (
        <div className="mt-4 bg-gray-100 p-4 rounded">
          <h2 className="font-semibold mb-2">😌 Emotion</h2>
          <p>{emotion}</p>
        </div>
      )}
    </div>
  );
};

export default WriteEntry;
