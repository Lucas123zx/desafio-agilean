import { faker } from '@faker-js/faker';

export function generateNameActivity() { 
  return `Ler ${faker.book.title()}`;
}