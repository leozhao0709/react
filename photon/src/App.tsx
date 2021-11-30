import React, { useEffect, useState } from 'react';
import styles from './App.module.scss';
import Cards from './components/cards';
import SearchBar from './components/searchBar';
import PexelsAxios from './utils/PexelsAxios';

const App: React.FC = () => {
  const [cards, setCards] = useState<Pexels.Photo[]>([]);
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    let url = `https://api.pexels.com/v1/curated?page=${page}&per_page=14`;
    if (searchText) {
      url = `https://api.pexels.com/v1/search?query=${searchText}&per_page=14&page=${page}`;
    }
    PexelsAxios.get<Pexels.CuratedPhotos>(url)
      .then((res) => res.data)
      .then((curatedPhotos) => setCards([...cards, ...curatedPhotos.photos]));
  }, [page, searchText]);

  const loadMore = () => {
    setPage(page + 1);
  };

  const onSearch = (searchText) => {
    setPage(1);
    setCards([]);
    setSearchText(searchText);
  };

  return (
    <div className={styles.App}>
      <h1 className={styles.Title}>Photon</h1>
      <SearchBar onSearch={onSearch} />
      <Cards photos={cards} />
      <button className={styles.LoadMore} onClick={loadMore}>
        Load More
      </button>
    </div>
  );
};

export default App;
