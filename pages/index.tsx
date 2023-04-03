import { useState } from 'react';
import { Section } from '../components/section';
import { dict, ipa, notAllowed, translate } from '../lib/dict';

console.debug(translate(`I DO CAUSE THAT THOU _LANGUAGE DO KNOW`))

const TranslateRuby = props => <span>{
  props.datum
    .split(/(?<=[_A-Z])(?=[^_A-Z])|(?<=[^_A-Z])(?=[_A-Z])/g)
    .map(it => /[_A-Z]+/.test(it) ? <ruby>{translate(it)}<rt>{it}</rt></ruby> : it)
}</span>

const Sample = props => <table>
  <tr>
    <th>type</th>
    <th>Ja</th>
    <th>{(dict._language as any).name}</th>
    <th>IPA</th>
  </tr>
  {
    props.data.map(([klass, ja, l]) => {
      const t = translate(l)
      return <tr>
        <td>{klass}</td>
        <td>{ja}</td>
        <td><TranslateRuby datum={l} /></td>
        <td>[{ipa(t)}]</td>
      </tr>
    })
  }</table>

export default () => {
  const defaultCode = 'I _LANGUAGE DO KNOW'
  const [translated, setTranslated] = useState(translate(defaultCode))

  return <>
    <p>under construction.
      <br />i wrote this article in <em>english without articles</em>.</p>
    <Section title='revision'>
      <table>
        <tr>
          <th>verison</th>
          <th>content</th>
        </tr>
        <tr>
          <td>2023XXXX</td>
          <td>initialisation</td>
        </tr>
      </table>
    </Section>

    <Section title='graphemes & phonemes'>
      <div className='tables'>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>velar</th>
              <th>retroflex</th>
              <th>dental</th>
              <th>labial</th>
            </tr>
          </thead>
          <tr>
            <th>nasal</th>
            <td>g [ŋ]</td>
            <td></td>
            <td>n</td>
            <td>m</td>
          </tr>
          <tr>
            <th>voiced plosive</th>
            <td>c [g,ɣ]</td>
            <td></td>
            <td>d</td>
            <td>b</td>
          </tr>
          <tr>
            <th>unvoiced plosive</th>
            <td>q [k]</td>
            <td>k [tɕ,tʂ]</td>
            <td>t</td>
            <td>p</td>
          </tr>
          <tr>
            <th>unvoiced fricative</th>
            <td>h [h,x]</td>
            <td>x [ɕ,ʂ]</td>
            <td>s</td>
            <td>f</td>
          </tr>
          <tr>
            <th>voiced fricative</th>
            <td></td>
            <td>j [ʑ,ʐ]</td>
            <td>z</td>
            <td>v [v,β,w]</td>
          </tr>
          <tr>
            <th>approximant</th>
            <td></td>
            <td>l [ɾ,l]</td>
            <td></td>
            <td></td>
          </tr>
        </table>

        <table>
          <thead>
            <tr>
              <th></th>
              <th>front unround</th>
              <th>front round</th>
              <th></th>
              <th>back</th>
            </tr>
          </thead>
          <tr>
            <th>closed</th>
            <td>i</td>
            <td>y</td>
            <td>w [ɨ,ə]</td>
            <td>u</td>
          </tr>

          <tr>
            <th></th>
            <td>e</td>
            <td>ø</td>
            <td></td>
            <td>o</td>
          </tr>

          <tr>
            <th>open</th>
            <td></td>
            <td></td>
            <td>a</td>
            <td></td>
          </tr>
        </table>
      </div>

      <p>forbidden sequence</p>
      <ul>{
        notAllowed.map(x => <li>{x}</li>)
      }</ul>
    </Section>

    <Section title='syntax'>
      <p>any sentrence have <em>verb</em>.</p>
      <Sample data={[
        [
          'verb',
          'S is me',
          'DO I',
        ],
        [
          'verb',
          'S is true',
          'DO TRUE',
        ],
        [
          'verb',
          'S give O',
          'DO GIVE',
        ],
      ]} />

      <p>remove prefix <TranslateRuby datum='DO' /> from verb to get <em>noun</em>.</p>
      <Sample data={[
        [
          'noun',
          'i',
          'I',
        ],
        [
          'noun',
          'truth',
          'TRUE',
        ],
        [
          'noun',
          'giver',
          'GIVE',
        ],
      ]} />

      <p>order of words and <em>markers</em> tell <em>case</em> of noun in <em>sentence</em>.
        <br />without markers, noun before verb is <em>subject</em> and after verb is <em>object</em>.</p>

      <p>[…] is optional.</p>
      <Sample data={[
        [
          'sentence',
          '(someone) give (something)',
          'DO GIVE',
        ],
        [
          'sentence',
          'i give (something)',
          'I [DER] DO GIVE',
        ],
        [
          'sentence',
          'i give (something)',
          'DO GIVE I DER',
        ],
        [
          'sentence',
          '(someone) give truth',
          'DO GIVE TRUE [DEN]',
        ],
        [
          'sentence',
          '(someone) give truth',
          'TRUE DEN DO GIVE',
        ],
        [
          'sentence',
          'i give truth',
          'I [DER] TRUE [DEN] DO GIVE',
        ],
        [
          'sentence',
          'i give truth',
          'I [DER] DO GIVE TRUE [DEN]',
        ],
        [
          'sentence',
          'truth, i give',
          'TRUE DEN I [DER] DO GIVE',
        ],
        [
          'sentence',
          'truth, i give',
          'DO GIVE TRUE [DEN] I [DER]',
        ],
      ]} />

      <p>turn sentence into <em>clause</em> and use it as verb.
        <br />in clause, verb must come last.</p>
      <Sample data={[
        [
          'clause noun',
          'that which give true',
          'WHAT [DER] TRUE [DEN] DO GIVE',
        ],
        [
          'clause noun',
          'that which i give',
          'WHAT DEN I [DER] DO GIVE',
        ],
        [
          'sentence',
          'that which i give is truth',
          'WHAT DEN I [DER] DO GIVE DO TRUE',
        ],
        [
          'clause verb',
          'S is that (someone) give (something)',
          'DO THAT DO GIVE',
        ],
      ]} />

      <p>quote foreign word.</p>
      <Sample data={[
        [
          'verb',
          'S is string ‘sumi’ meaning O',
          'DO _QUOTE sumi [_QUOTE]',
        ],
        [
          'sentence',
          '‘sumi’ means me',
          'DO _QUOTE sumi _QUOTE I',
        ],
      ]} />


      <p>add noun which is neither S nor O.</p>
      <Sample data={[
        [
          'noun',
          'thou',
          'THOU',
        ],
        [
          'sentence',
          'related to thee, i give (something)',
          'I [DER] THOU ABOUT DO GIVE',
        ],
        [
          'sentence',
          'i give (something) to thee (= with thee being taker)',
          'I [DER] THOU AS TAKE DO GIVE',
        ],
      ]} />

      <p>(miscellaneous)</p>
      <Sample data={[
        [
          'sentence',
          'i am in japan',
          `I [DER] DO IN _QUOTE 'J' 'P' _QUOTE OF NATION [DEN]`,
        ],
        [
          'sentence',
          'colorless green ideas sleep furiously',
          `SO_MUCH ZERO COLOUR AND GREEN AND _SWAP THINK DO FIGURATIVE ANGER OF NOT WAKE`,
        ],
      ]} />
    </Section >

    <Section title='convert'>
      <div className='textareas'>
        <textarea defaultValue={defaultCode} onChange={event => setTranslated(translate(event.target.value))}></textarea>
        <textarea value={translated} readOnly></textarea>
      </div>
    </Section>

    <Section title='lexicon'>
      <table>
        <tr>
          <th></th>
          <th></th>
          <th>meaner</th>
          <th>IPA</th>
          <th>etymology</th>
          <th>type</th>
          <th>meant</th>
          <th>version</th>
        </tr>
        {Object.entries(dict).map(([k, { name, type, named, etymology, version }]: any, i) =>
          <tr key={i}>
            <th>{i}</th>
            <th>{k.toUpperCase()}</th>
            <td>{name}</td>
            <td>[{ipa(name)}]</td>
            <td>{etymology}</td>
            <td>{type}</td>
            <td>{named}</td>
            <td>{version}</td>
          </tr>
        )}
      </table>
    </Section>
  </>
}