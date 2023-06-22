import { Page } from '../components/page';
import { Section } from '../components/section';
import { translate } from '../lib/dict';
import style from "./style.module.sass";

export default () => <Page title='飜譯'>
  <Section title='林檎文'>
    <ol>
      {
        [
          'EAT I FRUIT (OF _QUOTE hapuru _QUOTE)',
          '_PAST EAT I FRUIT (OF _QUOTE hapuru _QUOTE)',
          '_WHILE EAT HE FRUIT (OF _QUOTE hapuru _QUOTE)',
          '_AFTER EAT HE (OF FEMALE) FRUIT (OF _QUOTE hapuru _QUOTE)',
          '_PAST _AFTER EAT HE (OF FEMALE) FRUIT (OF _QUOTE hapuru _QUOTE)',
          '…ToDo',
        ].map(code =>
          <li>{translate(code)}</li>
        )
      }
    </ol>
  </Section>


  <Section title='bani adam'>
    <div className={style.row}>
      <div style={{ whiteSpace: 'pre-line' }}>
        Shall I compare thee to a summer{"'"}s day?
        Thou art more lovely and more temperate:
        Rough winds do shake the darling buds of May,
        And summer{"'"}s lease hath all too short a date:
        Sometime too hot the eye of heaven shines,
        And often is his gold complexion dimmed,
        And every fair from fair sometime declines,
        By chance, or nature{"'"}s changing course untrimmed:
        But thy eternal summer shall not fade,
        Nor lose possession of that fair thou ow{"'"}st,
        Nor shall death brag thou wand{"'"}rest in his shade,
        When in eternal lines to time thou grow{"'"}st,
        So log as men can breathe or eyes can see,
        So long lives this, and this gives life to thee
      </div>
      <div style={{ whiteSpace: 'pre-line' }}>
      </div>
    </div>
  </Section>
</Page>