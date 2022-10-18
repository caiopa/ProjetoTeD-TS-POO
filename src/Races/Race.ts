export default abstract class Race {
  protected _name: string;
  protected _dexterity: number;

  // protected static _racesCounter = 0

  constructor(name: string, dexterity: number) {
    this._name = name;
    this._dexterity = dexterity;
    // Race._racesCounter += 1;
  }

  get name(): string {
    return this._name;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  public static createdRacesInstances(): number | string {
    throw new Error('Not implemented');
  }

  public abstract get maxLifePoints(): number;
}