const letters = {
  a: ['𐌰', 'а'],
  b: ['𐌱', 'б'],
  c: ['𐌲', 'г'],
  d: ['𐌳', 'д'],
  e: ['𐌴', 'є'],
  f: ['𐍆', 'ф'],
  g: ['𐍁', 'ң'],
  i: ['𐌹', 'і'],
  j: ['𐌾', 'ж'],
  k: ['𐌺', 'ш'],
  l: ['𐌻', 'л'],
  m: ['𐌼', 'м'],
  n: ['𐌽', 'н'],
  o: ['𐍉', 'о'],
  p: ['𐍀', 'п'],
  q: ['𐌵', 'к'],
  r: ['𐍂', 'р'],
  s: ['𐍃', 'с'],
  t: ['𐍄', 'т'],
  u: ['𐌿', 'у'],
  v: ['𐍅', 'в'],
  x: ['𐍇', 'х'],
  z: ['𐌶', 'з'],
};

export const transliterate = s =>
  Object.entries(letters).reduce((acc, [latn, v]) =>
    acc.replace(new RegExp(latn, 'g'), v[0]),
    s
  );
