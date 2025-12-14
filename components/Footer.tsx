export default function Footer() {
  const phoneDisplay = process.env.NEXT_PUBLIC_PHONE_DISPLAY
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#2C3743] py-8 md:py-8 mobile:py-4">
      <div className="section-container text-center">
        <p className="text-white font-roboto text-[16px] md:text-[16px] mobile:text-[13px] font-light mb-2">
          Have A Question? Call Now! | <strong>{phoneDisplay}</strong>
        </p>
        <p className="text-white font-roboto text-[16px] md:text-[16px] mobile:text-[13px] font-light">
          Copyright © {currentYear} All Rights Reserved
        </p>
      </div>
    </footer>
  )
}
