import React from 'react'
import Three from '@components/Three'
import { useModal } from '@store/modal'

const Modal = () => {
  const { isOpen, setIsOpen } = useModal()

  if (!isOpen) return null

  return (
    <section className='fixed top-0 left-0 min-h-screen w-full z-50 three-canvas bg-primary/80'>
      <Three />
      <button
        onClick={() => setIsOpen(false)}
        className='absolute right-5 top-10'
      >
        <p>Loka</p>
      </button>
      <div className='absolute bottom-0 w-full px-5 py-10 max-w-3xl'>
        <h2>Túnfífill (Taraxacum officinale)</h2>
        <div>
          <p>
            Áður fyrr voru fíflablaðaseyði notað til andlitsþvotta í
            fegrunarskyni og ristuð rótin var að auki notuð í kaffibæti
            (Arnbjörg Linda Jóhannsdóttir 1998). Túnfífill hefur einnig gengið
            undir nöfnunum ætifífill, vallarfífill og húsfreyjuhrellir. Blöðin
            hafa og verið nefnd hrafnablöðkur (Ágúst H. Bjarnason 1994).
          </p>
        </div>
      </div>
    </section>
  )
}

export default Modal
