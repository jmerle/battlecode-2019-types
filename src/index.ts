declare module 'battlecode' {
  /**
   * The specifications of the current game.
   */
  const SPECS: Specs;

  /**
   * The abstract class that all implementations should extend from.
   *
   * All the variables and methods starting with an underscore are used internally.
   */
  abstract class BCAbstractRobot {
    /**
     * The log messages that will be sent this turn.
     *
     * All items in this array are passed through {@link JSON.stringify} by {@link log}.
     */
    public _bc_logs: string[];

    /**
     * The latest used signal value.
     */
    public _bc_signal: number;

    /**
     * The latest used signal radius.
     */
    public _bc_signal_radius: number;

    /**
     * The latest used castle talk message.
     */
    public _bc_castle_talk: number;

    /**
     * The current game state.
     */
    public _bc_game_state: GameState;

    /**
     * The robot object of the playing robot.
     */
    public me: Robot;

    /**
     * The id of the playing robot.
     */
    public id: number;

    /**
     * The global amount of fuel that the team possesses.
     */
    public fuel: number;

    /**
     * The global amount of karbonite that the team possesses.
     */
    public karbonite: number;

    /**
     * A 2 by 2 grid containing the last trade offers by both teams.
     *
     * last_offer[{@link Specs.RED}] is the last offer made by RED and contains an array of two integers.
     * Similarly, last_offer[{@link Specs.BLUE}] is the last offer made by BLUE.
     *
     * The first value in the array of integers is the amount of karbonite and the second one is the amount of fuel.
     * For both offers, a positive amount signifies that the resource goes from RED to BLUE.
     *
     * Available for castles (always `null` for other units).
     */
    public last_offer: number[][] | null;

    /**
     * The full map represented as a boolean grid where `true` indicates passable and `false` indicates impassable.
     */
    public map: boolean[][];

    /**
     * The karbonite map represented as a boolean grid where `true` indicates that karbonite is present and `false` indicates that it is not.
     */
    public karbonite_map: boolean[][];

    /**
     * The fuel map represented as a boolean grid where `true` indicates that fuel is present and `false` indicates that it is not.
     */
    public fuel_map: boolean[][];

    /**
     * Play a single turn for this robot.
     */
    public abstract turn(): Action;

    /**
     * Plays a turn and returns the action.
     *
     * @param game_state - The game state to play this robot on
     * @private
     */
    public _do_turn(game_state: GameState): Action;

    /**
     * Resets the state of the robot.
     *
     * @private
     */
    public _bc_reset_state(): void;

    /**
     * Creates a base action with the default properties which all actions have.
     *
     * @private
     */
    public _bc_null_action(): Action;

    /**
     * Creates an error action.
     *
     * If the error has a stack, the message is the stack.
     * It the error does not have a stack, the message is set to `e.toString()`.
     *
     * @param e the error to use to create the action
     * @private
     */
    public _bc_error_action(e: Error): ErrorAction;

    /**
     * @param action - The name of the action
     * @param properties - Additional properties to add to the standard action
     * @private
     */
    public _bc_action(
      action: string,
      properties: { [key: string]: any },
    ): Action;

    /**
     * Checks whether the coordinates are on the map.
     *
     * @param x - The x coordinate to check
     * @param y - The y coordinate to check
     * @private
     */
    public _bc_check_on_map(x: number, y: number): boolean;

    /**
     * Print a message to the command line. You cannot use ordinary `console.log` in Battlecode for security reasons.
     *
     * The message is converted to a string using {@link JSON.stringify}.
     *
     * @param message - The message to log
     */
    public log(message: any): void;

    /**
     * Broadcast `value` to all robots within the squared radius `sq_radius`. Uses `sq_radius` Fuel.
     * Can be called multiple times in one `turn()`; however, only the most recent signal will be used, while each signal will cost fuel.
     *
     * @param value - The value to signal, which should be between `0` and 2^{@link Specs.COMMUNICATION_BITS}-1 (inclusive)
     * @param radius - The radius to signal in
     */
    public signal(value: number, radius: number): void;

    /**
     * Broadcast `value` to all castles of the same team. Does not use fuel.
     * Can be called multiple times in one `turn()`; however, only the most recent castle talk will be used.
     *
     * @param value - The number to broadcast, which should be between `0` and 2^{@link Specs.CASTLE_TALK_BITS}-1 (inclusive)
     */
    public castleTalk(value: number): void;

    /**
     * Propose a trade with the other team. `karbonite` and `fuel` need to be integers.
     *
     * For example, for RED to make the offer "I give you 10 Karbonite if you give me 10 Fuel", the parameters
     * would be `karbonite = 10` and `fuel = -10` (for BLUE, the signs are reversed).
     *
     * If the proposed trade is the same as the other team's `last_offer`, a trade is performed, after which the `last_offer` of both teams will be nullified.
     *
     * Only available for castles.
     *
     * @param karbonite - The amount of karbonite to propose
     * @param fuel - The amount of fuel to propose
     */
    public proposeTrade(karbonite: number, fuel: number): TradeAction;

    /**
     * Build a unit of the type `unit` (integer, see `r.unit`) in the tile that is `dx` steps in the x direction and `dy` steps in the y direction from `this.me`.
     * Can only build in adjacent, empty and passable tiles.
     *
     * Uses {@link UnitSpecs.CONSTRUCTION_FUEL} fuel and {@link UnitSpecs.CONSTRUCTION_KARBONITE} karbonite (depending on the constructed unit).
     *
     * Available for pilgrims, castles and churches.
     *
     * Pilgrims can only build churches.
     * Castles and churches can only build pilgrims, crusaders, prophets and preachers.
     *
     * @param unit - The type of the unit to build
     * @param dx - The amount of steps away in the x direction to build
     * @param dy - The amount of steps away in the y direction to build
     */
    public buildUnit(unit: number, dx: number, dy: number): BuildAction;

    /**
     * Move `dx` steps in the x direction, and `dy` steps in the y direction.
     *
     * Uses fuel (depending on unit and distance).
     *
     * Available for pilgrims, crusaders, prophets, preachers.
     *
     * @param dx - The amount of steps to move in the x direction
     * @param dy - The amount of steps to move in the y direction
     */
    public move(dx: number, dy: number): MoveAction;

    /**
     * Mine {@link Specs.KARBONITE_YIELD} karbonite or {@link Specs.FUEL_YIELD} fuel, if on a corresponding resource tile.
     *
     * Uses {@link Specs.MINE_FUEL_COST} fuel. Available for pilgrims.
     */
    public mine(): MineAction;

    /**
     * Give `karbonite` karbonite and `fuel` fuel to the robot in the tile that is `dx` steps in the x direction and `dy` steps in the y direction from `this.me`.
     * A robot can only give to another robot that is in one of its 8 adjacent tiles, and cannot give more than it has.
     *
     * Uses 0 Fuel.
     *
     * Available for all robots.
     *
     * If a unit tries to give a robot more than its capacity, the excess is loss to the void.
     *
     * @param dx - The amount of steps away the receiving robot is in the x direction
     * @param dy - The amount of steps away the receiving robot is in the y direction
     * @param karbonite - The amount of karbonite to give to the receiving robot
     * @param fuel - The amount of fuel to give to the receiving robot
     */
    public give(
      dx: number,
      dy: number,
      karbonite: number,
      fuel: number,
    ): GiveAction;

    /**
     * Attack the robot in the tile that is `dx` steps in the x direction and `dy` steps in the y direction from `this.me`.
     * A robot can only attack another robot that is within its attack radius (depending on unit).
     *
     * Uses fuel (depending on unit).
     *
     * Available for crusaders, prophets and preachers.
     *
     * @param dx - The amount of steps away the attacked robot is in the x direction
     * @param dy - The amount of steps away the attacked robot is in the y direction
     */
    public attack(dx: number, dy: number): AttackAction;

    /**
     * Returns a robot object with the given integer `id`.
     *
     * Returns `null` if such a robot is not in your vision (for castles, it also
     * returns a robot object for all robots on `this.me`'s team that are not in
     * the robot's vision, to access `castle_talk`).
     *
     * @param id - The id of the robot to retrieve
     */
    public getRobot(id: number): Robot;

    /**
     * Returns `true` if the given robot object is visible.
     *
     * @param robot - The robot to check
     */
    public isVisible(robot: Robot): boolean;

    /**
     * Returns `true` if the given robot object is currently sending radio (signal).
     *
     * @param robot - The robot to check
     */
    public isRadioing(robot: Robot): boolean;

    /**
     * Returns {@link GameState.shadow}.
     */
    public getVisibleRobotMap(): number[][];

    /**
     * Returns {@link map}.
     */
    public getPassableMap(): boolean[][];

    /**
     * Returns {@link karbonite_map}.
     */
    public getKarboniteMap(): boolean[][];

    /**
     * Returns {@link fuel_map}.
     */
    public getFuelMap(): boolean[][];

    /**
     * Returns {@link GameState.visible}.
     */
    public getVisibleRobots(): Robot[];
  }
}
