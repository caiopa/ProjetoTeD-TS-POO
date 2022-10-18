import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Renger extends Archetype {
  static rengersCreate = 0;
  private _typeEnerge: EnergyType;

  constructor(name: string) {
    super(name);
    this._typeEnerge = 'stamina';
    Renger.rengersCreate += 1;
  } 

  public static createdArchetypeInstances(): number { 
    return this.rengersCreate;
  }

  get energyType(): EnergyType {
    return this._typeEnerge;
  }
}