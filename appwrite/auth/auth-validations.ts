import { registrationSchema } from "./auth-schemas";

export function validateRegistrationInput(input: unknown) {
  return registrationSchema.safeParse(input);
}
