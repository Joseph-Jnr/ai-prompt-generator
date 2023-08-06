import { Nav } from '@components'
import '@styles/globals.css'

export const metadata = {
  title: 'Promptopia',
  description: 'Share AI prompts',
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <div className='main'>
          <div className='gradient'></div>
        </div>

        <main className='app'>
          <Nav />
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout
