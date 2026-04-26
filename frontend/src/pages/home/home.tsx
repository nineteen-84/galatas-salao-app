import { Helmet } from "react-helmet-async";

export function Home() {
  return (
    <>
      <Helmet title="Home" />
      <div className="p-8">
        <h1>Home</h1>
      </div>
    </>
  );
}
