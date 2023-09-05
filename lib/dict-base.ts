const newMap = <K, V>(kvs: Array<[K, V]>): Map<K, V> => (() => {
  const r = new Map();
  for (const [k, v] of kvs) {
    if (r.has(k))
      throw `duplicate key '${k}'`;
    else
      r.set(k, v);
  }

  return r;
})();

export const letters: Map<string, { name: string }> = newMap([
  ['a', { name: '' }],
  ['b', { name: 'ba' }],
  ['c', { name: 'ca' }],
  ['d', { name: 'da' }],
  ['e', { name: '' }],
  ['f', { name: 'fa' }],
  ['g', { name: '' }],
  ['h', { name: 'ha' }],
  ['i', { name: '' }],
  ['j', { name: 'ja' }],
  ['k', { name: 'ka' }],
  ['l', { name: '' }],
  ['m', { name: 'ma' }],
  ['n', { name: 'na' }],
  ['o', { name: '' }],
  ['p', { name: 'pa' }],
  ['r', { name: 'ra' }],
  ['s', { name: 'sa' }],
  ['t', { name: 'ta' }],
  ['u', { name: '' }],
  ['v', { name: 'va' }],
  ['w', { name: '' }],
  ['x', { name: 'xa' }],
  ['y', { name: '' }],
  ['z', { name: 'za' }],
]);

export const transliterate = (k, s) =>
  Object.keys(letters).reduce((acc, letter) => acc.replace(new RegExp(letter, 'g'), letters[letter][k]), s)

type Attribute = 'commutative';

export type Dict = Map<string, {
  signifier: string,
  klass: string,
  signifiee: string,
  attribute: Array<Attribute>,
  etymology: {
    gem?: string, // proto germanic
    de?: string, // german
    nl?: string, // dutch
    en?: string, // english
    la?: string, // latin
    fr?: string, // french
    grc?: string, // ancient greek
    cu?: string, // old church slavonic
    fa?: string, // persian
    sa?: string, // sanskrit
    cmn?: string // mandarin
  } | string,
}>;

export const dictBase: Dict = newMap([
  ['_language', { signifier: 'jud', klass: 'verb', signifiee: 'Aはこの言語', attribute: [], etymology: {} }],

  // case marker
  ['_n', { signifier: 'di', klass: 'case', signifiee: '主格', attribute: [], etymology: { gem: 'sa' } }],
  ['_a', { signifier: 'de', klass: 'case', signifiee: '對格', attribute: [], etymology: { fa: 'rā' } }],
  ['_d', { signifier: 'da', klass: 'case', signifiee: '與格', attribute: [], etymology: { gem: 'ta' } }],
  ['with', { signifier: 'qo', klass: 'case', signifiee: '', attribute: [], etymology: { la: 'cum' } }],

  ['of', { signifier: 'f', klass: '', signifiee: '', attribute: [], etymology: { de: 'von' } }],
  ['_swap', { signifier: 'CV', klass: 'case', signifiee: '', attribute: [], etymology: {} }],

  // pronoun
  ['i', { signifier: 'me', klass: 'verb', signifiee: 'Aは我', attribute: [], etymology: { gem: 'mek' } }],
  ['thou', { signifier: 'du', klass: 'verb', signifiee: 'Aは汝', attribute: [], etymology: { gem: 'þū' } }],
  ['he', { signifier: 'is', klass: 'verb', signifiee: 'Aは彼', attribute: [], etymology: { gem: 'iz' } }],
  ['self', { signifier: 'se', klass: 'verb', signifiee: 'Aは自身 (既に文に登場した對稱)', attribute: [], etymology: { gem: 'se' } }],

  // subordinate
  ['what', { signifier: 'vaz', klass: '', signifiee: 'Aは誰', attribute: [], etymology: { gem: 'hwaz' } }],
  ['that', { signifier: 'dat', klass: '', signifiee: '節', attribute: [], etymology: { gem: 'þat' } }],
  ['which', { signifier: 'CV', klass: '', signifiee: '關係', attribute: [], etymology: { de: 'welcher', en: 'which' } }],
  ['clause_end', { signifier: 'CV', klass: '', signifiee: '', attribute: [], etymology: {} }],

  // functional
  ['_open', { signifier: 'CV', klass: 'structure', signifiee: '', attribute: [], etymology: {} }],
  ['_close', { signifier: 'CV', klass: 'structure', signifiee: '', attribute: [], etymology: {} }],
  ['_comma', { signifier: 'CV', klass: '', signifiee: '', attribute: [], etymology: {} }],
  ['_quote', { signifier: 'CV', klass: '', signifiee: '', attribute: [], etymology: {} }],
  ['_period', { signifier: 'CV', klass: '', signifiee: '終止', attribute: [], etymology: {} }],
  ['_ask', { signifier: 'CV', klass: '', signifiee: '疑問', attribute: [], etymology: { la: 'ne' } }],

  // tense
  ['_past', { signifier: 'ca', klass: 'adverb', signifiee: '', attribute: [], etymology: { gem: 'ga-' } }],
  ['_present', { signifier: 'do', klass: 'adverb', signifiee: '', attribute: [], etymology: { gem: 'dōną' } }],
  ['_future', { signifier: 'šu', klass: 'adverb', signifiee: '', attribute: [], etymology: { gem: 'skulaną' } }],

  // aspect
  ['_before', { signifier: 'Ci', klass: 'adverb', signifiee: '', attribute: [], etymology: {} }],
  ['_begin', { signifier: 'Ce', klass: 'adverb', signifiee: '', attribute: [], etymology: {} }],
  ['_while', { signifier: 'Ca', klass: 'adverb', signifiee: '', attribute: [], etymology: {} }],
  ['_end', { signifier: 'Co', klass: 'adverb', signifiee: '', attribute: [], etymology: {} }],
  ['_after', { signifier: 'Cu', klass: 'adverb', signifiee: '', attribute: [], etymology: {} }],

  // mood
  ['may', { signifier: 'mac', klass: 'adverb', signifiee: '_MOOD ZERO LESS', attribute: [], etymology: { gem: 'maganą' } }],

  ['typical', { signifier: 'CV', klass: 'adverb', signifiee: '', attribute: [], etymology: {} }],
  ['figurative', { signifier: 'CV', klass: 'adverb', signifiee: '', attribute: [], etymology: {} }],

  ['_frequency', { signifier: 'CV', klass: 'prenoun/number', signifiee: '', attribute: [], etymology: {} }],
  ['_connect', { signifier: 'CV', klass: '', signifiee: '', attribute: [], etymology: {} }],

  // digit (vowels in order)
  ['zero', { signifier: 'zV', klass: 'numeral', signifiee: '0', attribute: [], etymology: { en: 'zero' } }],
  ['one', { signifier: 'qV', klass: 'numeral', signifiee: '1', attribute: [], etymology: { sa: 'eka', fa: 'jak' } }],
  ['two', { signifier: 'vV', klass: 'numeral', signifiee: '2', attribute: [], etymology: { sa: 'dva' } }],
  ['three', { signifier: 'tV', klass: 'numeral', signifiee: '3', attribute: [], etymology: { la: 'tres' } }],
  ['four', { signifier: 'fV', klass: 'numeral', signifiee: '4', attribute: [], etymology: { en: 'four', de: 'vier' } }],
  ['five', { signifier: 'pV', klass: 'numeral', signifiee: '5', attribute: [], etymology: { grc: 'πέντε', ru: 'пять' } }],
  ['six', { signifier: 'šV', klass: 'numeral', signifiee: '6', attribute: [], etymology: { sa: 'šat' } }],
  ['seven', { signifier: 'sV', klass: 'numeral', signifiee: '7', attribute: [], etymology: { sa: 'sapta' } }],
  ['eight', { signifier: 'jV', klass: 'numeral', signifiee: '8', attribute: [], etymology: { sa: 'aṣṭa' } }],
  ['nine', { signifier: 'nV', klass: 'numeral', signifiee: '9', attribute: [], etymology: { en: 'nine', de: 'neun' } }],
  ['ten', { signifier: 'Ca', klass: 'numeral', signifiee: '10', attribute: [], etymology: { cmn: 'ŝí' } }],
  ['eleven', { signifier: 'Co', klass: 'numeral', signifiee: '11', attribute: [], etymology: {} }],
  ['twelve', { signifier: 'Cu', klass: 'numeral', signifiee: '12', attribute: [], etymology: {} }],
  ['thirteen', { signifier: 'Ca', klass: 'numeral', signifiee: '13', attribute: [], etymology: {} }],
  ['fourteen', { signifier: 'Co', klass: 'numeral', signifiee: '14', attribute: [], etymology: {} }],
  ['fifteen', { signifier: 'CV', klass: 'numeral', signifiee: '15', attribute: [], etymology: {} }],

  ['decimal', { signifier: 'CV', klass: 'numeral', signifiee: '.', attribute: [], etymology: {} }],
  ['exp', { signifier: 'CV', klass: 'numeral', signifiee: 'E', attribute: [], etymology: {} }],

  ['null', { signifier: 'nu', klass: 'numeral', signifiee: 'null', attribute: [], etymology: { en: 'null' } }],
  ['min', { signifier: 'mi', klass: 'numeral', signifiee: 'minimum', attribute: [], etymology: { en: 'minimus' } }],
  ['max', { signifier: 'CV', klass: 'numeral', signifiee: 'maximum, every', attribute: [], etymology: { de: 'ganz' } }],

  ['less', { signifier: 'les', klass: 'numeral', signifiee: '≤', attribute: [], etymology: { en: 'less' } }],

  ['low', { signifier: 'loc', klass: 'numeral', signifiee: '=PASSIVE MORE NORMAL', attribute: [], etymology: { en: 'low', de: 'läg' } }],
  ['normal', { signifier: 'norm', klass: 'numeral', signifiee: 'normal', attribute: [], etymology: { en: 'norm' } }],
  ['high', { signifier: 'xox', klass: 'numeral', signifiee: '=MORE NORMAL', attribute: [], etymology: { de: 'hoch' } }],

  ['decrease', { signifier: 'CV', klass: 'numeral', signifiee: '', attribute: [], etymology: {} }],
  ['increase', { signifier: 'CV', klass: 'numeral', signifiee: '', attribute: [], etymology: {} }],

  ['plus', { signifier: 'sum', klass: 'numeral', signifiee: '+', attribute: [], etymology: { en: 'sum' } }],
  ['multiply', { signifier: 'mul', klass: 'numeral', signifiee: '*', attribute: [], etymology: { en: 'multiply' } }],
  ['divide', { signifier: 'div', klass: 'numeral', signifiee: '/', attribute: [], etymology: { en: 'divide' } }],
  ['modulo', { signifier: 'mod', klass: 'numeral', signifiee: '%', attribute: [], etymology: { en: 'modulo' } }],
  ['power', { signifier: 'pov', klass: 'numeral', signifiee: '^', attribute: [], etymology: { en: 'power' } }],

  ['how_many', { signifier: 'CV', klass: '', signifiee: '', attribute: [], etymology: {} }],
  ['ordinal', { signifier: 'CV', klass: 'verb/number', signifiee: '', attribute: [], etymology: {} }],

  ['not', { signifier: 'no', klass: '', signifiee: '', attribute: [], etymology: { en: 'no' } }],
  ['and', { signifier: 'je', klass: '', signifiee: '', attribute: [], etymology: { fr: 'et' } }],
  ['or', { signifier: 'vo', klass: '', signifiee: '', attribute: [], etymology: { en: 'or' } }],
  ['imply', { signifier: 've', klass: '', signifiee: '', attribute: [], etymology: { en: 'when', de: 'wenn' } }],

  // basic
  ['from', { signifier: 'fan', klass: 'verb', signifiee: '始點AはBを發する. 起源. 供與者.', attribute: [], etymology: { gem: 'fanē' } }],
  ['have', { signifier: 'xav', klass: 'verb', signifiee: 'AはBを有する', attribute: [], etymology: { gem: 'habjaną' } }],
  ['come', { signifier: 'qom', klass: 'verb', signifiee: 'AはBへ移動する', attribute: [], etymology: { gem: ' kwemaną' } }],
  ['cause', { signifier: 'let', klass: 'verb', signifiee: '原因Aは結果Bを起こす', attribute: [], etymology: { gem: 'lētaną' } }],

  // point position relation
  ['below', { signifier: 'nid', klass: 'verb', signifiee: 'AはBの下方に位置する', attribute: [], etymology: { gem: 'niþ' } }],
  ['behind', { signifier: 'xind', klass: 'verb', signifiee: 'AはBの後方に位置する', attribute: [], etymology: { gem: 'hinder' } }],
  ['left', { signifier: 'lev', klass: 'verb', signifiee: 'AはBの左方に位置する', attribute: [], etymology: { la: 'laevus' } }],
  ['before', { signifier: 'fur', klass: 'verb', signifiee: 'AはBの過去に位置する', attribute: [], etymology: { gem: 'furai' } }],
  ['at', { signifier: 'at', klass: 'verb', signifiee: 'AはBに位置する', attribute: [], etymology: { gem: 'at' } }],
  ['in', { signifier: 'in', klass: 'verb', signifiee: 'AはBの中に位置する', attribute: [], etymology: { gem: 'in' } }],

  // entity position relation
  ['far', { signifier: 'fer', klass: 'verb', signifiee: 'AとBの間は長い', attribute: ['commutative'], etymology: { gem: 'ferrai' } }],
  ['cross', { signifier: 'qruq', klass: 'verb', signifiee: 'AとBは交叉する', attribute: ['commutative'], etymology: { la: 'crux, crucis' } }],

  // phisics
  ['time', { signifier: 'tim', klass: 'verb', signifiee: 'Aは時間', attribute: [], etymology: { gem: 'tīmô' } }],
  ['space', { signifier: 'rom', klass: 'verb', signifiee: 'Aは空間', attribute: [], etymology: { gem: 'rūmą' } }],
  ['wave', { signifier: 'svel', klass: 'verb', signifiee: 'Aは波, 媒體Bの', attribute: [], etymology: { gem: 'swellaną' } }],
  ['light', { signifier: 'lixt', klass: 'verb', signifiee: 'Aは光', attribute: [], etymology: { gem: 'leuhtą' } }],
  ['sound', { signifier: 'qlig', klass: 'verb', signifiee: 'Aは音', attribute: [], etymology: { gem: 'klinganą' } }],

  // state of matter
  ['solid', { signifier: 'fast', klass: 'verb', signifiee: 'Aは固體', attribute: [], etymology: { gem: 'fastuz' } }],
  ['liquid', { signifier: 'liq', klass: 'verb', signifiee: 'Aは液體', attribute: [], etymology: { la: 'liquēre' } }],
  ['gas', { signifier: 'cas', klass: 'verb', signifiee: 'Aは氣體', attribute: [], etymology: { nl: 'gas' } }],
  ['plasma', { signifier: 'plas', klass: 'verb', signifiee: 'Aは電漿', attribute: [], etymology: { grc: 'πλάσσω' } }],

  // volume
  ['big', { signifier: 'crot', klass: 'verb', signifiee: 'Aは大きい', attribute: [], etymology: { gem: 'grautaz' } }],
  ['long', { signifier: 'lag', klass: 'verb', signifiee: 'Aは長い', attribute: [], etymology: { gem: 'langaz' } }],
  ['thick', { signifier: 'deq', klass: 'verb', signifiee: 'Aは厚い', attribute: [], etymology: { gem: 'þekuz' } }],
  ['wide', { signifier: 'vid', klass: 'verb', signifiee: 'Aは廣い', attribute: [], etymology: { gem: 'wīdaz' } }],

  // geometry
  ['point', { signifier: 'pug', klass: 'verb', signifiee: 'Aは點', attribute: [], etymology: { la: 'pungere' } }],
  ['line', { signifier: 'lin', klass: 'verb', signifiee: 'Aは線', attribute: [], etymology: { de: 'linie' } }],
  ['plane', { signifier: 'flat', klass: 'verb', signifiee: 'Aは平面', attribute: [], etymology: { gem: 'flataz' } }],
  ['angle', { signifier: 'vinq', klass: 'verb', signifiee: 'Aは角', attribute: [], etymology: { gem: 'winkel' } }],
  ['interval', { signifier: 'req', klass: 'verb', signifiee: 'Aは區間', attribute: [], etymology: { gem: 'raikijaną.' } }],
  ['centre', { signifier: 'mid', klass: 'verb', signifiee: 'AはBの中心', attribute: [], etymology: { gem: 'midjaz' } }],
  ['shape', { signifier: 'morf', klass: 'verb', signifiee: 'AはBの形. 圖形.', attribute: [], etymology: { grc: 'μορφή' } }],

  // life
  ['man', { signifier: 'man', klass: 'verb', signifiee: 'Aは人間', attribute: [], etymology: { gem: 'mann' } }],
  ['animal', { signifier: 'diz', klass: 'verb', signifiee: 'Aは動物', attribute: [], etymology: { gem: 'deuzą' } }],
  ['plant', { signifier: 'plant', klass: 'verb', signifiee: 'Aは植物', attribute: [], etymology: { la: 'planta' } }],
  ['live', { signifier: 'liv', klass: 'verb', signifiee: 'Aは生きる', attribute: [], etymology: { gem: 'libjaną' } }],
  ['wake', { signifier: 'vaq', klass: 'verb', signifiee: 'Aは起きる', attribute: [], etymology: { gem: 'wakāną' } }],
  ['rot', { signifier: 'rut', klass: 'verb', signifiee: 'Aは腐敗する', attribute: [], etymology: { gem: 'rutāną' } }],
  ['sick', { signifier: 'siq', klass: 'verb', signifiee: 'Aは{不調, 病人}だ', attribute: [], etymology: { gem: 'seukaną' } }],

  // sex
  ['sex', { signifier: 'seqs', klass: 'verb', signifiee: '有性生殖種Aは雌雄Bを持つ', attribute: [], etymology: { la: 'sexus, sexūs' } }],
  ['male', { signifier: 'cum', klass: 'verb', signifiee: 'Aは雄', attribute: [], etymology: { gem: 'gumô' } }],
  ['female', { signifier: 'qven', klass: 'verb', signifiee: 'Aは雌', attribute: [], etymology: { gem: 'kwenǭ' } }],
  ['mate', { signifier: 'fuq', klass: 'verb', signifiee: 'AはBと交接する', attribute: ['commutative'], etymology: { gem: 'fukkōną' } }],

  // family
  ['parent', { signifier: 'fad', klass: 'verb', signifiee: 'Aは子Bの親', attribute: [], etymology: { gem: 'fadēr' } }],
  ['sibling', { signifier: 'brod', klass: 'verb', signifiee: 'AはBの同胞, 親Cの', attribute: ['commutative'], etymology: { gem: 'brōþēr' } }],
  ['spouse', { signifier: 'xiv', klass: 'verb', signifiee: 'AはBの配偶者', attribute: ['commutative'], etymology: { gem: 'hīwą' } }],

  // facial
  ['smile', { signifier: 'smil', klass: 'verb', signifiee: 'Aは微笑む', attribute: [], etymology: { gem: 'smīlijaną' } }],
  ['laugh', { signifier: 'lax', klass: 'verb', signifiee: 'Aは笑ふ', attribute: [], etymology: { gem: 'hlahjaną' } }],
  ['frown', { signifier: 'fron', klass: 'verb', signifiee: 'Aは顰める', attribute: [], etymology: { en: 'frown' } }],
  ['weep', { signifier: 'vop', klass: 'verb', signifiee: 'Aは涙Bを流す', attribute: [], etymology: { gem: 'wōpijaną' } }],

  // nature
  ['sun', { signifier: 'sun', klass: 'verb', signifiee: 'Aは恒星', attribute: [], etymology: { gem: 'sunnǭ' } }],
  ['land', { signifier: 'land', klass: 'verb', signifiee: 'Aは陸地', attribute: [], etymology: { gem: 'landą' } }],
  ['sky', { signifier: 'sqiv', klass: 'verb', signifiee: 'Aは空', attribute: [], etymology: { gem: 'skiwô' } }],
  ['mountain', { signifier: 'berc', klass: 'verb', signifiee: 'Aは山岳', attribute: [], etymology: { gem: 'bergaz' } }],
  ['sea', { signifier: 'sev', klass: 'verb', signifiee: 'Aは海洋', attribute: [], etymology: { gem: 'saiwiz' } }],
  ['lake', { signifier: 'laq', klass: 'verb', signifiee: 'Aは湖', attribute: [], etymology: { la: 'lacus' } }],
  ['river', { signifier: 'stom', klass: 'verb', signifiee: 'Aは河川', attribute: [], etymology: { gem: 'straumaz' } }],

  // material
  ['water', { signifier: 'vat', klass: 'verb', signifiee: 'Aは水', attribute: [], etymology: { gem: 'watōr' } }],
  ['salt', { signifier: 'sal', klass: 'verb', signifiee: 'Aは鹽', attribute: [], etymology: { gem: 'saltą' } }],
  ['oil', { signifier: 'ol', klass: 'verb', signifiee: 'Aは油脂', attribute: [], etymology: { gem: 'oleum' } }],
  ['stone', { signifier: 'sten', klass: 'verb', signifiee: 'Aは鑛物', attribute: [], etymology: { gem: 'stainaz' } }],
  ['metal', { signifier: 'metal', klass: 'verb', signifiee: 'Aは金属', attribute: [], etymology: { grc: 'μέταλλον' } }],

  // digestion
  ['eat', { signifier: 'et', klass: 'verb', signifiee: 'AはBを食ふ', attribute: [], etymology: { gem: 'etaną', } }],
  ['vomit', { signifier: 'puq', klass: 'verb', signifiee: 'AはBを吐く', attribute: [], etymology: { gem: 'pukaną ', } }],
  ['excrete', { signifier: 'šit', klass: 'verb', signifiee: 'AはBを排泄する', attribute: [], etymology: { gem: 'skitiz' } }],

  // sense
  ['feel', { signifier: 'fol', klass: 'verb', signifiee: 'AはBを感ずる', attribute: [], etymology: { gem: 'fōlijaną' } }],
  ['hear', { signifier: 'xoz', klass: 'verb', signifiee: 'AはBを聞く', attribute: [], etymology: { gem: 'hauzijaną' } }],
  ['see', { signifier: 'sex', klass: 'verb', signifiee: 'AはBを見る', attribute: [], etymology: { gem: 'sehwaną' } }],
  ['taste', { signifier: 'smaq', klass: 'verb', signifiee: 'AはBを味はふ', attribute: [], etymology: { gem: 'smakkuz' } }],
  ['smell', { signifier: 'riq', klass: 'verb', signifiee: 'AはBを嗅ぐ', attribute: [], etymology: { gem: 'reukaną' } }],
  ['touch', { signifier: 'tag', klass: 'verb', signifiee: 'AはBの壓力を感ず', attribute: [], etymology: { la: 'tangēre' } }],
  ['ache', { signifier: 'dol', klass: 'verb', signifiee: 'AはBに痛む', attribute: [], etymology: { la: 'dolēre' } }],

  // emotion
  ['love', { signifier: 'luv', klass: 'verb', signifiee: 'AはBを好む', attribute: [], etymology: { gem: 'lubō' } }],
  ['want', { signifier: 'vil', klass: 'verb', signifiee: 'AはBを求む', attribute: [], etymology: { gem: 'wiljaną' } }],
  ['amaze', { signifier: 'mas', klass: 'verb', signifiee: 'AはBに驚く', attribute: [], etymology: { gem: 'masōną' } }],
  ['fear', { signifier: 'furt', klass: 'verb', signifiee: 'AはBを恐る', attribute: [], etymology: { gem: 'furhtaz' } }],
  ['anger', { signifier: 'vod', klass: 'verb', signifiee: 'AはBに怒る', attribute: [], etymology: { gem: 'wōdaz' } }],
  ['enjoy', { signifier: 'nit', klass: 'verb', signifiee: 'AはBを樂しむ', attribute: [], etymology: { gem: 'neutaną' } }],
  ['proud', { signifier: 'xon', klass: 'verb', signifiee: 'AはBを誇る', attribute: [], etymology: { la: 'honōs, honōris' } }],

  // language
  ['true', { signifier: 'ver', klass: 'verb', signifiee: 'Aは眞である', attribute: [], etymology: { gem: 'wēraz' } }],
  ['say', { signifier: 'sac', klass: 'verb', signifiee: 'Aは發話Bを言ふ', attribute: [], etymology: { gem: 'sagjaną' } }],
  ['speak', { signifier: 'speq', klass: 'verb', signifiee: 'Aは言語Bを言ふ', attribute: [], etymology: { gem: 'sprekaną' } }],
  ['name', { signifier: 'nam', klass: 'verb', signifiee: 'AはBを意味する', attribute: [], etymology: { gem: 'namô' } }],

  // color
  ['color', { signifier: 'farv', klass: 'verb', signifiee: 'Aは色Bを呈する', attribute: [], etymology: { gem: 'farwō' } }],
  ['bright', { signifier: 'bert', klass: 'verb', signifiee: 'Aは明るい', attribute: [], etymology: { gem: 'berhtaz' } }],
  ['colourful', { signifier: 'xrom', klass: 'verb', signifiee: 'Aは鮮やか', attribute: [], etymology: { grc: 'χρῶμα' } }],
  ['hue', { signifier: 'qol', klass: 'verb', signifiee: 'AはBの色相である', attribute: [], etymology: { la: 'colōs, colōris' } }],
  ['red', { signifier: 'rod', klass: 'verb', signifiee: 'Aは赤い', attribute: [], etymology: { gem: 'raudaz' } }],
  ['yellow', { signifier: 'celv', klass: 'verb', signifiee: 'Aは黃色を呈す', attribute: [], etymology: { gem: 'gelwaz' } }],
  ['green', { signifier: 'cron', klass: 'verb', signifiee: 'Aは綠色を呈す', attribute: [], etymology: { gem: 'grōniz' } }],
  ['blue', { signifier: 'blev', klass: 'verb', signifiee: 'Aは青い', attribute: [], etymology: { gem: 'blēwaz' } }],

  // thought
  ['sense', { signifier: 'sent', klass: 'verb', signifiee: 'Aは感情Bを持つ', attribute: [], etymology: { de: 'sentīre' } }],
  ['think', { signifier: 'danq', klass: 'verb', signifiee: 'AはBと考ふ', attribute: [], etymology: { gem: 'þankijaną' } }],
  ['know', { signifier: 'vit', klass: 'verb', signifiee: 'AはBを知る', attribute: [], etymology: { gem: 'witaną', } }],
  ['plan', { signifier: 'plan', klass: 'verb', signifiee: 'AはBを計劃する', attribute: [], etymology: { de: 'planen' } }],
  ['wait', { signifier: 'vart', klass: 'verb', signifiee: 'AはBを豫期する.', attribute: [], etymology: { gem: 'wardāną' } }],
  ['hope', { signifier: 'ven', klass: 'verb', signifiee: 'AはBを望む', attribute: [], etymology: { gem: 'wēniz' } }],
  ['aim', { signifier: 'til', klass: 'verb', signifiee: 'AはBを目的とする', attribute: [], etymology: { gem: 'tilą' } }],
  ['sure', { signifier: 'qert', klass: 'verb', signifiee: 'AはBを確信する', attribute: [], etymology: { la: 'certus' } }],
  ['assume', { signifier: 'CVC', klass: 'verb', signifiee: 'AはBを假定する', attribute: [], etymology: {} }],

  // miscellaneous
  ['world', { signifier: 'qosm', klass: 'verb', signifiee: 'Aは世界', attribute: [], etymology: { grc: 'κόσμος' } }],
  ['old', { signifier: 'ald', klass: 'verb', signifiee: 'Aは古い', attribute: [], etymology: { gem: 'aldaz' } }],
  ['dwell', { signifier: 'vun', klass: 'verb', signifiee: 'Aは家Bに住む', attribute: [], etymology: { gem: 'wunāną' } }],
  ['guilt', { signifier: 'peq', klass: 'verb', signifiee: 'Aは事象Bに{罪, 責任}が有る', attribute: [], etymology: { la: 'peccāre' } }],
  ['flow', { signifier: 'flit', klass: 'verb', signifiee: 'AはBを流る', attribute: [], etymology: { gem: 'fleutaną' } }],
  ['part', { signifier: 'del', klass: 'verb', signifiee: 'Aは部分, 全體Bの', attribute: [], etymology: { gem: 'dailiz' } }],
  ['effect', { signifier: 'virq', klass: 'verb', signifiee: 'AはBに影響する. BはAに依存する.', attribute: [], etymology: { gem: 'wirkijaną' } }],
  ['rule', { signifier: 'rec', klass: 'verb', signifiee: '{秩序, 規則}AはBを{整へる, 支配する}', attribute: [], etymology: { la: 'regēre' } }],
  ['differ', { signifier: 'druc', klass: 'verb', signifiee: 'AはBと異なる', attribute: [], etymology: { chu: 'другъ' } }],
  ['vary', { signifier: 'mut', klass: 'verb', signifiee: 'AはBへ變化する', attribute: [], etymology: { la: 'mūtāre' } }],

  // transitive
  ['make', { signifier: 'vurq', klass: 'verb', signifiee: 'AはBを作る, Cから', attribute: [], etymology: { gem: 'wurkijaną' } }],
  ['give', { signifier: 'cev', klass: 'verb', signifiee: 'AはBをCに與ふ', attribute: [], etymology: { gem: 'gebaną' } }],
  ['buy', { signifier: 'buc', klass: 'verb', signifiee: 'Aは費用BでCを買ふ', attribute: [], etymology: { gem: 'bugjaną' } }],
  ['use', { signifier: 'nut', klass: 'verb', signifiee: 'Aは道具Bを使ふ, 目的Cのために', attribute: [], etymology: { gem: 'nutō' } }],
  ['worth', { signifier: 'vert', klass: 'verb', signifiee: 'AはBに價する, 基準Cで', attribute: [], etymology: { gem: 'werþaz' } }],

  ['declare', { signifier: 'šund', klass: 'verb', signifiee: 'SはOを宣言する', attribute: [], etymology: { de: 'künden' } }],
  ['ask', { signifier: 'frec', klass: 'verb', signifiee: 'AはBを問ふ', attribute: [], etymology: { gem: 'frēgō' } }],
  ['deceive', { signifier: 'lic', klass: 'verb', signifiee: 'AはBであると騙す', attribute: [], etymology: { de: 'leuganą' } }],
  ['apologise', { signifier: 'CVC', klass: 'verb', signifiee: 'AはBを謝る', attribute: [], etymology: {} }],
  ['forgive', { signifier: 'CVC', klass: 'verb', signifiee: 'AはBを許す', attribute: [], etymology: {} }],

  ['greet', { signifier: 'CVC', klass: 'verb', signifiee: 'AはBに挨拶する', attribute: [], etymology: { de: 'grüßen', en: 'greet' } }],
  ['fight', { signifier: 'fext', klass: 'verb', signifiee: 'AはBに抗ふ', attribute: [], etymology: { gem: 'fehtaną' } }],

  ['play', { signifier: 'spil', klass: 'verb', signifiee: 'AはBを遊ぶ (演奏するはoperate)', attribute: [], etymology: { de: 'spielen' } }],
  ['dance', { signifier: 'dans', klass: 'verb', signifiee: 'AはBを踊る', attribute: [], etymology: { gmw: 'þansōn' } }],
  ['music', { signifier: 'sig', klass: 'verb', signifiee: 'AはB (音樂) を演奏する', attribute: [], etymology: { gem: 'singwaną' } }],

  ['building', { signifier: 'xus', klass: 'verb', signifiee: 'Aは建造物', attribute: [], etymology: { de: 'hūsą' } }],
  ['town', { signifier: 'stad', klass: 'verb', signifiee: 'Aは市街', attribute: [], etymology: { gem: 'stadiz' } }],
  ['nation', { signifier: 'did', klass: 'verb', signifiee: 'Aは國家', attribute: [], etymology: { gem: 'þeudu' } }],

  ['consume', { signifier: 'CVC', klass: 'verb', signifiee: 'AはBを消費する', attribute: [], etymology: {} }],
  ['model', { signifier: 'CVC', klass: 'verb', signifiee: 'AはBを模倣する. AはBの模型である.', attribute: [], etymology: {} }],
  ['rotate', { signifier: 'CVC', klass: 'verb', signifiee: 'S rotate around O', attribute: [], etymology: 'rotàre' }],
  ['imitate', { signifier: 'CVC', klass: 'verb', signifiee: 'S imitate O', attribute: [], etymology: 'imitārī' }],
  ['status', { signifier: 'CVC', klass: 'verb', signifiee: 'S is state of O', attribute: [], etymology: {} }],
  ['manner', { signifier: 'CVC', klass: 'verb', signifiee: 'S is manner of O', attribute: [], etymology: {} }],

  // body part
  ['head', { signifier: 'xov', klass: 'verb', signifiee: 'AはBの首である', attribute: [], etymology: { gem: 'haubudą' } }],
  ['horn', { signifier: 'xurn', klass: 'verb', signifiee: 'AはBの角である', attribute: [], etymology: { gem: 'hurną' } }],
  ['hair', { signifier: 'xer', klass: 'verb', signifiee: 'AはBの髮である', attribute: [], etymology: { gem: 'hērą' } }],
  ['brain', { signifier: 'brac', klass: 'verb', signifiee: 'AはBの腦である', attribute: [], etymology: { gem: 'bragną' } }],
  ['eye', { signifier: 'oc', klass: 'verb', signifiee: 'AはBの目である', attribute: [], etymology: { gem: 'augô' } }],
  ['ear', { signifier: 'os', klass: 'verb', signifiee: 'AはBの耳である', attribute: [], etymology: { gem: 'ausô' } }],
  ['nose', { signifier: 'nas', klass: 'verb', signifiee: 'AはBの鼻である', attribute: [], etymology: { gem: 'nasō' } }],
  ['mouth', { signifier: 'mund', klass: 'verb', signifiee: 'AはBの口である', attribute: [], etymology: { gem: 'munþaz' } }],
  ['lip', { signifier: 'lep', klass: 'verb', signifiee: 'AはBの脣である', attribute: [], etymology: { gem: 'lepô' } }],
  ['tooth', { signifier: 'tand', klass: 'verb', signifiee: 'AはBの{齒, 牙}である', attribute: [], etymology: { gem: 'tanþs' } }],
  ['tongue', { signifier: 'tug', klass: 'verb', signifiee: 'AはBの舌である', attribute: [], etymology: { gem: 'tungǭ' } }],

  ['neck', { signifier: 'naq', klass: 'verb', signifiee: 'AはBの{首, 項, 喉}である', attribute: [], etymology: { gem: 'hnakkô' } }],
  ['shoulder', { signifier: 'šuld', klass: 'verb', signifiee: 'AはBの{肩, 骨盤}である', attribute: [], etymology: { gmw: 'skuldru' } }],
  ['breast', { signifier: 'brist', klass: 'verb', signifiee: 'AはBの胸である', attribute: [], etymology: { gem: 'breustą' } }],
  ['nipple', { signifier: 'tit', klass: 'verb', signifiee: 'AはBの乳頭である', attribute: [], etymology: { gem: 'tittaz' } }],
  ['belly', { signifier: 'buq', klass: 'verb', signifiee: 'AはBの腹である', attribute: [], etymology: { gem: 'būkaz' } }],
  ['limb', { signifier: 'lac', klass: 'verb', signifiee: 'AはBの{腕, 脚, 枝}である', attribute: [], etymology: { gem: 'lagjaz' } }],
  ['thigh', { signifier: 'lim', klass: 'verb', signifiee: 'AはBの{上腕, 腿}である', attribute: [], etymology: { gem: 'þeuhą' } }],
  ['knee', { signifier: 'qniv', klass: 'verb', signifiee: 'AはBの{前腕, 脛}である', attribute: [], etymology: { gem: 'knewą' } }],
  ['trunk', { signifier: 'stam', klass: 'verb', signifiee: 'AはBの{胴, 幹}である', attribute: [], etymology: { gem: 'stamniz' } }],
  ['buttock', { signifier: 'but', klass: 'verb', signifiee: 'AはBの臀である', attribute: [], etymology: { gem: 'buttaz' } }],
  ['tail', { signifier: 'tacl', klass: 'verb', signifiee: 'AはBの尾である', attribute: [], etymology: { de: 'taglą' } }],

  ['foot', { signifier: 'fot', klass: 'verb', signifiee: 'AはBの{手, 足}である', attribute: [], etymology: { gem: 'fōts' } }],
  ['finger', { signifier: 'figr', klass: 'verb', signifiee: 'AはBの指である', attribute: [], etymology: { gem: 'fingraz' } }],
  ['nail', { signifier: 'nacl', klass: 'verb', signifiee: 'AはBの爪である', attribute: [], etymology: { gem: 'naglaz' } }],

  ['skin', { signifier: 'xud', klass: 'verb', signifiee: 'AはBの皮膚である', attribute: [], etymology: { gem: 'hūdiz' } }],
  ['nerve', { signifier: 'nerv', klass: 'verb', signifiee: 'AはBの神經である', attribute: [], etymology: { la: 'nervus' } }],
  ['flesh', { signifier: 'fleš', klass: 'verb', signifiee: 'AはBの肉である', attribute: [], etymology: { gem: 'flaiski' } }],
  ['bone', { signifier: 'ben', klass: 'verb', signifiee: 'AはBの骨である', attribute: [], etymology: { gem: 'bainą' } }],
  ['joint', { signifier: 'jug', klass: 'verb', signifiee: 'AはBの關節である', attribute: [], etymology: { la: 'iungere' } }],

  ['heart', { signifier: 'xert', klass: 'verb', signifiee: 'AはBの心臟である', attribute: [], etymology: { gem: 'hertô' } }],
  ['lung', { signifier: 'lug', klass: 'verb', signifiee: 'AはBの肺である', attribute: [], etymology: { gem: 'lungô' } }],
  ['gut', { signifier: 'cut', klass: 'verb', signifiee: 'AはBの胃である', attribute: [], etymology: { gem: 'gutô' } }],

  ['ass', { signifier: 'ars', klass: 'verb', signifiee: 'AはBの肛門である', attribute: [], etymology: { gem: 'arsaz' } }],
  ['penis', { signifier: 'ters', klass: 'verb', signifiee: 'AはBの{陰莖, 陰核}である', attribute: [], etymology: { gem: 'tersaz' } }],
  ['vagina', { signifier: 'šed', klass: 'verb', signifiee: 'AはBの腟である', attribute: [], etymology: { gem: 'skaiþiz' } }],
  ['womb', { signifier: 'vam', klass: 'verb', signifiee: 'AはBの子宮である', attribute: [], etymology: { gem: 'wambō' } }],

  ['fruit', { signifier: 'vast', klass: 'verb', signifiee: 'AはBの果實である', attribute: [], etymology: { gem: 'wastmaz' } }],
  ['root', { signifier: 'vrot', klass: 'verb', signifiee: 'AはBの根である', attribute: [], etymology: { gem: 'wrōts' } }],
]);

export const dictCompound = {
  read: { signifier: { alias: 'WRITE-BACK' }, klass: 'verb', signifiee: 'S read O', attribute: [], etymology: {} },

  planet: { signifier: { alias: 'FOLLOW-STAR' }, klass: 'verb', signifiee: 'SはOを公轉する恆星', attribute: [], etymology: {} },
  moon: { signifier: { alias: 'FOLLOW-FOLLOW-STAR' }, klass: 'verb', signifiee: 'SはOを公轉する衞星', attribute: [], etymology: {} },

  meter: { signifier: { alias: `UNIT-${letters.get('m').name}` }, klass: 'verb', signifiee: 'S is 1m', attribute: [], etymology: {} },
  second: { signifier: { alias: `UNIT-${letters.get('s').name}` }, klass: 'verb', signifiee: 'S is 1s', attribute: [], etymology: {} },
  kilogram: { signifier: { alias: `UNIT-${letters.get('g').name}${letters.get('g').name}` }, klass: 'verb', signifiee: 'S is 1kg', attribute: [], etymology: {} },
  ampere: { signifier: { alias: `UNIT-${letters.get('a').name}` }, klass: 'verb', signifiee: 'S is 1A', attribute: [], etymology: {} },
  kelvin: { signifier: { alias: `UNIT-${letters.get('k').name}` }, klass: 'verb', signifiee: 'S is 1K', attribute: [], etymology: {} },
  candela: { signifier: { alias: `UNIT-${letters.get('c').name}${letters.get('d').name}` }, klass: 'verb', signifiee: 's is 1cd', attribute: [], etymology: {} },
}