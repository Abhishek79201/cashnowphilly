'use client'

import Image from 'next/image'

export default function FiveReasonsSection() {
  const scrollToHero = () => {
    const heroSection = document.getElementById('hero')
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 border-b border-[#f0f1ff]">
      <div className="section-container px-4">
        <h2 className="text-primary text-[28px] sm:text-[36px] md:text-[44px] font-bold text-center mb-10 sm:mb-12 md:mb-16 leading-tight">
          5 Reasons To Work With Us:
        </h2>

        <div className="flex flex-wrap justify-center gap-x-8 sm:gap-x-12 md:gap-x-16 gap-y-8 sm:gap-y-10 md:gap-y-12 mb-12 sm:mb-14 md:mb-16">
          <div className="text-center w-full sm:w-[45%] md:w-[28%]">
            <div className="relative w-[75px] sm:w-[85px] md:w-[92px] h-[65px] sm:h-[85px] md:h-[105px] mx-auto mb-4 sm:mb-5 md:mb-6">
              <Image
                src="/assets/no-repairs-icon.png"
                alt="No Repairs"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-primary text-[17px] sm:text-[18px] font-bold mb-2">
              NO REPAIRS
            </h3>
            <p className="text-gray text-[15px] sm:text-[16px] font-normal leading-relaxed max-w-[280px] mx-auto">
              We&apos;ll gladly buy your home &quot;as-is,&quot; in any condition.
            </p>
          </div>

          <div className="text-center w-full sm:w-[45%] md:w-[28%]">
            <div className="relative w-[72px] sm:w-[80px] md:w-[88px] h-[65px] sm:h-[85px] md:h-[105px] mx-auto mb-4 sm:mb-5 md:mb-6">
              <Image
                src="/assets/work-icon.png"
                alt="We Do All The Work"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-primary text-[17px] sm:text-[18px] font-bold mb-2">
              WE DO ALL THE WORK
            </h3>
            <p className="text-gray text-[15px] sm:text-[16px] font-normal leading-relaxed max-w-[280px] mx-auto">
              From paperwork to legal complexities, we&apos;ve got it all covered
            </p>
          </div>

          <div className="text-center w-full sm:w-[45%] md:w-[28%]">
            <div className="relative w-[110px] sm:w-[125px] md:w-[144px] h-[65px] sm:h-[85px] md:h-[105px] mx-auto mb-4 sm:mb-5 md:mb-6">
              <Image
                src="/assets/no-fees-icon.png"
                alt="No Fees"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-primary text-[17px] sm:text-[18px] font-bold mb-2">
              NO FEES
            </h3>
            <p className="text-gray text-[15px] sm:text-[16px] font-normal leading-relaxed max-w-[280px] mx-auto">
              You won&apos;t pay fees or commissions of any kind.
            </p>
          </div>

          <div className="text-center w-full sm:w-[45%] md:w-[28%]">
            <div className="relative w-[70px] sm:w-[78px] md:w-[88px] h-[65px] sm:h-[85px] md:h-[105px] mx-auto mb-4 sm:mb-5 md:mb-6">
              <Image
                src="/assets/close-fast-icon.png"
                alt="Close Fast"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-primary text-[17px] sm:text-[18px] font-bold mb-2">
              CLOSE FAST
            </h3>
            <p className="text-gray text-[15px] sm:text-[16px] font-normal leading-relaxed max-w-[280px] mx-auto">
              Close on your schedule and get cash in as little as a week.
            </p>
          </div>

          <div className="text-center w-full sm:w-[45%] md:w-[28%]">
            <div className="relative w-[78px] sm:w-[88px] md:w-[100px] h-[65px] sm:h-[85px] md:h-[105px] mx-auto mb-4 sm:mb-5 md:mb-6">
              <Image
                src="/assets/local-service-icon.png"
                alt="Local Service"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-primary text-[17px] sm:text-[18px] font-bold mb-2">
              LOCAL SERVICE
            </h3>
            <p className="text-gray text-[15px] sm:text-[16px] font-normal leading-relaxed max-w-[280px] mx-auto">
              We live where you do, and the service we provide shows it.
            </p>
          </div>
        </div>

        <div className="text-center">
          <button 
            onClick={scrollToHero}
            className="btn-primary inline-block text-[16px] sm:text-[18px] md:text-[20px] px-6 sm:px-8 py-3 cursor-pointer"
          >
            Get My Cash Offer
          </button>
        </div>
      </div>
    </section>
  )
}