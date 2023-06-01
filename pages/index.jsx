
import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'


export default function HomePage() {

  return (
    <MainLayout>
        <h1>Home Page</h1>

        <title>Home - Jonathan</title>
        
        <h1 className="title">
          {/* Ir a <a href="/about">About</a> */}
          Ir a <Link href="/about">About</Link>
        </h1>

        <p className={'description'}>
          This is my website and it talks about me and I really like the programming{' '}
          <code className={'code'}>pages/index.js</code>
        </p>
    </MainLayout>
  )
}
