interface TradeAction extends Action {
  /**
   * The type of this action.
   */
  action: 'trade';

  /**
   * The amount of fuel to propose.
   *
   * If the amount if positive, the player is offering fuel to the opponent.
   * If the amount is negative, the player is asking fuel from the opponent.
   */
  trade_fuel: number;

  /**
   * The amount of karbonite to propose.
   *
   * If the amount if positive, the player is offering karbonite to the opponent.
   * If the amount is negative, the player is asking karbonite from the opponent.
   */
  trade_karbonite: number;
}
