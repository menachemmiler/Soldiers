import {  useRef } from "react";
import Preference from "./Preference";

const Form = () => {
  const CombatRef = useRef<Record<string, number>>({});
  const SupportRef = useRef<Record<string, number>>({});
  const TechRef = useRef<Record<string, number>>({});
  const nameRef = useRef<string>("");
  const noteRef = useRef<string>("");

  const CombatOtions: string[] = ["גולני", "שריון", "תותחנים", "חילוץ והצלה"];
  const SupportOtions: string[] = [
    `מש"ק ממטרות`,
    'רס"ר בנימרודי',
    "טבח",
    "ממלא מקרר בסנדוויצ'ים",
  ];
  const TechOtions: string[] = [
    "מפתח פולסטאק",
    "מפתח דאטא",
    "מפתח דבאופס",
    "תורן",
  ];

  const handleSendForm = async () => {
    console.log({ CombatRef });
    if (!nameRef.current || !CombatRef || !SupportRef || !TechRef) return;
    console.log(50);
    console.log(
      JSON.stringify({
        name: nameRef.current,
        personalNote: noteRef.current,
        combatPreferences: CombatRef.current,
        supportPreferences: SupportRef.current,
        techPreferences: TechRef.current,
      })
    );
    try {
      const res = await fetch("http://localhost:2800/api/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: nameRef.current,
          personalNote: noteRef.current,
          combatPreferences: CombatRef.current,
          supportPreferences: SupportRef.current,
          techPreferences: TechRef.current,
        }),
      });
      if (res.status != 201) throw new Error("cont create new form!");
    } catch (error: any) {
      console.log(error.message);
      return error;
    }
  };
  return (
    <div className="form">
      <div className="formcenter">
        <div className="input">
          <label htmlFor="name">שם מלא</label>
          <input
            onChange={(e) => {
              nameRef.current = e.target.value;
            }}
            type="text"
            id="name"
          />
        </div>
        <div className="guidelines">הנחיות למילוי המנילה</div>
        <Preference
          title="רצון לשרת כלוחם בזרוע היבשה"
          options={CombatOtions}
          optionRef={CombatRef}
        />
        <Preference
          title="רצון לשרת כג'ובניק"
          options={SupportOtions}
          optionRef={SupportRef}
        />
        <Preference
          title="רצון לשרת בתכנית קודקוד"
          options={TechOtions}
          optionRef={TechRef}
        />

        <div className="notes">
          <label htmlFor="note">הערות אישיות</label>
          <textarea
            id="note"
            onChange={(e) => {
              noteRef.current = e.target.value;
            }}
          />
        </div>

        <button onClick={handleSendForm} className="sendbtn">
          שלח טופס
        </button>
      </div>
    </div>
  );
};

export default Form;
