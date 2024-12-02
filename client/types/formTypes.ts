//זרוע היבשה
export interface CombatPreferences {
  golani: number;
  armor: number;
  artillery: number;
  searchAndRescue: number;
}

//גובניק
export interface SupportPreferences {
  targetingNCO: number;
  nimrodiSergeant: number;
  cook: number;
  sandwichFiller: number;
}

//תוכנית קודקוד
export interface TechPreferences {
  fullstack: number;
  data: number;
  devops: number;
  duty: number;
}

export interface IMilitaryForm {
  _id?: string;
  name: string;
  personalNote: string;
  combatPreferences: CombatPreferences;
  supportPreferences: SupportPreferences;
  techPreferences: TechPreferences;
  submissionDate: Date;
  lastModified: Date;
  status: "draft" | "submitted" | "processed";
  version: number;
}
