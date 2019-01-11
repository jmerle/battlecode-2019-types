interface GiveAction extends Action {
  /**
   * The type of this action.
   */
  action: 'give';

  /**
   * The amount of karbonite to give to the receiving robot.
   */
  give_karbonite: number;

  /**
   * The amount of fuel to give to the receiving robot.
   */
  give_fuel: number;

  /**
   * The amount of steps away the receiving robot is in the x direction.
   */
  dx: number;

  /**
   * The amount of steps away the receiving robot is in the y direction.
   */
  dy: number;
}
