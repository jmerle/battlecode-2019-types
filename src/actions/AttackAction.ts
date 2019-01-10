interface AttackAction extends Action {
  /**
   * The type of this action.
   *
   * In the case of AttackAction this is always "attack".
   */
  action: ActionType;

  /**
   * The amount of steps away the targeted robot is in the x direction.
   */
  dx: number;

  /**
   * The amount of steps away the targeted robot is in the y direction.
   */
  dy: number;
}
