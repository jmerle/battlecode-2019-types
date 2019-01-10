interface Action {
  /**
   * The message to signal to all units within squared radius {@link signal_radius}^2.
   *
   * The message can be at most {@link Specs.COMMUNICATION_BITS} bits.
   */
  signal: number;

  /**
   * The distance to signal in.
   */
  signal_radius: number;

  /**
   * Messages that need to be logged.
   */
  logs: string[];

  /**
   * The message to send to all castles owned by the player.
   *
   * The message can be at most {@link Specs.CASTLE_TALK_BITS} bits.
   */
  castle_talk: number;
}
