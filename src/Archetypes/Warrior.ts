import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  static warriorsCreate = 0;
  private _typeEnerge: EnergyType;

  constructor(name: string) {
    super(name);
    this._typeEnerge = 'stamina';
    Warrior.warriorsCreate += 1;
  } 

  public static createdArchetypeInstances(): number { 
    return this.warriorsCreate;
  }

  get energyType(): EnergyType {
    return this._typeEnerge;
  }
}