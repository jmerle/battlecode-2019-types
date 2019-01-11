interface Robot {
  /**
   * The id of the robot, which is an integer between 1 and {@link Specs.MAX_ID}.
   *
   * Always available.
   */
  id: number;

  /**
   * The robot's unit type, where {@link Specs.CASTLE} stands for castle,
   * {@link Specs.CHURCH} stands for church, {@link Specs.PILGRIM} stands for pilgrim,
   * {@link Specs.CRUSADER} stands for crusader, {@link Specs.PROPHET} stands for prophet
   * and {@link Specs.PREACHER} stands for preacher.
   *
   * Available if visible.
   */
  unit?: number;

  /**
   * The health of the robot.
   *
   * Only available for `r = this.me`.
   */
  health?: number;

  /**
   * The team of the robot, where {@link Specs.RED} stands for RED and {@link Specs.BLUE} stands for BLUE.
   *
   * Available if visible.
   */
  team?: number;

  /**
   * The x position of the robot.
   *
   * Available if visible.
   */
  x?: number;

  /**
   * The y position of the robot.
   *
   * Available if visible.
   */
  y?: number;

  /**
   * The amount of fuel that the robot carries.
   *
   * Only available if {@link BCAbstractRobot.me} equals this robot.
   */
  fuel?: number;

  /**
   * The amount of karbonite that the robot carries.
   *
   * Only available if {@link BCAbstractRobot.me} equals this robot.
   */
  karbonite?: number;

  /**
   * The turn count of the robot (initialized to 0, and incremented just before `turn()`).
   *
   * Always available.
   */
  turn: number;

  /**
   * The signal message of the robot.
   *
   * -1 if not radioable.
   */
  signal: number;

  /**
   * The signal radius of the robot.
   *
   * -1 if not radioable.
   */
  signal_radius: number;

  /**
   * The castle talk message sent by the robot.
   *
   * Available if {@link BCAbstractRobot.me} is a Castle.
   */
  castle_talk?: number;

  /**
   * The amount of milliseconds this robot has left in it's chess clock.
   */
  time: number;
}
