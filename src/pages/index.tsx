import Modal from '@components/Modal'
import { useLoader } from '@react-three/fiber'
import { useModal } from '@store/modal'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  const { setIsOpen } = useModal()
  return (
    <div className='px-5 py-10 h-screen w-full bg-green-gradient relative'>
      <h1 className='mb-3'>Flora Islandicus</h1>
      <button onClick={() => setIsOpen(true)} className='button'>
        <p>Túnfífill</p>
      </button>

      <Modal />
    </div>
  )
}

export default Home
