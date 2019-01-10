interface MoveAction extends Action {
  /**
   * The type of this action.
   *
   * In the case of MoveAction this is always "move".
   */
  action: ActionType;

  /**
   * The amount of steps to move in the x direction.
   */
  dx: number;

  /**
   * The amount of steps to move in the y direction.
   */
  dy: number;
}
