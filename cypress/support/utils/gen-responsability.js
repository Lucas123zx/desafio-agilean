import { faker } from '@faker-js/faker';

function generateName() {
  let name = faker.person.firstName().replace(/[^a-zA-Z0-9]/g, '');
  let lastName = faker.person.lastName().replace(/[^a-zA-Z0-9]/g, '');

  return { name, lastName };
}

function generatePhoneNumber() {
  const ddd = Math.floor(Math.random() * (99 - 11 + 1)) + 11;
  const number = Math.floor(Math.random() * 1000000000);
  const phone = `(${ddd}) ${'9' + String(number).padStart(9, '0').slice(0, 4)}-${String(number).padStart(9, '0').slice(4, 8)}`;

  return phone;
}

function generateEmail(name, lastName) {  
  return `${name}-${lastName}@tuamaeaquelaursa.com`;
}

export function generateReponsability() {
  const fullName = generateName();
  const email = generateEmail(fullName.name, fullName.lastName);
  const phone = generatePhoneNumber();

  return { name, email, phone };
}