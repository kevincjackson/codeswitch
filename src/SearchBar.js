import React from "react";
import database from "./database";

const SearchBar = ({ onSearch }) => {

  const language_options = database.languages.map(lan => {
    return <option key={lan.id} value={lan.id}>{lan.name}</option>
  })

  const feature_options = database.features.map(fea => {
    return <option key={fea.id} value={fea.id}>{fea.name}</option>
  })

  return (
    <div>
      <select className="mv1 ph1 pv2 dib">
        <option>(language)</option>
        {language_options}
      </select>
      <select className="mv1 ph1 pv2 dib">
        {feature_options}
      </select>
      <a
        onClick={onSearch}
        className="f6 link dim ba br2 ph3 pv2 ma2 dib grow night"
        href="./#"
      >
        go
      </a>
    </div>
  );
};

export default SearchBar;
