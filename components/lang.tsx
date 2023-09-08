import { transliterate } from "../lib/letter";

export const Lang = props =>
  //<span>{transliterate(props.children)}</span>
  <span style={{ fontStyle: 'italic' }}>{props.children}</span>