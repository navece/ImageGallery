import React, { useState, useEffect } from "react";
import { createApi } from "unsplash-js";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Modal from "./Modal";
import ImageCard from "./ImageCard";

export default function App() {
  const [state, setState] = useState([]);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({});
  const [search, setSearch] = useState("");
  const unsplash = createApi({
    accessKey: "0dz81_Nt6lJu9zmgHLhtAyAyI9_34WTUt1gZqRC4kw8",
  });

  useEffect(() => {
    if (!search) {
      unsplash.photos.list({ page: 1, perPage: 30 }).then((result) => {
        if (result.errors) {
          // handle error here
          console.log("Error: ", result.errors[0]);
        } else {
          // handle success here
          const photo = result.response;
          setState(photo.results);
        }
      });
    }
  }, []);

  useEffect(() => {
    if (search) {
      unsplash.search
        .getPhotos({
          query: search,
          perPage: 30,
        })
        .then((result) => {
          if (result.errors) {
            // handle error here
            console.log("Error: ", result.errors[0]);
          } else {
            // handle success here
            const photo = result.response;
            setState(photo.results);
          }
        });
    }
  }, [search]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const openModal = (image) => {
    setData(image);
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };

  if (open) return <Modal data={data} open={open} closeModal={closeModal} />;
  else
    return (
      <div className="body">
        <div className="logo">
          <h1>Image Gallery</h1>
        </div>
        <div className="search-container">
          <form onSubmit={handleSubmit} className="searchbar">
            <input
              onChange={handleChange}
              value={search}
              type="search"
              placeholder="Search"
            />
            <button type="submit">
              <FontAwesomeIcon icon={faSearch} size="lg" />
            </button>
          </form>
        </div>
        <div className="image-grid">
          <div className="row">
            <div className="column">
              {state.slice(0, 7).map((image) => {
                return <ImageCard image={image} openModal={openModal} />;
              })}
            </div>
            <div className="column">
              {state.slice(7, 14).map((image) => {
                return <ImageCard image={image} openModal={openModal} />;
              })}
            </div>
            <div className="column">
              {state.slice(14, 21).map((image) => {
                return <ImageCard image={image} openModal={openModal} />;
              })}
            </div>
            <div className="column">
              {state.slice(21, 28).map((image) => {
                return <ImageCard image={image} openModal={openModal} />;
              })}
            </div>
          </div>
        </div>
      </div>
    );
}
