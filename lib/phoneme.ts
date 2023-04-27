export const cs = [...'gcqhkxjndtszlmbpfv'];

export const vs = [...'weaouiâôy'];

export const isAllowed = (x: string) =>
  !new RegExp([
    `[^${[...cs, ...vs].join('')}]`,
    '[gkxj][iâôy]',
    '[dtszl]â',
    '[sz]i',
    '(..)\\1',
  ]
    .join('|')
    .replace(/C/g, cs.join(''))
    .replace(/V/g, vs.join(''))
  )
    .test(x)