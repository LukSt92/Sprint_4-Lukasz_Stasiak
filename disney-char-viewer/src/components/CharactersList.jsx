import React, { useEffect, useState } from "react";

const BASE_URL = "https://api.disneyapi.dev/character?page=1";

export const CharactersList = () => {
  const [characters, setCharacters] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const data = await fetch(BASE_URL);
      const response = await data.json();
      setCharacters(response);
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return <h2>Loading characters...</h2>;
  }

  return (
    <div>
      {characters?.data.map(({ _id, imageUrl, name }) => (
        <div key={_id}>
          <img src={imageUrl} alt={name} />
          <h3>{name}</h3>
        </div>
      ))}
    </div>
  );
};
