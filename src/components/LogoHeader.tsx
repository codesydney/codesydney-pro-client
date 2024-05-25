import logoImage from '../assets/code-sydney.png'

type Props = {
  logo?: string
  title?: string
  spinLogo?: boolean
}

export function LogoHeader(props: Props) {
  const { logo, title, spinLogo } = props
  return (
    <div className=" flex flex-col justify-center items-center gap-4">
      <img
        className={spinLogo ? 'motion-safe:animate-spin-slow' : ''}
        src={logo || logoImage}
        alt=""
      />
      <h1 className=" text-4xl font-semibold">{title || 'Your Title'}</h1>
    </div>
  )
}
