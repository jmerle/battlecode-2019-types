interface UnitSpecs {
  /**
   * The amount of karbonite it costs to construct this unit.
   */
  CONSTRUCTION_KARBONITE: number | null;

  /**
   * The amount of fuel it costs to construct this unit.
   */
  CONSTRUCTION_FUEL: number | null;

  /**
   * The amount of karbonite this unit can carry.
   */
  KARBONITE_CAPACITY: number | null;

  /**
   * The amount of fuel this unit can carry.
   */
  FUEL_CAPACITY: number | null;

  /**
   * The speed of this unit. 0 if this unit can't move.
   */
  SPEED: number;

  /**
   * The amount of fuel this unit needs per move.
   */
  FUEL_PER_MOVE: number | null;

  /**
   * The amount of hp this unit starts with.
   */
  STARTING_HP: number;

  /**
   * The distance this unit can see.
   */
  VISION_RADIUS: number;

  /**
   * The amount of damage this unit does when attacking.
   */
  ATTACK_DAMAGE: number | null;

  /**
   * An array specifying the minimum and maximum distance in which this unit can attack.
   */
  ATTACK_RADIUS: [number, number] | null;

  /**
   * The amount of fuel it takes for this unit to attack.
   */
  ATTACK_FUEL_COST: number | null;

  /**
   * How big the spread of this unit is when attacking.
   */
  DAMAGE_SPREAD: number | null;
}
