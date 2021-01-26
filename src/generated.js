export default function generated() {
  const a = extractValueB(document.querySelector('#A'))
  const b = extractValueB(document.querySelector('#B'))
  const c = liftB((a, b) => Number(a) + Number(b), a, b);
  insertDomB( c , 'C' );
  }