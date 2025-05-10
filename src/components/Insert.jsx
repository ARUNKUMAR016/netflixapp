import React, { useState } from 'react';
import axios from 'axios';

const Insert = () => {
  const [title, setTitle] = useState('');
  const [about, setAbout] = useState('');
  const [genre, setGenre] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:4444/api/admin/insert", {
        title,
        about,
        genre
      });
      alert("Movie inserted successfully!");
      setTitle('');
      setAbout('');
      setGenre('');
    } catch (error) {
      console.error("Insert failed:", error);
      alert("Failed to insert movie.");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-black text-white p-8 rounded-xl shadow-lg mt-10">
      <h2 className="text-2xl font-bold mb-6 text-red-600">Insert Movie/Series</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block mb-1 text-sm text-gray-300">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
            className="input input-bordered w-full text-white"
            required
          />
        </div>
        <div>
          <label className="block mb-1 text-sm text-gray-300">About</label>
          <textarea
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            placeholder="Brief description"
            className="textarea textarea-bordered w-full text-white"
            rows="4"
            required
          ></textarea>
        </div>
        <div>
          <label className="block mb-1 text-sm text-gray-300">Genre</label>
          <input
            type="text"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            placeholder="e.g., Action, Drama, Thriller"
            className="input input-bordered w-full text-white"
            required
          />
        </div>
        <button
          type="submit"
          className="btn bg-red-600 hover:bg-red-700 text-white w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Insert;
