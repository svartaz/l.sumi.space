import { Page } from "../components/page";
import { useState } from 'react';
import { translate } from "../lib/dict";

export default () => {
  const defaultCode = 'I _LANGUAGE DO KNOW'
  const [translated, setTranslated] = useState(translate(defaultCode))

  return <Page title='converter'>
    <div className='textareas'>
      <textarea defaultValue={defaultCode} onChange={event => setTranslated(translate(event.target.value))}></textarea>
      <textarea value={translated} readOnly></textarea>
    </div>
  </Page>
}