import React from "react";

class FeatureSelector extends React.Component {
  render() {
    var features = ["all", "basic", "falsey", "truthy"];
    return (
      <div>
        <select>
          <option>x</option>
          <option>y</option>
          <option>z</option>
        </select>
      </div>
    );
  }
}

export default FeatureSelector;
