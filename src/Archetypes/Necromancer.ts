import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  static necromancersCreate = 0;
  private _typeEnerge: EnergyType;

  constructor(name: string) {
    super(name);
    this._typeEnerge = 'mana';
    Necromancer.necromancersCreate += 1;
  } 

  public static createdArchetypeInstances(): number { 
    return this.necromancersCreate;
  }

  get energyType(): EnergyType {
    return this._typeEnerge;
  }
}