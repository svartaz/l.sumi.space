import { NextSeo } from 'next-seo'

const title = 'toy language'
export default () => <>
  <NextSeo title={title} />
  <h2>{title}</h2>

  <div className='tables'>

    <table>
      <tr className='v-parent'>
        <th></th>
        <th>硬口蓋</th>
        <th>軟口蓋</th>
        <th>齒</th>
        <th>脣</th>
      </tr>
      <tr>
        <th>鼻</th>
        <td>g</td>
        <td></td>
        <td>n</td>
        <td>m</td>
      </tr>
      <tr>
        <th>有聲破裂</th>
        <td>c</td>
        <td></td>
        <td>d</td>
        <td>b</td>
      </tr>
      <tr>
        <th>無聲破裂</th>
        <td>k</td>
        <td></td>
        <td>t</td>
        <td>p</td>
      </tr>
      <tr>
        <th>無聲破擦</th>
        <td></td>
        <td></td>
        <td>ț</td>
        <td></td>
      </tr>
      <tr>
        <th>無聲摩擦</th>
        <td>x</td>
        <td>š</td>
        <td>s</td>
        <td>f</td>
      </tr>
      <tr>
        <th>有聲摩擦</th>
        <td>h</td>
        <td>j</td>
        <td>z</td>
        <td>v</td>
      </tr>
      <tr>
        <th>有聲摩擦</th>
        <td></td>
        <td></td>
        <td>l</td>
        <td></td>
      </tr>
    </table>

    <table>
      <tr className='v-parent'>
        <th></th>
        <th>前舌非円唇</th>
        <th>前舌円唇</th>
        <th>中舌</th>
        <th>後舌</th>
      </tr>
      <tr>
        <th>有聲摩擦</th>
        <td>i</td>
        <td>y</td>
        <td>w</td>
        <td>u</td>
      </tr>

      <tr>
        <th>無聲摩擦</th>
        <td>e</td>
        <td>ø</td>
        <td></td>
        <td>o</td>
      </tr>

      <tr>
        <th>無聲破擦</th>
        <td></td>
        <td></td>
        <td>a</td>
        <td></td>
      </tr>
    </table>
  </div>
</>