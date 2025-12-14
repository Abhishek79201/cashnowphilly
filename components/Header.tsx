import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER
  const phoneDisplay = process.env.NEXT_PUBLIC_PHONE_DISPLAY

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-[899] shadow-sm">
      <div className="section-container h-[65px] md:h-[100px] flex items-center justify-between">
        <div className="relative w-[118px] h-[73px] md:w-[273px] md:h-[184px]">
          <Image
            src="/assets/headerLogo.png"
            alt="Cash Now Philly Logo"
            fill
            className="object-contain w-full h-full"
            priority
          />
        </div>
        <Link
          href={`tel:+1${phoneNumber}`}
          className="btn-primary text-sm md:text-[18px] py-1 px-3 md:px-6 flex items-center justify-center"
        >
          Call Now! {phoneDisplay}
        </Link>
      </div>
    </header>
  )
}

