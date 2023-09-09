import Head from "next/head";
import Login from "./login";
function HomePage(props) {
  return (
    <div>
      <Head>
        <title>Miladra OneStop Solutions</title>
        <meta
          name="description"
          content="Find a lot of great courses that allow you to evolve..."
        />
      </Head>
      <Login></Login>
    </div>
  );
}

export default HomePage;
