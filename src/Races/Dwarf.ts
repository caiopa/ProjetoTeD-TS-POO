import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints;
  static dwarfsCreated = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);

    this._maxLifePoints = 80;

    Dwarf.dwarfsCreated += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return this.dwarfsCreated;
  }
}