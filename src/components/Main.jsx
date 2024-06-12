import React from "react";
import { useContext } from "react";
import { AppContext } from "../App";
import useGetCat from "./useGetCat";
import useCount from "./useCount";



export default function Main() {
  const { username } = useContext(AppContext);
  const {catData,isCatLoading,refetchData} = useGetCat();
  const {count, increase,decrease,restart } = useCount();

  if(isCatLoading) return <h1>loading ...</h1>

  return (
    <main>
      <h4>
        This is the main section and the user is: {username} and info{" "}
        <p>{catData?.fact}</p>
      </h4>
      <button onClick={refetchData}>Update</button>
      <div>
        {count}
        <button onClick={increase}>increase</button>
        <button onClick={decrease}>decrease</button>
        <button onClick={restart}>restart</button>
      </div>
      <h1 className="main--title">Fun Facts about React</h1>
      <ul className="main--facts">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousandsof enterprise apps,including mobile apps.</li>
      </ul>
    </main>
  );
}
