import ReactDOM from 'react-dom'

type Props = {
  children: React.ReactNode
}

export default function ModalPortal({ children }: Props) {
  if (typeof window === 'undefined') {
    return null
  }

  const el = document.getElementById('modal')

  return ReactDOM.createPortal(children, el as Element)
}
