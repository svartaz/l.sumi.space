export const letters: Map<string, { name: string }> = new Map([
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
  ['ø', { name: '' }],
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

export type Dict = Map<string, {
  signifier: string,
  category: string,
  klass: string,
  signifiee: string,
  etymology: string,
}>;

/*
La i e a o u
   i w a o u
   i e e ø y
La ī ē ā ō ū
*/

export const dictBase: Dict = new Map([
  ['do', { signifier: 'CV', category: '', klass: 'case', signifiee: '', etymology: '' }],
  ['der', { signifier: 'CV', category: '', klass: 'case', signifiee: '主格', etymology: '' }],
  ['den', { signifier: 'CV', category: '', klass: 'case', signifiee: '對角', etymology: '' }],
  ['with', { signifier: 'CV', category: '', klass: 'case', signifiee: '', etymology: '' }],

  ['of', { signifier: 'CV', category: '', klass: '', signifiee: '', etymology: '' }],
  ['_swap', { signifier: 'CV', category: '', klass: 'case', signifiee: '', etymology: '' }],

  ['i', { signifier: 'mw', category: 'pronoun', klass: 'verb', signifiee: 'i', etymology: 'mē' }],
  ['thou', { signifier: 'tw', category: 'pronoun', klass: 'verb', signifiee: 'thou', etymology: 'tē' }],
  ['he', { signifier: 'rw', category: 'pronoun', klass: 'noun/number', signifiee: 'he', etymology: 'ille' }],
  ['here', { signifier: 'CV', category: 'pronoun', klass: 'verb', signifiee: 'here', etymology: '' }],

  ['what', { signifier: 'qi', category: '', klass: '', signifiee: '空項', etymology: 'quid' }],
  ['that', { signifier: 'CV', category: '', klass: '', signifiee: '節', etymology: '' }],
  ['which', { signifier: 'CV', category: '', klass: '', signifiee: '關係', etymology: '' }],
  ['clause_end', { signifier: 'CV', category: '', klass: '', signifiee: '', etymology: '' }],

  ['_open', { signifier: 'CV', category: '', klass: 'structure', signifiee: '', etymology: '' }],
  ['_close', { signifier: 'CV', category: '', klass: 'structure', signifiee: '', etymology: '' }],
  ['_comma', { signifier: 'CV', category: '', klass: '', signifiee: '', etymology: '' }],
  ['_quote', { signifier: 'CV', category: '', klass: '', signifiee: '', etymology: '' }],
  ['_period', { signifier: 'CV', category: '', klass: '', signifiee: '句點', etymology: '' }],
  ['_ask', { signifier: 'CV', category: '', klass: '', signifiee: '句點', etymology: '' }],

  ['whether', { signifier: 'CV', category: '', klass: '', signifiee: '', etymology: '' }],

  ['_past', { signifier: 'CV', category: 'aspect', klass: 'adverb/number', signifiee: '', etymology: '' }],
  ['_present', { signifier: 'CV', category: 'aspect', klass: 'adverb/number', signifiee: '', etymology: '' }],
  ['_future', { signifier: 'CV', category: 'aspect', klass: 'adverb/number', signifiee: '', etymology: '' }],

  ['_before', { signifier: 'CV', category: 'aspect', klass: 'inverb', signifiee: '', etymology: '' }],
  ['_begin', { signifier: 'CV', category: 'aspect', klass: 'inverb', signifiee: '', etymology: '' }],
  ['_while', { signifier: 'CV', category: 'aspect', klass: 'inverb', signifiee: '', etymology: '' }],
  ['_end', { signifier: 'CV', category: 'aspect', klass: 'inverb', signifiee: '', etymology: '' }],
  ['_after', { signifier: 'CV', category: 'aspect', klass: 'inverb', signifiee: '', etymology: '' }],

  ['_mood', { signifier: 'CV', category: 'mood', klass: 'prenoun', signifiee: '0: may not, ≠0: may, max: must', etymology: '' }],
  ['_may', { signifier: 'CV', category: 'mood', klass: 'prenoun', signifiee: '_MOOD ZERO LESS', etymology: '' }],
  ['_must', { signifier: 'CV', category: 'mood', klass: 'prenoun', signifiee: '_MOOD MAX', etymology: '' }],

  ['anti', { signifier: 'CV', category: 'degree', klass: 'prenoun', signifiee: '=_DEGREE MINUS NORMAL', etymology: '' }],
  ['no', { signifier: 'CV', category: 'degree', klass: 'prenoun', signifiee: '=_DEGREE ZERO', etymology: '' }],
  ['little', { signifier: 'CV', category: 'degree', klass: 'prenoun', signifiee: '=_DEGREE LESS NORMAL', etymology: '' }],
  ['very', { signifier: 'CV', category: 'degree', klass: 'prenoun', signifiee: '=_DEGREE NORMAL LESS', etymology: '' }],

  ['_frequency', { signifier: 'CV', category: '', klass: 'prenoun/number', signifiee: '', etymology: '' }],

  ['_connect', { signifier: 'CV', category: 'sentence\\sentence/noun/sentence', klass: '', signifiee: '', etymology: '' }],

  ['typical', { signifier: 'CV', category: '', klass: 'adverb', signifiee: '', etymology: '' }],
  ['figurative', { signifier: 'CV', category: '', klass: 'adverb', signifiee: '', etymology: '' }],

  ['_degree', { signifier: 'CV', category: 'preverb/number', klass: 'adverb', signifiee: '', etymology: '' }],

  ['zero', { signifier: 'nV', category: 'digit', klass: 'numeral', signifiee: '0', etymology: '' }],
  ['one', { signifier: 'vV', category: 'digit', klass: 'numeral', signifiee: '1', etymology: '' }],
  ['two', { signifier: 'dV', category: 'digit', klass: 'numeral', signifiee: '2', etymology: '' }],
  ['three', { signifier: 'tV', category: 'digit', klass: 'numeral', signifiee: '3', etymology: '' }],
  ['four', { signifier: 'qV', category: 'digit', klass: 'numeral', signifiee: '4', etymology: '' }],
  ['five', { signifier: 'pV', category: 'digit', klass: 'numeral', signifiee: '5', etymology: '' }],
  ['six', { signifier: 'sV', category: 'digit', klass: 'numeral', signifiee: '6', etymology: '' }],
  ['seven', { signifier: 'xV', category: 'digit', klass: 'numeral', signifiee: '7', etymology: '' }],
  ['eight', { signifier: 'hV', category: 'digit', klass: 'numeral', signifiee: '8', etymology: '' }],
  ['nine', { signifier: 'nV', category: 'digit', klass: 'numeral', signifiee: '9', etymology: '' }],
  ['ten', { signifier: 'dV', category: 'digit', klass: 'numeral', signifiee: '10', etymology: '' }],
  ['eleven', { signifier: 'CV', category: 'digit', klass: 'numeral', signifiee: '11', etymology: '' }],
  ['twelve', { signifier: 'CV', category: 'digit', klass: 'numeral', signifiee: '12', etymology: '' }],
  ['thirteen', { signifier: 'CV', category: 'digit', klass: 'numeral', signifiee: '13', etymology: '' }],
  ['fourteen', { signifier: 'CV', category: 'digit', klass: 'numeral', signifiee: '14', etymology: '' }],
  ['fifteen', { signifier: 'CV', category: 'digit', klass: 'numeral', signifiee: '15', etymology: '' }],

  ['number_dot', { signifier: 'CV', category: 'number', klass: 'numeral', signifiee: 'E', etymology: '' }],
  ['exp', { signifier: 'CV', category: 'number', klass: 'numeral', signifiee: 'E', etymology: '' }],

  ['null', { signifier: 'CV', category: 'number/special', klass: 'numeral', signifiee: 'null', etymology: '' }],
  ['min', { signifier: 'CV', category: 'number/special', klass: 'numeral', signifiee: 'minimum', etymology: '' }],
  ['max', { signifier: 'CV', category: 'number/special', klass: 'numeral', signifiee: 'maximum, every', etymology: '' }],

  ['at_most', { signifier: 'CV', category: 'number/relation', klass: 'numeral', signifiee: '≤', etymology: '' }],
  ['less', { signifier: 'CV', category: 'number/relation', klass: 'numeral', signifiee: '<', etymology: '' }],

  ['aleph0', { signifier: 'CV', category: 'number/infinity', klass: 'numeral', signifiee: 'countably infinite', etymology: '' }],
  ['aleph1', { signifier: 'CV', category: 'number/infinity', klass: 'numeral', signifiee: 'uncountably infinite', etymology: '' }],

  ['tau', { signifier: 'CV', category: 'number/constant', klass: 'numeral', signifiee: 'τ=6.283+ε', etymology: '' }],
  ['napier', { signifier: 'CV', category: 'number/constant', klass: 'numeral', signifiee: 'e=2.718+ε', etymology: '' }],

  ['low', { signifier: 'CV', category: 'number/subjective', klass: 'numeral', signifiee: '=PASSIVE MORE NORMAL', etymology: '' }],
  ['normal', { signifier: 'CV', category: 'number/subjective', klass: 'numeral', signifiee: 'normal', etymology: '' }],
  ['high', { signifier: 'CV', category: 'number/subjective', klass: 'numeral', signifiee: '=MORE NORMAL', etymology: '' }],

  ['decrease', { signifier: 'CV', category: 'number/subjective', klass: 'numeral', signifiee: '', etymology: '' }],
  ['increase', { signifier: 'CV', category: 'number/subjective', klass: 'numeral', signifiee: '', etymology: '' }],

  ['plus', { signifier: 'CV', category: 'number/operation', klass: 'numeral', signifiee: '+', etymology: '' }],
  ['minus', { signifier: 'CV', category: 'number/operation', klass: 'numeral', signifiee: '-', etymology: '' }],
  ['multiply', { signifier: 'CV', category: 'number/operation', klass: 'numeral', signifiee: '*', etymology: '' }],
  ['divide', { signifier: 'CV', category: 'number/operation', klass: 'numeral', signifiee: '/', etymology: '' }],
  ['modulo', { signifier: 'CV', category: 'number/operation', klass: 'numeral', signifiee: '%', etymology: '' }],
  ['power', { signifier: 'CV', category: 'number/operation', klass: 'numeral', signifiee: '^', etymology: '' }],
  ['logarithm', { signifier: 'CV', category: 'number/operation', klass: 'numeral', signifiee: 'log', etymology: '' }],

  ['ordinal', { signifier: 'CV', category: '', klass: 'noun/number', signifiee: '', etymology: '' }],

  ['not', { signifier: 'CV', category: '', klass: '', signifiee: '', etymology: '' }],
  ['and', { signifier: 'CV', category: '', klass: '', signifiee: '', etymology: '' }],
  ['or', { signifier: 'CV', category: '', klass: '', signifiee: '', etymology: '' }],
  ['imply', { signifier: 'CV', category: '', klass: '', signifiee: '', etymology: '' }],

  ['back', { signifier: 'CV', category: '', klass: 'verb', signifiee: 'S is converse phenomenon of O', etymology: '' }],

  ['_language', { signifier: 'CVCV', category: '', klass: 'verb', signifiee: 'S is this language', etymology: '' }],

  ['have', { signifier: 'CVCV', category: '', klass: 'verb', signifiee: 'S have O', etymology: '' }],
  ['take', { signifier: 'CVCV', category: '', klass: 'verb', signifiee: 'S take O', etymology: '' }],

  ['below', { signifier: 'CVCV', category: 'position', klass: 'verb', signifiee: 'S is under O', etymology: '' }],
  ['behind', { signifier: 'CVCV', category: 'position', klass: 'verb', signifiee: 'S is behind O', etymology: '' }],
  ['left', { signifier: 'CVCV', category: 'position', klass: 'verb', signifiee: 'S is in left of O', etymology: '' }],
  ['before', { signifier: 'CVCV', category: 'position', klass: 'verb', signifiee: 'S is before O', etymology: '' }],
  ['in', { signifier: 'CVCV', category: 'position', klass: 'verb', signifiee: 'S is in O', etymology: '' }],
  ['together', { signifier: 'CVCV', category: 'position', klass: 'verb', signifiee: 'S is together with O', etymology: '' }],

  ['far', { signifier: 'CVCV', category: 'position/advanced', klass: 'verb', signifiee: 'S is far from O', etymology: '' }],
  ['cross', { signifier: 'CVCV', category: 'position/advanced', klass: 'verb', signifiee: 'S cross O', etymology: '' }],
  ['orthogonal', { signifier: 'CVCV', category: 'position/advanced', klass: 'verb', signifiee: 'S is orthogonal to O', etymology: '' }],
  ['parallel', { signifier: 'CVCV', category: 'position/advanced', klass: 'verb', signifiee: 'S is parallel to O', etymology: '' }],

  ['big', { signifier: 'macwn', category: 'volume', klass: 'verb', signifiee: 'S is big', etymology: 'magnī' }],
  ['long', { signifier: 'CVCV', category: 'volume', klass: 'verb', signifiee: 'S is long', etymology: '	longī' }],
  ['thick', { signifier: 'CVCV', category: 'volume', klass: 'verb', signifiee: 'S is thick', etymology: '' }],
  ['wide', { signifier: 'CVCV', category: 'volume', klass: 'verb', signifiee: 'S is wide', etymology: '' }],

  ['point', { signifier: 'CVCV', category: 'mathematics', klass: 'verb', signifiee: 'S is point', etymology: '' }],
  ['line', { signifier: 'CVCV', category: 'mathematics', klass: 'verb', signifiee: 'S is line', etymology: '' }],
  ['plane', { signifier: 'CVCV', category: 'mathematics', klass: 'verb', signifiee: 'S is plane', etymology: '' }],
  ['polygon', { signifier: 'CVCV', category: 'mathematics', klass: 'verb', signifiee: 'S is polygon', etymology: '' }],
  ['sharp', { signifier: 'CVCV', category: 'mathematics', klass: 'verb', signifiee: 'S is angle', etymology: '' }],
  ['centre', { signifier: 'CVCV', category: 'mathematics', klass: 'verb', signifiee: 'S is centrer of B', etymology: '' }],
  ['interval', { signifier: 'CVCV', category: 'mathematics', klass: 'verb', signifiee: 'S is range', etymology: '' }],
  ['function', { signifier: 'CVCV', category: 'mathematics', klass: 'verb', signifiee: 'S is function', etymology: '' }],

  ['space', { signifier: 'CVCV', category: 'physics', klass: 'verb', signifiee: 'S is space', etymology: '' }],
  ['time', { signifier: 'CVCV', category: 'physics', klass: 'verb', signifiee: 'S is time', etymology: '' }],
  ['wave', { signifier: 'CVCV', category: 'physics', klass: 'verb', signifiee: 'S is wave', etymology: '' }],
  ['particle', { signifier: 'CVCV', category: 'physics', klass: 'verb', signifiee: 'S is particle', etymology: '' }],
  ['light', { signifier: 'ruk', category: 'physics', klass: 'verb', signifiee: 'S is light', etymology: 'lucis' }],
  ['sound', { signifier: 'son', category: 'physics', klass: 'verb', signifiee: 'S is sound', etymology: 'soni' }],
  ['reflect', { signifier: 'CVCV', category: 'physics', klass: 'verb', signifiee: 'S reflect B', etymology: '' }],

  ['electron', { signifier: 'CVCV', category: 'physics/particle', klass: 'verb', signifiee: 'S is electron', etymology: '' }],
  ['atom', { signifier: 'CVCV', category: 'physics/particle', klass: 'verb', signifiee: 'S is atom', etymology: '' }],
  ['molecule', { signifier: 'CVCV', category: 'physics/particle', klass: 'verb', signifiee: 'S is molecule', etymology: '' }],

  ['solid', { signifier: 'CVCV', category: 'physics/state', klass: 'verb', signifiee: 'Sは固體', etymology: '' }],
  ['liquid', { signifier: 'CVCV', category: 'physics/state', klass: 'verb', signifiee: 'Sは液體', etymology: '' }],
  ['gas', { signifier: 'CVCV', category: 'physics/state', klass: 'verb', signifiee: 'Sは氣體', etymology: '' }],
  ['plasma', { signifier: 'CVCV', category: 'physics/state', klass: 'verb', signifiee: 'Sはplasma', etymology: '' }],

  ['water', { signifier: 'CVCV', category: 'chemistry', klass: 'verb', signifiee: 'Sは水', etymology: '' }],
  ['salt', { signifier: 'CVCV', category: 'chemistry', klass: 'verb', signifiee: 'Sは鹽', etymology: '' }],
  ['oil', { signifier: 'CVCV', category: 'chemistry', klass: 'verb', signifiee: 'Sは油脂', etymology: '' }],
  ['metal', { signifier: 'CVCV', category: 'chemistry', klass: 'verb', signifiee: 'Sは金属', etymology: '' }],

  ['colour', { signifier: 'koros', category: 'colour', klass: 'verb', signifiee: 'S show color O', etymology: 'colōŗis' }],
  ['bright', { signifier: 'CVCV', category: 'colour', klass: 'verb', signifiee: 'S is bright', etymology: '' }],
  ['colourful', { signifier: 'CVCV', category: 'colour', klass: 'verb', signifiee: 'S has saturation', etymology: '' }],
  ['hue', { signifier: 'CVCV', category: 'colour', klass: 'verb', signifiee: 'S has hue O', etymology: '' }],
  ['red', { signifier: 'ruver', category: 'colour', klass: 'verb', signifiee: 'S is red', etymology: 'rubrī' }],
  ['orange', { signifier: 'CVCV', category: 'colour', klass: 'verb', signifiee: 'S is orange', etymology: '' }],
  ['yellow', { signifier: 'CVCV', category: 'colour', klass: 'verb', signifiee: 'S is yellow', etymology: '' }],
  ['green', { signifier: 'CVCV', category: 'colour', klass: 'verb', signifiee: 'S is green', etymology: '' }],
  ['blue', { signifier: 'hazur', category: 'colour', klass: 'verb', signifiee: 'S is blue', etymology: 'azuriī' }],
  ['purple', { signifier: 'CVCV', category: 'colour', klass: 'verb', signifiee: 'S is purple', etymology: '' }],

  ['sun', { signifier: 'sur', category: 'space', klass: 'verb', signifiee: 'Sは恒星', etymology: 'sōlis' }],

  ['land', { signifier: 'ter', category: 'geography', klass: 'verb', signifiee: 'S is land', etymology: 'terrae' }],
  ['sky', { signifier: 'ker', category: 'geography', klass: 'verb', signifiee: 'S is sky', etymology: 'caelī' }],
  ['mountain', { signifier: 'mont', category: 'geography', klass: 'verb', signifiee: 'S is mountain', etymology: 'montis' }],
  ['sea', { signifier: 'mar', category: 'geography', klass: 'verb', signifiee: 'S is sea', etymology: 'maris' }],
  ['lake', { signifier: 'CVCV', category: 'geography', klass: 'verb', signifiee: 'S is lake', etymology: '' }],
  ['river', { signifier: 'CVCV', category: 'geography', klass: 'verb', signifiee: 'S is river', etymology: '' }],

  ['male', { signifier: 'mas', category: 'sex', klass: 'verb', signifiee: 'S is male', etymology: 'maŗis' }],
  ['female', { signifier: 'CVCV', category: 'sex', klass: 'verb', signifiee: 'S is female', etymology: 'fēminae' }],
  ['copulate', { signifier: 'CVCV', category: 'sex', klass: 'verb', signifiee: 'S copulate O', etymology: '' }],

  ['human', { signifier: 'homin', category: 'creature', klass: 'verb', signifiee: 'S is human', etymology: 'hominis' }],
  ['animal', { signifier: 'CVCV', category: 'creature', klass: 'verb', signifiee: 'S is animal', etymology: '' }],
  ['plant', { signifier: 'CVCV', category: 'creature', klass: 'verb', signifiee: 'S is plant', etymology: '' }],

  ['part', { signifier: 'CVCV', category: '', klass: 'verb', signifiee: 'S is part of O', etymology: '' }],

  ['hair', { signifier: 'CVCV', category: 'body/head', klass: 'verb', signifiee: 'DER is hair of FROM', etymology: '' }],
  ['brain', { signifier: 'CVCV', category: 'body/head', klass: 'verb', signifiee: 'DER is brain of FROM', etymology: '' }],
  ['eye', { signifier: 'CVCV', category: 'body/head', klass: 'verb', signifiee: 'DER is eye of FROM', etymology: '' }],
  ['ear', { signifier: 'CVCV', category: 'body/head', klass: 'verb', signifiee: 'DER is ear of FROM', etymology: '' }],
  ['nose', { signifier: 'CVCV', category: 'body/head', klass: 'verb', signifiee: 'DER is nose of FROM', etymology: '' }],
  ['mouth', { signifier: 'CVCV', category: 'body/head', klass: 'verb', signifiee: 'DER is mouth of FROM', etymology: '' }],
  ['tooth', { signifier: 'CVCV', category: 'body/head', klass: 'verb', signifiee: 'DER is tooth of FROM', etymology: '' }],
  ['tongue', { signifier: 'CVCV', category: 'body/head', klass: 'verb', signifiee: 'DER is tongue of FROM', etymology: '' }],
  ['throat', { signifier: 'CVCV', category: 'body/head', klass: 'verb', signifiee: 'DER is throat of FROM', etymology: '' }],

  ['horn', { signifier: 'CVCV', category: 'body/head', klass: 'verb', signifiee: 'DER is horn of FROM', etymology: '' }],

  ['heart', { signifier: 'CVCV', category: 'body/organ', klass: 'verb', signifiee: 'DER is heart of FROM', etymology: '' }],
  ['lung', { signifier: 'CVCV', category: 'body/organ', klass: 'verb', signifiee: 'DER is lung of FROM', etymology: '' }],
  ['gut', { signifier: 'CVCV', category: 'body/organ', klass: 'verb', signifiee: 'DER is gut of FROM', etymology: '' }],

  ['trunk', { signifier: 'CVCV', category: 'body/trunk', klass: 'verb', signifiee: 'DER is trunk of FROM', etymology: '' }],
  ['tail', { signifier: 'CVCV', category: 'body/trunk', klass: 'verb', signifiee: 'DER is tail of FROM', etymology: '' }],
  ['ass', { signifier: 'CVCV', category: 'body/trunk', klass: 'verb', signifiee: 'DER is hip of FROM', etymology: '' }],
  ['penis', { signifier: 'CVCV', category: 'body/trunk', klass: 'verb', signifiee: 'S have penis or clitoris O', etymology: '' }],
  ['womb', { signifier: 'CVCV', category: 'body/trunk', klass: 'verb', signifiee: 'DER is womb of FROM', etymology: '' }],
  ['nipple', { signifier: 'CVCV', category: 'body/trunk', klass: 'verb', signifiee: 'DER is nipple of FROM', etymology: '' }],

  ['limb', { signifier: 'CVCV', category: 'body/limb', klass: 'verb', signifiee: 'DER is limb or branch or wing of FROM', etymology: '' }],
  ['hand', { signifier: 'CVCV', category: 'body/limb', klass: 'verb', signifiee: 'DER is hand or foot of FROM', etymology: '' }],
  ['finger', { signifier: 'CVCV', category: 'body/limb', klass: 'verb', signifiee: 'DER is finger of FROM', etymology: '' }],
  ['nail', { signifier: 'CVCV', category: 'body/limb', klass: 'verb', signifiee: 'DER is nail of FROM', etymology: '' }],

  ['nerve', { signifier: 'CVCV', category: 'body/whole', klass: 'verb', signifiee: 'DER is nerve of FROM', etymology: '' }],
  ['muscle', { signifier: 'CVCV', category: 'body/whole', klass: 'verb', signifiee: 'DER is flesh of FROM', etymology: '' }],
  ['bone', { signifier: 'CVCV', category: 'body/whole', klass: 'verb', signifiee: 'DER is bone of FROM', etymology: '' }],
  ['skin', { signifier: 'CVCV', category: 'body/whole', klass: 'verb', signifiee: 'DER is skin of FROM', etymology: '' }],

  ['fruit', { signifier: 'CVCV', category: 'body/plant', klass: 'verb', signifiee: 'DER is fruit of FROM', etymology: '' }],
  ['root', { signifier: 'CVCV', category: 'body/plant', klass: 'verb', signifiee: 'DER is root of FROM', etymology: '' }],

  ['eat', { signifier: 'CVCV', category: 'physiology', klass: 'verb', signifiee: 'S eat O', etymology: '' }],
  ['digest', { signifier: 'CVCV', category: 'physiology', klass: 'verb', signifiee: 'S digest O', etymology: '' }],
  ['excrete', { signifier: 'CVCV', category: 'physiology', klass: 'verb', signifiee: 'S excrete O', etymology: '' }],

  ['sense', { signifier: 'CVCV', category: 'sensation', klass: 'verb', signifiee: 'DER feel DEN', etymology: '' }],
  ['hear', { signifier: 'CVCV', category: 'sensation', klass: 'verb', signifiee: 'DER hear DEN', etymology: '' }],
  ['see', { signifier: 'CVCV', category: 'sensation', klass: 'verb', signifiee: 'DER see DEN', etymology: '' }],
  ['taste', { signifier: 'CVCV', category: 'sensation', klass: 'verb', signifiee: 'DER taste DEN', etymology: '' }],
  ['smell', { signifier: 'CVCV', category: 'sensation', klass: 'verb', signifiee: 'DER smell DEN', etymology: '' }],
  ['touch', { signifier: 'CVCV', category: 'sensation', klass: 'verb', signifiee: 'DER feel touch of DEN', etymology: '' }],
  ['hurt', { signifier: 'CVCV', category: 'sensation', klass: 'verb', signifiee: 'DER is hurt by DEN', etymology: '' }],

  ['smile', { signifier: 'CVCV', category: 'facial', klass: 'verb', signifiee: 'S smile', etymology: '' }],
  ['laugh', { signifier: 'CVCV', category: 'facial', klass: 'verb', signifiee: 'S laugh', etymology: '' }],
  ['frown', { signifier: 'CVCV', category: 'facial', klass: 'verb', signifiee: 'S frown', etymology: '' }],
  ['cry', { signifier: 'CVCV', category: 'facial', klass: 'verb', signifiee: 'S cry', etymology: '' }],

  ['happy', { signifier: 'CVCV', category: 'emotion', klass: 'verb', signifiee: 'SはOを嬉しむ.', etymology: '' }],
  ['want', { signifier: 'CVCV', category: 'emotion', klass: 'verb', signifiee: 'S want O', etymology: '' }],
  ['amaze', { signifier: 'CVCV', category: 'emotion', klass: 'verb', signifiee: 'S is surprised at O. low:bore.', etymology: '' }],
  ['fear', { signifier: 'CVCV', category: 'emotion', klass: 'verb', signifiee: 'S fear O', etymology: '' }],
  ['anger', { signifier: 'CVCV', category: 'emotion', klass: 'verb', signifiee: 'S is angry for O', etymology: '' }],
  ['enjoy', { signifier: 'CVCV', category: 'emotion', klass: 'verb', signifiee: 'S enjoy O. negative:suffer.', etymology: '' }],
  ['respect', { signifier: 'CVCV', category: 'emotion', klass: 'verb', signifiee: 'S respect O. low:despise.', etymology: '' }],
  ['pride', { signifier: 'CVCV', category: 'emotion', klass: 'verb', signifiee: 'S is proud of O. low:ashamed.', etymology: '' }],

  ['think', { signifier: 'CVCV', category: 'intellectual', klass: 'verb', signifiee: 'S think O', etymology: '' }],
  ['know', { signifier: 'CVCV', category: 'intellectual', klass: 'verb', signifiee: 'S know O', etymology: '' }],
  ['understand', { signifier: 'CVCV', category: 'intellectual', klass: 'verb', signifiee: 'S understand O', etymology: '' }],
  ['assume', { signifier: 'CVCV', category: 'intellectual', klass: 'verb', signifiee: 'S assume O', etymology: '' }],
  ['plan', { signifier: 'CVCV', category: 'intellectual', klass: 'verb', signifiee: 'S plan O', etymology: '' }],
  ['expect', { signifier: 'CVCV', category: 'intellectual', klass: 'verb', signifiee: 'S expect O', etymology: '' }],
  ['hope', { signifier: 'CVCV', category: 'intellectual', klass: 'verb', signifiee: 'S hope O', etymology: '' }],
  ['agree', { signifier: 'CVCV', category: 'intellectual', klass: 'verb', signifiee: 'S agree with O', etymology: '' }],
  ['deduce', { signifier: 'CVCV', category: 'intellectual', klass: 'verb', signifiee: 'S deduce O', etymology: '' }],
  ['aim', { signifier: 'CVCV', category: 'intellectual', klass: 'verb', signifiee: 'S aim O', etymology: '' }],

  ['true', { signifier: 'ver', category: 'language', klass: 'verb', signifiee: 'Sは眞である', etymology: 'vērī' }],
  ['speak', { signifier: 'dik', category: 'language', klass: 'verb', signifiee: 'SはOを言ふ', etymology: 'dicō' }],
  ['write', { signifier: 'CVCV', category: 'language', klass: 'verb', signifiee: 'SはOを出力する', etymology: '' }],
  ['mean', { signifier: 'CVCV', category: 'language', klass: 'verb', signifiee: 'SはOを意味する', etymology: '' }],

  ['declare', { signifier: 'CVCV', category: 'activity', klass: 'verb', signifiee: 'SはOを宣言する', etymology: '宣る' }],
  ['ask', { signifier: 'CVCV', category: 'activity', klass: 'verb', signifiee: 'SはOを問ふ', etymology: '' }],
  ['apologise', { signifier: 'CVCV', category: 'activity', klass: 'verb', signifiee: 'Sは事象Oを謝る', etymology: '' }],
  ['forgive', { signifier: 'CVCV', category: 'activity', klass: 'verb', signifiee: 'Sは事象Oを許す', etymology: '' }],
  ['deceive', { signifier: 'CVCV', category: 'activity', klass: 'verb', signifiee: 'SはOであると騙す', etymology: '' }],

  ['greet', { signifier: 'CVCV', category: 'activity', klass: 'verb', signifiee: 'SはOに挨拶する', etymology: '' }],
  ['fight', { signifier: 'CVCV', category: 'activity', klass: 'verb', signifiee: 'SはOに抗ふ', etymology: '' }],

  ['play', { signifier: 'CVCV', category: 'culture', klass: 'verb', signifiee: 'S play O', etymology: '' }],
  ['dance', { signifier: 'CVCV', category: 'culture', klass: 'verb', signifiee: 'S dance O', etymology: '' }],
  ['music', { signifier: 'CVCV', category: 'culture', klass: 'verb', signifiee: 'S musically play O', etymology: '' }],
  ['intercourse', { signifier: 'CVCV', category: 'culture', klass: 'verb', signifiee: 'S have intercourse with O', etymology: '' }],

  ['building', { signifier: 'CVCV', category: 'civilisation', klass: 'verb', signifiee: 'S is building', etymology: '' }],
  ['town', { signifier: 'CVCV', category: 'civilisation', klass: 'verb', signifiee: 'S is town or city', etymology: '' }],
  ['nation', { signifier: 'CVCV', category: 'civilisation', klass: 'verb', signifiee: 'S is nation', etymology: '' }],
  ['group', { signifier: 'CVCV', category: 'civilisation', klass: 'verb', signifiee: 'S is group or organisation', etymology: '' }],

  ['world', { signifier: 'mVCV', category: '', klass: 'verb', signifiee: 'S is world', etymology: 'mundī' }],
  ['person', { signifier: 'hVCV', category: '', klass: 'verb', signifiee: 'S is person', etymology: '' }],
  ['live', { signifier: 'vVCV', category: '', klass: 'verb', signifiee: 'S is alive', etymology: '' }],
  ['wake', { signifier: 'CVCV', category: '', klass: 'verb', signifiee: 'S is awake', etymology: '' }],
  ['old', { signifier: 'CVCV', category: '', klass: 'verb', signifiee: 'S is old', etymology: '' }],
  ['rot', { signifier: 'CVCV', category: '', klass: 'verb', signifiee: 'S is rotten', etymology: '' }],
  ['health', { signifier: 'CVCV', category: '', klass: 'verb', signifiee: 'S is healthy', etymology: '' }],
  ['temporary', { signifier: 'CVCV', category: '', klass: 'verb', signifiee: 'S is temporal', etymology: '' }],
  ['unit', { signifier: 'CVCV', category: '', klass: 'verb', signifiee: 'S is unit', etymology: '' }],

  ['cause', { signifier: 'CVCV', category: '', klass: 'verb', signifiee: 'S cause O', etymology: '' }],
  ['influence', { signifier: 'CVCV', category: '', klass: 'verb', signifiee: 'S influence O', etymology: '' }],
  ['home', { signifier: 'CVCV', category: '', klass: 'verb', signifiee: 'S is based on O', etymology: '' }],
  ['consume', { signifier: 'CVCV', category: '', klass: 'verb', signifiee: 'S consume O', etymology: '' }],
  ['differ', { signifier: 'CVCV', category: '', klass: 'verb', signifiee: 'S differ from O', etymology: '' }],
  ['value', { signifier: 'CVCV', category: '', klass: 'verb', signifiee: 'S is worth O', etymology: '' }],
  ['make', { signifier: 'CVCV', category: '', klass: 'verb', signifiee: 'S make O', etymology: '' }],
  ['leave', { signifier: 'CVCV', category: '', klass: 'verb', signifiee: 'S leave O', etymology: '' }],
  ['rotate', { signifier: 'CVCV', category: '', klass: 'verb', signifiee: 'S rotate around O', etymology: '' }],
  ['use', { signifier: 'CVCV', category: '', klass: 'verb', signifiee: 'S is for purpose O', etymology: '' }],
  ['model', { signifier: 'CVCV', category: '', klass: 'verb', signifiee: 'S simulate O', etymology: '' }],
  ['imitate', { signifier: 'CVCV', category: '', klass: 'verb', signifiee: 'S imitate O', etymology: '' }],
  ['status', { signifier: 'CVCV', category: '', klass: 'verb', signifiee: 'S is state of O', etymology: '' }],
  ['manner', { signifier: 'CVCV', category: '', klass: 'verb', signifiee: 'S is manner of O', etymology: '' }],
  ['system', { signifier: 'CVCV', category: '', klass: 'verb', signifiee: 'S is system', etymology: '' }],
])

export const dictCompound = {
  read: { signifier: { alias: 'WRITE-BACK' }, category: 'language', klass: 'verb', signifiee: 'S read O', etymology: '' },

  planet: { signifier: { alias: 'FOLLOW-STAR' }, category: 'space', klass: 'verb', signifiee: 'SはOを公轉する恆星', etymology: '' },
  moon: { signifier: { alias: 'FOLLOW-FOLLOW-STAR' }, category: 'space', klass: 'verb', signifiee: 'SはOを公轉する衞星', etymology: '' },

  meter: { signifier: { alias: `UNIT-${letters.get('m').name}` }, category: 'SI unit', klass: 'verb', signifiee: 'S is 1m', etymology: '' },
  second: { signifier: { alias: `UNIT-${letters.get('s').name}` }, category: 'SI unit', klass: 'verb', signifiee: 'S is 1s', etymology: '' },
  kilogram: { signifier: { alias: `UNIT-${letters.get('g').name}${letters.get('g').name}` }, category: 'SI unit', klass: 'verb', signifiee: 'S is 1kg', etymology: '' },
  ampere: { signifier: { alias: `UNIT-${letters.get('a').name}` }, category: 'SI unit', klass: 'verb', signifiee: 'S is 1A', etymology: '' },
  kelvin: { signifier: { alias: `UNIT-${letters.get('k').name}` }, category: 'SI unit', klass: 'verb', signifiee: 'S is 1K', etymology: '' },
  candela: { signifier: { alias: `UNIT-${letters.get('c').name}${letters.get('d').name}` }, category: 'SI unit', klass: 'verb', signifiee: 's is 1cd', etymology: '' },
}