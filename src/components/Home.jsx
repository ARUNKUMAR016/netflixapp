import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [movies, setMovies] = useState([]);

  const handleGet = async () => {
    try {
      const response = await axios.get("http://localhost:4444/api/admin/get");
      setMovies(response.data);
    } catch (error) {
      console.error("Data fetch failed:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4444/api/admin/delete/${id}`);
      setMovies((prev) => prev.filter((movie) => movie._id !== id));
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  useEffect(() => {
    handleGet();
  }, []);

  return (
    <div className="grid gap-4 p-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {movies.map((movie) => (
        <div key={movie._id} className="card card-side bg-base-100 shadow-sm">
          <figure className="w-40">
            <img
              src={movie.movieUrl}
              alt={movie.title}
              className="h-full w-full object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{movie.title}</h2>
            <p><strong>Genre:</strong> {movie.genre}</p>
            <p>{movie.about}</p>
            <div className="card-actions justify-end">
              <button
                className="btn btn-error"
                onClick={() => handleDelete(movie._id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
