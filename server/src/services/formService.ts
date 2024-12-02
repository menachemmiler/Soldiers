import militaryFormSchema, {
  IMilitaryForm,
} from "../models/militaryFormSchema";

export const formService = async (
  formFromBody: IMilitaryForm
): Promise<any> => {
  try {
    const {
      name,
      personalNote,
      combatPreferences,
      supportPreferences,
      techPreferences,
      submissionDate,
      lastModified,
      status,
      version,
    } = formFromBody;
    if (
      !name ||
      !combatPreferences ||
      !supportPreferences ||
      !techPreferences
    ) {
      throw new Error("missing info!");
    }
    const dbForm = new militaryFormSchema({
      ...formFromBody,
      status: "submitted",
    });
    await dbForm.save();
    return dbForm;
  } catch (error) {
    throw error;
  }
};
