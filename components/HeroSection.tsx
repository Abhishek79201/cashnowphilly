import PropertyForm from './PropertyForm'

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full bg-url(/assets/heroBg.png)"
      style={{
        backgroundImage: 'url(/assets/heroBg.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
      }}
    >
      <div className="section-container py-12 md:py-20">
        <div className="grid grid-cols-1 gap-8 items-center mt-[40px] md:mt-[60px]">
          <div className="text-white space-y-2">
            <h1 className="font-lato text-[24px] sm:text-[30px] md:text-[40px] lg:text-[48px] font-bold leading-tight">
              NEED TO SELL YOUR HOME?
            </h1>
            <h2 className="font-lato text-[22px] sm:text-[26px] md:text-[36px] lg:text-[48px] font-bold leading-tight">
              WE&apos;RE HERE TO HELP!
            </h2>
            <p
              className="
                font-lato text-[15px] sm:text-[16px] md:text-[18px]
                max-w-full sm:max-w-[400px] md:max-w-[500px]
                font-light leading-relaxed
                relative
                
              "
            >
              Regardless of the condition your property is in or the situation you&apos;re
              dealing with, we&apos;ll find a solution that works for you. Please fill out the
              following form so we can get in touch and get started.
            </p>
          </div>
          <div className="relative mt-8 md:mt-0">
            <PropertyForm />
          </div>
        </div>
      </div>
    </section>
  )
}