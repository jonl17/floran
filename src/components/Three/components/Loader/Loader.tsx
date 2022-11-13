import { Html, useProgress } from '@react-three/drei'

const Loader = () => {
  const { progress } = useProgress()
  return (
    <Html className='text-secondary' center>
      Hleður {progress} %
    </Html>
  )
}

export default Loader
