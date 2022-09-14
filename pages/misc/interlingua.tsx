import { NextSeo } from 'next-seo'

const title = '改良interlingua'
export default () => <>
  <NextSeo title={title} />

  <h2>{title}</h2>

  <a href='https://www.ohchr.org/en/human-rights/universal-declaration/translations/interlingua'>UDHR</a>

  <table>
    <tr>
      <td style={{ whiteSpace: 'pre-wrap' }}>
        DECLARATION UNIVERSAL DEL DERECTOS HUMAN<br />
        Articulo 1<br />
        <br />
        Tote le esseres human nasce libere e equal in dignitate e in derectos.<br />
        Illes es dotate de ration e de conscientia e debe ager le unes verso le alteres in un spirito de fraternitate.
      </td>
      <td style={{ whiteSpace: 'pre-wrap' }}>
        DEKLARATION UNIVERSAL DEL DEREKTOS HUMAN<br />
        artikulo 1<br />
        <br />
        tote esseres human naske libere e ekual in dignitate e in derektos.<br />
        les es dotate de ration e de konskientia e debe ager unes verso alteres in spirito de fraternitate.
      </td>
    </tr>
  </table>
</>