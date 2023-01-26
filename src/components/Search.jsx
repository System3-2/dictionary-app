import React, { useState } from 'react'
import axios from 'axios';
import Loading from './Loading';
import Result from './Result';

const Search = () => {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState([]);
  console.log(search);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`;
      const resp = await axios.get(url);

      setLoading(false);
      setResult(resp.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(true);

    }
  }
  // console.log(result.data)
  return <section className='container'>
    <h2>Dictionary</h2>
    <form onSubmit={handleSubmit} className="form">

      <div className="form-control">
        <input type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </div>
    </form>
    {loading && <Loading />}
    {loading && <h3>Please Wait.../word not found</h3>}
    {!loading && <Result result={result} />}
  </section>
}

export default Search;
