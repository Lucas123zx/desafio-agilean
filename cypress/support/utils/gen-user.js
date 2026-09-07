import { generateEmail, generateName} from './gen-responsability';

export function generateUser() {
  const fullName = generateName();
  return  {
    email: generateEmail(fullName.name, fullName.lastName),
    password: Cypress.expose('password')
  };
}