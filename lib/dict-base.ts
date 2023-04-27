import { cs } from "./phoneme"

export const letters = {
  a: { name: 'hela' },
  â: { name: 'lâ' },
  b: { name: 'ba' },
  c: { name: 'ca' },
  g: { name: 'ga' },
  d: { name: 'da' },
  e: { name: 'le' },
  f: { name: 'fa' },
  z: { name: 'za' },
  i: { name: 'li' },
  k: { name: 'ka' },
  l: { name: 'la' },
  m: { name: 'ma' },
  n: { name: 'na' },
  o: { name: 'lo' },
  ô: { name: 'lô' },
  p: { name: 'pa' },
  s: { name: 'sa' },
  t: { name: 'ta' },
  u: { name: 'lu' },
  v: { name: 'va' },
  w: { name: 'lw' },
  x: { name: 'xa' },
  y: { name: 'ly' },
}
//hjqrwy

const alphabets = {
  cyrl: 'абгдєфңхiжчлмнопкюстувъшѵз',
  deva: 'अबगदएफङहइझचलमनओपकऔथतउभईषऊध',
  hang: 'ㅏㅃㄲㄸㅓㅸㅇㅎㅣㅆㅈㄹㅁㄴㅗㅂㄱㅛ!ㄷㅜㅹㅡㅅㅠㅿ',
}

export const dictBase = {
  _language: { signifier: 'CVC', category: '', type: 'noun', signifiee: 'S is this language', version: 0, etymology: '' },

  period: { signifier: 'CV', category: '', type: '', signifiee: '', version: 0, etymology: '' },

  do: { signifier: 'CV', category: '', type: 'verb/noun', signifiee: '', version: 0, etymology: '' },
  as: { signifier: 'CV', category: '', type: 'postnoun/noun', signifiee: '', version: 0, etymology: '' },

  i: { signifier: 'CV', category: 'pronoun', type: 'noun', signifiee: 'i', version: 0, etymology: '' },
  thou: { signifier: 'CV', category: 'pronoun', type: 'noun', signifiee: 'thou', version: 0, etymology: '' },
  he: { signifier: 'CV', category: 'pronoun', type: 'noun/number', signifiee: 'he', version: 0, etymology: 'Ja そ' },
  now: { signifier: 'CV', category: 'pronoun', type: 'noun', signifiee: 'now', version: 0, etymology: '' },
  here: { signifier: 'CV', category: 'pronoun', type: 'noun', signifiee: 'here', version: 0, etymology: '' },
  something: { signifier: 'CV', category: 'pronoun', type: 'noun', signifiee: '', version: 0, etymology: '' },

  what: { signifier: 'CV', category: '', type: '', signifiee: '', version: 0, etymology: '' },
  that: { signifier: 'CV', category: '', type: '', signifiee: '', version: 0, etymology: '' },
  whether: { signifier: 'CV', category: '', type: '', signifiee: '', version: 0, etymology: '' },

  _quote: { signifier: 'CV', category: 'structure', type: '', signifiee: '', version: 0, etymology: '' },

  der: { signifier: 'ze', category: '', type: 'postnoun', signifiee: '', version: 0, etymology: '' },
  den: { signifier: 'zo', category: '', type: 'postnoun', signifiee: '', version: 0, etymology: '' },
  from: { signifier: 'CV', category: '', type: '', signifiee: '', version: 0, etymology: '' },
  to: { signifier: 'CV', category: '', type: 'postnoun', signifiee: '', version: 0, etymology: '' },
  about: { signifier: 'CV', category: '', type: 'postnoun', signifiee: '', version: 0, etymology: '' },

  _swap: { signifier: 'CV', category: 'voice', type: 'prenoun', signifiee: '', version: 0, etymology: '' },

  _tense: { signifier: 'CV', category: 'tense', type: 'prenoun', signifiee: '', version: 0, etymology: '' },
  _past: { signifier: 'CV', category: 'tense', type: 'prenoun', signifiee: '=_TENSE LESS ZERO', version: 0, etymology: '' },
  _present: { signifier: 'CV', category: 'tense', type: 'prenoun', signifiee: '=_TENSE ZERO', version: 0, etymology: '' },
  _future: { signifier: 'CV', category: 'tense', type: 'prenoun', signifiee: '=_TENSE ZERO LESS', version: 0, etymology: '' },

  _aspect: { signifier: 'CV', category: 'tense', type: 'prenoun', signifiee: '', version: 0, etymology: '' },
  begin: { signifier: 'CV', category: 'aspect', type: 'prenoun', signifiee: '', version: 0, etymology: '' },
  doing: { signifier: 'CV', category: 'aspect', type: 'prenoun', signifiee: '', version: 0, etymology: '' },
  end: { signifier: 'CV', category: 'aspect', type: 'prenoun', signifiee: '', version: 0, etymology: '' },

  _mood: { signifier: 'CV', category: 'mood', type: 'prenoun', signifiee: '', version: 0, etymology: '' },
  may: { signifier: 'CV', category: 'mood', type: 'prenoun', signifiee: '=_MOOD ZERO LESS', version: 0, etymology: '' },
  must: { signifier: 'CV', category: 'mood', type: 'prenoun', signifiee: '=_MOOD MAX', version: 0, etymology: '' },

  _degree: { signifier: 'CV', category: 'degree', type: '', signifiee: '', version: 0, etymology: '' },
  anti: { signifier: 'CV', category: 'degree', type: 'prenoun', signifiee: '=_DEGREE MINUS NORMAL', version: 0, etymology: '' },
  no: { signifier: 'CV', category: 'degree', type: 'prenoun', signifiee: '=_DEGREE ZERO', version: 0, etymology: '' },
  little: { signifier: 'CV', category: 'degree', type: 'prenoun', signifiee: '=_DEGREE LESS NORMAL', version: 0, etymology: '' },
  very: { signifier: 'CV', category: 'degree', type: 'prenoun', signifiee: '=_DEGREE NORMAL LESS', version: 0, etymology: '' },

  _frequency: { signifier: 'CV', category: '', type: 'prenoun/number', signifiee: '', version: 0, etymology: '' },

  _connect: { signifier: 'CV', category: 'sentence\\sentence/noun/sentence', type: '', signifiee: '', version: 0, etymology: '' },
  until: { signifier: 'CV', category: 'sentence\\sentence/sentence', type: '', signifiee: '', version: 0, etymology: '' },

  typical: { signifier: 'CV', category: '', type: 'prenoun', signifiee: '', version: 0, etymology: '' },
  figurative: { signifier: 'CV', category: '', type: 'prenoun', signifiee: '', version: 0, etymology: '' },

  how_much: { signifier: 'CV', category: '', type: 'numeral', signifiee: '', version: 0, etymology: '' },

  zero: { signifier: cs[0] + 'V', category: 'digit', type: 'numeral', signifiee: '0', version: 0, etymology: 'Cmn 零' },
  one: { signifier: cs[4] + 'V', category: 'digit', type: 'numeral', signifiee: '1', version: 0, etymology: 'proto-indo-european' },
  two: { signifier: cs[8] + 'V', category: 'digit', type: 'numeral', signifiee: '2', version: 0, etymology: 'proto-indo-european' },
  three: { signifier: cs[12] + 'V', category: 'digit', type: 'numeral', signifiee: '3', version: 0, etymology: 'proto-indo-european' },
  four: { signifier: cs[1] + 'V', category: 'digit', type: 'numeral', signifiee: '4', version: 0, etymology: 'proto-indo-european' },
  five: { signifier: cs[5] + 'V', category: 'digit', type: 'numeral', signifiee: '5', version: 0, etymology: 'proto-indo-european' },
  six: { signifier: cs[9] + 'V', category: 'digit', type: 'numeral', signifiee: '6', version: 0, etymology: 'proto-indo-european' },
  seven: { signifier: cs[13] + 'V', category: 'digit', type: 'numeral', signifiee: '7', version: 0, etymology: 'proto-indo-european' },
  eight: { signifier: cs[2] + 'V', category: 'digit', type: 'numeral', signifiee: '8', version: 0, etymology: 'proto-indo-european' },
  nine: { signifier: cs[6] + 'V', category: 'digit', type: 'numeral', signifiee: '9', version: 0, etymology: 'proto-indo-european' },
  ten: { signifier: cs[10] + 'V', category: 'digit', type: 'numeral', signifiee: '10', version: 0, etymology: '' },
  eleven: { signifier: cs[14] + 'V', category: 'digit', type: 'numeral', signifiee: '11', version: 0, etymology: '' },
  twelve: { signifier: cs[3] + 'V', category: 'digit', type: 'numeral', signifiee: '12', version: 0, etymology: '' },
  thirteen: { signifier: cs[7] + 'V', category: 'digit', type: 'numeral', signifiee: '13', version: 0, etymology: '' },
  fourteen: { signifier: cs[11] + 'V', category: 'digit', type: 'numeral', signifiee: '14', version: 0, etymology: '' },
  fifteen: { signifier: cs[0] + 'V', category: 'digit', type: 'numeral', signifiee: '15', version: 0, etymology: '' },

  exp: { signifier: 'CV', category: 'number', type: 'numeral', signifiee: 'E', version: 0, etymology: '' },

  null: { signifier: 'CV', category: 'number/special', type: 'numeral', signifiee: 'null', version: 0, etymology: '' },
  min: { signifier: 'CV', category: 'number/special', type: 'numeral', signifiee: 'minimum', version: 0, etymology: '' },
  max: { signifier: 'CV', category: 'number/special', type: 'numeral', signifiee: 'maximum, every', version: 0, etymology: '' },

  at_most: { signifier: 'CV', category: 'number/relation', type: 'numeral', signifiee: '≤', version: 0, etymology: '' },
  less: { signifier: 'CV', category: 'number/relation', type: 'numeral', signifiee: '<', version: 0, etymology: '' },

  aleph0: { signifier: 'CV', category: 'number/infinity', type: 'numeral', signifiee: 'countably infinite', version: 0, etymology: '' },
  aleph1: { signifier: 'CV', category: 'number/infinity', type: 'numeral', signifiee: 'uncountably infinite', version: 0, etymology: '' },

  tau: { signifier: 'tV', category: 'number/constant', type: 'numeral', signifiee: 'τ=6.283+ε', version: 0, etymology: '' },
  napier: { signifier: 'nV', category: 'number/constant', type: 'numeral', signifiee: 'e=2.718+ε', version: 0, etymology: '' },

  normal: { signifier: 'CV', category: 'number/subjective', type: 'numeral', signifiee: 'normal', version: 0, etymology: '' },
  high: { signifier: 'CV', category: 'number/subjective', type: 'numeral', signifiee: '=MORE NORMAL', version: 0, etymology: '' },
  low: { signifier: 'CV', category: 'number/subjective', type: 'numeral', signifiee: '=PASSIVE MORE NORMAL', version: 0, etymology: '' },

  decrease: { signifier: 'CV', category: 'number/subjective', type: 'numeral', signifiee: '', version: 0, etymology: '' },
  increase: { signifier: 'CV', category: 'number/subjective', type: 'numeral', signifiee: '', version: 0, etymology: '' },

  plus: { signifier: 'CV', category: 'number/operation', type: 'numeral', signifiee: '+', version: 0, etymology: '' },
  minus: { signifier: 'CV', category: 'number/operation', type: 'numeral', signifiee: '-', version: 0, etymology: '' },
  multiply: { signifier: 'CV', category: 'number/operation', type: 'numeral', signifiee: '*', version: 0, etymology: '' },
  divide: { signifier: 'CV', category: 'number/operation', type: 'numeral', signifiee: '/', version: 0, etymology: '' },
  modulo: { signifier: 'CV', category: 'number/operation', type: 'numeral', signifiee: '%', version: 0, etymology: '' },
  power: { signifier: 'CV', category: 'number/operation', type: 'numeral', signifiee: '^', version: 0, etymology: '' },
  logarithm: { signifier: 'CV', category: 'number/operation', type: 'numeral', signifiee: 'log', version: 0, etymology: '' },

  ordinal: { signifier: 'CV', category: '', type: 'noun/number', signifiee: '', version: 0, etymology: '' },

  not: { signifier: 'CV', category: '', type: '', signifiee: '', version: 0, etymology: '' },
  and: { signifier: 'CV', category: '', type: '', signifiee: '', version: 0, etymology: '' },
  or: { signifier: 'CV', category: '', type: '', signifiee: '', version: 0, etymology: '' },
  imply: { signifier: 'CV', category: '', type: '', signifiee: '', version: 0, etymology: '' },

  back: { signifier: 'CV', category: '', type: 'noun', signifiee: 'S is converse phenomenon of O', version: 0, etymology: '' },

  have: { signifier: 'CVC', category: '', type: 'noun', signifiee: 'S have O', version: 0, etymology: '' },
  take: { signifier: 'CVC', category: '', type: 'noun', signifiee: 'S take O', version: 0, etymology: '' },

  below: { signifier: 'CVC', category: 'position', type: 'noun', signifiee: 'S is under O', version: 0, etymology: '' },
  behind: { signifier: 'CVC', category: 'position', type: 'noun', signifiee: 'S is behind O', version: 0, etymology: '' },
  left: { signifier: 'CVC', category: 'position', type: 'noun', signifiee: 'S is in left of O', version: 0, etymology: '' },
  before: { signifier: 'CVC', category: 'position', type: 'noun', signifiee: 'S is before O', version: 0, etymology: '' },
  in: { signifier: 'CVC', category: 'position', type: 'noun', signifiee: 'S is in O', version: 0, etymology: '' },

  far: { signifier: 'CVC', category: 'position/advanced', type: 'noun', signifiee: 'S is far from O', version: 0, etymology: '' },
  cross: { signifier: 'CVC', category: 'position/advanced', type: 'noun', signifiee: 'S cross O', version: 0, etymology: '' },
  orthogonal: { signifier: 'CVC', category: 'position/advanced', type: 'noun', signifiee: 'S is orthogonal to O', version: 0, etymology: '' },
  parallel: { signifier: 'CVC', category: 'position/advanced', type: 'noun', signifiee: 'S is parallel to O', version: 0, etymology: '' },

  big: { signifier: 'CVC', category: 'volume', type: 'noun', signifiee: 'S is big', version: 0, etymology: '' },
  long: { signifier: 'CVC', category: 'volume', type: 'noun', signifiee: 'S is long', version: 0, etymology: '' },
  thick: { signifier: 'CVC', category: 'volume', type: 'noun', signifiee: 'S is thick', version: 0, etymology: '' },
  wide: { signifier: 'CVC', category: 'volume', type: 'noun', signifiee: 'S is wide', version: 0, etymology: '' },

  point: { signifier: 'CVC', category: 'mathematics', type: 'noun', signifiee: 'S is point', version: 0, etymology: '' },
  line: { signifier: 'CVC', category: 'mathematics', type: 'noun', signifiee: 'S is line', version: 0, etymology: '' },
  plane: { signifier: 'CVC', category: 'mathematics', type: 'noun', signifiee: 'S is plane', version: 0, etymology: '' },
  polygon: { signifier: 'CVC', category: 'mathematics', type: 'noun', signifiee: 'S is polygon', version: 0, etymology: '' },
  sharp: { signifier: 'CVC', category: 'mathematics', type: 'noun', signifiee: 'S is angle', version: 0, etymology: '' },
  centre: { signifier: 'CVC', category: 'mathematics', type: 'noun', signifiee: 'S is centrer of B', version: 0, etymology: '' },
  interval: { signifier: 'CVC', category: 'mathematics', type: 'noun', signifiee: 'S is range', version: 0, etymology: '' },
  function: { signifier: 'CVC', category: 'mathematics', type: 'noun', signifiee: 'S is function', version: 0, etymology: '' },

  space: { signifier: 'CVC', category: 'physics', type: 'noun', signifiee: 'S is space', version: 0, etymology: '' },
  time: { signifier: 'CVC', category: 'physics', type: 'noun', signifiee: 'S is time', version: 0, etymology: '' },
  wave: { signifier: 'CVC', category: 'physics', type: 'noun', signifiee: 'S is wave', version: 0, etymology: '' },
  particle: { signifier: 'CVC', category: 'physics', type: 'noun', signifiee: 'S is particle', version: 0, etymology: '' },
  light: { signifier: 'CVC', category: 'physics', type: 'noun', signifiee: 'S is light', version: 0, etymology: '' },
  sound: { signifier: 'CVC', category: 'physics', type: 'noun', signifiee: 'S is sound', version: 0, etymology: '' },
  reflect: { signifier: 'CVC', category: 'physics', type: 'noun', signifiee: 'S reflect B', version: 0, etymology: '' },

  electron: { signifier: 'CVC', category: 'physics/particle', type: 'noun', signifiee: 'S is electron', version: 0, etymology: '' },
  atom: { signifier: 'CVC', category: 'physics/particle', type: 'noun', signifiee: 'S is atom', version: 0, etymology: '' },
  molecule: { signifier: 'CVC', category: 'physics/particle', type: 'noun', signifiee: 'S is molecule', version: 0, etymology: '' },

  solid: { signifier: 'CVC', category: 'physics/state', type: 'noun', signifiee: 'S is solid', version: 0, etymology: '' },
  liquid: { signifier: 'CVC', category: 'physics/state', type: 'noun', signifiee: 'S is liquid', version: 0, etymology: '' },
  gas: { signifier: 'CVC', category: 'physics/state', type: 'noun', signifiee: 'S is gas', version: 0, etymology: '' },
  plasma: { signifier: 'CVC', category: 'physics/state', type: 'noun', signifiee: 'S is plasma', version: 0, etymology: '' },

  water: { signifier: 'CVC', category: 'chemistry', type: 'noun', signifiee: 'S is water', version: 0, etymology: '' },
  salt: { signifier: 'CVC', category: 'chemistry', type: 'noun', signifiee: 'Aはsalt', version: 0, etymology: '' },
  oil: { signifier: 'CVC', category: 'chemistry', type: 'noun', signifiee: 'S is oil (fat)', version: 0, etymology: '' },
  metal: { signifier: 'CVC', category: 'chemistry', type: 'noun', signifiee: 'S is metal', version: 0, etymology: '' },

  colour: { signifier: 'CVC', category: 'colour', type: 'noun', signifiee: 'S show color O', version: 0, etymology: '' },
  bright: { signifier: 'CVC', category: 'colour', type: 'noun', signifiee: 'S is bright', version: 0, etymology: '' },
  colourful: { signifier: 'CVC', category: 'colour', type: 'noun', signifiee: 'S has saturation', version: 0, etymology: '' },
  hue: { signifier: 'CVC', category: 'colour', type: 'noun', signifiee: 'S has hue O', version: 0, etymology: '' },
  red: { signifier: 'CVC', category: 'colour', type: 'noun', signifiee: 'S is red', version: 0, etymology: '' },
  orange: { signifier: 'CVC', category: 'colour', type: 'noun', signifiee: 'S is orange', version: 0, etymology: '' },
  yellow: { signifier: 'CVC', category: 'colour', type: 'noun', signifiee: 'S is yellow', version: 0, etymology: '' },
  green: { signifier: 'CVC', category: 'colour', type: 'noun', signifiee: 'S is green', version: 0, etymology: '' },
  blue: { signifier: 'CVC', category: 'colour', type: 'noun', signifiee: 'S is blue', version: 0, etymology: '' },
  purple: { signifier: 'CVC', category: 'colour', type: 'noun', signifiee: 'S is purple', version: 0, etymology: '' },

  astral: { signifier: 'CVC', category: 'space', type: 'noun', signifiee: 'S is astral body', version: 0, etymology: '' },
  star: { signifier: 'CVC', category: 'space', type: 'noun', signifiee: 'S is star', version: 0, etymology: '' },
  planet: { signifier: 'CVC', category: 'space', type: 'noun', signifiee: 'S is planet', version: 0, etymology: '' },
  satellite: { signifier: 'CVC', category: 'space', type: 'noun', signifiee: 'S is satellite', version: 0, etymology: '' },

  land: { signifier: 'CVC', category: 'geography', type: 'noun', signifiee: 'S is land', version: 0, etymology: '' },
  sky: { signifier: 'CVC', category: 'geography', type: 'noun', signifiee: 'S is sky', version: 0, etymology: '' },
  mountain: { signifier: 'CVC', category: 'geography', type: 'noun', signifiee: 'S is mountain', version: 0, etymology: '' },
  sea: { signifier: 'CVC', category: 'geography', type: 'noun', signifiee: 'S is sea', version: 0, etymology: '' },
  lake: { signifier: 'CVC', category: 'geography', type: 'noun', signifiee: 'S is lake', version: 0, etymology: '' },
  river: { signifier: 'CVC', category: 'geography', type: 'noun', signifiee: 'S is river', version: 0, etymology: '' },

  male: { signifier: 'CVC', category: 'sex', type: 'noun', signifiee: 'S is male', version: 0, etymology: '' },
  female: { signifier: 'CVC', category: 'sex', type: 'noun', signifiee: 'S is female', version: 0, etymology: '' },
  copulate: { signifier: 'CVC', category: 'sex', type: 'noun', signifiee: 'S copulate O', version: 0, etymology: '' },

  human: { signifier: 'CVC', category: 'creature', type: 'noun', signifiee: 'S is human', version: 0, etymology: '' },
  animal: { signifier: 'CVC', category: 'creature', type: 'noun', signifiee: 'S is animal', version: 0, etymology: '' },
  plant: { signifier: 'CVC', category: 'creature', type: 'noun', signifiee: 'S is plant', version: 0, etymology: '' },

  part: { signifier: 'CVC', category: '', type: 'noun', signifiee: 'S is part of O', version: 0, etymology: '' },

  hair: { signifier: 'CVC', category: 'body/head', type: 'noun', signifiee: 'DER is hair of FROM', version: 0, etymology: '' },
  brain: { signifier: 'CVC', category: 'body/head', type: 'noun', signifiee: 'DER is brain of FROM', version: 0, etymology: '' },
  eye: { signifier: 'CVC', category: 'body/head', type: 'noun', signifiee: 'DER is eye of FROM', version: 0, etymology: '' },
  ear: { signifier: 'CVC', category: 'body/head', type: 'noun', signifiee: 'DER is ear of FROM', version: 0, etymology: '' },
  nose: { signifier: 'CVC', category: 'body/head', type: 'noun', signifiee: 'DER is nose of FROM', version: 0, etymology: '' },
  mouth: { signifier: 'CVC', category: 'body/head', type: 'noun', signifiee: 'DER is mouth of FROM', version: 0, etymology: '' },
  tooth: { signifier: 'CVC', category: 'body/head', type: 'noun', signifiee: 'DER is tooth of FROM', version: 0, etymology: '' },
  tongue: { signifier: 'CVC', category: 'body/head', type: 'noun', signifiee: 'DER is tongue of FROM', version: 0, etymology: '' },
  throat: { signifier: 'CVC', category: 'body/head', type: 'noun', signifiee: 'DER is throat of FROM', version: 0, etymology: '' },

  horn: { signifier: 'CVC', category: 'body/head', type: 'noun', signifiee: 'DER is horn of FROM', version: 0, etymology: '' },

  heart: { signifier: 'CVC', category: 'body/organ', type: 'noun', signifiee: 'DER is heart of FROM', version: 0, etymology: '' },
  lung: { signifier: 'CVC', category: 'body/organ', type: 'noun', signifiee: 'DER is lung of FROM', version: 0, etymology: '' },
  gut: { signifier: 'CVC', category: 'body/organ', type: 'noun', signifiee: 'DER is gut of FROM', version: 0, etymology: '' },

  trunk: { signifier: 'CVC', category: 'body/trunk', type: 'noun', signifiee: 'DER is trunk of FROM', version: 0, etymology: '' },
  tail: { signifier: 'CVC', category: 'body/trunk', type: 'noun', signifiee: 'DER is tail of FROM', version: 0, etymology: '' },
  ass: { signifier: 'CVC', category: 'body/trunk', type: 'noun', signifiee: 'DER is hip of FROM', version: 0, etymology: '' },
  penis: { signifier: 'CVC', category: 'body/trunk', type: 'noun', signifiee: 'S have penis or clitoris O', version: 0, etymology: '' },
  womb: { signifier: 'CVC', category: 'body/trunk', type: 'noun', signifiee: 'DER is womb of FROM', version: 0, etymology: '' },
  nipple: { signifier: 'CVC', category: 'body/trunk', type: 'noun', signifiee: 'DER is nipple of FROM', version: 0, etymology: '' },

  limb: { signifier: 'CVC', category: 'body/limb', type: 'noun', signifiee: 'DER is limb or branch or wing of FROM', version: 0, etymology: '' },
  hand: { signifier: 'CVC', category: 'body/limb', type: 'noun', signifiee: 'DER is hand or foot of FROM', version: 0, etymology: '' },
  finger: { signifier: 'CVC', category: 'body/limb', type: 'noun', signifiee: 'DER is finger of FROM', version: 0, etymology: '' },
  nail: { signifier: 'CVC', category: 'body/limb', type: 'noun', signifiee: 'DER is nail of FROM', version: 0, etymology: '' },

  nerve: { signifier: 'CVC', category: 'body/whole', type: 'noun', signifiee: 'DER is nerve of FROM', version: 0, etymology: '' },
  muscle: { signifier: 'CVC', category: 'body/whole', type: 'noun', signifiee: 'DER is flesh of FROM', version: 0, etymology: '' },
  bone: { signifier: 'CVC', category: 'body/whole', type: 'noun', signifiee: 'DER is bone of FROM', version: 0, etymology: '' },
  skin: { signifier: 'CVC', category: 'body/whole', type: 'noun', signifiee: 'DER is skin of FROM', version: 0, etymology: '' },

  fruit: { signifier: 'CVC', category: 'body/plant', type: 'noun', signifiee: 'DER is fruit of FROM', version: 0, etymology: '' },
  root: { signifier: 'CVC', category: 'body/plant', type: 'noun', signifiee: 'DER is root of FROM', version: 0, etymology: '' },

  eat: { signifier: 'CVC', category: 'physiology', type: 'noun', signifiee: 'S eat O', version: 0, etymology: '' },
  digest: { signifier: 'CVC', category: 'physiology', type: 'noun', signifiee: 'S digest O', version: 0, etymology: '' },
  excrete: { signifier: 'CVC', category: 'physiology', type: 'noun', signifiee: 'S excrete O', version: 0, etymology: '' },

  sense: { signifier: 'CVC', category: 'sansation', type: 'noun', signifiee: 'DER feel DEN', version: 0, etymology: '' },
  hear: { signifier: 'CVC', category: 'sansation', type: 'noun', signifiee: 'DER hear DEN', version: 0, etymology: '' },
  see: { signifier: 'CVC', category: 'sansation', type: 'noun', signifiee: 'DER see DEN', version: 0, etymology: '' },
  taste: { signifier: 'CVC', category: 'sansation', type: 'noun', signifiee: 'DER taste DEN', version: 0, etymology: '' },
  smell: { signifier: 'CVC', category: 'sansation', type: 'noun', signifiee: 'DER smell DEN', version: 0, etymology: '' },
  touch: { signifier: 'CVC', category: 'sansation', type: 'noun', signifiee: 'DER feel touch of DEN', version: 0, etymology: '' },
  hurt: { signifier: 'CVC', category: 'sansation', type: 'noun', signifiee: 'DER is hurt by DEN', version: 0, etymology: '' },

  smile: { signifier: 'CVC', category: 'facial', type: 'noun', signifiee: 'S smile', version: 0, etymology: '' },
  laugh: { signifier: 'CVC', category: 'facial', type: 'noun', signifiee: 'S laugh', version: 0, etymology: '' },
  frown: { signifier: 'CVC', category: 'facial', type: 'noun', signifiee: 'S frown', version: 0, etymology: '' },
  cry: { signifier: 'CVC', category: 'facial', type: 'noun', signifiee: 'S cry', version: 0, etymology: '' },

  happy: { signifier: 'CVC', category: 'emotion', type: 'noun', signifiee: 'S is happy with O.', version: 0, etymology: '' },
  want: { signifier: 'CVC', category: 'emotion', type: 'noun', signifiee: 'S want O', version: 0, etymology: '' },
  amaze: { signifier: 'CVC', category: 'emotion', type: 'noun', signifiee: 'S is surprised at O. low:bore.', version: 0, etymology: '' },
  fear: { signifier: 'CVC', category: 'emotion', type: 'noun', signifiee: 'S fear O', version: 0, etymology: '' },
  anger: { signifier: 'CVC', category: 'emotion', type: 'noun', signifiee: 'S is angry for O', version: 0, etymology: '' },
  enjoy: { signifier: 'CVC', category: 'emotion', type: 'noun', signifiee: 'S enjoy O. negative:suffer.', version: 0, etymology: '' },
  respect: { signifier: 'CVC', category: 'emotion', type: 'noun', signifiee: 'S respect O. low:despise.', version: 0, etymology: '' },
  pride: { signifier: 'CVC', category: 'emotion', type: 'noun', signifiee: 'S is proud of O. low:ashamed.', version: 0, etymology: '' },

  think: { signifier: 'CVC', category: 'intellectual', type: 'noun', signifiee: 'S think O', version: 0, etymology: '' },
  know: { signifier: 'CVC', category: 'intellectual', type: 'noun', signifiee: 'S know O', version: 0, etymology: '' },
  understand: { signifier: 'CVC', category: 'intellectual', type: 'noun', signifiee: 'S understand O', version: 0, etymology: '' },
  assume: { signifier: 'CVC', category: 'intellectual', type: 'noun', signifiee: 'S assume O', version: 0, etymology: '' },
  plan: { signifier: 'CVC', category: 'intellectual', type: 'noun', signifiee: 'S plan O', version: 0, etymology: '' },
  expect: { signifier: 'CVC', category: 'intellectual', type: 'noun', signifiee: 'S expect O', version: 0, etymology: '' },
  hope: { signifier: 'CVC', category: 'intellectual', type: 'noun', signifiee: 'S hope O', version: 0, etymology: '' },
  agree: { signifier: 'CVC', category: 'intellectual', type: 'noun', signifiee: 'S agree with O', version: 0, etymology: '' },
  deduce: { signifier: 'CVC', category: 'intellectual', type: 'noun', signifiee: 'S deduce O', version: 0, etymology: '' },
  aim: { signifier: 'CVC', category: 'intellectual', type: 'noun', signifiee: 'S aim O', version: 0, etymology: '' },

  true: { signifier: 'CVC', category: 'language', type: 'noun', signifiee: 'S is true', version: 0, etymology: '' },
  speak: { signifier: 'CVC', category: 'language', type: 'noun', signifiee: 'S say O', version: 0, etymology: '' },
  write: { signifier: 'CVC', category: 'language', type: 'noun', signifiee: 'S write O', version: 0, etymology: '' },
  read: { signifier: { alias: 'WRITE-BACK' }, category: 'language', type: 'noun', signifiee: 'S read O', version: 0, etymology: '' },

  declare: { signifier: 'CVC', category: 'activity', type: 'noun', signifiee: 'S declare O', version: 0, etymology: '' },
  ask: { signifier: 'CVC', category: 'activity', type: 'noun', signifiee: 'S ask O', version: 0, etymology: '' },
  apologise: { signifier: 'CVC', category: 'activity', type: 'noun', signifiee: 'S apologise for O', version: 0, etymology: '' },
  appreciate: { signifier: 'CVC', category: 'activity', type: 'noun', signifiee: 'S appreciate O', version: 0, etymology: '' },
  forgive: { signifier: 'CVC', category: 'activity', type: 'noun', signifiee: 'S forgive O', version: 0, etymology: '' },
  deceive: { signifier: 'CVC', category: 'activity', type: 'noun', signifiee: 'S deceive O', version: 0, etymology: '' },

  greet: { signifier: 'CVC', category: 'activity', type: 'noun', signifiee: 'S greet to O', version: 0, etymology: '' },
  fight: { signifier: 'CVC', category: 'activity', type: 'noun', signifiee: 'S fight against O', version: 0, etymology: '' },

  play: { signifier: 'CVC', category: 'culture', type: 'noun', signifiee: 'S play O', version: 0, etymology: '' },
  dance: { signifier: 'CVC', category: 'culture', type: 'noun', signifiee: 'S dance O', version: 0, etymology: '' },
  music: { signifier: 'CVC', category: 'culture', type: 'noun', signifiee: 'S musically play O', version: 0, etymology: '' },
  intercourse: { signifier: 'CVC', category: 'culture', type: 'noun', signifiee: 'S have intercourse with O', version: 0, etymology: '' },

  building: { signifier: 'CVC', category: 'civilisation', type: 'noun', signifiee: 'S is building', version: 0, etymology: '' },
  town: { signifier: 'CVC', category: 'civilisation', type: 'noun', signifiee: 'S is town or city', version: 0, etymology: '' },
  nation: { signifier: 'CVC', category: 'civilisation', type: 'noun', signifiee: 'S is nation', version: 0, etymology: '' },
  group: { signifier: 'CVC', category: 'civilisation', type: 'noun', signifiee: 'S is group or organisation', version: 0, etymology: '' },

  world: { signifier: 'CVC', category: '', type: 'noun', signifiee: 'S is world', version: 0, etymology: '' },
  person: { signifier: 'CVC', category: '', type: 'noun', signifiee: 'S is person', version: 0, etymology: '' },
  live: { signifier: 'CVC', category: '', type: 'noun', signifiee: 'S is alive', version: 0, etymology: '' },
  wake: { signifier: 'CVC', category: '', type: 'noun', signifiee: 'S is awake', version: 0, etymology: '' },
  old: { signifier: 'CVC', category: '', type: 'noun', signifiee: 'S is old', version: 0, etymology: '' },
  rot: { signifier: 'CVC', category: '', type: 'noun', signifiee: 'S is rotten', version: 0, etymology: '' },
  health: { signifier: 'CVC', category: '', type: 'noun', signifiee: 'S is healthy', version: 0, etymology: '' },
  temporary: { signifier: 'CVC', category: '', type: 'noun', signifiee: 'S is temporal', version: 0, etymology: '' },
  unit: { signifier: 'CVC', category: '', type: 'noun', signifiee: 'S is unit', version: 0, etymology: '' },

  cause: { signifier: 'CVC', category: '', type: 'noun', signifiee: 'S cause O', version: 0, etymology: '' },
  influence: { signifier: 'CVC', category: '', type: 'noun', signifiee: 'S influence O', version: 0, etymology: '' },
  home: { signifier: 'CVC', category: '', type: 'noun', signifiee: 'S is based on O', version: 0, etymology: '' },
  consume: { signifier: 'CVC', category: '', type: 'noun', signifiee: 'S consume O', version: 0, etymology: '' },
  differ: { signifier: 'CVC', category: '', type: 'noun', signifiee: 'S differ from O', version: 0, etymology: '' },
  value: { signifier: 'CVC', category: '', type: 'noun', signifiee: 'S is worth O', version: 0, etymology: '' },
  make: { signifier: 'CVC', category: '', type: 'noun', signifiee: 'S make O', version: 0, etymology: '' },
  leave: { signifier: 'CVC', category: '', type: 'noun', signifiee: 'S leave O', version: 0, etymology: '' },
  rotate: { signifier: 'CVC', category: '', type: 'noun', signifiee: 'S rotate around O', version: 0, etymology: '' },
  use: { signifier: 'CVC', category: '', type: 'noun', signifiee: 'S is for purpose O', version: 0, etymology: '' },
  model: { signifier: 'CVC', category: '', type: 'noun', signifiee: 'S simulate O', version: 0, etymology: '' },
  imitate: { signifier: 'CVC', category: '', type: 'noun', signifiee: 'S imitate O', version: 0, etymology: '' },
  status: { signifier: 'CVC', category: '', type: 'noun', signifiee: 'S is state of O', version: 0, etymology: '' },
  manner: { signifier: 'CVC', category: '', type: 'noun', signifiee: 'S is manner of O', version: 0, etymology: '' },
  system: { signifier: 'CVC', category: '', type: 'noun', signifiee: 'S is system', version: 0, etymology: '' },

  meter: { signifier: { alias: `UNIT-${letters.m.name}` }, category: 'SI unit', type: 'noun', signifiee: 'S is 1m', version: 0, etymology: '' },
  second: { signifier: { alias: `UNIT-${letters.s.name}` }, category: 'SI unit', type: 'noun', signifiee: 'S is 1s', version: 0, etymology: '' },
  kilogram: { signifier: { alias: `UNIT-${letters.k.name}${letters.g.name}` }, category: 'SI unit', type: 'noun', signifiee: 'S is 1kg', version: 0, etymology: '' },
  ampere: { signifier: { alias: `UNIT-${letters.k.name}${letters.a.name}` }, category: 'SI unit', type: 'noun', signifiee: 'S is 1A', version: 0, etymology: '' },
  kelvin: { signifier: { alias: `UNIT-${letters.k.name}` }, category: 'SI unit', type: 'noun', signifiee: 'S is 1K', version: 0, etymology: '' },
  candela: { signifier: { alias: `UNIT-${letters.c.name}${letters.d.name}` }, category: 'SI unit', type: 'noun', signifiee: 's is 1cd', version: 0, etymology: '' },
}