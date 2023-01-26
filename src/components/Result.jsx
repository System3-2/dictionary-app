import React from 'react';


const Result = ({ result }) => {
  console.log(result);

  return <div className='grocery-list'>

    <article className=''>
      {result.map(word => {
        // let ds = (word.meanings[0].definitions[0].definition[0]);
        let ds = (word.meanings[0].definitions[0].definition);
        // console.log(ds);

        return <div key={ds}>
          <h1>{ds}</h1>
        </div>
      })}
    </article>

    <article className=''>
      {result.map((audio, i) => {
        // let ds = (audio.meanings[0].definitions[0].definition[0]);
        let ds = (audio.sourceUrls[0]);
        console.log(ds);

        return <div className='audio' key={i}>
          <a href={ds} target="_blank" rel="noreferrer">{ds}</a>
        </div>
      })}
    </article>

  </div>
}

export default Result;