import { Feed, Hero } from '@components'

const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
      <Hero />
      <Feed />
    </section>
  )
}

export default Home
