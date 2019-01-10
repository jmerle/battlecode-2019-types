interface BuildAction extends Action {
  /**
   * The type of this action.
   *
   * In the case of BuildAction this is always "build".
   */
  action: ActionType;

  /**
   * The type of the unit to build.
   */
  build_unit: number;

  /**
   * The amount of steps away in the x direction to build.
   */
  dx: number;

  /**
   * The amount of steps away in the y direction to build.
   */
  dy: number;
}
