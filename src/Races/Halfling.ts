import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints;
  static halflingCreated = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    
    Halfling.halflingCreated += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return this.halflingCreated;
  }
}