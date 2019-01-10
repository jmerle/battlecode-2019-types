interface GameState {
  /**
   * The id of the playing robot.
   */
  id: number;

  /**
   * A map of id's of visible robots.
   *
   * The map is represented as a 2 by 2 grid of numbers where most values are -1.
   * If `shadow[y][x] != -1`, then `shadow[y][x]` is the id of the robot at (x, y).
   */
  shadow: number[][];

  /**
   * An array of visible robots.
   */
  visible: Robot[];

  /**
   * The full map represented as a boolean grid where `true` indicates passable and `false` indicates impassable.
   *
   * This property only contains the full map when {@link Robot.turn} equals 1.
   * If it doesn't equal 1, it contains `[[0], [0]]`.
   * It is therefore recommended to use {@link BCAbstractRobot.map}.
   */
  map: boolean[][] | number[][];

  /**
   * The karbonite map represented as a boolean grid where `true` indicates that karbonite is present and `false` indicates that it is not.
   *
   * This property only contains the karbonite map when {@link Robot.turn} equals 1.
   * If it doesn't equal 1, it contains `[[0], [0]]`.
   * It is therefore recommended to use {@link BCAbstractRobot.karbonite_map}.
   */
  karbonite_map: boolean[][] | number[][];

  /**
   * The fuel map represented as a boolean grid where `true` indicates that fuel is present and `false` indicates that it is not.
   *
   * This property only contains the fuel map when {@link Robot.turn} equals 1.
   * If it doesn't equal 1, it contains `[[0], [0]]`.
   * It is therefore recommended to use {@link BCAbstractRobot.fuel_map}.
   */
  fuel_map: boolean[][] | number[][];

  /**
   * The global amount of karbonite that the team possesses.
   */
  karbonite: number;

  /**
   * The global amount of fuel that the team possesses.
   */
  fuel: number;

  /**
   * A 2 by 2 grid containing the last trade offers by both teams.
   *
   * last_offer[{@link Specs.RED}] is the last offer made by RED and contains an array of two integers.
   * Similarly, last_offer[{@link Specs.BLUE}] is the last offer made by BLUE.
   *
   * The first value in the array of integers is the amount of karbonite and the second one is the amount of fuel.
   * For both offers, a positive amount signifies that the resource goes from RED to BLUE.
   *
   * Available for Castles (always `null` for other units).
   */
  last_offer: number[][] | null;
}
