interface Specs {
  /**
   * The amount of bits that can be used when signaling (default: 16).
   */
  COMMUNICATION_BITS: number;

  /**
   * The amount of bits that can be used when sending a message to the castles (default: 8).
   */
  CASTLE_TALK_BITS: number;

  /**
   * The maximum amount of rounds this game can take (default: 1000).
   */
  MAX_ROUNDS: number;

  /**
   * The amount of fuel that is given per turn (default: 25).
   */
  TRICKLE_FUEL: number;

  /**
   * The initial amount of karbonite every player starts with (default: 100).
   */
  INITIAL_KARBONITE: number;

  /**
   * The initial amount of fuel every player starts with (default: 500).
   */
  INITIAL_FUEL: number;

  /**
   * The amount of fuel it costs to mine once (default: 1).
   */
  MINE_FUEL_COST: number;

  /**
   * The amount of karbonite that can be mined from fields with karbonite (default: 2).
   */
  KARBONITE_YIELD: number;

  /**
   * The amount of karbonite that can be mined from fields with fuel (default: 10).
   */
  FUEL_YIELD: number;

  /**
   * The maximum amount of goods that can be traded in a single turn (default: 1024).
   */
  MAX_TRADE: number;

  /**
   * The maximum board size (default: 64).
   */
  MAX_BOARD_SIZE: number;

  /**
   * The maximum id of a unit (default: 4096).
   */
  MAX_ID: number;

  /**
   * The id of the castle type (default: 0).
   */
  CASTLE: number;

  /**
   * The id of the church type (default: 1).
   */
  CHURCH: number;

  /**
   * The id of the pilgrim unit type (default: 2).
   */
  PILGRIM: number;

  /**
   * The id of the crusader unit type (default: 3).
   */
  CRUSADER: number;

  /**
   * The id of the prophet unit type (default: 4).
   */
  PROPHET: number;

  /**
   * The id of the preacher unit type (default: 5).
   */
  PREACHER: number;

  /**
   * The id of the red team (default: 0).
   */
  RED: number;

  /**
   * The id of the blue team (default: 1).
   */
  BLUE: number;

  /**
   * The initial amount of milliseconds that is given to every robot (default: 100).
   */
  CHESS_INITIAL: number;

  /**
   * The amount of extra milliseconds that a robot is given every turn (default: 20).
   */
  CHESS_EXTRA: number;

  /**
   * The maximum amount of memory your robot can use in bytes (default: 50000000).
   *
   * At the time of writing, this limit is not enforced.
   * It is unclear whether this will change later in the competition.
   */
  MAX_MEMORY: number;

  /**
   * An array of specs of all the different units.
   *
   * The index is the id of the unit as specified in the {@link SPECS}, like {@link PILGRIM} and {@link CRUSADER}.
   */
  UNITS: UnitSpecs[];
}
