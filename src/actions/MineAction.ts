interface MineAction extends Action {
  /**
   * The type of this action.
   *
   * In the case of MineAction this is always "mine".
   */
  action: ActionType;
}
