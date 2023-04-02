import { Page, Section } from "../../../components/page";

export default () => <Page title='koine'>
  <Section title='article'>
    <table>
      <thead>
        <tr>
          <th></th>
          <th colSpan={4}>S</th>
          <th colSpan={4}>P</th>
        </tr>
        <tr>
          <th></th>
          <th>N</th>
          <th>A</th>
          <th>G</th>
          <th>D</th>
          <th>N</th>
          <th>A</th>
          <th>G</th>
          <th>D</th>
        </tr>
      </thead>
      <tr>
        <th>M</th>
        <td>ὁ</td>
        <td>τόν</td>
        <td rowSpan={2}>τοῦ</td>
        <td rowSpan={2}>τῷ</td>
        <td>οἱ</td>
        <td>τούς</td>
        <td rowSpan={3}>τῶν</td>
        <td rowSpan={2}>τοῖς</td>
      </tr>
      <tr>
        <th>N</th>
        <td colSpan={2}>τό</td>
        <td colSpan={2}>τά</td>
      </tr>
      <tr>
        <th>F</th>
        <td>ἡ</td>
        <td>τήν</td>
        <td>τῆς</td>
        <td>τῇ</td>
        <td>αἱ</td>
        <td>τᾱ́ς</td>
        <td>ταῖς</td>
      </tr>
    </table>

  </Section>

  <Section title='declension'>
    <table>
      <tr>
        <th></th>
        <th></th>
        <th colSpan={5}>S</th>
        <th colSpan={4}>P</th>
      </tr>
      <tr>
        <th></th>
        <th></th>
        <th>V</th>
        <th>N</th>
        <th>A</th>
        <th>G</th>
        <th>D</th>
        <th>N</th>
        <th>A</th>
        <th>G</th>
        <th>D</th>
      </tr>
      <tr>
        <th>η F</th>
        <td>φωνή</td>
        <td rowSpan={4}></td>
        <td>-η</td>
        <td>-ην</td>
        <td rowSpan={2}>-ης</td>
        <td rowSpan={2}>-ῃ</td>
        <td rowSpan={6}>-αι</td>
        <td rowSpan={6}>-ᾱς</td>
        <td rowSpan={9}>-ων</td>
        <td rowSpan={6}>-αις</td>
      </tr>
      <tr>
        <th>α-η F</th>
        <td>γλῶσσα</td>
        <td rowSpan={2}>-α</td>
        <td rowSpan={2}>-αν</td>
      </tr>
      <tr>
        <th>α-ᾱ F</th>
        <td>ἀλήθεια</td>
        <td rowSpan={2}>-ᾱς</td>
        <td rowSpan={3}>-ᾳ</td>

      </tr>
      <tr>
        <th>ᾱ F</th>
        <td>χώρᾱ</td>
        <td>-ᾱ</td>
        <td rowSpan={2}>-ᾱν</td>
      </tr>
      <tr>
        <th>ᾱς M</th>
        <td>νεᾱνίᾱς</td>
        <td>ᾱ</td>
        <td>-ᾱς</td>
        <td rowSpan={4}>-ου</td>
      </tr>
      <tr>
        <th>ης M</th>
        <td>ποιητής</td>
        <td>-α</td>
        <td>-ης</td>
        <td>-ην</td>
        <td>-ῃ</td>
      </tr>
      <tr>
        <th>ος M</th>
        <td>ἄνθρωπος</td>
        <td>-ε</td>
        <td>-ος</td>
        <td>-ον</td>
        <td rowSpan={2}>-ῳ</td>
        <td>-οι</td>
        <td>-ους</td>
        <td rowSpan={2}>-οις</td>
      </tr>
      <tr>
        <th>ον N</th>
        <td>δῶρον</td>
        <td></td>
        <td colSpan={2}>-ον</td>
        <td colSpan={2}>-α</td>
      </tr>
      <tr>
        <th>ς</th>
        <td>κόραξ</td>
        <td></td>
        <td>-ς</td>
        <td>-α</td>
        <td>-ος</td>
        <td>-ι</td>
        <td>-ες</td>
        <td>-ας</td>
        <td>-σι</td>
      </tr>
    </table>
  </Section>

  <Section title='conjugation'>
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Aug</th>
          <th>Redup</th>
          <th>stem</th>
          <th>Aspect</th>
          <th colSpan={6}>person</th>
        </tr>
      </thead>
      <tr>
        <th>present</th>
        <td></td>
        <td></td>
        <td>λῡ</td>
        <td></td>

        <td rowSpan={2}>ω</td>
        <td rowSpan={2}>εις</td>
        <td rowSpan={2}>ει</td>
        <td rowSpan={2}>ομεν</td>
        <td rowSpan={2}>ετε</td>
        <td rowSpan={2}>ουσι(ν)</td>
      </tr>
      <tr>
        <th>future</th>
        <td></td>
        <td></td>
        <td>λῡ</td>
        <td>σ</td>
      </tr>
      <tr>
        <th>Sub present</th>
        <td></td>
        <td></td>
        <td>λῡ</td>
        <td></td>

        <td rowSpan={2}>ω</td>
        <td rowSpan={2}>ῃς</td>
        <td rowSpan={2}>ῃ</td>
        <td rowSpan={2}>ωμεν</td>
        <td rowSpan={2}>ητε</td>
        <td rowSpan={2}>ωσι(ν)</td>
      </tr>
      <tr>
        <th>Sub aorist</th>
        <td></td>
        <td></td>
        <td>λῡ</td>
        <td>σ</td>
      </tr>
      <tr>
        <th>imperfect</th>
        <td>ἐ</td>
        <td></td>
        <td>λῡ</td>
        <td></td>

        <td>ον</td>
        <td>ες</td>
        <td>ε(ν)</td>
        <td>ομεν</td>
        <td>ετε</td>
        <td>ον</td>
      </tr>

      <tr>
        <th>aorist</th>
        <td>ἐ</td>
        <td></td>
        <td>λῡ</td>
        <td>σ</td>

        <td>α</td>
        <td>ας</td>
        <td>ε(ν)</td>
        <td>αμεν</td>
        <td>ατε</td>
        <td>αν</td>
      </tr>

      <tr>
        <th>perfect</th>
        <td></td>
        <td>λε</td>
        <td>λυ</td>
        <td>κ</td>

        <td>α</td>
        <td>ας</td>
        <td>ε(ν)</td>
        <td>αμεν</td>
        <td>ατε</td>
        <td>ᾱσι(ν)</td>
      </tr>
      <tr>
        <th>pluperfect</th>
        <td>ἐ</td>
        <td>λε</td>
        <td>λυ</td>
        <td>κ</td>

        <td>η</td>
        <td>ης</td>
        <td>ει(ν)</td>
        <td>εμεν</td>
        <td>ετε</td>
        <td>εσαν</td>
      </tr>
    </table>
  </Section>
</Page >