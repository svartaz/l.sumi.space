import { Section } from '../components/section';
import { dict, ipa, notAllowed, translate } from '../lib/dict';
import { Page } from '../components/page';

console.debug(translate(`I DO CAUSE THAT THOU _LANGUAGE DO KNOW`))

const TranslateRuby = props => <span>{
  props.datum
    .split(/(?<=[_A-Z'])(?=[^_A-Z'])|(?<=[^_A-Z'])(?=[_A-Z'])/g)
    .map(it => /[_A-Z']+/.test(it) ? <ruby>{translate(it)}<rt>{it}</rt></ruby> : it)
}</span>

const Sample = props => <table>
  <tr>
    <th style={{ textAlign: 'center' }}>type</th>
    <th>Eng</th>
    <th>{(dict._language as any).name}</th>
    <th>IPA</th>
  </tr>
  {
    props.data.map(([type, eng, l]) =>
      <tr>
        <td>{type}</td>
        <td>{eng}</td>
        <td><TranslateRuby datum={l} /></td>
        <td>[{ipa(translate(l))}]</td>
      </tr>
    )
  }
</table>

export default () => <Page title='grammar'>
  <Section title='grapheme'>
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

  <Section title='accent'>
    <p>in every word, the 0st syllable is low and the rest is high.</p>
    <Sample data={[
      ['noun', 'this language', '_LANGUAGE']
    ]} />
  </Section>

  <Section title='word order'>
    <p>basic word order is SOV.</p>
    <Sample data={[
      [
        'noun',
        'i',
        'I',
      ],
      [
        'noun',
        'thou',
        'THOU',
      ],
      [
        'verb',
        'S sees O',
        'DO SEE',
      ],
      [
        'sentence',
        'i see thee',
        'I THOU DO SEE',
      ],
    ]} />

    <p>SVO is also possible.</p>
    <Sample data={[
      [
        'sentence',
        'i see thee',
        'I DO SEE THOU',
      ],
    ]} />

    <p>ye can omit S and O.</p>
    <Sample data={[
      [
        'sentence',
        '_ sees _',
        'DO SEE',
      ],
      [
        'sentence',
        'i see _',
        'I DO SEE',
      ],
      [
        'sentence',
        '_ sees thee',
        'DO SEE THOU',
      ],
    ]} />

    <p>ye can use <dfn>postnouns</dfn> to change the word order.</p>
    <Sample data={[
      [
        'postnoun',
        '(subject)',
        'DER',
      ],
      [
        'postnoun',
        '(object)',
        'DEN',
      ],
      [
        'verb',
        'i see _',
        'DO SEE I DER',
      ],
      [
        'verb',
        'i see thee',
        'THOU DEN I DO SEE',
      ],
    ]} />
  </Section>

  <Section title='noun'>
    <p>ye get agent nouns by removing ‹{translate('DO')}› from verbs.</p>
    <Sample data={[
      [
        'noun',
        'seer',
        'SEE',
      ],
      [
        'sentence',
        'the seer is me',
        'SEE DO I',
      ],
    ]} />

  </Section>

  <Section title='clause'>
    <p>some words turn a sentence into a noun, which is a <dfn>clause</dfn>.
      <br />in clauses, verbs must come last.</p>
    <Sample data={[
      [
        'noun',
        'what sees me',
        'WHAT I DO SEE',
      ],
      [
        'noun',
        'what i see',
        'WHAT DEN I DO SEE',
      ],
      [
        'sentence',
        'what i see is thee',
        'WHAT DEN I DO SEE DO THOU',
      ],
      [
        'noun',
        'that i see thee',
        'THAT I THOU DO SEE',
      ],
      [
        'sentence',
        'i like to see thee',
        'I DO GLAD THAT I THOU DO SEE',
      ],
    ]} />
  </Section>

  <Section title='quote'>
    <p>quote a string and make it a noun.</p>
    <Sample data={[
      [
        'verb',
        'S is string ‘sumi’ meaning O',
        'DO _QUOTE sumi _QUOTE',
      ],
      [
        'sentence',
        '‘sumi’ means me',
        'DO _QUOTE sumi _QUOTE I',
      ],
    ]} />
  </Section>

  <Section title='postnouns'>
    <p>ye can add nouns related to the event which ye describe.</p>
    <Sample data={[
      [
        'verb',
        'S gives O',
        'DO GIVE',
      ],
      [
        'verb',
        'S is it',
        'DO HE',
      ],
      [
        'sentence',
        'i give it in relation to thee',
        'I HE THOU ABOUT DO GIVE',
      ],
    ]} />

    <p>ye may turn nouns into postnouns.</p>
    <Sample data={[
      [
        'sentence',
        'i give it to thee (= with thee being a taker)',
        'I HE THOU AS TAKE DO GIVE',
      ],
    ]} />
  </Section>

  <Section title='number'>
    <p>put numbers before nouns.
      <br />by default, the number of a noun is at least 1</p>
    <Sample data={[
      [
        'verb',
        'S is person',
        'DO PERSON',
      ],
      [
        'noun',
        'no person',
        'ZERO PERSON',
      ],
      [
        'noun',
        'some person(s)',
        'ONE AT_MOST PERSON',
      ],
      [
        'noun',
        'every person',
        'MAX PERSON',
      ],
    ]} />
  </Section >

  <Section title='degree'>
    <p>some nouns take a <em>degree</em>.</p>

    <Sample data={[
      [
        'verb',
        'S is long',
        'DO LONG',
      ],
      [
        'verb',
        'S is long',
        'DO SO_MUCH HIGH LONG',
      ],
      [
        'verb',
        'S has normal length',
        'DO SO_MUCH NORMAL LONG',
      ],
      [
        'verb',
        'S is short',
        'DO SO_MUCH LOW LONG',
      ],
      [
        'verb',
        'S is not long',
        'DO SO_MUCH LESS NORMAL LONG',
      ],
    ]}></Sample>
  </Section>

  <Section title='miscellaneous'>
    <Sample data={[
      [
        'sentence',
        'i am in japan',
        `I [DER] DO IN _QUOTE 'J' 'P' _QUOTE OF NATION [DEN]`,
      ],
      [
        'sentence',
        'colorless green ideas sleep furiously',
        'SO_MUCH ZERO COLOUR AND GREEN AND _SWAP THINK DO FIGURATIVE ANGER OF NOT WAKE',
      ],
    ]} />
  </Section >
</Page >
