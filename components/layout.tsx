import Link from 'next/link'
import Image from 'next/image'

export default ({ children }) => <>
  <main>
    <div style={{ textAlign: 'center', marginBottom: '1em' }}>
      <Link href='/'><img src='/sumi.svg' alt='sumi icon' width='48px' /></Link>
    </div>
    {children}
  </main>
</>