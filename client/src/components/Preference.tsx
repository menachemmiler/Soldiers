import React from "react";

interface Props {
  title: string;
  options: string[];
    optionRef: React.MutableRefObject<Record<string, number>>;
}

const Preference = ({ title, options, optionRef }: Props) => {
  const translateFunc = (str: string) => {
    const dictAll: { [key: string]: string } = {
      גולני: "golani",
      שריון: "armor",
      תותחנים: "artillery",
      "חילוץ והצלה": "searchAndRescue",
      'מש"ק ממטרות': "targetingNCO",
      'רס"ר בנימרודי': "nimrodiSergeant",
      טבח: "cook",
      "ממלא מקרר בסנדוויצ'ים": "sandwichFiller",
      "מפתח פולסטאק": "fullstack",
      "מפתח דאטא": "data",
      "מפתח דבאופס": "devops",
      תורן: "duty",
    };
    return dictAll[str];
  };

  return (
    <div className="preference">
      <h1>{title}</h1>

      <div className="preference-radio">
        {options.map((option) => (
          <div key={option}>
            <label htmlFor={option}>{option}</label>
            <div className="options">
              {[1, 2, 3, 4, 5].map((value) => (
                <input
                  key={`${option}-${value}`}
                  type="radio"
                  id={`${option}-${value}`}
                  name={option}
                  value={value}
                  onChange={(e) => {
                    optionRef.current![translateFunc(option)] = parseInt(
                      e.target.value
                    );
                    console.log(`${option} value= ${e.target.value}`);
                  }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Preference;
