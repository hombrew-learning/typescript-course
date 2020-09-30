import faker from 'faker';
import { Mappable } from './Mappable';

export class Company implements Mappable {
  name: string;
  phrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.company.companyName();
    this.phrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  getMarkerContent(): string {
    return `
      <div>
        <h1>Company Name: ${this.name}</h1>
        <h3>Catchphrase: ${this.phrase}</h3>
      </div>
    `;
  }
}
