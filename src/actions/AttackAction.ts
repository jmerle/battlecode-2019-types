interface AttackAction extends Action {
  /**
   * The type of this action.
   */
  action: 'attack';

  /**
   * The amount of steps away the targeted robot is in the x direction.
   */
  dx: number;

  /**
   * The amount of steps away the targeted robot is in the y direction.
   */
  dy: number;
}
