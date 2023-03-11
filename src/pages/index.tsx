import Head from 'next/head';
import { useState } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

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

      <div className="m-5">
        <div className="bg-cGreen">cGreen</div>
        <div className="bg-cGray">cGray</div>
        <div className="bg-cBlue">cBlue</div>
        <div className="bg-cViolet">cViolet</div>
        <div className="bg-cDark">cDark</div>
      </div>

      <div className="bg-cBlue m-3 p-2 w-96 rounded-md">
        <h3 className="bg-cGray text-white p-2">Heading</h3>
        <div className="border-4 p-2  border-cGreen ">Description</div>
        <button className="bg-cDark text-white p-2 animate-slideInLeft">push</button>
      </div>

    </>
  );
};

const LoginButton = () => {
  const { data } = useSession();

  const login = () => {
    if (data?.user?.email) {
      signOut();
    }
    signIn();
  };

  return (
    <>
      <button onClick={login}>{data?.user?.email ? 'Sign Out' : 'Sign In'}</button>
    </>
  );
};

const Home = () => {
  const { data: session } = useSession();
  console.log(session);
  return (
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
        <LoginButton />
        {session
          ? (<>
            <p>{session?.user?.email}</p>
            <p>{session?.user?.name}</p>
          </>)

          : null}
      </main>
    </>
  );
};

export default Home;
