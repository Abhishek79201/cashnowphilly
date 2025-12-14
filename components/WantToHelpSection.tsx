'use client'

import Image from 'next/image'

export default function WantToHelpSection() {
  const scrollToHero = () => {
    const heroSection = document.getElementById('hero')
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="bg-gray-light py-12 sm:py-14 md:py-16 border-b border-[#f6f6ff]">
      <div className="section-container px-4">
        <h2 className="text-primary text-[32px] sm:text-[42px] md:text-[55px] font-bold text-center mb-3 sm:mb-4 leading-tight">
          WE WANT TO HELP!
        </h2>
        <div className="w-[150px] sm:w-[180px] md:w-[207px] h-[4px] sm:h-[4.5px] md:h-[5px] bg-accent rounded-full mx-auto mb-6 sm:mb-7 md:mb-8"></div>
        
        <p className="text-gray text-[15px] sm:text-[16px] md:text-[18px] text-center max-w-3xl mx-auto mb-12 sm:mb-14 md:mb-16 leading-relaxed px-2">
          Life is hard enough without having to worry about trying to sell your home. We&apos;ll do everything possible to make selling your home as convenient and stress-free as possible.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-14 md:mb-16">
          <div className="text-center">
            <div className="relative w-[120px] sm:w-[135px] md:w-[151px] h-[120px] sm:h-[135px] md:h-[150px] mx-auto mb-5 sm:mb-5 md:mb-6">
              <Image
                src="/assets/situation-icon.png"
                alt="For Any Situation"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-primary text-[20px] sm:text-[22px] md:text-[24px] font-bold mb-3 sm:mb-4">
              FOR ANY SITUATION
            </h3>
            <ul className="text-gray text-[15px] sm:text-[16px] md:text-[18px] font-light flex flex-col items-start justify-center gap-2 max-w-[250px] mx-auto">
              <li className="flex items-center justify-start pl-6 sm:pl-8 md:pl-10">
                <span className="text-accent mr-2 text-[18px] sm:text-[20px]">✓</span> Foreclosures
              </li>
              <li className="flex items-center justify-start pl-6 sm:pl-8 md:pl-10">
                <span className="text-accent mr-2 text-[18px] sm:text-[20px]">✓</span> Divorce
              </li>
              <li className="flex items-center justify-start pl-6 sm:pl-8 md:pl-10">
                <span className="text-accent mr-2 text-[18px] sm:text-[20px]">✓</span> Financial Struggles
              </li>
              <li className="flex items-center justify-start pl-6 sm:pl-8 md:pl-10">
                <span className="text-accent mr-2 text-[18px] sm:text-[20px]">✓</span> Relocation
              </li>
            </ul>
          </div>

          <div className="text-center">
            <div className="relative w-[120px] sm:w-[135px] md:w-[151px] h-[120px] sm:h-[135px] md:h-[150px] mx-auto mb-5 sm:mb-5 md:mb-6">
              <Image
                src="/assets/condition-icon.png"
                alt="In Any Condition"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-primary text-[20px] sm:text-[22px] md:text-[24px] font-bold mb-3 sm:mb-4">
              IN ANY CONDITION
            </h3>
            <ul className="text-gray text-[15px] sm:text-[16px] md:text-[18px] font-light flex flex-col items-start justify-center gap-2 max-w-[250px] mx-auto ">
              <li className="flex items-center justify-start pl-6 sm:pl-8 md:pl-10">
                <span className="text-accent mr-2 text-[18px] sm:text-[20px]">✓</span> Structural Damage
              </li>
              <li className="flex items-center justify-start pl-6 sm:pl-8 md:pl-10">
                <span className="text-accent mr-2 text-[18px] sm:text-[20px]">✓</span> Unfinished Interiors
              </li>
              <li className="flex items-center justify-start pl-6 sm:pl-8 md:pl-10">
                <span className="text-accent mr-2 text-[18px] sm:text-[20px]">✓</span> Hoarder Home
              </li>
              <li className="flex items-center justify-start pl-6 sm:pl-8 md:pl-10">
                <span className="text-accent mr-2 text-[18px] sm:text-[20px]">✓</span> Major Repairs Needed
              </li>
            </ul>
          </div>

          <div className="text-center">
            <div className="relative w-[120px] sm:w-[135px] md:w-[151px] h-[120px] sm:h-[135px] md:h-[150px] mx-auto mb-5 sm:mb-5 md:mb-6">
              <Image
                src="/assets/struggles-icon.png"
                alt="With Any Struggles"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-primary text-[20px] sm:text-[22px] md:text-[24px] font-bold mb-3 sm:mb-4">
              WITH ANY STRUGGLES
            </h3>
            <ul className="text-gray text-[15px] sm:text-[16px] md:text-[18px] font-light flex flex-col items-start justify-center gap-2 max-w-[300px] mx-auto">
              <li className="flex items-center justify-start pl-6 sm:pl-8 md:pl-10">
                <span className="text-accent mr-2 text-[18px] sm:text-[20px]">✓</span> Code Violations
              </li>
              <li className="flex items-center justify-start pl-6 sm:pl-8 md:pl-10">
                <span className="text-accent mr-2 text-[18px] sm:text-[20px]">✓</span> Low Equity
              </li>
              <li className="flex items-center justify-start pl-6 sm:pl-8 md:pl-10">
                <span className="text-accent mr-2 text-[18px] sm:text-[20px]">✓</span> Bad Tenants
              </li>
              <li className="flex items-center justify-start pl-6 sm:pl-8 md:pl-10">
                <span className="text-accent mr-2 text-[18px] sm:text-[20px]">✓</span> Late Mortgage Payments
              </li>
            </ul>
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
