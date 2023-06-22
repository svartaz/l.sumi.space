import { replaceAll } from "./util"

export const cs = [...'cqh' + 'jx' + 'ndtsr' + 'mbpfv'];
export const vs = [...'iyueøoa' + ''];

export const isAllowed = (x: string) =>
  !new RegExp([
    `[^${[...cs, ...vs].join('')}]`,
    `[${vs.join('')}][qktpdb][${vs.join('')}]`,
    's[iy]',
    '[jkx][yø]',
  ]
    .join('|')
  )
    .test(x)

export const ipa = s => s
  .replace(new RegExp(`[${[...cs, ...vs].join('')}]+`, 'g'), word => word
    .toUpperCase()

    .replace(/(?<=[JKX])U/g, 'Y')
    .replace(/(?<=[JKX])O/g, 'Ø')

    .replace(/N/g, 'n')
    .replace(/M/g, 'm')

    .replace(/^C/g, 'g')
    .replace(/C/g, 'ɣ')
    .replace(/^J/g, 'dʑ')
    .replace(/J/g, 'ʑ')
    .replace(/D/g, 'd')
    .replace(/B/g, 'b')

    .replace(/Q/g, 'k')
    .replace(/K/g, 'tɕ')
    .replace(/T/g, 't')
    .replace(/P/g, 'p')

    .replace(/H/g, 'h')
    .replace(/H(?=[IY])/g, 'ç')
    .replace(/X/g, 'ɕ')
    .replace(/S/g, 's')
    .replace(/F/g, 'f')

    .replace(/Z/g, 'z')
    .replace(/V/g, 'v')

    .replace(/R/g, 'ɾ')

    .replace(/I/g, 'i')
    .replace(/Y/g, 'y')
    .replace(/U/g, 'u')

    .replace(/E/g, 'e')
    .replace(/A/g, 'a')
    .replace(/Ø/g, 'ø')
    .replace(/O/g, 'o')

    .replace(/(?<=^.+[iyueøao])(?=.+[iyueøao])/g, 'ꜛ')
  )

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