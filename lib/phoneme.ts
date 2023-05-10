export const cs = [...'gckx' + 'ndtszr' + 'šj' + 'mbpfv'];
export const vs = [...'iywueøao' + ''];//íýẃúéǿáó

export const isAllowed = (x: string) =>
  !new RegExp([
    `[^${[...cs, ...vs].join('')}]`,
    '[sz][ií]',
    '[šj][wuaoẃúáó]',
    '[íýẃúéǿáó].[íýẃúéǿáó]',
    '[íýẃúéǿáó][gnm]',
  ]
    .join('|')
  )
    .test(x)
