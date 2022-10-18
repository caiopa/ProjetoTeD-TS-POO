import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  static magesCreate = 0;
  private _typeEnerge: EnergyType;

  constructor(name: string) {
    super(name);
    this._typeEnerge = 'mana';
    Mage.magesCreate += 1;
  } 

  public static createdArchetypeInstances(): number { 
    return this.magesCreate;
  }

  get energyType(): EnergyType {
    return this._typeEnerge;
  }
}