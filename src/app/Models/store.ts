export class Store {
  Name: string;
  branches: string[];
  Logo: string;

  constructor(name: string, branches: string[], logo: string) {
    this.Name = name;
    this.branches = branches;
    this.Logo = logo;
  }
}
