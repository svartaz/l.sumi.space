const dict = {
  初: 'sjo',
  夏: 'cà',

  近: 'cìn',
  代: 'dài',
  自: 'zì',
  由: 'iu',
  主: 'sjú',
  義: 'gì',
  者: 'sjá',

  同: 'dog',
  性: 'sèg',
  愛: 'ài',

  程: 'djag',
  序: 'zjó',
  員: 'vin',

  語: 'gó',
  學: 'cak',
  趣: 'sjù',
  味: 'mì',

  獨: 'dok',
  變: 'pèn',
  種: 'sjòg',
  表: 'péu',
  記: 'kì',
  助: 'zjò',
  動: 'dóg',
  詞: 'zi',
  漢: 'kàn',
  字: 'zì',
  試: 'sì',

  履: 'lí',
  修: 'siu',
  講: 'kóg',

  日: 'nit',
  的: 'tek',
  關: 'kuan',
  係: 'kèi',
  行: 'cjag',

  一: 'it',
  覧: 'lám',

  言: 'gen',
  母: 'mú',
  資: 'si',
  格: 'kak',
}

export const Ruby = props =>
  <ruby>{props.children}<rt>{props.rt}</rt></ruby>

export const Rubies = props => <>
  {[...props.children].map((k, i) =>
    k in dict ? <ruby key={i}>{k}<rt>{dict[k]}</rt></ruby> : k
  )}
</>
