import { ja } from "./phoneme";

export const letters = {
  a: { name: '' },
  b: { name: 'ba' },
  c: { name: 'ca' },
  d: { name: 'da' },
  e: { name: '' },
  f: { name: 'fa' },
  g: { name: '' },
  h: { name: 'ha' },
  i: { name: '' },
  j: { name: 'ja' },
  k: { name: 'ka' },
  l: { name: '' },
  m: { name: 'ma' },
  n: { name: 'na' },
  o: { name: '' },
  ø: { name: '' },
  p: { name: 'pa' },
  r: { name: 'ra' },
  s: { name: 'sa' },
  t: { name: 'ta' },
  u: { name: '' },
  v: { name: 'va' },
  w: { name: '' },
  x: { name: 'xa' },
  y: { name: '' },
  z: { name: 'za' },
}

export const transliterate = (k, s) =>
  Object.keys(letters).reduce((acc, letter) => acc.replace(new RegExp(letter, 'g'), letters[letter][k]), s)

export const dictBase = {
  do: { signifier: ja('す'), category: '', klass: 'case', signifiee: '', version: 0, etymology: '' },
  der: { signifier: ja('は'), category: '', klass: 'case', signifiee: '主格', version: 0, etymology: '' },
  den: { signifier: ja('を'), category: '', klass: 'case', signifiee: '對角', version: 0, etymology: '' },
  with: { signifier: 'CV', category: '', klass: 'case', signifiee: '', version: 0, etymology: '' },

  of: { signifier: ja('の'), category: '', klass: '', signifiee: '', version: 0, etymology: '' },
  _swap: { signifier: 'CV', category: '', klass: 'case', signifiee: '', version: 0, etymology: '' },

  i: { signifier: ja('わ'), category: 'pronoun', klass: 'verb', signifiee: 'i', version: 0, etymology: '' },
  thou: { signifier: ja('な'), category: 'pronoun', klass: 'verb', signifiee: 'thou', version: 0, etymology: '' },
  he: { signifier: ja('か'), category: 'pronoun', klass: 'noun/number', signifiee: 'he', version: 0, etymology: '' },
  here: { signifier: ja('こ'), category: 'pronoun', klass: 'verb', signifiee: 'here', version: 0, etymology: '' },

  what: { signifier: ja('た'), category: '', klass: '', signifiee: '空項', version: 0, etymology: '' },
  that: { signifier: 'CV', category: '', klass: '', signifiee: '節', version: 0, etymology: '' },
  which: { signifier: 'CV', category: '', klass: '', signifiee: '關係', version: 0, etymology: '' },
  clause_end: { signifier: 'CV', category: '', klass: '', signifiee: '', version: 0, etymology: '' },

  _open: { signifier: 'CV', category: '', klass: 'structure', signifiee: '', version: 0, etymology: '' },
  _close: { signifier: 'CV', category: '', klass: 'structure', signifiee: '', version: 0, etymology: '' },
  _comma: { signifier: 'CV', category: '', klass: '', signifiee: '', version: 0, etymology: '' },
  _quote: { signifier: 'CV', category: '', klass: '', signifiee: '', version: 0, etymology: '' },
  _period: { signifier: 'CV', category: '', klass: '', signifiee: '句點', version: 0, etymology: '' },
  _ask: { signifier: 'CV', category: '', klass: '', signifiee: '句點', version: 0, etymology: '' },

  whether: { signifier: 'CV', category: '', klass: '', signifiee: '', version: 0, etymology: '' },

  _past: { signifier: ja('き'), category: 'aspect', klass: 'adverb/number', signifiee: '', version: 0, etymology: '' },
  _present: { signifier: ja('り'), category: 'aspect', klass: 'adverb/number', signifiee: '', version: 0, etymology: '' },
  _future: { signifier: ja('む'), category: 'aspect', klass: 'adverb/number', signifiee: '', version: 0, etymology: '' },

  _before: { signifier: 'CV', category: 'aspect', klass: 'inverb', signifiee: '', version: 0, etymology: '' },
  _begin: { signifier: 'CV', category: 'aspect', klass: 'inverb', signifiee: '', version: 0, etymology: '' },
  _while: { signifier: 'CV', category: 'aspect', klass: 'inverb', signifiee: '', version: 0, etymology: '' },
  _end: { signifier: 'CV', category: 'aspect', klass: 'inverb', signifiee: '', version: 0, etymology: '' },
  _after: { signifier: 'CV', category: 'aspect', klass: 'inverb', signifiee: '', version: 0, etymology: '' },

  _mood: { signifier: 'CV', category: 'mood', klass: 'prenoun', signifiee: '0: may not, ≠0: may, max: must', version: 0, etymology: '' },
  _may: { signifier: 'CV', category: 'mood', klass: 'prenoun', signifiee: '_MOOD ZERO LESS', version: 0, etymology: '' },
  _must: { signifier: 'CV', category: 'mood', klass: 'prenoun', signifiee: '_MOOD MAX', version: 0, etymology: '' },

  anti: { signifier: 'CV', category: 'degree', klass: 'prenoun', signifiee: '=_DEGREE MINUS NORMAL', version: 0, etymology: '' },
  no: { signifier: 'CV', category: 'degree', klass: 'prenoun', signifiee: '=_DEGREE ZERO', version: 0, etymology: '' },
  little: { signifier: 'CV', category: 'degree', klass: 'prenoun', signifiee: '=_DEGREE LESS NORMAL', version: 0, etymology: '' },
  very: { signifier: 'CV', category: 'degree', klass: 'prenoun', signifiee: '=_DEGREE NORMAL LESS', version: 0, etymology: '' },

  _frequency: { signifier: 'CV', category: '', klass: 'prenoun/number', signifiee: '', version: 0, etymology: '' },

  _connect: { signifier: 'CV', category: 'sentence\\sentence/noun/sentence', klass: '', signifiee: '', version: 0, etymology: '' },

  typical: { signifier: 'CV', category: '', klass: 'adverb', signifiee: '', version: 0, etymology: '' },
  figurative: { signifier: 'CV', category: '', klass: 'adverb', signifiee: '', version: 0, etymology: '' },

  _degree: { signifier: 'CV', category: 'preverb/number', klass: 'adverb', signifiee: '', version: 0, etymology: '' },

  zero: { signifier: 'nV', category: 'digit', klass: 'numeral', signifiee: '0', version: 0, etymology: '' },
  one: { signifier: 'vV', category: 'digit', klass: 'numeral', signifiee: '1', version: 0, etymology: '' },
  two: { signifier: 'dV', category: 'digit', klass: 'numeral', signifiee: '2', version: 0, etymology: '' },
  three: { signifier: 'tV', category: 'digit', klass: 'numeral', signifiee: '3', version: 0, etymology: '' },
  four: { signifier: 'qV', category: 'digit', klass: 'numeral', signifiee: '4', version: 0, etymology: '' },
  five: { signifier: 'pV', category: 'digit', klass: 'numeral', signifiee: '5', version: 0, etymology: '' },
  six: { signifier: 'sV', category: 'digit', klass: 'numeral', signifiee: '6', version: 0, etymology: '' },
  seven: { signifier: 'xV', category: 'digit', klass: 'numeral', signifiee: '7', version: 0, etymology: '' },
  eight: { signifier: 'hV', category: 'digit', klass: 'numeral', signifiee: '8', version: 0, etymology: '' },
  nine: { signifier: 'nV', category: 'digit', klass: 'numeral', signifiee: '9', version: 0, etymology: '' },
  ten: { signifier: 'dV', category: 'digit', klass: 'numeral', signifiee: '10', version: 0, etymology: '' },
  eleven: { signifier: 'CV', category: 'digit', klass: 'numeral', signifiee: '11', version: 0, etymology: '' },
  twelve: { signifier: 'CV', category: 'digit', klass: 'numeral', signifiee: '12', version: 0, etymology: '' },
  thirteen: { signifier: 'CV', category: 'digit', klass: 'numeral', signifiee: '13', version: 0, etymology: '' },
  fourteen: { signifier: 'CV', category: 'digit', klass: 'numeral', signifiee: '14', version: 0, etymology: '' },
  fifteen: { signifier: 'CV', category: 'digit', klass: 'numeral', signifiee: '15', version: 0, etymology: '' },

  number_dot: { signifier: 'CV', category: 'number', klass: 'numeral', signifiee: 'E', version: 0, etymology: '' },
  exp: { signifier: 'CV', category: 'number', klass: 'numeral', signifiee: 'E', version: 0, etymology: '' },

  null: { signifier: 'CV', category: 'number/special', klass: 'numeral', signifiee: 'null', version: 0, etymology: '' },
  min: { signifier: 'CV', category: 'number/special', klass: 'numeral', signifiee: 'minimum', version: 0, etymology: '' },
  max: { signifier: 'CV', category: 'number/special', klass: 'numeral', signifiee: 'maximum, every', version: 0, etymology: '' },

  at_most: { signifier: 'CV', category: 'number/relation', klass: 'numeral', signifiee: '≤', version: 0, etymology: '' },
  less: { signifier: 'CV', category: 'number/relation', klass: 'numeral', signifiee: '<', version: 0, etymology: '' },

  aleph0: { signifier: 'CV', category: 'number/infinity', klass: 'numeral', signifiee: 'countably infinite', version: 0, etymology: '' },
  aleph1: { signifier: 'CV', category: 'number/infinity', klass: 'numeral', signifiee: 'uncountably infinite', version: 0, etymology: '' },

  tau: { signifier: 'CV', category: 'number/constant', klass: 'numeral', signifiee: 'τ=6.283+ε', version: 0, etymology: '' },
  napier: { signifier: 'CV', category: 'number/constant', klass: 'numeral', signifiee: 'e=2.718+ε', version: 0, etymology: '' },

  low: { signifier: 'CV', category: 'number/subjective', klass: 'numeral', signifiee: '=PASSIVE MORE NORMAL', version: 0, etymology: '' },
  normal: { signifier: 'CV', category: 'number/subjective', klass: 'numeral', signifiee: 'normal', version: 0, etymology: '' },
  high: { signifier: 'CV', category: 'number/subjective', klass: 'numeral', signifiee: '=MORE NORMAL', version: 0, etymology: '' },

  decrease: { signifier: 'CV', category: 'number/subjective', klass: 'numeral', signifiee: '', version: 0, etymology: '' },
  increase: { signifier: 'CV', category: 'number/subjective', klass: 'numeral', signifiee: '', version: 0, etymology: '' },

  plus: { signifier: 'CV', category: 'number/operation', klass: 'numeral', signifiee: '+', version: 0, etymology: '' },
  minus: { signifier: 'CV', category: 'number/operation', klass: 'numeral', signifiee: '-', version: 0, etymology: '' },
  multiply: { signifier: 'CV', category: 'number/operation', klass: 'numeral', signifiee: '*', version: 0, etymology: '' },
  divide: { signifier: 'CV', category: 'number/operation', klass: 'numeral', signifiee: '/', version: 0, etymology: '' },
  modulo: { signifier: 'CV', category: 'number/operation', klass: 'numeral', signifiee: '%', version: 0, etymology: '' },
  power: { signifier: 'CV', category: 'number/operation', klass: 'numeral', signifiee: '^', version: 0, etymology: '' },
  logarithm: { signifier: 'CV', category: 'number/operation', klass: 'numeral', signifiee: 'log', version: 0, etymology: '' },

  ordinal: { signifier: 'CV', category: '', klass: 'noun/number', signifiee: '', version: 0, etymology: '' },

  not: { signifier: 'CV', category: '', klass: '', signifiee: '', version: 0, etymology: '' },
  and: { signifier: 'CV', category: '', klass: '', signifiee: '', version: 0, etymology: '' },
  or: { signifier: 'CV', category: '', klass: '', signifiee: '', version: 0, etymology: '' },
  imply: { signifier: 'CV', category: '', klass: '', signifiee: '', version: 0, etymology: '' },

  back: { signifier: 'CV', category: '', klass: 'verb', signifiee: 'S is converse phenomenon of O', version: 0, etymology: '' },

  _language: { signifier: 'CVCV', category: '', klass: 'verb', signifiee: 'S is this language', version: 0, etymology: '' },

  have: { signifier: ja('もつ').substring(0, 3) + 'V', category: '', klass: 'verb', signifiee: 'S have O', version: 0, etymology: '' },
  take: { signifier: ja('とる').substring(0, 3) + 'V', category: '', klass: 'verb', signifiee: 'S take O', version: 0, etymology: '' },

  below: { signifier: ja('した').substring(0, 3) + 'V', category: 'position', klass: 'verb', signifiee: 'S is under O', version: 0, etymology: '' },
  behind: { signifier: ja('うしろ').substring(0, 3) + 'V', category: 'position', klass: 'verb', signifiee: 'S is behind O', version: 0, etymology: '' },
  left: { signifier: ja('ひだり').substring(0, 3) + 'V', category: 'position', klass: 'verb', signifiee: 'S is in left of O', version: 0, etymology: '' },
  before: { signifier: ja('まへ').substring(0, 3) + 'V', category: 'position', klass: 'verb', signifiee: 'S is before O', version: 0, etymology: '' },
  in: { signifier: ja('なか').substring(0, 3) + 'V', category: 'position', klass: 'verb', signifiee: 'S is in O', version: 0, etymology: '' },
  together: { signifier: 'CVCV', category: 'position', klass: 'verb', signifiee: 'S is together with O', version: 0, etymology: '' },

  far: { signifier: ja('とほ').substring(0, 3) + 'V', category: 'position/advanced', klass: 'verb', signifiee: 'S is far from O', version: 0, etymology: '' },
  cross: { signifier: 'CVCV', category: 'position/advanced', klass: 'verb', signifiee: 'S cross O', version: 0, etymology: '' },
  orthogonal: { signifier: 'CVCV', category: 'position/advanced', klass: 'verb', signifiee: 'S is orthogonal to O', version: 0, etymology: '' },
  parallel: { signifier: 'CVCV', category: 'position/advanced', klass: 'verb', signifiee: 'S is parallel to O', version: 0, etymology: '' },

  big: { signifier: ja('おほ').substring(0, 3) + 'V', category: 'volume', klass: 'verb', signifiee: 'S is big', version: 0, etymology: 'き' },
  long: { signifier: ja('なが').substring(0, 3) + 'V', category: 'volume', klass: 'verb', signifiee: 'S is long', version: 0, etymology: '' },
  thick: { signifier: 'CVCV', category: 'volume', klass: 'verb', signifiee: 'S is thick', version: 0, etymology: '' },
  wide: { signifier: 'CVCV', category: 'volume', klass: 'verb', signifiee: 'S is wide', version: 0, etymology: '' },

  point: { signifier: 'CVCV', category: 'mathematics', klass: 'verb', signifiee: 'S is point', version: 0, etymology: '' },
  line: { signifier: 'CVCV', category: 'mathematics', klass: 'verb', signifiee: 'S is line', version: 0, etymology: '' },
  plane: { signifier: 'CVCV', category: 'mathematics', klass: 'verb', signifiee: 'S is plane', version: 0, etymology: '' },
  polygon: { signifier: 'CVCV', category: 'mathematics', klass: 'verb', signifiee: 'S is polygon', version: 0, etymology: '' },
  sharp: { signifier: 'CVCV', category: 'mathematics', klass: 'verb', signifiee: 'S is angle', version: 0, etymology: '' },
  centre: { signifier: 'CVCV', category: 'mathematics', klass: 'verb', signifiee: 'S is centrer of B', version: 0, etymology: '' },
  interval: { signifier: 'CVCV', category: 'mathematics', klass: 'verb', signifiee: 'S is range', version: 0, etymology: '' },
  function: { signifier: 'CVCV', category: 'mathematics', klass: 'verb', signifiee: 'S is function', version: 0, etymology: '' },

  space: { signifier: 'CVCV', category: 'physics', klass: 'verb', signifiee: 'S is space', version: 0, etymology: '' },
  time: { signifier: ja('とき').substring(0, 3) + 'V', category: 'physics', klass: 'verb', signifiee: 'S is time', version: 0, etymology: '' },
  wave: { signifier: ja('なみ').substring(0, 3) + 'V', category: 'physics', klass: 'verb', signifiee: 'S is wave', version: 0, etymology: '' },
  particle: { signifier: 'CVCV', category: 'physics', klass: 'verb', signifiee: 'S is particle', version: 0, etymology: '' },
  light: { signifier: ja('ひかる').substring(0, 3) + 'V', category: 'physics', klass: 'verb', signifiee: 'S is light', version: 0, etymology: '' },
  sound: { signifier: ja('なる').substring(0, 3) + 'V', category: 'physics', klass: 'verb', signifiee: 'S is sound', version: 0, etymology: '' },
  reflect: { signifier: 'CVCV', category: 'physics', klass: 'verb', signifiee: 'S reflect B', version: 0, etymology: '' },

  electron: { signifier: 'CVCV', category: 'physics/particle', klass: 'verb', signifiee: 'S is electron', version: 0, etymology: '' },
  atom: { signifier: 'CVCV', category: 'physics/particle', klass: 'verb', signifiee: 'S is atom', version: 0, etymology: '' },
  molecule: { signifier: 'CVCV', category: 'physics/particle', klass: 'verb', signifiee: 'S is molecule', version: 0, etymology: '' },

  solid: { signifier: 'CVCV', category: 'physics/state', klass: 'verb', signifiee: 'Sは固體', version: 0, etymology: '' },
  liquid: { signifier: 'CVCV', category: 'physics/state', klass: 'verb', signifiee: 'Sは液體', version: 0, etymology: '' },
  gas: { signifier: 'CVCV', category: 'physics/state', klass: 'verb', signifiee: 'Sは氣體', version: 0, etymology: '' },
  plasma: { signifier: 'CVCV', category: 'physics/state', klass: 'verb', signifiee: 'Sはplasma', version: 0, etymology: '' },

  water: { signifier: ja('みづ').substring(0, 3) + 'V', category: 'chemistry', klass: 'verb', signifiee: 'Sは水', version: 0, etymology: '' },
  salt: { signifier: ja('しを').substring(0, 3) + 'V', category: 'chemistry', klass: 'verb', signifiee: 'Sは鹽', version: 0, etymology: '' },
  oil: { signifier: ja('あぶら').substring(0, 3) + 'V', category: 'chemistry', klass: 'verb', signifiee: 'Sは油脂', version: 0, etymology: '' },
  metal: { signifier: ja('かね').substring(0, 3) + 'V', category: 'chemistry', klass: 'verb', signifiee: 'Sは金属', version: 0, etymology: '' },

  colour: { signifier: ja('いろ').substring(0, 3) + 'V', category: 'colour', klass: 'verb', signifiee: 'S show color O', version: 0, etymology: '' },
  bright: { signifier: ja('あかる').substring(0, 3) + 'V', category: 'colour', klass: 'verb', signifiee: 'S is bright', version: 0, etymology: '' },
  colourful: { signifier: ja('あざやか').substring(0, 3) + 'V', category: 'colour', klass: 'verb', signifiee: 'S has saturation', version: 0, etymology: '' },
  hue: { signifier: 'CVCV', category: 'colour', klass: 'verb', signifiee: 'S has hue O', version: 0, etymology: '' },
  red: { signifier: ja('あか').substring(0, 3) + 'V', category: 'colour', klass: 'verb', signifiee: 'S is red', version: 0, etymology: '' },
  orange: { signifier: 'CVCV', category: 'colour', klass: 'verb', signifiee: 'S is orange', version: 0, etymology: '' },
  yellow: { signifier: 'CVCV', category: 'colour', klass: 'verb', signifiee: 'S is yellow', version: 0, etymology: '' },
  green: { signifier: 'CVCV', category: 'colour', klass: 'verb', signifiee: 'S is green', version: 0, etymology: '' },
  blue: { signifier: ja('あを').substring(0, 3) + 'V', category: 'colour', klass: 'verb', signifiee: 'S is blue', version: 0, etymology: '' },
  purple: { signifier: 'CVCV', category: 'colour', klass: 'verb', signifiee: 'S is purple', version: 0, etymology: '' },

  sun: { signifier: 'CVCV', category: 'space', klass: 'verb', signifiee: 'Sは恒星', version: 0, etymology: 'Ja ひ' },

  land: { signifier: ja('くが').substring(0, 3) + 'V', category: 'geography', klass: 'verb', signifiee: 'S is land', version: 0, etymology: '' },
  sky: { signifier: ja('そら').substring(0, 3) + 'V', category: 'geography', klass: 'verb', signifiee: 'S is sky', version: 0, etymology: '' },
  mountain: { signifier: ja('やま').substring(0, 3) + 'V', category: 'geography', klass: 'verb', signifiee: 'S is mountain', version: 0, etymology: '' },
  sea: { signifier: ja('うみ').substring(0, 3) + 'V', category: 'geography', klass: 'verb', signifiee: 'S is sea', version: 0, etymology: '' },
  lake: { signifier: 'CVCV', category: 'geography', klass: 'verb', signifiee: 'S is lake', version: 0, etymology: '' },
  river: { signifier: ja('かは').substring(0, 3) + 'V', category: 'geography', klass: 'verb', signifiee: 'S is river', version: 0, etymology: '' },

  male: { signifier: 'CVCV', category: 'sex', klass: 'verb', signifiee: 'S is male', version: 0, etymology: '' },
  female: { signifier: 'CVCV', category: 'sex', klass: 'verb', signifiee: 'S is female', version: 0, etymology: '' },
  copulate: { signifier: 'CVCV', category: 'sex', klass: 'verb', signifiee: 'S copulate O', version: 0, etymology: '' },

  human: { signifier: ja('ひと').substring(0, 3) + 'V', category: 'creature', klass: 'verb', signifiee: 'S is human', version: 0, etymology: '' },
  animal: { signifier: ja('けもの').substring(0, 3) + 'V', category: 'creature', klass: 'verb', signifiee: 'S is animal', version: 0, etymology: '' },
  plant: { signifier: 'CVCV', category: 'creature', klass: 'verb', signifiee: 'S is plant', version: 0, etymology: '' },

  part: { signifier: 'CVCV', category: '', klass: 'verb', signifiee: 'S is part of O', version: 0, etymology: '' },

  hair: { signifier: 'CVCV', category: 'body/head', klass: 'verb', signifiee: 'DER is hair of FROM', version: 0, etymology: '' },
  brain: { signifier: 'CVCV', category: 'body/head', klass: 'verb', signifiee: 'DER is brain of FROM', version: 0, etymology: '' },
  eye: { signifier: 'CVCV', category: 'body/head', klass: 'verb', signifiee: 'DER is eye of FROM', version: 0, etymology: '' },
  ear: { signifier: 'CVCV', category: 'body/head', klass: 'verb', signifiee: 'DER is ear of FROM', version: 0, etymology: '' },
  nose: { signifier: 'CVCV', category: 'body/head', klass: 'verb', signifiee: 'DER is nose of FROM', version: 0, etymology: '' },
  mouth: { signifier: 'CVCV', category: 'body/head', klass: 'verb', signifiee: 'DER is mouth of FROM', version: 0, etymology: '' },
  tooth: { signifier: 'CVCV', category: 'body/head', klass: 'verb', signifiee: 'DER is tooth of FROM', version: 0, etymology: '' },
  tongue: { signifier: 'CVCV', category: 'body/head', klass: 'verb', signifiee: 'DER is tongue of FROM', version: 0, etymology: '' },
  throat: { signifier: 'CVCV', category: 'body/head', klass: 'verb', signifiee: 'DER is throat of FROM', version: 0, etymology: '' },

  horn: { signifier: 'CVCV', category: 'body/head', klass: 'verb', signifiee: 'DER is horn of FROM', version: 0, etymology: '' },

  heart: { signifier: 'CVCV', category: 'body/organ', klass: 'verb', signifiee: 'DER is heart of FROM', version: 0, etymology: '' },
  lung: { signifier: 'CVCV', category: 'body/organ', klass: 'verb', signifiee: 'DER is lung of FROM', version: 0, etymology: '' },
  gut: { signifier: 'CVCV', category: 'body/organ', klass: 'verb', signifiee: 'DER is gut of FROM', version: 0, etymology: '' },

  trunk: { signifier: 'CVCV', category: 'body/trunk', klass: 'verb', signifiee: 'DER is trunk of FROM', version: 0, etymology: '' },
  tail: { signifier: 'CVCV', category: 'body/trunk', klass: 'verb', signifiee: 'DER is tail of FROM', version: 0, etymology: '' },
  ass: { signifier: 'CVCV', category: 'body/trunk', klass: 'verb', signifiee: 'DER is hip of FROM', version: 0, etymology: '' },
  penis: { signifier: 'CVCV', category: 'body/trunk', klass: 'verb', signifiee: 'S have penis or clitoris O', version: 0, etymology: '' },
  womb: { signifier: 'CVCV', category: 'body/trunk', klass: 'verb', signifiee: 'DER is womb of FROM', version: 0, etymology: '' },
  nipple: { signifier: 'CVCV', category: 'body/trunk', klass: 'verb', signifiee: 'DER is nipple of FROM', version: 0, etymology: '' },

  limb: { signifier: 'CVCV', category: 'body/limb', klass: 'verb', signifiee: 'DER is limb or branch or wing of FROM', version: 0, etymology: '' },
  hand: { signifier: 'CVCV', category: 'body/limb', klass: 'verb', signifiee: 'DER is hand or foot of FROM', version: 0, etymology: '' },
  finger: { signifier: 'CVCV', category: 'body/limb', klass: 'verb', signifiee: 'DER is finger of FROM', version: 0, etymology: '' },
  nail: { signifier: 'CVCV', category: 'body/limb', klass: 'verb', signifiee: 'DER is nail of FROM', version: 0, etymology: '' },

  nerve: { signifier: 'CVCV', category: 'body/whole', klass: 'verb', signifiee: 'DER is nerve of FROM', version: 0, etymology: '' },
  muscle: { signifier: 'CVCV', category: 'body/whole', klass: 'verb', signifiee: 'DER is flesh of FROM', version: 0, etymology: '' },
  bone: { signifier: 'CVCV', category: 'body/whole', klass: 'verb', signifiee: 'DER is bone of FROM', version: 0, etymology: '' },
  skin: { signifier: 'CVCV', category: 'body/whole', klass: 'verb', signifiee: 'DER is skin of FROM', version: 0, etymology: '' },

  fruit: { signifier: 'CVCV', category: 'body/plant', klass: 'verb', signifiee: 'DER is fruit of FROM', version: 0, etymology: '' },
  root: { signifier: 'CVCV', category: 'body/plant', klass: 'verb', signifiee: 'DER is root of FROM', version: 0, etymology: '' },

  eat: { signifier: ja('くふ').substring(0, 3) + 'V', category: 'physiology', klass: 'verb', signifiee: 'S eat O', version: 0, etymology: '' },
  digest: { signifier: 'CVCV', category: 'physiology', klass: 'verb', signifiee: 'S digest O', version: 0, etymology: '' },
  excrete: { signifier: ja('ひる').substring(0, 3) + 'V', category: 'physiology', klass: 'verb', signifiee: 'S excrete O', version: 0, etymology: '' },

  sense: { signifier: 'CVCV', category: 'sensation', klass: 'verb', signifiee: 'DER feel DEN', version: 0, etymology: '' },
  hear: { signifier: ja('きく').substring(0, 3) + 'V', category: 'sensation', klass: 'verb', signifiee: 'DER hear DEN', version: 0, etymology: '' },
  see: { signifier: ja('みる').substring(0, 3) + 'V', category: 'sensation', klass: 'verb', signifiee: 'DER see DEN', version: 0, etymology: '' },
  taste: { signifier: ja('あじ').substring(0, 3) + 'V', category: 'sensation', klass: 'verb', signifiee: 'DER taste DEN', version: 0, etymology: '' },
  smell: { signifier: ja('かぐ').substring(0, 3) + 'V', category: 'sensation', klass: 'verb', signifiee: 'DER smell DEN', version: 0, etymology: '' },
  touch: { signifier: 'CVCV', category: 'sensation', klass: 'verb', signifiee: 'DER feel touch of DEN', version: 0, etymology: '' },
  hurt: { signifier: ja('いたむ').substring(0, 3) + 'V', category: 'sensation', klass: 'verb', signifiee: 'DER is hurt by DEN', version: 0, etymology: '' },

  smile: { signifier: ja('ゑむ').substring(0, 3) + 'V', category: 'facial', klass: 'verb', signifiee: 'S smile', version: 0, etymology: '' },
  laugh: { signifier: ja('わらふ').substring(0, 3) + 'V', category: 'facial', klass: 'verb', signifiee: 'S laugh', version: 0, etymology: '' },
  frown: { signifier: ja('しかむ').substring(0, 3) + 'V', category: 'facial', klass: 'verb', signifiee: 'S frown', version: 0, etymology: '' },
  cry: { signifier: ja('なく').substring(0, 3) + 'V', category: 'facial', klass: 'verb', signifiee: 'S cry', version: 0, etymology: '' },

  happy: { signifier: ja('うれしむ').substring(0, 3) + 'V', category: 'emotion', klass: 'verb', signifiee: 'SはOを嬉しむ.', version: 0, etymology: '' },
  want: { signifier: ja('もとむ').substring(0, 3) + 'V', category: 'emotion', klass: 'verb', signifiee: 'S want O', version: 0, etymology: '' },
  amaze: { signifier: ja('おどろく').substring(0, 3) + 'V', category: 'emotion', klass: 'verb', signifiee: 'S is surprised at O. low:bore.', version: 0, etymology: '' },
  fear: { signifier: ja('おそる').substring(0, 3) + 'V', category: 'emotion', klass: 'verb', signifiee: 'S fear O', version: 0, etymology: '' },
  anger: { signifier: ja('いかる').substring(0, 3) + 'V', category: 'emotion', klass: 'verb', signifiee: 'S is angry for O', version: 0, etymology: '' },
  enjoy: { signifier: ja('たのしむ').substring(0, 3) + 'V', category: 'emotion', klass: 'verb', signifiee: 'S enjoy O. negative:suffer.', version: 0, etymology: '' },
  respect: { signifier: ja('うやまふ').substring(0, 3) + 'V', category: 'emotion', klass: 'verb', signifiee: 'S respect O. low:despise.', version: 0, etymology: '' },
  pride: { signifier: ja('ほこる').substring(0, 3) + 'V', category: 'emotion', klass: 'verb', signifiee: 'S is proud of O. low:ashamed.', version: 0, etymology: '' },

  think: { signifier: ja('かむがふ').substring(0, 3) + 'V', category: 'intellectual', klass: 'verb', signifiee: 'S think O', version: 0, etymology: '' },
  know: { signifier: ja('しる').substring(0, 3) + 'V', category: 'intellectual', klass: 'verb', signifiee: 'S know O', version: 0, etymology: '' },
  understand: { signifier: 'CVCV', category: 'intellectual', klass: 'verb', signifiee: 'S understand O', version: 0, etymology: '' },
  assume: { signifier: 'CVCV', category: 'intellectual', klass: 'verb', signifiee: 'S assume O', version: 0, etymology: '' },
  plan: { signifier: 'CVCV', category: 'intellectual', klass: 'verb', signifiee: 'S plan O', version: 0, etymology: '' },
  expect: { signifier: 'CVCV', category: 'intellectual', klass: 'verb', signifiee: 'S expect O', version: 0, etymology: '' },
  hope: { signifier: ja('のぞむ').substring(0, 3) + 'V', category: 'intellectual', klass: 'verb', signifiee: 'S hope O', version: 0, etymology: '' },
  agree: { signifier: 'CVCV', category: 'intellectual', klass: 'verb', signifiee: 'S agree with O', version: 0, etymology: '' },
  deduce: { signifier: 'CVCV', category: 'intellectual', klass: 'verb', signifiee: 'S deduce O', version: 0, etymology: '' },
  aim: { signifier: ja('ねらふ').substring(0, 3) + 'V', category: 'intellectual', klass: 'verb', signifiee: 'S aim O', version: 0, etymology: '' },

  true: { signifier: ja('まこと').substring(0, 3) + 'V', category: 'language', klass: 'verb', signifiee: 'Sは眞である', version: 0, etymology: '' },
  speak: { signifier: ja('いふ').substring(0, 3) + 'V', category: 'language', klass: 'verb', signifiee: 'SはOを言ふ', version: 0, etymology: '' },
  write: { signifier: ja('かく').substring(0, 3) + 'V', category: 'language', klass: 'verb', signifiee: 'SはOを出力する', version: 0, etymology: '' },
  mean: { signifier: 'CVCV', category: 'language', klass: 'verb', signifiee: 'SはOを意味する', version: 0, etymology: '' },

  declare: { signifier: ja('のる').substring(0, 3) + 'V', category: 'activity', klass: 'verb', signifiee: 'SはOを宣言する', version: 0, etymology: '宣る' },
  ask: { signifier: ja('とふ').substring(0, 3) + 'V', category: 'activity', klass: 'verb', signifiee: 'SはOを問ふ', version: 0, etymology: '' },
  apologise: { signifier: 'CVCV', category: 'activity', klass: 'verb', signifiee: 'Sは事象Oを謝る', version: 0, etymology: '' },
  forgive: { signifier: ja('ゆるす').substring(0, 3) + 'V', category: 'activity', klass: 'verb', signifiee: 'Sは事象Oを許す', version: 0, etymology: '' },
  deceive: { signifier: ja('だます').substring(0, 3) + 'V', category: 'activity', klass: 'verb', signifiee: 'SはOであると騙す', version: 0, etymology: '' },

  greet: { signifier: 'CVCV', category: 'activity', klass: 'verb', signifiee: 'SはOに挨拶する', version: 0, etymology: '' },
  fight: { signifier: 'CVCV', category: 'activity', klass: 'verb', signifiee: 'SはOに抗ふ', version: 0, etymology: '' },

  play: { signifier: ja('あそぶ').substring(0, 3) + 'V', category: 'culture', klass: 'verb', signifiee: 'S play O', version: 0, etymology: '' },
  dance: { signifier: ja('おどる').substring(0, 3) + 'V', category: 'culture', klass: 'verb', signifiee: 'S dance O', version: 0, etymology: '' },
  music: { signifier: 'CVCV', category: 'culture', klass: 'verb', signifiee: 'S musically play O', version: 0, etymology: '' },
  intercourse: { signifier: 'CVCV', category: 'culture', klass: 'verb', signifiee: 'S have intercourse with O', version: 0, etymology: '' },

  building: { signifier: 'CVCV', category: 'civilisation', klass: 'verb', signifiee: 'S is building', version: 0, etymology: '' },
  town: { signifier: ja('まち').substring(0, 3) + 'V', category: 'civilisation', klass: 'verb', signifiee: 'S is town or city', version: 0, etymology: '' },
  nation: { signifier: ja('くに').substring(0, 3) + 'V', category: 'civilisation', klass: 'verb', signifiee: 'S is nation', version: 0, etymology: '' },
  group: { signifier: 'CVCV', category: 'civilisation', klass: 'verb', signifiee: 'S is group or organisation', version: 0, etymology: '' },

  world: { signifier: 'CVCV', category: '', klass: 'verb', signifiee: 'S is world', version: 0, etymology: '' },
  person: { signifier: 'CVCV', category: '', klass: 'verb', signifiee: 'S is person', version: 0, etymology: '' },
  live: { signifier: ja('いく').substring(0, 3) + 'V', category: '', klass: 'verb', signifiee: 'S is alive', version: 0, etymology: '' },
  wake: { signifier: ja('おく').substring(0, 3) + 'V', category: '', klass: 'verb', signifiee: 'S is awake', version: 0, etymology: '' },
  old: { signifier: ja('ふるい').substring(0, 3) + 'V', category: '', klass: 'verb', signifiee: 'S is old', version: 0, etymology: '' },
  rot: { signifier: ja('くさる').substring(0, 3) + 'V', category: '', klass: 'verb', signifiee: 'S is rotten', version: 0, etymology: '' },
  health: { signifier: ja('すこやか').substring(0, 3) + 'V', category: '', klass: 'verb', signifiee: 'S is healthy', version: 0, etymology: '' },
  temporary: { signifier: ja('はかなし').substring(0, 3) + 'V', category: '', klass: 'verb', signifiee: 'S is temporal', version: 0, etymology: '' },
  unit: { signifier: 'CVCV', category: '', klass: 'verb', signifiee: 'S is unit', version: 0, etymology: '' },

  cause: { signifier: ja('ゆゑ').substring(0, 3) + 'V', category: '', klass: 'verb', signifiee: 'S cause O', version: 0, etymology: '' },
  influence: { signifier: 'CVCV', category: '', klass: 'verb', signifiee: 'S influence O', version: 0, etymology: '' },
  home: { signifier: ja('いへ').substring(0, 3) + 'V', category: '', klass: 'verb', signifiee: 'S is based on O', version: 0, etymology: '' },
  consume: { signifier: 'CVCV', category: '', klass: 'verb', signifiee: 'S consume O', version: 0, etymology: '' },
  differ: { signifier: ja('ちがふ').substring(0, 3) + 'V', category: '', klass: 'verb', signifiee: 'S differ from O', version: 0, etymology: '' },
  value: { signifier: 'CVCV', category: '', klass: 'verb', signifiee: 'S is worth O', version: 0, etymology: '' },
  make: { signifier: ja('つくる').substring(0, 3) + 'V', category: '', klass: 'verb', signifiee: 'S make O', version: 0, etymology: '' },
  leave: { signifier: 'CVCV', category: '', klass: 'verb', signifiee: 'S leave O', version: 0, etymology: '' },
  rotate: { signifier: ja('まはる').substring(0, 3) + 'V', category: '', klass: 'verb', signifiee: 'S rotate around O', version: 0, etymology: '' },
  use: { signifier: ja('つかふ').substring(0, 3) + 'V', category: '', klass: 'verb', signifiee: 'S is for purpose O', version: 0, etymology: '' },
  model: { signifier: 'CVCV', category: '', klass: 'verb', signifiee: 'S simulate O', version: 0, etymology: '' },
  imitate: { signifier: 'CVCV', category: '', klass: 'verb', signifiee: 'S imitate O', version: 0, etymology: '' },
  status: { signifier: 'CVCV', category: '', klass: 'verb', signifiee: 'S is state of O', version: 0, etymology: '' },
  manner: { signifier: 'CVCV', category: '', klass: 'verb', signifiee: 'S is manner of O', version: 0, etymology: '' },
  system: { signifier: 'CVCV', category: '', klass: 'verb', signifiee: 'S is system', version: 0, etymology: '' },
}

export const dictCompound = {
  read: { signifier: { alias: 'WRITE-BACK' }, category: 'language', klass: 'verb', signifiee: 'S read O', version: 0, etymology: '' },

  planet: { signifier: { alias: 'FOLLOW-STAR' }, category: 'space', klass: 'verb', signifiee: 'SはOを公轉する恆星', version: 0, etymology: '' },
  moon: { signifier: { alias: 'FOLLOW-FOLLOW-STAR' }, category: 'space', klass: 'verb', signifiee: 'SはOを公轉する衞星', version: 0, etymology: '' },

  meter: { signifier: { alias: `UNIT-${letters.m.name}` }, category: 'SI unit', klass: 'verb', signifiee: 'S is 1m', version: 0, etymology: '' },
  second: { signifier: { alias: `UNIT-${letters.s.name}` }, category: 'SI unit', klass: 'verb', signifiee: 'S is 1s', version: 0, etymology: '' },
  kilogram: { signifier: { alias: `UNIT-${letters.k.name}${letters.g.name}` }, category: 'SI unit', klass: 'verb', signifiee: 'S is 1kg', version: 0, etymology: '' },
  ampere: { signifier: { alias: `UNIT-${letters.k.name}${letters.a.name}` }, category: 'SI unit', klass: 'verb', signifiee: 'S is 1A', version: 0, etymology: '' },
  kelvin: { signifier: { alias: `UNIT-${letters.k.name}` }, category: 'SI unit', klass: 'verb', signifiee: 'S is 1K', version: 0, etymology: '' },
  candela: { signifier: { alias: `UNIT-${letters.c.name}${letters.d.name}` }, category: 'SI unit', klass: 'verb', signifiee: 's is 1cd', version: 0, etymology: '' },
}