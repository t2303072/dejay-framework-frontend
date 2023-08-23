'use client'

import React, { ReactNode, useEffect } from 'react'
import { twMerge } from 'tailwind-merge'

interface ModalProps {
  title?: string
  children: ReactNode
  className?: string
  open: boolean
}

function Modal({ title, children, className, open }: ModalProps) {
  useEffect(() => {
    if (open) {
      const app = document.getElementById('app')
      if (app) {
        app.style.filter = 'blur(10px)'
      }
    } else {
      const app = document.getElementById('app')
      if (app) {
        app.style.filter = 'blur(0)'
      }
    }
  }, [open])

  return (
    open && (
      <div className=" fixed w-screen h-screen text-center inset-0 flex justify-center z-40 bg-opacity-60 bg-white">
        <div className="relative w-full max-w-md max-h-full">
          <div
            className={twMerge(
              'drop-shadow-lg p-6 fixed left-[45%] top-[40%] ml-[-10%] bg-white rounded z-50 border border-slate-300',
              className,
            )}
          >
            {title && <h5>{title}</h5>}
            {children}
          </div>
        </div>
      </div>
    )
  )
}

export default Modal
