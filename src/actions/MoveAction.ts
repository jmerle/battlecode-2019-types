interface MoveAction extends Action {
  /**
   * The type of this action.
   */
  action: 'move';

  /**
   * The amount of steps to move in the x direction.
   */
  dx: number;

  /**
   * The amount of steps to move in the y direction.
   */
  dy: number;
}
