import { useParams } from 'react-router-dom';
import { getAllBeaches } from '../lib/fetch';
import { useEffect, useState } from 'react';
import { Beach } from '../components/Beach.js';
import '../styles/Beach.css';

export const Results = () => {
  const [beachToRender, setBeachToRender] = useState([]);
  const { city } = useParams();

  const getBeaches = (beaches, string) => {
    return beaches.filter((beach) => {
      return beach.properties.Término_M.toLowerCase().includes(string);
    });
  };
  const allBeaches = async () => {
    const fetchAllBeaches = await getAllBeaches();
    const beachesToShow = getBeaches(fetchAllBeaches, city);

    setBeachToRender(beachesToShow);
  };
  useEffect(() => {
    allBeaches();
  }, []);

  return (
    <>
      <h2>Se han encontrado {beachToRender.length} playas</h2>
      <div className="main">
        {beachToRender.map((e) => {
          return <Beach key={e.properties.OBJECTID} data={e} />;
        })}
      </div>
    </>
  );
};
