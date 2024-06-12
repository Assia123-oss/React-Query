import React, { useContext } from "react";
import {AppContext} from "../App.jsx"
import ChangeProfile from './ChangeProfile.jsx'
import Person from "./Person.jsx";

 const Menu = () => {
  const {username} = useContext(AppContext);
  return (
    <>
      <div>
        Menu being used by:{username}
        <ChangeProfile />
      </div>
      <Person
        name="Teta"
        email="teta@gmail.com"
        age={18}
        isMarried={false}
        friends={["audrey", "sandra", "joanna", "gianna"]}
      />
    </>
  );
}

export default Menu;
