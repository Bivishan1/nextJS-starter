"use client";
import React, { useState } from "react";
// import _ from 'lodash';//since, we statitcally import , including entire library in our page bundle, which cause browser has to download this to render this page, so to implmenetn lazy loading,, first remove it from here,

const HeavyComponent = () => {
  // const [state, setState] = useState(false); // remove this also to implement lazy loading with lodash
  return (
    <div>
      <button
        className="btn btn-secondary"
        onClick={async() => {
          //in third step after removingh all of above state vaRiable and import _, we can directly import here lodash because this is where we need lazy loading.
          const _ = (await import("lodash")).default; // if we hover 'x', it says Promise, which means this object x returns Promise, and if we await it, we'll get it's property like (as we can see in hover popup) `default`, `versions` & so on.
          //  setState(()=>!state)
          //let's define array of users list
          const users = [
            { name: "Alex", age: 30 },
            { name: "Sam", age: 25 },
            { name: "John", age: 21 },
          ];
          //let's use sort array of users method lodash
          const sortedUsers = _.orderBy(users, ["name"], ["desc"]);
          console.log(sortedUsers);
        }}
      >
        Show
      </button>
      {/* removing this because to implement lazy loaing in _ i.e. lodash library */}
      {/* <h2 className={state ? "block" : "hidden"}>My Heavy Component</h2> */}
    </div>
  );
};

export default HeavyComponent;
