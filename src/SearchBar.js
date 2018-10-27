import React from "react";

const SearchBar = ({ onSearch }) => {
  return (
    <div>
      <select className="mv1 pv2 dib">
        <option>(language)</option>
        <option>c</option>
        <option>Java</option>
        <option>Javascript</option>
      </select>
      <select className="mv1 pv2 dib">
        <option>(feature)</option>
        <option>All</option>
        <option>Basic</option>
        <option>MergeSort</option>
      </select>
      <a
        onClick={onSearch}
        class="f6 link dim ba br2 ph3 pv2 ma2 dib grow night"
        href="./#"
      >
        go
      </a>
    </div>
  );
};

export default SearchBar;