/** @format */

import { useEffect, useState } from "react";
import Shimmerui from "./shimmerui";
import { Link } from "react-router-dom";

const Listcards = (props) => {
  const [saved, setsaved] = useState(false);
  const {
    id,
    type,
    image,
    price,
    rating,
    duration,
    location,
    isGuestFavourite,
  } = props.data;
  return (
    <div className='cards'>
      <button id='#save' onClick={() => setsaved(!saved)}>
        {saved ? "❤️" : "🤍"}
      </button>
      <Link to={'/user/'+id}>
        <img src={image} alt={type} />
      </Link>
      <h3>Type:{type}</h3>
      <h3>Price:{price}</h3>
      <h3>Rating:{rating}</h3>
      <h3>Loaction:{location}</h3>
    </div>
  );
};

const Body = () => {
  const [filteredlist, setfilteredlist] = useState(null);
  const [Data, setData] = useState(null);
  useEffect(() => {
    populate();
  }, []);
  const [err, seterr] = useState(null);

  const populate = async () => {
    try {
      const response = await fetch(
        "https://api.npoint.io/02799cdfe194fbf8f49f",
      );
      const jsonres = await response.json();
      setData(jsonres);
      setfilteredlist(jsonres?.sections?.[0]?.listings);
      seterr(null);
    } catch (error) {
      seterr(error);
    }
  };

  if (err != null) {
    return (
      <div className='error-container'>
        <h2>Oops! Something went wrong loading listings.</h2>
        <button onClick={populate}>Retry</button>
      </div>
    );
  }

  if (Data == null) return <Shimmerui />;
  if (Data?.sections?.[0]?.listings?.length === 0) return <h3>No places!!</h3>;
  return (
    <>
      <div className='filter-container'>
        <button
          onClick={() =>
            setfilteredlist(
              Data?.sections?.[0]?.listings?.filter((data) => data.rating == 5),
            )
          }>
          Top rated
        </button>
        <input
          type='text'
          placeholder='search'
          onChange={(e) => {
            setfilteredlist(
              Data?.sections?.[0]?.listings?.filter((data) =>
                data.type.includes(e.target.value),
              ),
            );
          }}
        />
      </div>

      <div className='cards-container'>
        {filteredlist?.map((data) => (
          <Listcards data={data} key={data.id} />
        ))}
      </div>
    </>
  );
};

export { Body };
