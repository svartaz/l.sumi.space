import { Page } from "../components/page";
import { useState } from 'react';
import { translate } from "../lib/dict";
import { ipa } from "../lib/phoneme";

export default () => {
  const defaultValue = 'KNOW THOU _LANGUAGE'
  const defaultTranslated = translate(defaultValue)
  const [state, setState] = useState({
    translated: defaultTranslated,
    phonetic: ipa(defaultTranslated)
  })

  const onChange = s => {
    const translated = translate(s)
    setState({
      translated,
      phonetic: ipa(translated)
    })
  }

  return <Page title='變換'>
    <div className='textareas'>
      <textarea defaultValue={defaultValue} onChange={event => onChange(event.target.value)}></textarea>
      <textarea value={state.translated} readOnly></textarea>
      <textarea value={state.phonetic} readOnly></textarea>
    </div>
  </Page >
}