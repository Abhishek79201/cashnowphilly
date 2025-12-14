import Image from 'next/image'
import Link from 'next/link'

export default function ThreeStepsSection() {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20">
      <div className="section-container">
        <h2 className="text-primary text-[28px] sm:text-[36px] md:text-[48px] font-bold text-center mb-3 sm:mb-4 leading-tight px-4">
          SELL YOUR HOME IN 3 SIMPLE STEPS
        </h2>
        <p className="text-gray text-[16px] sm:text-[18px] md:text-[20px] text-center mb-12 sm:mb-14 md:mb-16 px-4">
          Hundreds of people just like you already have!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-14 md:mb-16 px-4">
          <div className="text-center">
            <div className="relative w-[90px] sm:w-[100px] md:w-[109px] h-[80px] sm:h-[88px] md:h-[96px] mx-auto mb-4 sm:mb-5 md:mb-6">
              <Image
                src="/assets/calendar-icon.png"
                alt="Schedule Consultation"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-primary text-[18px] sm:text-[19px] md:text-[20px] font-bold mb-3 sm:mb-4">
              1. SCHEDULE A<br />CONSULTATION
            </h3>
            <p className="text-gray text-[15px] sm:text-[16px] md:text-[18px] font-light leading-relaxed max-w-[320px] mx-auto">
              We&apos;ll review your goals, current situation and go over all possible solutions with you.
            </p>
          </div>

          <div className="text-center">
            <div className="relative w-[70px] sm:w-[77px] md:w-[83px] h-[90px] sm:w-[100px] md:h-[109px] mx-auto mb-4 sm:mb-5 md:mb-6">
              <Image
                src="/assets/document-icon.png"
                alt="Get Fair Offer"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-primary text-[18px] sm:text-[19px] md:text-[20px] font-bold mb-3 sm:mb-4">
              2. GET A FAIR<br />OFFER
            </h3>
            <p className="text-gray text-[15px] sm:text-[16px] md:text-[18px] font-light leading-relaxed max-w-[320px] mx-auto">
              If a direct sale proves to be the best choice, we will provide you with a no-obligation offer.
            </p>
          </div>

          <div className="text-center">
            <div className="relative w-[88px] sm:w-[97px] md:w-[106px] h-[73px] sm:h-[80px] md:h-[88px] mx-auto mb-4 sm:mb-5 md:mb-6">
              <Image
                src="/assets/money-icon.png"
                alt="Get Paid"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-primary text-[18px] sm:text-[19px] md:text-[20px] font-bold mb-3 sm:mb-4">
              3. GET PAID VIA<br />TITLE COMPANY
            </h3>
            <p className="text-gray text-[15px] sm:text-[16px] md:text-[18px] font-light leading-relaxed max-w-[320px] mx-auto">
              If you accept our offer, we will pay you cash with a reputable, local title company.
            </p>
          </div>
        </div>

        <div className="text-center px-4">
          <Link href="#hero" className="btn-primary inline-block text-[16px] sm:text-[17px] md:text-[18px] px-6 sm:px-8 py-3">
            GET MY CASH OFFER
          </Link>
        </div>
      </div>
    </section>
  )
}
