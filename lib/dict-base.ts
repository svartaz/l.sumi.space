import { switchVoice } from "./phoneme";

const newMap = <K, V>(kvs: Array<[K, V]>): Map<K, V> => {
  const r = new Map();
  for (const [k, v] of kvs) {
    if (r.has(k))
      throw `duplicate key '${k}'`;
    else
      r.set(k, v);
  }

  return r;
};

export const letters: Map<string, { name: string }> = newMap([
  ['a', { name: 'a' }],
  ['b', { name: 'ba' }],
  ['c', { name: 'ca' }],
  ['d', { name: 'da' }],
  ['e', { name: 'e' }],
  ['f', { name: 'fa' }],
  ['g', { name: 'ga' }],
  ['h', { name: 'ha' }],
  ['i', { name: 'i' }],
  ['j', { name: 'ja' }],
  ['k', { name: 'ka' }],
  ['l', { name: 'la' }],
  ['m', { name: 'ma' }],
  ['n', { name: 'na' }],
  ['o', { name: 'o' }],
  ['p', { name: 'pa' }],

  ['r', { name: 'ra' }],
  ['s', { name: 'sa' }],
  ['t', { name: 'ta' }],
  ['u', { name: 'u' }],
  ['v', { name: 'va' }],
  ['x', { name: 'xa' }],
  ['z', { name: 'za' }],
]);

type Attribute = 'commutative';
export interface Entry {
  signifier: string,
  klass: string,
  signifiee: string,
  attribute: Array<Attribute>,
  etymology: {
    gem?: string, // proto germanic
    de?: string, // german
    nl?: string, // dutch
    en?: string, // english
    la?: string | { n: string, g: string }, // latin
    fr?: string, // french
    grc?: string, // ancient greek
    cu?: string, // old church slavonic
    fa?: string, // persian
    sa?: string, // sanskrit
  },
};

export const dictBase = newMap<string, Entry>([
  ['_language', { signifier: 'jud', klass: 'verb', signifiee: 'Aはこの言語', attribute: [], etymology: {} }],

  // case marker
  ['_p', { signifier: 'vu', klass: 'case', signifiee: '述部', attribute: [], etymology: { gem: 'wesaną' } }],
  ['_n', { signifier: 'su', klass: 'case', signifiee: '主格', attribute: [], etymology: { gem: '-az' } }],
  ['_a', { signifier: 'mu', klass: 'case', signifiee: '對格', attribute: [], etymology: { ine: '-m' } }],
  ['_d', { signifier: 'tu', klass: 'case', signifiee: '與格', attribute: [], etymology: { gem: 'ta' } }],

  ['with', { signifier: 'qu', klass: '', signifiee: '', attribute: [], etymology: {} }],
  ['of', { signifier: 'o', klass: '', signifiee: 'verb\\verb/number', attribute: [], etymology: { gem: 'fanē' } }],
  ['_swap', { signifier: 'je', klass: 'case', signifiee: '', attribute: [], etymology: { de: 'ce' } }],

  ['then', { signifier: 'du', klass: 'case', signifiee: '', attribute: [], etymology: { gem: 'þan' } }],

  // pronoun
  ['i', { signifier: 'me', klass: 'verb', signifiee: 'Aは我', attribute: [], etymology: { gem: '*mek' } }],
  ['thou', { signifier: 'de', klass: 'verb', signifiee: 'Aは汝', attribute: [], etymology: { gem: 'þek' } }],
  ['he', { signifier: 'xe', klass: 'verb', signifiee: 'Aは彼', attribute: [], etymology: { gem: 'hiz' } }],
  ['self', { signifier: 'se', klass: 'verb', signifiee: 'Aは自身 (既に文に登場した對稱)', attribute: [], etymology: { gem: 'sīnaz' } }],

  // subordinate
  ['what', { signifier: 'va', klass: '', signifiee: 'Aは誰', attribute: [], etymology: { gem: 'hwaz' } }],
  ['that', { signifier: 'da', klass: '', signifiee: '節', attribute: [], etymology: { gem: 'þat' } }],
  ['which', { signifier: 'CV', klass: '', signifiee: '關係', attribute: [], etymology: {} }],
  ['clause_end', { signifier: 'CV', klass: '', signifiee: '', attribute: [], etymology: {} }],

  // functional
  ['_open', { signifier: 'CV', klass: 'structure', signifiee: '', attribute: [], etymology: {} }],
  ['_close', { signifier: 'CV', klass: 'structure', signifiee: '', attribute: [], etymology: {} }],
  ['_comma', { signifier: 'CV', klass: '', signifiee: '', attribute: [], etymology: {} }],
  ['_quote', { signifier: 'go', klass: '', signifiee: '', attribute: [], etymology: {} }],
  ['_period', { signifier: 'CV', klass: '', signifiee: '終止', attribute: [], etymology: {} }],
  ['_ask', { signifier: '', klass: '', signifiee: '疑問', attribute: [], etymology: { gem: 'ja' } }],

  // tense
  ['did', { signifier: 'ca', klass: 'adverb', signifiee: '', attribute: [], etymology: { gem: 'ga-' } }],
  ['do', { signifier: 'mi', klass: 'adverb', signifiee: '', attribute: [], etymology: { fa: 'mē' } }],
  ['shall', { signifier: 'ku', klass: 'adverb', signifiee: '', attribute: [], etymology: { gem: 'skulaną' } }],

  // aspect
  ['_before', { signifier: 'Ci', klass: 'adverb', signifiee: '', attribute: [], etymology: {} }],
  ['_begin', { signifier: 'Ce', klass: 'adverb', signifiee: '', attribute: [], etymology: {} }],
  ['_while', { signifier: 'Ca', klass: 'adverb', signifiee: '', attribute: [], etymology: {} }],
  ['_end', { signifier: 'Co', klass: 'adverb', signifiee: '', attribute: [], etymology: {} }],
  ['_after', { signifier: 'Cu', klass: 'adverb', signifiee: '', attribute: [], etymology: {} }],

  // mood
  ['may', { signifier: '', klass: 'adverb', signifiee: '', attribute: [], etymology: { gem: 'maganą' } }],

  ['figuratively', { signifier: 'CV', klass: 'adverb', signifiee: '', attribute: [], etymology: {} }],
  ['habitually', { signifier: 'CV', klass: 'adverb', signifiee: '', attribute: [], etymology: {} }],

  ['_frequent', { signifier: '', klass: 'verb/number/verb', signifiee: '0: never. high: often. max: always.', attribute: [], etymology: { gem: 'mēlą' } }],
  ['_connect', { signifier: 'CV', klass: '', signifiee: '', attribute: [], etymology: {} }],

  // digit (vowels in order)
  ['zero', { signifier: 'ki', klass: 'numeral', signifiee: '0', attribute: [], etymology: { sa: 'śūnyá' } }],
  ['one', { signifier: 've', klass: 'numeral', signifiee: '1', attribute: [], etymology: { sa: 'eka', fa: 'jak' } }],
  ['two', { signifier: 'ta', klass: 'numeral', signifiee: '2', attribute: [], etymology: { gem: 'twai' } }],
  ['three', { signifier: 'do', klass: 'numeral', signifiee: '3', attribute: [], etymology: { gem: 'þrīz' } }],
  ['four', { signifier: 'fu', klass: 'numeral', signifiee: '4', attribute: [], etymology: { gem: 'fedwōr' } }],

  ['five', { signifier: 'pi', klass: 'numeral', signifiee: '5', attribute: [], etymology: { grc: 'πέντε', ru: 'пять' } }],
  ['six', { signifier: 'ze', klass: 'numeral', signifiee: '6', attribute: [], etymology: { gem: 'sehs' } }],
  ['seven', { signifier: 'sa', klass: 'numeral', signifiee: '7', attribute: [], etymology: { sa: 'sapta' } }],
  ['eight', { signifier: 'xo', klass: 'numeral', signifiee: '8', attribute: [], etymology: { gem: 'ahtōu' } }],
  ['nine', { signifier: 'nu', klass: 'numeral', signifiee: '9', attribute: [], etymology: { gem: 'newun' } }],

  ['ten', { signifier: 'Ci', klass: 'numeral', signifiee: '10', attribute: [], etymology: { gem: 'tehun' } }],
  ['eleven', { signifier: 'Ce', klass: 'numeral', signifiee: '11', attribute: [], etymology: {} }],
  ['twelve', { signifier: 'Ca', klass: 'numeral', signifiee: '12', attribute: [], etymology: {} }],
  ['thirteen', { signifier: 'Co', klass: 'numeral', signifiee: '13', attribute: [], etymology: {} }],
  ['fourteen', { signifier: 'Cu', klass: 'numeral', signifiee: '14', attribute: [], etymology: {} }],

  ['fifteen', { signifier: 'Ci', klass: 'numeral', signifiee: '15', attribute: [], etymology: {} }],

  ['decimal', { signifier: 'CV', klass: 'numeral', signifiee: '.', attribute: [], etymology: {} }],
  ['exp', { signifier: 'CV', klass: 'numeral', signifiee: 'E', attribute: [], etymology: {} }],

  ['null', { signifier: 'la', klass: 'numeral', signifiee: 'null', attribute: [], etymology: { arabic: 'lā' } }], //gem: lēziz

  ['bottom', { signifier: '', klass: 'numeral', signifiee: '', attribute: [], etymology: { gem: 'butmaz' } }],
  ['few', { signifier: '', klass: 'numeral', signifiee: '', attribute: [], etymology: { gem: 'lēgaz' } }],
  ['normal', { signifier: '', klass: 'numeral', signifiee: '', attribute: [], etymology: { la: 'norma' } }],
  ['many', { signifier: '', klass: 'numeral', signifiee: '', attribute: [], etymology: { gem: 'hauhaz' } }],
  ['all', { signifier: '', klass: 'numeral', signifiee: '', attribute: [], etymology: { gem: 'allaz' } }],

  ['decrease', { signifier: 'CV', klass: 'numeral', signifiee: '', attribute: [], etymology: {} }],
  ['increase', { signifier: 'CV', klass: 'numeral', signifiee: '', attribute: [], etymology: {} }],

  ['less', { signifier: 'les', klass: 'numeral', signifiee: '≤', attribute: [], etymology: { gem: 'laisiz' } }],

  ['plus', { signifier: 'plu', klass: 'numeral', signifiee: '+', attribute: [], etymology: {} }],
  ['minus', { signifier: 'min', klass: 'numeral', signifiee: '+', attribute: [], etymology: {} }],
  ['multiply', { signifier: 'mul', klass: 'numeral', signifiee: '*', attribute: [], etymology: {} }],
  ['divide', { signifier: 'div', klass: 'numeral', signifiee: '/', attribute: [], etymology: {} }],
  ['modulo', { signifier: 'mod', klass: 'numeral', signifiee: '%', attribute: [], etymology: {} }],
  ['power', { signifier: 'pov', klass: 'numeral', signifiee: '^', attribute: [], etymology: { en: 'power' } }],

  ['how_many', { signifier: 'CV', klass: '', signifiee: '', attribute: [], etymology: {} }],
  ['cardinal', { signifier: 'CV', klass: 'verb/number', signifiee: '', attribute: [], etymology: {} }],
  ['ordinal', { signifier: 'CV', klass: 'verb/number', signifiee: '', attribute: [], etymology: {} }],
  ['_degree', { signifier: 'CV', klass: 'verb\\verb/number', signifiee: '', attribute: [], etymology: {} }],

  ['no', { signifier: 'ne', klass: '', signifiee: '', attribute: [], etymology: { gem: 'ne' } }],

  ['non', { signifier: 'no', klass: '', signifiee: '', attribute: [], etymology: {} }],
  ['and', { signifier: '', klass: '', signifiee: '', attribute: [], etymology: { gem: 'andi' } }],
  ['or', { signifier: '', klass: '', signifiee: '', attribute: [], etymology: { gem: 'efþau' } }],
  ['iff', { signifier: '', klass: '', signifiee: '', attribute: [], etymology: { gem: 'hwan' } }],

  // basic
  ['from', { signifier: '', klass: 'verb', signifiee: '始點AはBを發する. 起源. 供與者.', attribute: [], etymology: { gem: 'fram' } }],
  ['have', { signifier: '', klass: 'verb', signifiee: 'AはBを有する', attribute: [], etymology: { gem: 'habjaną' } }],
  ['go', { signifier: '', klass: 'verb', signifiee: 'AはBへ移動する', attribute: [], etymology: { gem: 'ganganą' } }],
  ['cause', { signifier: '', klass: 'verb', signifiee: '原因Aは結果Bを起こす', attribute: [], etymology: { gem: 'lētaną' } }],

  // point position relation
  ['below', { signifier: '', klass: 'verb', signifiee: 'AはBの下方に位置する', attribute: [], etymology: { gem: 'niþ' } }],
  ['behind', { signifier: 'xind', klass: 'verb', signifiee: 'AはBの後方に位置する', attribute: [], etymology: { gem: 'hinder' } }],
  ['left', { signifier: 'ligq', klass: 'verb', signifiee: 'AはBの左方に位置する', attribute: [], etymology: { goh: 'link' } }],
  ['before', { signifier: '', klass: 'verb', signifiee: 'AはBの過去に位置する', attribute: [], etymology: { gem: 'furai' } }],
  ['at', { signifier: '', klass: 'verb', signifiee: 'AはBに位置する', attribute: [], etymology: { gem: 'at' } }],
  ['in', { signifier: '', klass: 'verb', signifiee: 'AはBの中に位置する', attribute: [], etymology: { gem: 'in' } }],

  // entity position relation
  ['far', { signifier: '', klass: 'verb', signifiee: 'AとBの間は長い', attribute: ['commutative'], etymology: { gem: 'ferrai' } }],
  ['cross', { signifier: '', klass: 'verb', signifiee: 'AとBは交叉する', attribute: ['commutative'], etymology: { la: { n: 'crux', g: 'crucis' } } }],
  ['spin', { signifier: '', klass: 'verb', signifiee: 'AはBを回轉する', attribute: [], etymology: { gem: 'spinnaną' } }],

  // phisics
  ['time', { signifier: '', klass: 'verb', signifiee: 'Aは時間', attribute: [], etymology: { gem: 'tīmô' } }],
  ['space', { signifier: '', klass: 'verb', signifiee: 'Aは空間', attribute: [], etymology: { gem: 'rūmą' } }],
  ['wave', { signifier: '', klass: 'verb', signifiee: 'Aは波, 媒體Bの', attribute: [], etymology: { gem: 'swellaną' } }],
  ['light', { signifier: '', klass: 'verb', signifiee: 'Aは光', attribute: [], etymology: { gem: 'leuhtą' } }],
  ['sound', { signifier: '', klass: 'verb', signifiee: 'Aは音', attribute: [], etymology: { gem: 'klinganą' } }],
  ['heat', { signifier: '', klass: 'verb', signifiee: 'Aは熱, Bの', attribute: [], etymology: { gem: 'haitaz' } }],

  // state of matter
  ['solid', { signifier: '', klass: 'verb', signifiee: 'Aは固體', attribute: [], etymology: { gem: 'fastuz' } }],
  ['liquid', { signifier: '', klass: 'verb', signifiee: 'Aは液體', attribute: [], etymology: { la: 'liquēre' } }],
  ['gas', { signifier: 'cas', klass: 'verb', signifiee: 'Aは氣體', attribute: [], etymology: { nl: 'gas' } }],
  ['plasma', { signifier: 'plasm', klass: 'verb', signifiee: 'Aは電漿', attribute: [], etymology: { grc: 'πλάσσω' } }],

  // volume
  ['big', { signifier: '', klass: 'verb', signifiee: 'Aは大きい', attribute: [], etymology: { gem: 'grautaz' } }],
  ['long', { signifier: '', klass: 'verb', signifiee: 'Aは長い', attribute: [], etymology: { gem: 'langaz' } }],
  ['thick', { signifier: '', klass: 'verb', signifiee: 'Aは厚い', attribute: [], etymology: { gem: 'þekuz' } }],
  ['wide', { signifier: '', klass: 'verb', signifiee: 'Aは廣い', attribute: [], etymology: { gem: 'wīdaz' } }],

  // geometry
  ['point', { signifier: '', klass: 'verb', signifiee: 'Aは點', attribute: [], etymology: { la: 'pungere' } }],
  ['line', { signifier: '', klass: 'verb', signifiee: 'Aは線', attribute: [], etymology: { gem: 'paþaz' } }],
  ['plane', { signifier: '', klass: 'verb', signifiee: 'Aは面', attribute: [], etymology: { gem: 'flataz' } }],
  ['angle', { signifier: 'vigq', klass: 'verb', signifiee: 'Aは角', attribute: [], etymology: { gem: 'winkilaz' } }],
  ['interval', { signifier: '', klass: 'verb', signifiee: 'Aは區間', attribute: [], etymology: { gem: 'raikijaną' } }],
  ['centre', { signifier: '', klass: 'verb', signifiee: 'AはBの中心', attribute: [], etymology: { gem: 'midjaz' } }],
  ['shape', { signifier: '', klass: 'verb', signifiee: 'AはBの形. 圖形.', attribute: [], etymology: { gem: 'skapą' } }],
  ['bend', { signifier: '', klass: 'verb', signifiee: 'Aは曲率を持つ', attribute: [], etymology: { gem: 'bindaną' } }],

  // life
  ['man', { signifier: '', klass: 'verb', signifiee: 'Aは人間', attribute: [], etymology: { gem: 'mann' } }],
  ['animal', { signifier: '', klass: 'verb', signifiee: 'Aは動物', attribute: [], etymology: { gem: 'deuzą' } }],
  ['plant', { signifier: '', klass: 'verb', signifiee: 'Aは植物', attribute: [], etymology: { la: 'planta' } }],
  ['live', { signifier: '', klass: 'verb', signifiee: 'Aは生きる', attribute: [], etymology: { gem: 'libjaną' } }],
  ['wake', { signifier: '', klass: 'verb', signifiee: 'Aは起きる', attribute: [], etymology: { gem: 'wakāną' } }],
  ['rot', { signifier: '', klass: 'verb', signifiee: 'Aは腐敗する', attribute: [], etymology: { gem: 'rutāną' } }],
  ['sick', { signifier: '', klass: 'verb', signifiee: 'Aは{不調, 病人}だ', attribute: [], etymology: { gem: 'seukaną' } }],

  // sex
  ['sex', { signifier: '', klass: 'verb', signifiee: '有性生殖種Aは雌雄Bを持つ', attribute: [], etymology: { la: { n: 'sexus', g: 'sexūs' } } }],
  ['male', { signifier: '', klass: 'verb', signifiee: 'Aは雄', attribute: [], etymology: { gem: 'gumô' } }],
  ['female', { signifier: '', klass: 'verb', signifiee: 'Aは雌', attribute: [], etymology: { gem: 'kwenǭ' } }],
  ['mate', { signifier: '', klass: 'verb', signifiee: 'AはBと交接する', attribute: ['commutative'], etymology: { gem: 'fukkōną' } }],

  // family
  ['parent', { signifier: '', klass: 'verb', signifiee: 'Aは子Bの親', attribute: [], etymology: { gem: 'fadēr' } }],
  ['sibling', { signifier: '', klass: 'verb', signifiee: 'AはBの同胞, 親Cの', attribute: ['commutative'], etymology: { gem: 'brōþēr' } }],
  ['spouse', { signifier: '', klass: 'verb', signifiee: 'AはBの配偶者', attribute: ['commutative'], etymology: { gem: 'hīwą' } }],

  // facial
  ['smile', { signifier: '', klass: 'verb', signifiee: 'Aは微笑む', attribute: [], etymology: { gem: 'smīlijaną' } }],
  ['laugh', { signifier: '', klass: 'verb', signifiee: 'Aは笑ふ', attribute: [], etymology: { gem: 'hlahjaną' } }],
  ['frown', { signifier: 'fron', klass: 'verb', signifiee: 'Aは顰める', attribute: [], etymology: { en: 'frown' } }],
  ['weep', { signifier: '', klass: 'verb', signifiee: 'Aは涙Bを流す', attribute: [], etymology: { gem: 'wōpijaną' } }],

  // nature
  ['sun', { signifier: '', klass: 'verb', signifiee: 'Aは恆星', attribute: [], etymology: { gem: 'sunnǭ' } }],
  ['planet', { signifier: 'sejar', klass: 'verb', signifiee: '惑星Aは恆星Bを公轉する', attribute: [], etymology: { ar: 'sayyāra' } }],
  ['moon', { signifier: '', klass: 'verb', signifiee: '衞星Aは惑星Bを公轉する', attribute: [], etymology: { gem: 'mēnô' } }],
  ['land', { signifier: '', klass: 'verb', signifiee: 'Aは陸地', attribute: [], etymology: { gem: 'landą' } }],
  ['sky', { signifier: '', klass: 'verb', signifiee: 'Aは空', attribute: [], etymology: { gem: 'skiwô' } }],
  ['mountain', { signifier: '', klass: 'verb', signifiee: 'Aは山岳', attribute: [], etymology: { gem: 'bergaz' } }],
  ['sea', { signifier: '', klass: 'verb', signifiee: 'Aは海洋', attribute: [], etymology: { la: 'mare' } }],
  ['lake', { signifier: '', klass: 'verb', signifiee: 'Aは湖', attribute: [], etymology: { la: 'lacus' } }],
  ['river', { signifier: '', klass: 'verb', signifiee: 'Aは河川', attribute: [], etymology: { gem: 'straumaz' } }],

  // material
  ['water', { signifier: '', klass: 'verb', signifiee: 'Aは水', attribute: [], etymology: { gem: 'watōr' } }],
  ['salt', { signifier: '', klass: 'verb', signifiee: 'Aは鹽', attribute: [], etymology: { gem: 'saltą' } }],
  ['oil', { signifier: '', klass: 'verb', signifiee: 'Aは油脂', attribute: [], etymology: { la: 'oleum' } }],
  ['stone', { signifier: '', klass: 'verb', signifiee: 'Aは鑛物', attribute: [], etymology: { gem: 'stainaz' } }],
  ['metal', { signifier: 'metal', klass: 'verb', signifiee: 'Aは金属', attribute: [], etymology: { grc: 'μέταλλον' } }],

  // digestion
  ['eat', { signifier: '', klass: 'verb', signifiee: 'AはBを食ふ', attribute: [], etymology: { gem: 'etaną', } }],
  ['vomit', { signifier: '', klass: 'verb', signifiee: 'AはBを吐く', attribute: [], etymology: { gem: 'pukaną', } }], //la: vomēre
  ['excrete', { signifier: '', klass: 'verb', signifiee: 'AはBを排泄する', attribute: [], etymology: { gem: 'skitiz' } }],

  // sense
  ['feel', { signifier: '', klass: 'verb', signifiee: 'AはBを感ずる', attribute: [], etymology: { gem: 'fōlijaną' } }],
  ['hear', { signifier: '', klass: 'verb', signifiee: 'AはBを聞く', attribute: [], etymology: { gem: 'hauzijaną' } }],
  ['see', { signifier: '', klass: 'verb', signifiee: 'AはBを見る', attribute: [], etymology: { gem: 'sehwaną' } }],
  ['taste', { signifier: '', klass: 'verb', signifiee: 'AはBを味はふ', attribute: [], etymology: { gem: 'smakkuz' } }],
  ['smell', { signifier: '', klass: 'verb', signifiee: 'AはBを嗅ぐ', attribute: [], etymology: { gem: 'reukaną' } }],
  ['touch', { signifier: '', klass: 'verb', signifiee: 'AはBの壓力を感ず', attribute: [], etymology: { gem: 'tukkōną' } }],
  ['ache', { signifier: '', klass: 'verb', signifiee: 'AはBに痛む', attribute: [], etymology: { la: 'dolēre' } }],

  // emotion
  ['love', { signifier: '', klass: 'verb', signifiee: 'AはBを好む', attribute: [], etymology: { gem: 'lubō' } }],
  ['want', { signifier: '', klass: 'verb', signifiee: 'AはBを求む', attribute: [], etymology: { gem: 'wiljaną' } }],
  ['amaze', { signifier: '', klass: 'verb', signifiee: 'AはBに驚く', attribute: [], etymology: { gem: 'masōną' } }],
  ['fear', { signifier: '', klass: 'verb', signifiee: 'AはBを恐る', attribute: [], etymology: { gem: 'furhtaz' } }],
  ['anger', { signifier: '', klass: 'verb', signifiee: 'AはBに怒る', attribute: [], etymology: { gem: 'wōdaz' } }],
  ['enjoy', { signifier: '', klass: 'verb', signifiee: 'AはBを樂しむ', attribute: [], etymology: { la: 'plācēre' } }],
  ['proud', { signifier: 'prud', klass: 'verb', signifiee: 'AはBを誇る', attribute: [], etymology: { ang: 'prūd' } }],

  // language
  ['true', { signifier: '', klass: 'verb', signifiee: 'Aは眞である', attribute: [], etymology: { gem: 'wēraz' } }],
  ['say', { signifier: '', klass: 'verb', signifiee: 'Aは發話Bを言ふ', attribute: [], etymology: { gem: 'sagjaną' } }],
  ['speak', { signifier: '', klass: 'verb', signifiee: 'Aは言語Bを言ふ', attribute: [], etymology: { gem: 'sprekaną' } }],
  ['name', { signifier: '', klass: 'verb', signifiee: 'AはBを意味する', attribute: [], etymology: { gem: 'namô' } }],

  // color
  ['color', { signifier: '', klass: 'verb', signifiee: 'Aは色Bを呈する', attribute: [], etymology: { gem: 'farwō' } }],
  ['bright', { signifier: '', klass: 'verb', signifiee: 'Aは明るい', attribute: [], etymology: { gem: 'berhtaz' } }],
  ['colourful', { signifier: 'xrom', klass: 'verb', signifiee: 'Aは鮮やか', attribute: [], etymology: { grc: 'χρῶμα' } }],
  ['hue', { signifier: '', klass: 'verb', signifiee: 'AはBの色相である', attribute: [], etymology: { la: { n: 'colōs', g: 'colōris' } } }],
  ['red', { signifier: '', klass: 'verb', signifiee: 'Aは赤い', attribute: [], etymology: { gem: 'raudaz' } }],
  ['yellow', { signifier: '', klass: 'verb', signifiee: 'Aは黃色を呈す', attribute: [], etymology: { gem: 'gelwaz' } }],
  ['green', { signifier: '', klass: 'verb', signifiee: 'Aは綠色を呈す', attribute: [], etymology: { gem: 'grōniz' } }],
  ['blue', { signifier: '', klass: 'verb', signifiee: 'Aは青い', attribute: [], etymology: { gem: 'blēwaz' } }],

  // thought
  ['sense', { signifier: '', klass: 'verb', signifiee: 'Aは感情Bを持つ', attribute: [], etymology: { la: 'sentīre' } }],
  ['think', { signifier: '', klass: 'verb', signifiee: 'AはBと考ふ', attribute: [], etymology: { gem: 'þankijaną' } }],
  ['know', { signifier: '', klass: 'verb', signifiee: 'AはBを知る', attribute: [], etymology: { gem: 'witaną', } }],
  ['plan', { signifier: 'plan', klass: 'verb', signifiee: 'AはBを計劃する', attribute: [], etymology: { de: 'planen' } }],
  ['wait', { signifier: '', klass: 'verb', signifiee: 'AはBを豫期する.', attribute: [], etymology: { gem: 'wardāną' } }],
  ['hope', { signifier: '', klass: 'verb', signifiee: 'AはBを望む', attribute: [], etymology: { gem: 'wēniz' } }],
  ['aim', { signifier: '', klass: 'verb', signifiee: 'AはBを目的とする', attribute: [], etymology: { gem: 'tilą' } }],
  ['sure', { signifier: '', klass: 'verb', signifiee: 'AはBを確信する', attribute: [], etymology: { la: 'certus' } }],
  ['assume', { signifier: 'CVC', klass: 'verb', signifiee: 'AはBを假定する', attribute: [], etymology: {} }],

  // miscellaneous
  ['world', { signifier: 'qosm', klass: 'verb', signifiee: 'Aは世界', attribute: [], etymology: { grc: 'κόσμος' } }],
  ['old', { signifier: '', klass: 'verb', signifiee: 'Aは古い', attribute: [], etymology: { gem: 'aldaz' } }],
  ['dwell', { signifier: '', klass: 'verb', signifiee: 'Aは家Bに住む', attribute: [], etymology: { gem: 'wunāną' } }],
  ['guilt', { signifier: '', klass: 'verb', signifiee: 'Aは事象Bに{罪, 責任}が有る', attribute: [], etymology: { la: 'peccāre' } }],
  ['flow', { signifier: '', klass: 'verb', signifiee: 'AはBを流る', attribute: [], etymology: { gem: 'fleutaną' } }],
  ['part', { signifier: '', klass: 'verb', signifiee: 'Aは部分, 全體Bの', attribute: [], etymology: { gem: 'dailiz' } }],
  ['effect', { signifier: '', klass: 'verb', signifiee: 'AはBに影響する. BはAに依存する.', attribute: [], etymology: { gem: 'wirkijaną' } }],
  ['law', { signifier: '', klass: 'verb', signifiee: '{秩序, 規則}AはBを{整へる, 支配する}', attribute: [], etymology: { gem: 'lagą' } }],
  ['differ', { signifier: '', klass: 'verb', signifiee: 'AはBと異なる', attribute: [], etymology: { gem: 'anþeraz' } }],
  ['vary', { signifier: '', klass: 'verb', signifiee: 'AはBへ變化する', attribute: [], etymology: { la: 'mūtāre' } }],
  ['make', { signifier: '', klass: 'verb', signifiee: 'AはBを作る', attribute: [], etymology: { gem: 'wurkijaną' } }],

  // transitive
  ['give', { signifier: '', klass: 'verb', signifiee: 'AはBをCに與ふ', attribute: [], etymology: { gem: 'gebaną' } }],
  ['buy', { signifier: '', klass: 'verb', signifiee: 'Aは費用BでCを買ふ', attribute: [], etymology: { gem: 'bugjaną' } }],
  ['use', { signifier: '', klass: 'verb', signifiee: 'Aは道具Bを使ふ, 目的Cのために', attribute: [], etymology: { gem: 'nutō' } }],
  ['worth', { signifier: '', klass: 'verb', signifiee: 'AはBに價する, 基準Cで', attribute: [], etymology: { gem: 'werþaz' } }],

  ['declare', { signifier: '', klass: 'verb', signifiee: 'AはBを宣言する', attribute: [], etymology: { gem: 'kunþijaną' } }],
  ['ask', { signifier: '', klass: 'verb', signifiee: 'AはBを問ふ', attribute: [], etymology: { gem: 'frēgō' } }],
  ['lie', { signifier: '', klass: 'verb', signifiee: 'AはBであると騙す', attribute: [], etymology: { gem: 'leuganą' } }],
  ['apologise', { signifier: 'CVC', klass: 'verb', signifiee: 'AはBを謝る', attribute: [], etymology: {} }],
  ['forgive', { signifier: 'CVC', klass: 'verb', signifiee: 'AはBを許す', attribute: [], etymology: {} }],

  // activity
  ['greet', { signifier: '', klass: 'verb', signifiee: 'AはBに挨拶する', attribute: [], etymology: { la: { n: 'salūs', g: 'salūtis' } } }],
  ['fight', { signifier: '', klass: 'verb', signifiee: 'AはBに抗ふ', attribute: [], etymology: { gem: 'fehtaną' } }],

  ['play', { signifier: '', klass: 'verb', signifiee: 'AはBを遊ぶ', attribute: [], etymology: { gem: 'spil' } }],
  ['dance', { signifier: 'dans', klass: 'verb', signifiee: 'AはBを踊る', attribute: [], etymology: { gmw: 'þansōn' } }],
  ['music', { signifier: '', klass: 'verb', signifiee: 'AはB (音樂) を演奏する', attribute: [], etymology: { gem: 'singwaną' } }],

  ['house', { signifier: '', klass: 'verb', signifiee: 'Aは建造物', attribute: [], etymology: { gem: 'hūsą' } }],
  ['town', { signifier: '', klass: 'verb', signifiee: 'Aは市街', attribute: [], etymology: { gem: 'stadiz' } }],
  ['nation', { signifier: '', klass: 'verb', signifiee: 'Aは國家', attribute: [], etymology: { gem: 'þeudu' } }],

  ['consume', { signifier: 'CVC', klass: 'verb', signifiee: 'AはBを消費する', attribute: [], etymology: {} }],
  ['model', { signifier: 'CVC', klass: 'verb', signifiee: 'AはBの模型である', attribute: [], etymology: {} }],
  ['imitate', { signifier: '', klass: 'verb', signifiee: 'AはBを模倣する', attribute: [], etymology: { la: 'imitārī' } }],

  // body part
  ['head', { signifier: '', klass: 'verb', signifiee: 'AはBの首である', attribute: [], etymology: { gem: 'haubudą' } }],
  ['horn', { signifier: '', klass: 'verb', signifiee: 'AはBの角である', attribute: [], etymology: { gem: 'hurną' } }],
  ['hair', { signifier: '', klass: 'verb', signifiee: 'AはBの髮である', attribute: [], etymology: { gem: 'hērą' } }],
  ['brain', { signifier: '', klass: 'verb', signifiee: 'AはBの腦である', attribute: [], etymology: { gem: 'bragną' } }],
  ['eye', { signifier: '', klass: 'verb', signifiee: 'AはBの目である', attribute: [], etymology: { gem: 'augô' } }],
  ['ear', { signifier: '', klass: 'verb', signifiee: 'AはBの耳である', attribute: [], etymology: { gem: 'ausô' } }],
  ['nose', { signifier: '', klass: 'verb', signifiee: 'AはBの鼻である', attribute: [], etymology: { gem: 'nasō' } }],
  ['mouth', { signifier: '', klass: 'verb', signifiee: 'AはBの口である', attribute: [], etymology: { gem: 'munþaz' } }],
  ['lip', { signifier: '', klass: 'verb', signifiee: 'AはBの脣である', attribute: [], etymology: { gem: 'lepô' } }],
  ['tooth', { signifier: '', klass: 'verb', signifiee: 'AはBの{齒, 牙}である', attribute: [], etymology: { gem: 'tanþs' } }],
  ['tongue', { signifier: '', klass: 'verb', signifiee: 'AはBの舌である', attribute: [], etymology: { gem: 'tungǭ' } }],

  ['neck', { signifier: '', klass: 'verb', signifiee: 'AはBの{首, 項, 喉}である', attribute: [], etymology: { gem: 'hnakkô' } }],
  ['shoulder', { signifier: 'squld', klass: 'verb', signifiee: 'AはBの{肩, 骨盤}である', attribute: [], etymology: { gmw: 'skuldru' } }],
  ['breast', { signifier: '', klass: 'verb', signifiee: 'AはBの胸である', attribute: [], etymology: { gem: 'breustą' } }],
  ['nipple', { signifier: '', klass: 'verb', signifiee: 'AはBの乳頭である', attribute: [], etymology: { gem: 'tittaz' } }],
  ['belly', { signifier: '', klass: 'verb', signifiee: 'AはBの腹である', attribute: [], etymology: { gem: 'būkaz' } }],
  ['limb', { signifier: '', klass: 'verb', signifiee: 'AはBの{腕, 脚, 枝}である', attribute: [], etymology: { gem: 'limuz' } }],
  ['thigh', { signifier: '', klass: 'verb', signifiee: 'AはBの{上腕, 腿}である', attribute: [], etymology: { gem: 'þeuhą' } }],
  ['knee', { signifier: '', klass: 'verb', signifiee: 'AはBの{前腕, 脛}である', attribute: [], etymology: { gem: 'knewą' } }],
  ['trunk', { signifier: '', klass: 'verb', signifiee: 'AはBの{胴, 幹}である', attribute: [], etymology: { gem: 'stamniz' } }],
  ['buttock', { signifier: '', klass: 'verb', signifiee: 'AはBの臀である', attribute: [], etymology: { gem: 'buttaz' } }],
  ['tail', { signifier: '', klass: 'verb', signifiee: 'AはBの尾である', attribute: [], etymology: { gem: 'taglą' } }],

  ['foot', { signifier: '', klass: 'verb', signifiee: 'AはBの{手, 足}である', attribute: [], etymology: { gem: 'fōts' } }],
  ['finger', { signifier: '', klass: 'verb', signifiee: 'AはBの指である', attribute: [], etymology: { gem: 'fingraz' } }],
  ['nail', { signifier: '', klass: 'verb', signifiee: 'AはBの爪である', attribute: [], etymology: { gem: 'naglaz' } }],

  ['skin', { signifier: '', klass: 'verb', signifiee: 'AはBの皮膚である', attribute: [], etymology: { gem: 'hūdiz' } }],
  ['nerve', { signifier: '', klass: 'verb', signifiee: 'AはBの神經である', attribute: [], etymology: { la: 'nervus' } }],
  ['flesh', { signifier: '', klass: 'verb', signifiee: 'AはBの肉である', attribute: [], etymology: { gem: 'flaiski' } }],
  ['bone', { signifier: '', klass: 'verb', signifiee: 'AはBの骨である', attribute: [], etymology: { gem: 'bainą' } }],
  ['joint', { signifier: '', klass: 'verb', signifiee: 'AはBの關節である', attribute: [], etymology: { la: 'iungere' } }],

  ['heart', { signifier: '', klass: 'verb', signifiee: 'AはBの心臟である', attribute: [], etymology: { gem: 'hertô' } }],
  ['lung', { signifier: '', klass: 'verb', signifiee: 'AはBの肺である', attribute: [], etymology: { gem: 'lungô' } }],
  ['gut', { signifier: '', klass: 'verb', signifiee: 'AはBの胃である', attribute: [], etymology: { gem: 'gutô' } }],

  ['ass', { signifier: '', klass: 'verb', signifiee: 'AはBの肛門である', attribute: [], etymology: { gem: 'arsaz' } }],
  ['penis', { signifier: '', klass: 'verb', signifiee: 'AはBの{陰莖, 陰核}である', attribute: [], etymology: { gem: 'tersaz' } }],
  ['vagina', { signifier: '', klass: 'verb', signifiee: 'AはBの腟である', attribute: [], etymology: { gem: 'skaiþiz' } }],
  ['womb', { signifier: '', klass: 'verb', signifiee: 'AはBの子宮である', attribute: [], etymology: { gem: 'wambō' } }],

  ['fruit', { signifier: '', klass: 'verb', signifiee: 'AはBの果實である', attribute: [], etymology: { gem: 'wastmaz' } }],
  ['root', { signifier: '', klass: 'verb', signifiee: 'AはBの根である', attribute: [], etymology: { gem: 'wrōts' } }],

  // artificial
  ['key', { signifier: '', klass: 'verb', signifiee: '鍵Aは錠Bを開ける', attribute: [], etymology: { gem: 'sleutaną' } }],

  // ad hoc
  ['day', { signifier: '', klass: 'verb', signifiee: 'Aは星Bの自轉周期', attribute: [], etymology: { gem: 'dagaz' } }],
  ['year', { signifier: '', klass: 'verb', signifiee: 'Aは星Bの公轉周期', attribute: [], etymology: { gem: 'jērą' } }],

  //['winter', { signifier: '', klass: 'verb', signifiee: 'Aは年Bの冬', attribute: [], etymology: { gem: 'wintruz' } }],
  //['spring', { signifier: '', klass: 'verb', signifiee: 'Aは年Bの春', attribute: [], etymology: { gem: '' } }],
  //['summer', { signifier: '', klass: 'verb', signifiee: 'Aは年Bの夏', attribute: [], etymology: { gem: 'sumaraz' } }],
  //['autumn', { signifier: '', klass: 'verb', signifiee: 'Aは年Bの秋', attribute: [], etymology: { gem: 'harbistaz' } }]
].map(([k, v]: [string, Entry]) => {
  if (v.signifier == '') {
    if ('gem' in v.etymology)
      v.signifier = v.etymology.gem
        // remove suffix
        .replace(/[āō]ną$|i?janą$|aną$|i?j?(az|ą)$|([aiuīô])z$|ǭ$|[ēō]r$/, '')

        // no unvoiced sonorant
        .replace(/^h(?=[nmjrlw])/g, '')

        // shorten triple consonant
        .replace(/(?<=s)t(?=[nm])/g, '')
        .replace(/(?<=s[ktp])[rl]/g, '')
        .replace(/rht/g, 'rt')
        .replace(/ntr/g, 'nt')

        // shorten diphthong
        .replace(/au/g, 'o')
        .replace(/ai/g, 'e')
        .replace(/eu/g, 'i')
        .replace(/ōu/g, 'o')
        //.replace(/ōi/g, 'i')

        // shorten long vowel
        .replace(/ī/g, 'i')
        .replace(/ē/g, 'e')
        .replace(/ā/g, 'a')
        .replace(/ō/g, 'o')
        .replace(/ū/g, 'u')

        // shorten superlong vowel
        .replace(/ê/g, 'e')
        .replace(/ô/g, 'o')

        .replace(/^w(?![ieaou])/g, '')
        .replace(/^h(?![ieaou])/g, '')
        .replace(/(?<=[ieaou])h(?=[^ieaou])/g, '')

        .replace(/(?<![ieaou])w$/g, '')

        // spelling
        .replace(/þ/g, 'd')
        .replace(/w/g, 'v')
        .replace(/g/g, 'c')
        .replace(/k/g, 'q')
        .replace(/h/g, 'x')
        .replace(/nc/g, 'g')

    else if ('la' in v.etymology) {
      let ety: string = null;
      if (typeof v.etymology.la === 'object') {
        let { n, g } = v.etymology.la;
        n = n.replace(/x/g, 'cs');
        g = g.replace(/x/g, 'cs');

        // third declension
        if (n.endsWith('s') && g.endsWith('ris'))
          ety = g.replace(/ris$/, 's');
        else if (g.endsWith('is'))
          ety = g.replace(/is$/, '');

        // fourth declension
        else if (n.endsWith('us') && g.endsWith('ūs'))
          ety = g.replace(/ūs$/, '');

        else
          ety = n;
      }
      else
        ety = v.etymology.la;

      v.signifier = ety
        .replace(/e$|a$|u[sm]$|[āēeī]re$|ārī$/g, '')

        .replace(/x/g, 'qs')
        .replace(/k|c|qu/g, 'q')
        .replace(/h/g, 'x')
        .replace(/g/g, 'c')
        .replace(/nc/g, 'g')

        .replace(/ī/g, 'i')
        .replace(/ē/g, 'e')
        .replace(/ā/g, 'a')
        .replace(/ō/g, 'o')
        .replace(/ū/g, 'u')

        .replace(/i(?=[ieaou])/g, 'j')
        .replace(/u(?=[ieaou])/g, 'v')

        .replace(/ae|oe/g, 'e')
    }
  }

  v.signifier = v.signifier
    //.replace(/p/g, 'f')
    //.replace(/q$/g, 'x')
    .replace(/n(?=[qx])/g, 'g')

    // no affricate
    .replace(/(?<=[td])[sz]/g, '')

    // no poly-syllabic word-final vowel
    .replace(/(?<=[ieaou].*)[ieaou]$/, '')

    // no double nasal
    .replace(/(?<=g)[nm]|(?<=n)[gm]|(?<=m)[gm]/g, '')
    //.replace(/((?<=g)c|(?<=n)d|(?<=m)b)(?=[ieaou])/g, '')

    // no intervocalic plossive
    //.replace(/(?<=[ieaou])q(?=[ieaou])/g, 'x')
    //.replace(/(?<=[ieaou])t(?=[ieaou])/g, 's')
    //.replace(/(?<=[ieaou])p(?=[ieaou])/g, 'f')
    //.replace(/(?<=[ieaou])d(?=[ieaou])/g, 'l')
    //.replace(/(?<=[ieaou])b(?=[ieaou])/g, 'v')

    // no final voiced plossive after nasal
    .replace(/(?<=g)c$/g, 'q')
    .replace(/(?<=n)d$/g, 't')
    .replace(/(?<=m)b$/g, 'p')

    // palataise
    .replace(/[zj]?c(?=[ie])/g, 'j')
    .replace(/[sk]?q(?=[ie])/g, 'k')

    // reduce R
    //.replace(/(?<=[gcjndzlmbv])r|r(?=[gcjndzlmbv])/g, 'j')
    //.replace(/(?<=[qxktspf])r|r(?=[qxktspf])/g, 'k')
    .replace(/rz$/g, 'j')
    .replace(/rs$/g, 'k')

    // no long phoneme
    .replace(/(.)\1/g, '$1')

    .replace(/ji/g, 'je')
    .replace(/vu/g, 'vo')
    .replace(/xu/g, 'xo')

    // no double nasal
    .replace(/(?<=[gnm])[gnm]/g, '')

    // unvoice
    .replace(/(?<=[^ieaou])([cjdzbv])$/g, switchVoice)

    .replace(/(?<=[gcjndzlrmbv])$/g, '')
    //.replace(/(?<=[^ieaou])[gn]$/g, 'n')
    //.replace(/[gm](?=[^ieaou])/g, 'n')

    .replace(/[gm]$/g, 'n')
    .replace(/v$/g, 'b')

    .replace(/(?<![ieaou])sq|sq(?![ieaou])/g, 'k')

    //.replace(/(?<=([ieaou])[rl])(?=[^ieaou])/g, '$1')
    ;

  return [k, v];
})
);

export const aliases = new Map([
  ['night', 'PART_DAY LOW'],
  ['daytime', 'PART_DAY HIGH'],
  ['midnight', 'PART_DAY MIN'],
  ['midday', 'PART_DAY ALL'],

  ['cold', 'HEAT LOW'],
  ['hot', 'HEAT HIGH'],

  ['season', 'PART-YEAR'],
  ['winter', 'SEASON-LOW'],
  ['summer', 'SEASON-HIGH'],
]);

export const dictCompound = {
  meter: { signifier: { alias: `UNIT-${letters.get('m').name}` }, klass: 'verb', signifiee: 'S is 1m', attribute: [], etymology: {} },
  second: { signifier: { alias: `UNIT-${letters.get('s').name}` }, klass: 'verb', signifiee: 'S is 1s', attribute: [], etymology: {} },
  kilogram: { signifier: { alias: `UNIT-${letters.get('g').name}${letters.get('g').name}` }, klass: 'verb', signifiee: 'S is 1kg', attribute: [], etymology: {} },
  ampere: { signifier: { alias: `UNIT-${letters.get('a').name}` }, klass: 'verb', signifiee: 'S is 1A', attribute: [], etymology: {} },
  kelvin: { signifier: { alias: `UNIT-${letters.get('k').name}` }, klass: 'verb', signifiee: 'S is 1K', attribute: [], etymology: {} },
  candela: { signifier: { alias: `UNIT-${letters.get('c').name}${letters.get('d').name}` }, klass: 'verb', signifiee: 's is 1cd', attribute: [], etymology: {} },
}