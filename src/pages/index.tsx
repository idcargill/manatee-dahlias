import Head from 'next/head';
import { useState } from 'react';

const GetPlantsContainer = () => {
  const [data, setData] = useState<any[]>([]);

  const getPlants = async () => {
    fetch('/api/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `{
          getAllPlants {
            _id
            plantName
          }
        }`,
      }),
    })
      .then(res => res.json())
      .then(res => setData(res.data.getAllPlants));
  };

  return (
    <>
      <button className="bg-gray-400 rounded-md p-3 m-2" onClick={getPlants}>Plants</button>
      <ul>
        {
          data?.length > 0
            ? data.map((plant, idx) => (
              <li className="text-center margin-auto m-1" key={idx}>
                {plant?.plantName}
              </li>
            ))
            : null
        }
      </ul>
    </>
  );


};

const Home = () => (
  <>
    <Head>
      <title>Manatee Dahlias</title>
      <meta content="Dahlia Town" name="description" />
      <link href="/heart.svg" rel="icon" />
    </Head>

    <main className="main-content">
      <div className="text-center text-2xl p-3 font-bold bg-emerald-300">
        Welcome to Manatee Dahlias
      </div>

      <GetPlantsContainer />

    </main>


  </>
);
export default Home;
