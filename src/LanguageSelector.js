import React from "react";

class LanguageSelector extends React.Component {
  render() {
    var languages = [
      "Java",
      "C",
      "C++",
      "Python",
      ".Net",
      "C#",
      "PHP",
      "JS",
      "SQL",
      "Swift"
    ];

    return (
      <div>
        <select>
          <option>a</option>
          <option>b</option>
          <option>c</option>
        </select>
      </div>
    );
  }
}

export default LanguageSelector;
