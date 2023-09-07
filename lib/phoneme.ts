
import { replaceAll } from "./util"

export const cs = [...'gcqx' + 'kj' + 'ndtszlr' + 'mbpfv'];
export const vs = [...'aiueo'];

export const isAllowed = (x: string) =>
  !new RegExp([
    `[^${[...cs, ...vs].join('')}]`,
    '(?<!^)b',
    //`[${vs.join('')}][dbqtp][${vs.join('')}]`,
    `[${vs.join('')}]{2}`,
    `[${cs.join('')}]{3}`,

    //`[iu][${cs.join('')}](?![${vs.join('')}])`,
  ]
    .join('|')
  )
    .test(x)

export const ipa = s => s
  .replace(new RegExp(`[${[...cs, ...vs].join('')}]+`, 'g'), word => word
    .toUpperCase()

    .replace(/(?<![AIUEO])$/g, 'ǝ')

    .replace(/(?<=[JKŠ])O/g, 'ø')
    .replace(/(?<=[JKŠ])U/g, 'y')
    .replace(/(?<=[NDTSZ])I/g, 'ɨ')

    .replace(/G/g, 'ŋ')
    .replace(/N/g, 'n')
    .replace(/M/g, 'm')

    .replace(/^C/g, 'g')
    .replace(/C/g, 'ɣ')
    .replace(/D/g, 'd')
    .replace(/B/g, 'b')

    .replace(/Q/g, 'k')
    .replace(/K/g, 'tɕ')
    .replace(/T/g, 't')
    .replace(/P/g, 'p')

    .replace(/X/g, 'h')
    .replace(/X(?=[IY])/g, 'ç')
    .replace(/Š/g, 'ɕ')
    .replace(/S/g, 's')
    .replace(/F/g, 'f')

    .replace(/J/g, 'ʑ')
    .replace(/Z/g, 'z')
    .replace(/V/g, 'v')

    .replace(/R/g, 'ɾ')
    .replace(/L/g, 'l')

    .replace(/I/g, 'i')
    .replace(/E/g, 'e')
    .replace(/A/g, 'a')
    .replace(/O/g, 'o')
    .replace(/U/g, 'u')
    .replace(/Â/g, 'ja')
    .replace(/Ø/g, 'ø')
    .replace(/Y/g, 'y')

    .replace(/(?<=^[^ieaouøyǝ]*[ieaouøyǝ])(?!$)/, 'ꜛ')
  )

export const la = s =>
  replaceAll(s, [
    [/i/g, 'e'],
    [/e/g, 'e'],
    [/a/g, 'a'],
    [/o/g, 'o'],
    [/u/g, 'u'],
    [/ī/g, 'i'],
    [/ē/g, 'i'],
    [/ā/g, 'a'],
    [/ō/g, 'o'],
    [/ū/g, 'y'],
    [/y/g, 'ø'],
    [/ȳ/g, 'y'],

    [/ae/g, 'e'],
    [/au/g, 'o'],
    [/eu/g, 'ø'],
    [/oe/g, 'ø'],

    [/h/g, 'x'],
  ]);

export const ja = s =>
  replaceAll(s, [
    [/^あ/g, 'ra'],
    [/^い/g, 'ri'],
    [/^う/g, 'ru'],
    [/^え/g, 're'],
    [/^お/g, 'ro'],

    [/あ/g, 'ha'],
    [/い/g, 'ji'],
    [/う/g, 'vu'],
    [/え/g, 'je'],
    [/お/g, 'vo'],

    [/か/g, 'qa'],
    [/き/g, 'qi'],
    [/く/g, 'qu'],
    [/け/g, 'qe'],
    [/こ/g, 'qo'],
    [/が/g, 'ca'],
    [/ぎ/g, 'ci'],
    [/ぐ/g, 'cu'],
    [/げ/g, 'ce'],
    [/ご/g, 'co'],

    [/さ/g, 'xa'],
    [/し/g, 'xi'],
    [/す/g, 'xu'],
    [/せ/g, 'xe'],
    [/そ/g, 'xo'],
    [/ざ/g, 'ja'],
    [/じ/g, 'ji'],
    [/ず/g, 'ju'],
    [/ぜ/g, 'je'],
    [/ぞ/g, 'jo'],

    [/た/g, 'ta'],
    [/ち/g, 'ti'],
    [/つ/g, 'tu'],
    [/て/g, 'te'],
    [/と/g, 'to'],
    [/だ/g, 'da'],
    [/ぢ/g, 'di'],
    [/づ/g, 'du'],
    [/で/g, 'de'],
    [/ど/g, 'do'],

    [/な/g, 'na'],
    [/に/g, 'ni'],
    [/ぬ/g, 'nu'],
    [/ね/g, 'ne'],
    [/の/g, 'no'],

    [/は/g, 'pa'],
    [/ひ/g, 'pi'],
    [/ふ/g, 'pu'],
    [/へ/g, 'pe'],
    [/ほ/g, 'po'],
    [/ば/g, 'ba'],
    [/び/g, 'bi'],
    [/ぶ/g, 'bu'],
    [/べ/g, 'be'],
    [/ぼ/g, 'bo'],

    [/ま/g, 'ma'],
    [/み/g, 'mi'],
    [/む/g, 'mu'],
    [/め/g, 'me'],
    [/も/g, 'mo'],

    [/や/g, 'he'],
    [/𛀁/g, 'he'],
    [/ゆ/g, 'hy'],
    [/よ/g, 'hø'],

    [/ら/g, 'ra'],
    [/り/g, 'ri'],
    [/る/g, 'ru'],
    [/れ/g, 're'],
    [/ろ/g, 'ro'],

    [/わ/g, 'va'],
    [/ゐ/g, 'vi'],
    [/ゑ/g, 've'],
    [/を/g, 'vo'],

    [/(?<!^)d/g, 'r'],
    [/(?<!^)b/g, 'v'],
    [/(?<!^)q/g, 'h'],
    [/(?<!^)t/g, 's'],
    [/(?<!^)p/g, 'f'],
  ])