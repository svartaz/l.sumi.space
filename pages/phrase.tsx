import { Lang } from '../components/lang';
import { Page } from '../components/page';
import { translate } from '../lib/dict';

export default () => <Page title='文言集'>
  <table>
    <tr>
      <td>やあ</td>
      <td><Lang>{translate('GREET (_N I)')}</Lang></td>
    </tr>
    <tr>
      <td>我は sumi</td>
      <td><Lang>{translate('_QUOTE sumi, _A I')}</Lang></td>
    </tr>
    <tr>
      <td>我は日本 (JP) 出身</td>
      <td><Lang>{translate('FROM _N NATION _QUOTE jp, _A I')}</Lang></td>
    </tr>
    <tr>
      <td>我は日本語 (JA) を話す</td>
      <td><Lang>{translate('SPEAK _QUOTE ja, _N I')}</Lang></td>
    </tr>
    <tr>
      <td>汝は私が友人に成り得るか?</td>
      <td><Lang>{translate('_ASK MAY HABITUALLY LOVE _N THOU _A I')}</Lang></td>
    </tr>
  </table>
</Page>