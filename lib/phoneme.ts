
export const cs = [...'gcqx' + 'kj' + 'ndtszlr' + 'mbpfv'];
export const vs = [...'aiueo'];

export const isAllowed = (x: string) =>
  [
    // defined alphabet only
    `[^${[...cs, ...vs].join('')}]`,

    // no repetition
    '(.)\\1',
    'V{2}',
    'C{3}',

    // word must contain vowel
    '^C+$',

    // word-final nasal is one
    '[gm]$',

    // no word-final or pre-consonant v
    'v(?!V)',

    // no affricate
    '[dt][szkj]',

    // no word-final i after dental
    //'[ndtszl]i$',

    // no difficult dental cluster
    '[ndt][rl]',

    'xu',
  ].every(re =>
    !new RegExp(re
      .replace(/C/g, `[${cs.join('')}]`)
      .replace(/V/g, `[${vs.join('')}]`)
    ).test(x)
  );

export const switchVoice = (letter: string) => {
  for (const [weak, strong] of [
    ['c', 'q'],
    ['c', 'x'],
    ['j', 'k'],
    ['d', 't'],
    ['z', 's'],
    ['b', 'p'],
    ['v', 'f'],
  ]) {
    if (weak == letter) return strong;
    else if (strong == letter) return weak;
  }

  return letter;
}

export const ipa = s => s
  .replace(new RegExp(`[${[...cs, ...vs].join('')}]+`, 'g'), word => word
    .toUpperCase()

    .replace(/^(?=[IEAOU])/g, 'ʔ')

    .replace(/G(?=[IE])/g, 'ɲ')
    .replace(/G/g, 'ŋ')
    .replace(/(?<=([IEAOU]))N$/g, '$1\u0303'.normalize('NFKD'))
    .replace(/N/g, 'n')
    .replace(/M/g, 'm')

    .replace(/C$/g, 'k')
    .replace(/D$/g, 't')
    .replace(/B$/g, 'p')

    .replace(/(?<=[IEAOU])C(?=[IEAOU])/g, 'ɣ')
    .replace(/C/g, 'g')
    .replace(/D/g, 'd')
    .replace(/B/g, 'b')

    .replace(/Q$/g, 'kʰ')
    .replace(/T$/g, 'tʰ')
    .replace(/P$/g, 'pʰ')

    .replace(/Q/g, 'k')
    .replace(/T/g, 't')
    .replace(/P/g, 'p')

    .replace(/X(?=I)|(?<=I)X(?![IEAOU])/g, 'ç')
    .replace(/X/g, 'h')
    .replace(/K/g, 'ɕ')
    .replace(/S/g, 's')
    .replace(/F/g, 'f')

    .replace(/J(?![IEAOU])/g, 'tɕ')
    .replace(/J/g, 'ʑ')
    .replace(/Z(?![IEAOU])/g, 'ts')
    .replace(/Z/g, 'z')
    .replace(/V/g, 'v')

    .replace(/R/g, 'ɾ')
    .replace(/L(?=[IEAOU])/g, 'l')
    .replace(/L/g, 'ɫ')

    .replace(/(?<=[nsz])I/g, 'ɪ')
    .replace(/(?<=[ɕʑ])O/g, 'ø')
    .replace(/(?<=[ɕʑ])U/g, 'y')

    .replace(/I/g, 'i')
    .replace(/E/g, 'e')
    .replace(/A/g, 'a')
    .replace(/O/g, 'o')
    .replace(/U/g, 'u') //ɯ
  );
