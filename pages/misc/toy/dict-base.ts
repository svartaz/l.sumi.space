export const dictBase = {
  i: [{ random: 'cv' }, '代', '述詞', '我れ'],
  thou: [{ random: 'cv' }, '代', '述詞', '汝れ'],
  he: [{ random: 'cv' }, '代', '述詞', '彼れ'],
  what: [{ random: 'cv' }, '代', '述詞', '誰れ'],
  how_many: [{ random: 'cv' }, '代', '述詞', '幾ら'],
  self: [{ random: 'cv' }, '代', '述詞', '自身'],
  this: [{ random: 'cv' }, '代', '述詞', 'この發話'],

  now: [{ random: 'cv' }, '代', '述詞', '今'],
  here: [{ random: 'cv' }, '代', '述詞', 'ここ'],

  that: [{ random: 'cv' }, '構造', '文→述', 'aはxである事である'],
  quote: [{ random: 'cv' }, '構造', '借用→述', 'aはxと呼ばれる'],
  verb_open: [{ random: 'cv' }, '構造', '', '動詞構造開'],
  verb_end: [{ random: 'cv' }, '構造', '', '動詞構造閉'],
  passive: [{ random: 'cv' }, '構造', '述→述', '‘aはbをxする’↦bはaをxする'],

  predicate: [{ random: 'cv' }, '', '格詞', '述部'],
  agent: [{ random: 'cv' }, '', '格詞', '影響者'],
  patient: [{ random: 'cv' }, '', '格詞', '被影響者'],
  adverb: [{ random: 'cv' }, '', '格詞', '副詞化'],

  where: [{ random: 'cv' }, '', '格詞', ''],

  not: [{ random: 'cv' }, '論理', '', ''],
  and: [{ random: 'cv' }, '論理', '', ''],

  unrestrictive: [{ random: 'cv' }, '述→述', '', '非制限'],
  habitual: [{ random: 'cv' }, '述→述', '', '習慣'],
  figurative: [{ random: 'cv' }, '述→述', '', '譬喩'],

  zero: [{ random: 'cv' }, '數字', '數詞', '0'],
  one: [{ random: 'cv' }, '數字', '數詞', '1'],
  two: [{ random: 'cv' }, '數字', '數詞', '2'],
  three: [{ random: 'cv' }, '數字', '數詞', '3'],
  four: [{ random: 'cv' }, '數字', '數詞', '4'],
  five: [{ random: 'cv' }, '數字', '數詞', '5'],
  six: [{ random: 'cv' }, '數字', '數詞', '6'],
  seven: [{ random: 'cv' }, '數字', '數詞', '7'],
  eight: [{ random: 'cv' }, '數字', '數詞', '8'],
  nine: [{ random: 'cv' }, '數字', '數詞', '9'],

  exp: [{ random: 'cv' }, '數字/記號', '數詞', 'E'],

  null: [{ random: 'ccv' }, '特殊數字', '數詞', '無'],
  min: [{ random: 'ccv' }, '特殊數字', '數詞', '最小'],
  median: [{ random: 'ccv' }, '特殊數字', '數詞', '中央値'],
  more: [{ random: 'ccv' }, '特殊數字', '數詞', 'aより多い'],
  every: [{ random: 'ccv' }, '特殊數字', '數詞', '最大'],

  aleph0: [{ random: 'ccv' }, '特殊數字', '無限', '可算無限'],
  aleph1: [{ random: 'ccv' }, '特殊數字', '無限', '非可算無限'],

  tau: [{ random: 'ccv' }, '定數', '數詞', 'τ=6.283+ε'],
  napier: [{ random: 'ccv' }, '定數', '數詞', 'e=2.718+ε'],

  normal: [{ random: 'cv' }, '特殊數字', '數詞', '通常の'],
  high: [{ random: 'ccv' }, '特殊數字', '數詞', '[別名] MORE NORMAL'],
  low: [{ random: 'ccv' }, '特殊數字', '數詞', '[別名] PASSIVE MORE NORMAL'],

  plus: [{ random: 'ccv' }, '演算', '數詞', '+'],
  minus: [{ random: 'ccv' }, '演算', '數詞', '-'],
  multiply: [{ random: 'ccv' }, '演算', '數詞', '*'],
  divide: [{ random: 'ccv' }, '演算', '數詞', '/'],
  modulo: [{ random: 'ccv' }, '演算', '數詞', '%'],
  power: [{ random: 'ccv' }, '演算', '數詞', '^'],
  logarithm: [{ random: 'ccv' }, '演算', '數詞', 'log'],

  ordinal: [{ random: 'ccv' }, '數字', '數→述', 'aはx番目である'],

  reverse: [{ random: 'cv' }, '', '述詞', 'aはbの逆である'],

  above: [{ random: 'cvc' }, '位置關係', '述詞', 'aはbの上に有る'],
  front: [{ random: 'cvc' }, '位置關係', '述詞', 'aはbの前に有る'],
  left: [{ random: 'cvc' }, '位置關係', '述詞', 'aはbの左に有る'],
  before: [{ random: 'cvc' }, '位置關係', '述詞', 'aはbの未來に有る'],
  inside: [{ random: 'cvc' }, '位置關係', '述詞', 'aはbの中に有る'],

  cover: [{ random: 'cvc' }, '位置關係/複雜', '述詞', 'PはAを覆ふ'],
  far: [{ random: 'cvc' }, '位置關係/複雜', '述詞', 'PはAから遠い'],
  cross: [{ random: 'cvc' }, '位置關係/複雜', '述詞', 'PはAに交叉する'],
  orthogonal: [{ random: 'cvc' }, '位置關係/複雜', '述詞', 'PはAに直交する'],
  parallel: [{ random: 'cvc' }, '位置關係/複雜', '述詞', 'PはAに平行する'],

  big: [{ random: 'cvc' }, '量', '述詞', '大きい'],
  long: [{ random: 'cvc' }, '量', '述詞', '長い'],
  thick: [{ random: 'cvc' }, '量', '述詞', '厚い'],
  wide: [{ random: 'cvc' }, '量', '述詞', '幅廣い'],

  point: [{ random: 'cvc' }, '數學', '述詞', '點'],
  line: [{ random: 'cvc' }, '數學', '述詞', '線'],
  plane: [{ random: 'cvc' }, '數學', '述詞', '平面'],
  polygon: [{ random: 'cvc' }, '數學', '述詞', '多面體'],
  sharp: [{ random: 'cvc' }, '數學', '述詞', '角'],
  centre: [{ random: 'cvc' }, '數學', '述詞', 'AはPの中心である'],
  interval: [{ random: 'cvc' }, '數學', '述詞', '區間'],
  function: [{ random: 'cvc' }, '數學', '述詞', '函數'],

  space: [{ random: 'cvc' }, '物理', '述詞', '空間'],
  time: [{ random: 'cvc' }, '物理', '述詞', '時間'],
  wave: [{ random: 'cvc' }, '物理', '述詞', '波'],
  particle: [{ random: 'cvc' }, '物理', '述詞', '粒子'],
  light: [{ random: 'cvc' }, '物理', '述詞', '光'],
  sound: [{ random: 'cvc' }, '物理', '述詞', '音'],
  reflect: [{ random: 'cvc' }, '物理', '述詞', 'AはPを反射する'],

  elementary_particle: [{ random: 'cvc' }, '物理/粒子', '述詞', '素粒子'],
  electron: [{ random: 'cvc' }, '物理/粒子', '述詞', '電子'],
  atom: [{ random: 'cvc' }, '物理/粒子', '述詞', '原子'],
  molecule: [{ random: 'cvc' }, '物理/粒子', '述詞', '分子'],

  solid: [{ random: 'cvc' }, '物理/態', '述詞', '固體'],
  liquid: [{ random: 'cvc' }, '物理/態', '述詞', '液體'],
  gas: [{ random: 'cvc' }, '物理/態', '述詞', '氣體'],
  plasma: [{ random: 'cvc' }, '物理/態', '述詞', 'plasma'],

  salt: [{ random: 'cvc' }, '化學', '述詞', '鹽'],
  oil: [{ random: 'cvc' }, '化學', '述詞', '油脂'],

  colour: [{ random: 'cvc' }, '色', '述詞', 'PはAの呈する色である'],
  bright: [{ random: 'cvc' }, '色', '述詞', '明るい'],
  colourful: [{ random: 'cvc' }, '色', '述詞', '高彩度である'],
  red: [{ random: 'cvc' }, '色', '述詞', '赤い'],
  orange: [{ random: 'cvc' }, '色', '述詞', '橙色を呈する'],
  yellow: [{ random: 'cvc' }, '色', '述詞', '黄色を呈する'],
  green: [{ random: 'cvc' }, '色', '述詞', '綠色を呈する'],
  blue: [{ random: 'cvc' }, '色', '述詞', '青い'],
  purple: [{ random: 'cvc' }, '色', '述詞', '紫色を呈する'],

  universe: [{ random: 'cvc' }, '宇宙', '述詞', '宇宙'],
  star: [{ random: 'cvc' }, '宇宙', '述詞', '恆星'],
  planet: [{ random: 'cvc' }, '宇宙', '述詞', '惑星'],
  sattelite: [{ random: 'cvc' }, '宇宙', '述詞', '衞星'],

  land: [{ random: 'cvc' }, '地理', '述詞', '陸'],
  sky: [{ random: 'cvc' }, '地理', '述詞', '空'],
  mountain: [{ random: 'cvc' }, '地理', '述詞', '山'],
  sea: [{ random: 'cvc' }, '地理', '述詞', '海'],
  lake: [{ random: 'cvc' }, '地理', '述詞', '湖'],
  river: [{ random: 'cvc' }, '地理', '述詞', '川'],

  male: [{ random: 'cvc' }, '性', '述詞', '雄'],
  female: [{ random: 'cvc' }, '性', '述詞', '雌'],
  copulate: [{ random: 'cvc' }, '性', '述詞', 'AはPと交接する'],

  human: [{ random: 'cvc' }, '生物', '述詞', '人'],
  animal: [{ random: 'cvc' }, '生物', '述詞', '動物'],
  plant: [{ random: 'cvc' }, '生物', '述詞', '植物'],

  hair: [{ random: 'cvc' }, '身體/頭', '述詞', 'PはAの毛である'],
  brain: [{ random: 'cvc' }, '身體/頭', '述詞', 'PはAの腦である'],
  eye: [{ random: 'cvc' }, '身體/頭', '述詞', 'PはAの目である'],
  ear: [{ random: 'cvc' }, '身體/頭', '述詞', 'PはAの耳である'],
  nose: [{ random: 'cvc' }, '身體/頭', '述詞', 'PはAの鼻である'],
  mouth: [{ random: 'cvc' }, '身體/頭', '述詞', 'PはAの口である'],
  tooth: [{ random: 'cvc' }, '身體/頭', '述詞', 'PはAの齒（牙）である'],
  tongue: [{ random: 'cvc' }, '身體/頭', '述詞', 'PはAの舌である'],
  throat: [{ random: 'cvc' }, '身體/頭', '述詞', 'PはAの喉である'],
  horn: [{ random: 'cvc' }, '身體/頭', '述詞', 'PはAの角である'],

  heart: [{ random: 'cvc' }, '身體/内臓', '述詞', 'PはAの心臓である'],
  lung: [{ random: 'cvc' }, '身體/内臓', '述詞', 'PはAの肺である'],
  gut: [{ random: 'cvc' }, '身體/内臓', '述詞', 'PはAの消化管である'],

  trunk: [{ random: 'cvc' }, '身體/胴', '述詞', 'PはAの胴（幹）である'],
  tail: [{ random: 'cvc' }, '身體/胴', '述詞', 'PはAの尾である'],
  ass: [{ random: 'cvc' }, '身體/胴', '述詞', 'PはAの臀部である'],
  penis: [{ random: 'cvc' }, '身體/胴', '述詞', 'PはAの陰莖（陰核）である'],
  womb: [{ random: 'cvc' }, '身體/胴', '述詞', 'PはAの子宮である'],
  nipple: [{ random: 'cvc' }, '身體/胴', '述詞', 'PはAの乳首である'],

  limb: [{ random: 'cvc' }, '身體/肢', '述詞', 'PはAの肢（腕・脚・枝・翼）である'],
  hand: [{ random: 'cvc' }, '身體/肢', '述詞', 'PはAの手足である'],
  finger: [{ random: 'cvc' }, '身體/肢', '述詞', 'PはAの指である'],
  nail: [{ random: 'cvc' }, '身體/肢', '述詞', 'PはAの爪である'],

  nerve: [{ random: 'cvc' }, '身體/全身', '述詞', 'PはAの神經である'],
  muscle: [{ random: 'cvc' }, '身體/全身', '述詞', 'PはAの肉である'],
  bone: [{ random: 'cvc' }, '身體/全身', '述詞', 'PはAの骨である'],
  skin: [{ random: 'cvc' }, '身體/全身', '述詞', 'PはAの肌である'],

  fruit: [{ random: 'cvc' }, '身體/植物', '述詞', 'PはAの果實である'],
  root: [{ random: 'cvc' }, '身體/植物', '述詞', 'PはAの根である'],

  eat: [{ random: 'cvc' }, '生理', '述詞', 'PはAを食ふ'],
  digest: [{ random: 'cvc' }, '生理', '述詞', 'PはAを消化する'],
  excrete: [{ random: 'cvc' }, '生理', '述詞', 'PはAを排泄する'],

  sense: [{ random: 'cvc' }, '感覺', '述詞', 'PはAを感ず'],
  hear: [{ random: 'cvc' }, '感覺', '述詞', 'PはAを聞く'],
  see: [{ random: 'cvc' }, '感覺', '述詞', 'PはAを見る'],
  taste: [{ random: 'cvc' }, '感覺', '述詞', 'PはAの味を感ず'],
  smell: [{ random: 'cvc' }, '感覺', '述詞', 'PはAの匂ひを感ず'],
  touch: [{ random: 'cvc' }, '感覺', '述詞', 'PはAを觸感す'],
  hurt: [{ random: 'cvc' }, '感覺', '述詞', 'PはAに痛む'],

  smile: [{ random: 'cvc' }, '表情', '述詞', '微笑する'],
  laugh: [{ random: 'cvc' }, '表情', '述詞', '笑ふ'],
  frown: [{ random: 'cvc' }, '表情', '述詞', '顔を顰める'],
  cry: [{ random: 'cvc' }, '表情', '述詞', 'AはP（涙）を流す'],

  want: [{ random: 'cvc' }, '感情', '述詞', 'PはAを求める'],
  glad: [{ random: 'cvc' }, '感情', '述詞', 'PはAを喜ぶ'],
  amuse: [{ random: 'cvc' }, '感情', '述詞', 'PはAを樂しむ'],
  respect: [{ random: 'cvc' }, '感情', '述詞', 'PはAを敬ふ'],
  proud: [{ random: 'cvc' }, '感情', '述詞', 'PはAを誇る'],
  amaze: [{ random: 'cvc' }, '感情', '述詞', 'PはAに驚く'],
  angry: [{ random: 'cvc' }, '感情', '述詞', 'PはAに怒る'],

  think: [{ random: 'cvc' }, '思考', '述詞', 'PはAを思ふ'],
  know: [{ random: 'cvc' }, '思考', '述詞', 'PはAを知る'],
  understand: [{ random: 'cvc' }, '思考', '述詞', 'PはAを理解する'],
  assume: [{ random: 'cvc' }, '思考', '述詞', 'PはAを假定する'],
  plan: [{ random: 'cvc' }, '思考', '述詞', 'PはAを意圖する'],
  expect: [{ random: 'cvc' }, '思考', '述詞', 'PはAを豫期する'],
  hope: [{ random: 'cvc' }, '思考', '述詞', 'PはAを希望する'],
  agree: [{ random: 'cvc' }, '思考', '述詞', 'PはAに同意する'],
  deduce: [{ random: 'cvc' }, '思考', '述詞', 'PはAを推理する'],

  word: [{ random: 'cvc' }, '言語', '述詞', '詞'],
  sentence: [{ random: 'cvc' }, '言語', '述詞', '文（命題）'],
  true: [{ random: 'cvc' }, '言語', '述詞', '眞實'],
  speak: [{ random: 'cvc' }, '言語', '述詞', 'PはAを話す'],
  write: [{ random: 'cvc' }, '言語', '述詞', 'PはAを書く'],

  declare: [{ random: 'cvc' }, '行動', '述詞', 'PはAを宣言する'],
  ask: [{ random: 'cvc' }, '行動', '述詞', 'PはAを質問する'],
  greet: [{ random: 'cvc' }, '行動', '述詞', '挨拶する'],
  apologise: [{ random: 'cvc' }, '行動', '述詞', 'PはAについて謝る'],
  appreciate: [{ random: 'cvc' }, '行動', '述詞', 'PはAについて感謝する'],
  forgive: [{ random: 'cvc' }, '行動', '述詞', 'PはAについて許す'],
  fight: [{ random: 'cvc' }, '行動', '述詞', 'PはAに抗ふ'],
  deceive: [{ random: 'cvc' }, '行動', '述詞', 'PはAであると欺く'],

  play: [{ random: 'cvc' }, '文化', '述詞', 'PはAを遊ぶ'],
  dance: [{ random: 'cvc' }, '文化', '述詞', 'PはAを踊る'],
  music: [{ random: 'cvc' }, '文化', '述詞', 'PはAを演奏する'],
  intercourse: [{ random: 'cvc' }, '文化', '述詞', '性行爲する'],

  building: [{ random: 'cvc' }, '文明', '述詞', '建造物'],
  town: [{ random: 'cvc' }, '文明', '述詞', '町'],
  nation: [{ random: 'cvc' }, '文明', '述詞', '國'],
  group: [{ random: 'cvc' }, '文明', '述詞', 'PはAを目的とするの集團（會） である'],

  world: [{ random: 'cvc' }, '', '述詞', '世界'],
  begin: [{ random: 'cvc' }, '', '述詞', '始まる'],
  person: [{ random: 'cvc' }, '', '述詞', '自我を持つ'],
  alive: [{ random: 'cvc' }, '', '述詞', '生きる'],
  wake: [{ random: 'cvc' }, '', '述詞', '覺める'],
  old: [{ random: 'cvc' }, '', '述詞', '古い'],
  rot: [{ random: 'cvc' }, '', '述詞', '腐る'],
  temporary: [{ random: 'cvc' }, '', '述詞', '一時的である'],

  have: [{ random: 'cvc' }, '', '述詞', 'PはAを有す'],
  cause: [{ random: 'cvc' }, '', '述詞', 'AはPを起こす'],
  depend: [{ random: 'cvc' }, '', '述詞', 'AはPに影響する'],
  home: [{ random: 'cvc' }, '', '述詞', 'AはPの據點である'],
  consume: [{ random: 'cvc' }, '', '述詞', 'AはPを費やす'],
  differ: [{ random: 'cvc' }, '', '述詞', 'PはAと異なる'],
  value: [{ random: 'cvc' }, '', '述詞', 'AはPに値する'],
  make: [{ random: 'cvc' }, '', '述詞', 'AはPを作る'],
  contain: [{ random: 'cvc' }, '', '述詞', 'AはPを含む'],
  leave: [{ random: 'cvc' }, '', '述詞', 'PはAから去る'],
  rotate: [{ random: 'cvc' }, '', '述詞', 'PはAの周りを回轉する'],
  use: [{ random: 'cvc' }, '', '述詞', 'PはAを使ふ'],
  risk: [{ random: 'cvc' }, '', '述詞', 'AはPを脅かす'],
  map: [{ random: 'cvc' }, '', '述詞', 'PはAの地圖である'],
  imitate: [{ random: 'cvc' }, '', '述詞', 'PはAを模倣する'],
  status: [{ random: 'cvc' }, '', '述詞', 'PはAの狀態である'],
  manner: [{ random: 'cvc' }, '', '述詞', 'PはAの樣態である'],

  meter: ['meter', 'SI單位', '述詞', '[借用] aは1m'],
  second: ['sekond', 'SI單位', '述詞', '[借用] aは1s'],
  kilogram: ['kiloclam', 'SI單位', '述詞', '[借用] aは1kg'],
  ampere: ['hanbel', 'SI單位', '述詞', '[借用] aは1A'],
  kelvin: ['kelvin', 'SI單位', '述詞', '[借用] aは1K'],
  candela: ['kandel', 'SI單位', '述詞', '[借用] aは1cd'],
}