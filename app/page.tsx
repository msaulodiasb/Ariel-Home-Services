"use client"

import { Button } from "@/components/ui/button"
import { Phone, CheckCircle, Star, Facebook, Instagram, MessageCircle, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import TestimonialCarousel from "@/components/testimonial-carousel"

export default function ArielHomeServicesLanding() {
  // Function to generate daily requests based on date
  const getDailyRequests = () => {
    const today = new Date()
    const dateString = today.toDateString() // Ex: "Mon Dec 25 2023"

    // Create a simple hash based on date for consistency
    let hash = 0
    for (let i = 0; i < dateString.length; i++) {
      const char = dateString.charCodeAt(i)
      hash = (hash << 5) - hash + char
      hash = hash & hash // Convert to 32bit integer
    }

    // Use hash to generate a number between 15 and 21
    const randomSeed = Math.abs(hash) % 7 // 0-6
    return 15 + randomSeed // 15-21
  }

  // Function to detect if mobile
  const isMobile = () => {
    if (typeof window !== "undefined") {
      return (
        window.innerWidth <= 768 ||
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      )
    }
    return false
  }

  // Function to handle CTA button clicks
  const handleCTAClick = () => {
    if (isMobile()) {
      // Mobile: Open SMS
      window.open("sms:+19414026077?body=Hello! I would like to request a quote for handyman services.", "_self")
    } else {
      // Desktop: Open Gmail in browser (or default webmail)
      const subject = encodeURIComponent("Quote Request - Ariel Home Services")
      const body = encodeURIComponent(
        "Hello! I would like to request a quote for handyman services. Please contact me.",
      )
      const email = "arielhomeservices1@gmail.com"

      // Try to open Gmail in browser first, fallback to default mail client
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`

      // Open Gmail in a new tab
      window.open(gmailUrl, "_blank")
    }
  }

  const dailyRequests = getDailyRequests()
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-teal-600 text-white py-3 md:py-4 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 md:space-x-4">
              <Image
                src="/images/ariel-logo.jpeg"
                alt="Ariel Home Services Logo"
                width={40}
                height={40}
                className="md:w-[60px] md:h-[60px] rounded-full bg-white p-1"
              />
              <div>
                <h1 className="text-sm md:text-xl font-bold">ARIEL HOME SERVICES</h1>
                <p className="text-xs md:text-sm text-teal-200">Licensed • Insured • Guaranteed</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-white">
                <Phone className="h-4 w-4 text-teal-200" />
                <span className="font-semibold text-sm">(941) 323-2747</span>
              </div>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold" onClick={handleCTAClick}>
                Schedule Now
              </Button>
            </div>
            {/* Mobile CTA Button */}
            <div className="md:hidden">
              <Button
                size="sm"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-xs px-3 py-2"
                onClick={handleCTAClick}
              >
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-workshop.png"
            alt="Ariel Home Services professional in workshop"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
          {/* Gradient overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-12 md:py-20">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center min-h-[80vh]">
            {/* Left Column - Main Content */}
            <div className="text-white text-center lg:text-left">
              {/* Trust Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 md:gap-3 mb-6 md:mb-8">
                <div className="flex items-center space-x-1 md:space-x-2 bg-white/20 backdrop-blur-sm px-2 md:px-4 py-1 md:py-2 rounded-full border border-white/30">
                  <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-green-400" />
                  <span className="text-xs md:text-sm font-medium">Free Estimate</span>
                </div>
                <div className="flex items-center space-x-1 md:space-x-2 bg-white/20 backdrop-blur-sm px-2 md:px-4 py-1 md:py-2 rounded-full border border-white/30">
                  <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-green-400" />
                  <span className="text-xs md:text-sm font-medium">Verified Technicians</span>
                </div>
                <div className="flex items-center space-x-1 md:space-x-2 bg-white/20 backdrop-blur-sm px-2 md:px-4 py-1 md:py-2 rounded-full border border-white/30">
                  <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-green-400" />
                  <span className="text-xs md:text-sm font-medium">30-Day Guarantee</span>
                </div>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight">
                <span className="text-white">Your Home</span>
                <br />
                <span className="text-white">Without</span> <span className="text-orange-400">Problems</span>
              </h1>

              {/* Subheadline */}
              <div className="mb-6 md:mb-8">
                <p className="text-lg md:text-xl lg:text-2xl font-semibold text-teal-300 mb-2">Get Your Time Back.</p>
                <p className="text-base md:text-lg lg:text-xl text-gray-200 max-w-2xl mx-auto lg:mx-0">
                  Reliable Handyman in Sarasota and surrounding areas. Fair Pricing and No Hassle.
                </p>
              </div>

              {/* Value Proposition Box */}
              <div className="bg-white/10 backdrop-blur-md p-4 md:p-6 rounded-2xl border border-white/20 mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0">
                <p className="text-teal-300 font-semibold text-base md:text-lg mb-3 md:mb-4">
                  Local professionals, punctual, with written guarantee and no surprise quotes
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 text-xs md:text-sm">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-green-400 flex-shrink-0" />
                    <span className="text-gray-200">Residential & Commercial</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-green-400 flex-shrink-0" />
                    <span className="text-gray-200">Quick Scheduling</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-green-400 flex-shrink-0" />
                    <span className="text-gray-200">Fixed Quote</span>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 md:gap-4 mb-6 md:mb-8">
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-base md:text-lg px-6 md:px-8 py-3 md:py-4 shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105"
                  onClick={handleCTAClick}
                >
                  <Phone className="h-5 w-5 md:h-6 md:w-6 mr-2 md:mr-3" />
                  Schedule Now
                </Button>

                {/* Phone Number Display */}
              </div>
            </div>
          </div>

          {/* Bottom CTA for Mobile */}
          <div className="lg:hidden mt-8 md:mt-12 text-center">
            <div className="bg-white/10 backdrop-blur-md p-4 md:p-6 rounded-2xl border border-white/20">
              <p className="text-white text-base md:text-lg font-semibold mb-3 md:mb-4">
                🚀 Solve your problems today!
              </p>
              <Button
                size="lg"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-base md:text-lg py-3 md:py-4"
                onClick={handleCTAClick}
              >
                <Phone className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                Call Now: (941) 402-6077
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Hidden on mobile */}
        <div className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm">Scroll to see more</span>
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Cities Carousel - Bold Design */}
      <section className="relative overflow-hidden bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 via-transparent to-orange-600/20"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-xl animate-float"></div>
            <div
              className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-lg animate-float"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute bottom-0 left-1/3 w-20 h-20 bg-white/5 rounded-full blur-lg animate-float"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>
        </div>

        {/* Shimmer Effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent w-full h-full animate-shimmer"></div>
        </div>

        <div className="relative z-10 py-4 md:py-6">
          <div className="flex animate-scroll space-x-6 md:space-x-12 whitespace-nowrap">
            {/* First set */}
            {[
              "SARASOTA",
              "BRADENTON",
              "VENICE",
              "SIESTA KEY",
              "LONGBOAT KEY",
              "ANNA MARIA ISLAND",
              "PALMETTO",
              "ELLENTON",
              "PARRISH",
              "LAKEWOOD RANCH",
            ].map((city, index) => (
              <div key={index} className="inline-block flex-shrink-0">
                <span className="text-white font-bold text-sm md:text-lg tracking-wider hover:animate-text-glow transition-all duration-300 cursor-default">
                  {city}
                </span>
              </div>
            ))}

            {/* Duplicate for seamless loop */}
            {[
              "SARASOTA",
              "BRADENTON",
              "VENICE",
              "SIESTA KEY",
              "LONGBOAT KEY",
              "ANNA MARIA ISLAND",
              "PALMETTO",
              "ELLENTON",
              "PARRISH",
              "LAKEWOOD RANCH",
            ].map((city, index) => (
              <div key={`dup1-${index}`} className="inline-block flex-shrink-0">
                <span className="text-white font-bold text-sm md:text-lg tracking-wider hover:animate-text-glow transition-all duration-300 cursor-default">
                  {city}
                </span>
              </div>
            ))}
          </div>

          {/* Gradient Overlays for Fade Effect */}
          <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-r from-orange-500 to-transparent z-20 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-orange-500 to-transparent z-20 pointer-events-none"></div>
        </div>
      </section>

      {/* Problem Section - Redesigned */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center space-x-2 bg-orange-100 px-3 md:px-4 py-2 rounded-full mb-4 md:mb-6">
              <span className="text-orange-600 font-semibold text-base md:text-xl">STOP SUFFERING</span>
            </div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              Stop Wasting Time with <br />
              <span className="text-orange-500">"Professionals"</span> who...
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Problems Side */}
            <div className="space-y-4 md:space-y-6">
              <div className="group">
                <div className="bg-white p-4 md:p-6 rounded-2xl shadow-lg border-l-4 border-orange-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src="/images/alarm-clock.png"
                        alt="Alarm clock"
                        width={60}
                        height={60}
                        className="md:w-[80px] md:h-[80px] object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2 text-sm md:text-base">
                        Show up late (or don't show up at all)
                      </h3>
                      <p className="text-gray-600 text-xs md:text-sm">
                        You schedule, cancel your appointments, and they simply don't show up or arrive hours late.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="bg-white p-4 md:p-6 rounded-2xl shadow-lg border-l-4 border-orange-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src="/images/money-flying.png"
                        alt="Money flying away"
                        width={60}
                        height={60}
                        className="md:w-[80px] md:h-[80px] object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2 text-sm md:text-base">
                        Give rough estimates and charge double at the end
                      </h3>
                      <p className="text-gray-600 text-xs md:text-sm">
                        They quote one price over the phone, but when it's time to pay there are always "unforeseen
                        costs" that double the price.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="bg-white p-4 md:p-6 rounded-2xl shadow-lg border-l-4 border-orange-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src="/images/hammer-tool.png"
                        alt="Hammer tool"
                        width={60}
                        height={60}
                        className="md:w-[80px] md:h-[80px] object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2 text-sm md:text-base">
                        Do sloppy work and disappear without warranty
                      </h3>
                      <p className="text-gray-600 text-xs md:text-sm">
                        Poor workmanship, no attention to detail, and when problems arise they disappear and don't
                        answer anymore.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="bg-white p-4 md:p-6 rounded-2xl shadow-lg border-l-4 border-orange-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src="/images/wooden-door.png"
                        alt="Wooden door"
                        width={60}
                        height={60}
                        className="md:w-[80px] md:h-[80px] object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2 text-sm md:text-base">
                        Say "I need to come back another day" and never return
                      </h3>
                      <p className="text-gray-600 text-xs md:text-sm">
                        Always missing some tool or part, promise to return "tomorrow" and you never see them again.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Solution Side */}
            <div className="relative">
              <div className="bg-gradient-to-br from-teal-600 to-teal-700 p-6 md:p-8 lg:p-12 rounded-3xl shadow-2xl text-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-white rounded-full translate-x-12 translate-y-12"></div>
                </div>

                <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-6 md:mb-8">
                    <div>
                      <h3 className="text-xl md:text-3xl font-bold">We Do Things Differently</h3>
                      <p className="text-orange-500 text-sm md:text-base">The professionalism you deserve</p>
                    </div>
                  </div>

                  <div className="space-y-4 md:space-y-6">
                    <div className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="h-4 w-4 md:h-6 md:w-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm md:text-lg">We arrive on time</p>
                        <p className="text-teal-200 text-xs md:text-sm">Punctuality is our trademark</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="h-4 w-4 md:h-6 md:w-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm md:text-lg">We bring everything needed</p>
                        <p className="text-teal-200 text-xs md:text-sm">Tools and materials always ready</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="h-4 w-4 md:h-6 md:w-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm md:text-lg">We solve it ON THE SPOT</p>
                        <p className="text-teal-200 text-xs md:text-sm">No delays, no "I'll be back tomorrow"</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="h-4 w-4 md:h-6 md:w-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm md:text-lg">We guarantee in writing</p>
                        <p className="text-teal-200 text-xs md:text-sm">30-day warranty on all services</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 md:mt-8 p-4 md:p-6 bg-orange-500 rounded-2xl text-center">
                    <p className="font-bold mb-2 text-lg md:text-2xl">Guaranteed Results</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Mobile Optimized */}
      <section className="py-16 md:py-32 bg-gradient-to-br from-slate-50 via-white to-gray-50 relative overflow-hidden">
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-teal-100/30 to-teal-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-orange-100/30 to-orange-200/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-blue-100/20 to-blue-200/10 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Enhanced Header */}
          <div className="text-center mb-12 md:mb-24">
            <div className="inline-flex items-center space-x-2 md:space-x-3 bg-gradient-to-r from-teal-50 to-teal-100 px-4 md:px-8 py-2 md:py-4 rounded-full mb-6 md:mb-8 shadow-lg border border-teal-200/50 backdrop-blur-sm">
              <div className="w-2 h-2 md:w-3 md:h-3 bg-teal-500 rounded-full animate-pulse"></div>
              <span className="text-teal-700 font-bold uppercase tracking-wider text-sm md:text-xl">Our Services</span>
              <div
                className="w-2 h-2 md:w-3 md:h-3 bg-teal-500 rounded-full animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>
            </div>

            <h2 className="text-2xl md:text-5xl lg:text-7xl font-black text-gray-900 mb-4 md:mb-8 leading-tight">
              If You Have Something <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-teal-500 to-blue-600 relative">
                "Don't Know Who Does"
              </span>
            </h2>

            <p className="text-base md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
              We probably do it. We specialize in solving those problems that
              <span className="text-teal-600 font-semibold"> nobody wants to take on</span>.
            </p>
          </div>

          {/* Services Grid - Mobile Optimized */}
          <div className="max-w-7xl mx-auto">
            {/* Category Headers - Mobile Responsive */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12 md:mb-20">
              {[
                {
                  icon: "/images/wrench-icon.png",
                  title: "Installations",
                  subtitle: "We assemble and install with perfection",
                  color: "teal",
                  gradient: "from-teal-500 to-cyan-500",
                },
                {
                  icon: "/images/hammer-icon.png",
                  title: "Repairs",
                  subtitle: "We fix and leave it like new",
                  color: "orange",
                  gradient: "from-orange-500 to-red-500",
                },
                {
                  icon: "/images/house-icon.png",
                  title: "Maintenance",
                  subtitle: "We take care so everything works",
                  color: "blue",
                  gradient: "from-blue-500 to-indigo-500",
                },
              ].map((category, index) => (
                <div key={index} className="group text-center">
                  {/* Icon Container - Mobile Optimized */}
                  <div className="relative mb-6 md:mb-8 flex justify-center">
                    <div className="relative">
                      <div className="relative p-2 md:p-4">
                        <Image
                          src={category.icon || "/placeholder.svg"}
                          alt={category.title}
                          width={80}
                          height={80}
                          className="md:w-[120px] md:h-[120px] object-contain transform group-hover:scale-110 transition-transform duration-500 filter drop-shadow-2xl"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Typography - Mobile Optimized */}
                  <div className="space-y-2 md:space-y-4">
                    <h3 className="text-xl md:text-3xl font-black text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 transition-all duration-300">
                      {category.title}
                    </h3>
                    <p className="text-sm md:text-lg text-gray-600 font-medium leading-relaxed max-w-xs mx-auto">
                      {category.subtitle}
                    </p>

                    {/* Decorative Line */}
                    <div
                      className={`w-12 md:w-16 h-1 bg-gradient-to-r ${category.gradient} rounded-full mx-auto opacity-60 group-hover:opacity-100 group-hover:w-16 md:group-hover:w-24 transition-all duration-300`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Services Checklist - Mobile Optimized */}
            <div className="relative">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50 rounded-2xl md:rounded-[2rem] shadow-xl border border-gray-100"></div>

                <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl md:rounded-[2rem] p-6 md:p-12 lg:p-16 shadow-xl border border-white/40">
                  {/* Header - Mobile Optimized */}
                  <div className="text-center mb-8 md:mb-16">
                    <div className="inline-flex items-center space-x-2 md:space-x-3 bg-gradient-to-r from-orange-100 via-orange-50 to-orange-100 px-4 md:px-8 py-2 md:py-4 rounded-full mb-6 md:mb-8 shadow-sm border border-orange-200/50">
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-orange-400 rounded-full animate-pulse"></div>
                      <span className="text-orange-700 font-bold uppercase tracking-wider text-sm md:text-lg">
                        Complete Service List
                      </span>
                      <div
                        className="w-1.5 h-1.5 md:w-2 md:h-2 bg-orange-400 rounded-full animate-pulse"
                        style={{ animationDelay: "0.5s" }}
                      ></div>
                    </div>

                    <h3 className="text-2xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4 md:mb-6 leading-tight">
                      More than{" "}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500">
                        50 types
                      </span>{" "}
                      of different services
                    </h3>
                    <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                      Organized by category to make your search easier
                    </p>
                  </div>

                  {/* Services Grid - Mobile Optimized */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                    {[
                      { service: "Shelf and TV mount installation", category: "install", popular: true },
                      { service: "Furniture assembly (IKEA, Amazon, etc.)", category: "install", popular: true },
                      { service: "Drywall repairs and touch-up painting", category: "repair", popular: false },
                      { service: "Light bulb and fixture replacement", category: "install", popular: false },
                      { service: "Ceiling fan installation", category: "install", popular: true },
                      { service: "Door and hinge repair", category: "repair", popular: false },
                      { service: "Window and door sealing (weather/rain)", category: "repair", popular: false },
                      { service: "Blind and curtain installation", category: "install", popular: false },
                      { service: "Small home renovations and adjustments", category: "repair", popular: false },
                      { service: "Faucet and shower replacement", category: "install", popular: true },
                      { service: "Vinyl and laminate flooring installation", category: "install", popular: false },
                      { service: "Gutter cleaning and exterior inspection", category: "repair", popular: false },
                      { service: "Airbnb maintenance services", category: "install", popular: true },
                      { service: "Deck, porch and fence repairs", category: "repair", popular: false },
                      { service: "Small electrical and plumbing services", category: "repair", popular: false },
                      { service: "Pre-move help (disassembly and packing)", category: "install", popular: false },
                    ].map((item, index) => {
                      const categoryStyles = {
                        install: {
                          bg: "bg-teal-600",
                          border: "border-teal-600 hover:border-teal-700",
                          check: "text-white",
                          checkBg: "bg-white/20 border-white/30",
                          glow: "group-hover:shadow-lg group-hover:shadow-teal-600/30",
                          textColor: "text-white",
                          accent: "bg-white",
                        },
                        repair: {
                          bg: "bg-orange-500",
                          border: "border-orange-500 hover:border-orange-600",
                          check: "text-white",
                          checkBg: "bg-white/20 border-white/30",
                          glow: "group-hover:shadow-lg group-hover:shadow-orange-500/30",
                          textColor: "text-white",
                          accent: "bg-white",
                        },
                      }

                      const styles = categoryStyles[item.category]

                      return (
                        <div
                          key={index}
                          className={`group relative ${styles.bg} border-2 ${styles.border} rounded-xl p-2 md:p-3 hover:shadow-xl ${styles.glow} transition-all duration-300 transform hover:-translate-y-1 shadow-md min-h-[60px] md:min-h-[80px] flex flex-col justify-center`}
                        >
                          {/* Badge Popular */}
                          {item.popular && (
                            <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 z-10">
                              <div className="bg-gradient-to-r from-yellow-400 to-amber-400 text-amber-900 text-xs font-bold px-1.5 md:px-2 py-0.5 md:py-1 rounded-full shadow-lg border border-white transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
                                <span className="flex items-center space-x-1">
                                  <span className="text-xs">⭐</span>
                                  <span className="text-xs hidden md:inline">Popular</span>
                                </span>
                              </div>
                            </div>
                          )}

                          {/* Header with Checkbox */}
                          <div className="absolute top-1 right-1 md:top-2 md:right-2">
                            <div
                              className={`w-4 h-4 md:w-5 md:h-5 rounded-lg ${styles.checkBg} border flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-sm`}
                            >
                              <CheckCircle
                                className={`h-2.5 w-2.5 md:h-3 md:w-3 ${styles.check} transition-all duration-300 group-hover:scale-110`}
                              />
                            </div>
                          </div>

                          {/* Main Text - Centered */}
                          <div className="flex items-center justify-center text-center h-full pr-4 md:pr-6">
                            <p
                              className={`${styles.textColor} font-semibold leading-tight transition-colors text-xs md:text-sm`}
                            >
                              {item.service}
                            </p>
                          </div>

                          {/* Hover Effect */}
                          <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/10 to-white/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                          {/* Animated Bottom Border */}
                          <div
                            className={`absolute bottom-0 left-2 right-2 md:left-3 md:right-3 h-0.5 ${styles.accent} opacity-0 group-hover:opacity-60 transition-opacity duration-300 rounded-full`}
                          ></div>
                        </div>
                      )
                    })}
                  </div>

                  {/* "Can't find what you need?" Section - Mobile Optimized */}
                  <div className="mt-12 md:mt-24">
                    <div className="mt-16 md:mt-32 relative">
                      {/* Background System */}
                      <div className="absolute inset-0 -m-4 md:-m-8">
                        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-orange-500/10 to-teal-500/10 rounded-2xl md:rounded-[3rem] blur-3xl"></div>
                        <div className="absolute top-0 left-0 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-br from-orange-400/20 to-orange-500/20 rounded-full blur-3xl animate-float"></div>
                        <div
                          className="absolute bottom-0 right-0 w-40 h-40 md:w-80 md:h-80 bg-gradient-to-br from-teal-400/20 to-teal-500/20 rounded-full blur-3xl animate-float"
                          style={{ animationDelay: "2s" }}
                        ></div>
                      </div>

                      {/* Main Container */}
                      <div className="relative max-w-7xl mx-auto">
                        <div className="relative bg-white/40 backdrop-blur-2xl rounded-2xl md:rounded-[2.5rem] p-4 md:p-8 lg:p-16 shadow-2xl border border-white/30 overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10 rounded-2xl md:rounded-[2.5rem]"></div>

                          {/* Hero Section */}
                          <div className="relative z-10 text-center mb-8 md:mb-16">
                            <div className="space-y-4 md:space-y-6">
                              {/* Main Headline */}
                              <h4 className="text-2xl md:text-5xl lg:text-7xl font-black leading-tight">
                                <span className="text-gray-900">Can't find</span>
                                <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-orange-500 to-orange-600 animate-gradient-x">
                                  what you need?
                                </span>
                              </h4>

                              {/* Animated Subtitle */}
                              <div className="relative">
                                <p className="text-lg md:text-2xl lg:text-3xl font-bold text-gray-700 mb-3 md:mb-4">
                                  <span className="relative">
                                    We probably do that too!
                                    <div
                                      className="absolute -bottom-1 md:-bottom-2 left-0 right-0 h-0.5 md:h-1 bg-gradient-to-r from-orange-400 via-teal-400 to-orange-400 rounded-full transform scale-x-0 animate-scale-x"
                                      style={{ animationDelay: "1s" }}
                                    ></div>
                                  </span>
                                </p>
                              </div>

                              {/* Dynamic Stats Badge */}
                              <div className="inline-flex items-center space-x-2 md:space-x-3 bg-gradient-to-r from-teal-50 via-orange-50 to-teal-50 px-4 md:px-8 py-2 md:py-4 rounded-full border-2 border-teal-200/50 shadow-lg backdrop-blur-sm">
                                <div className="relative">
                                  <div className="w-2 h-2 md:w-3 md:h-3 bg-teal-500 rounded-full animate-ping"></div>
                                  <div className="absolute inset-0 w-2 h-2 md:w-3 md:h-3 bg-teal-500 rounded-full"></div>
                                </div>
                                <span className="text-xs md:text-sm font-bold text-teal-700">
                                  <span className="text-sm md:text-lg">+350</span> different types of services performed
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Value Proposition Grid - Mobile Optimized */}
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-16">
                            {[
                              {
                                icon: "/images/clock-icon.png",
                                title: "12h Response",
                                description: "Even for unique requests",
                                gradient: "from-teal-400 to-teal-500",
                                bgGradient: "from-teal-50 to-teal-100",
                                borderGradient: "from-teal-200 to-teal-300",
                                delay: "0s",
                              },
                              {
                                icon: "/images/chat-icon.png",
                                title: "No Commitment",
                                description: "Always free estimate",
                                gradient: "from-orange-400 to-orange-500",
                                bgGradient: "from-orange-50 to-orange-100",
                                borderGradient: "from-orange-200 to-orange-300",
                                delay: "0.2s",
                              },
                              {
                                icon: "/images/shield-icon.png",
                                title: "Total Guarantee",
                                description: "Guaranteed results",
                                gradient: "from-teal-400 to-orange-400",
                                bgGradient: "from-teal-50 to-orange-50",
                                borderGradient: "from-teal-200 to-orange-200",
                                delay: "0.4s",
                              },
                            ].map((item, index) => (
                              <div
                                key={index}
                                className={`group relative bg-gradient-to-br ${item.bgGradient} border-2 border-transparent bg-clip-padding rounded-2xl p-4 md:p-8 text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105`}
                                style={{ animationDelay: item.delay }}
                              >
                                {/* Icon Container */}
                                <div className="relative mb-4 md:mb-6 flex justify-center">
                                  <Image
                                    src={item.icon || "/placeholder.svg"}
                                    alt={item.title}
                                    width={80}
                                    height={80}
                                    className="md:w-[120px] md:h-[120px] object-contain transform group-hover:scale-110 transition-all duration-500 filter drop-shadow-lg"
                                  />
                                </div>

                                {/* Content */}
                                <h5
                                  className={`font-black text-base md:text-xl mb-2 md:mb-3 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}
                                >
                                  {item.title}
                                </h5>
                                <p className="text-gray-600 font-medium leading-relaxed text-sm md:text-base">
                                  {item.description}
                                </p>
                              </div>
                            ))}
                          </div>

                          {/* CTA Section - Mobile Optimized */}
                          <div className="text-center space-y-6 md:space-y-12">
                            {/* Persuasive Copy */}
                            <div className="max-w-4xl mx-auto space-y-4 md:space-y-6">
                              <p className="text-base md:text-xl lg:text-2xl text-gray-700 leading-relaxed font-medium">
                                If it's something that can be built, fixed, installed or assembled at home. We Do It!
                              </p>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
                              <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 via-orange-400 to-teal-400 rounded-2xl md:rounded-3xl blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <Button
                                  size="lg"
                                  className="relative bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 hover:from-teal-600 hover:via-teal-700 hover:to-teal-800 text-white font-black px-6 md:px-12 py-4 md:py-6 shadow-2xl transition-all duration-500 transform hover:scale-105 rounded-2xl md:rounded-3xl text-base md:text-xl overflow-hidden"
                                  onClick={handleCTAClick}
                                >
                                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                                  <span className="relative flex items-center">
                                    <MessageCircle className="h-5 w-5 md:h-7 md:w-7 mr-2 md:mr-4" />
                                    <span className="hidden md:inline">Solve your problem now</span>
                                    <span className="md:hidden">Get Quote Now</span>
                                    <ArrowRight className="h-4 w-4 md:h-6 md:w-6 ml-2 md:ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                                  </span>

                                  <div className="absolute inset-0 border-2 border-white/30 rounded-2xl md:rounded-3xl animate-ping"></div>
                                </Button>
                              </div>
                            </div>

                            {/* Social Proof & Urgency - Mobile Optimized */}
                            <div className="relative max-w-5xl mx-auto">
                              <div className="absolute inset-0 bg-gradient-to-r from-gray-100/50 via-white/50 to-gray-100/50 rounded-2xl md:rounded-3xl blur-xl"></div>

                              <div className="relative bg-white/60 backdrop-blur-xl rounded-2xl md:rounded-3xl p-4 md:p-8 border border-white/40 shadow-xl">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center">
                                  {/* Social Proof */}
                                  <div className="text-center md:text-left">
                                    <div className="flex items-center justify-center md:justify-start space-x-2 md:space-x-3 mb-3 md:mb-4">
                                      <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                          <Star
                                            key={i}
                                            className="h-4 w-4 md:h-6 md:w-6 text-yellow-400 fill-current drop-shadow-sm"
                                          />
                                        ))}
                                      </div>
                                      <div className="text-left">
                                        <div className="text-lg md:text-2xl font-black text-gray-800">4.9/5</div>
                                        <div className="text-xs md:text-sm text-gray-600 font-medium">
                                          Average rating
                                        </div>
                                      </div>
                                    </div>
                                    <p className="text-gray-700 font-semibold text-sm md:text-base">
                                      <span className="text-lg md:text-2xl font-black text-orange-600">
                                        +70 customers
                                      </span>{" "}
                                      solved their problems this month
                                    </p>
                                  </div>

                                  {/* Live Activity Indicator */}
                                  <div className="flex items-center justify-center space-x-2 md:space-x-4 bg-gradient-to-r from-teal-50 to-orange-50 px-3 md:px-6 py-2 md:py-4 rounded-xl md:rounded-2xl border-2 border-teal-200/50">
                                    <div className="relative">
                                      <div className="w-3 h-3 md:w-4 md:h-4 bg-teal-500 rounded-full animate-ping"></div>
                                      <div className="absolute inset-0 w-3 h-3 md:w-4 md:h-4 bg-teal-500 rounded-full"></div>
                                    </div>
                                    <div className="text-center">
                                      <div className="text-sm md:text-lg font-black text-teal-700">
                                        {dailyRequests} requests today
                                      </div>
                                      <div className="text-xs md:text-sm text-orange-600 font-medium">
                                        We respond as fast as possible
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Tip Section - Mobile Optimized */}
                            <div className="relative max-w-4xl mx-auto">
                              <div className="bg-gradient-to-r from-teal-50 via-orange-50 to-teal-50 rounded-xl md:rounded-2xl p-4 md:p-6 border-2 border-teal-200/50 shadow-lg">
                                <div className="flex items-start space-x-3 md:space-x-4">
                                  <div className="flex-shrink-0 w-8 h-8 md:w-12 md:h-12 bg-gradient-to-br from-orange-400 to-teal-500 rounded-lg md:rounded-xl flex items-center justify-center shadow-lg">
                                    <span className="text-lg md:text-2xl">💡</span>
                                  </div>
                                  <div className="flex-1">
                                    <h6 className="font-bold text-teal-800 mb-1 md:mb-2 text-sm md:text-lg">Pro Tip</h6>
                                    <p className="text-teal-700 font-medium leading-relaxed text-xs md:text-base">
                                      Send a photo of the problem via text message and we can give you a more accurate
                                      estimate even before the visit, saving your time!
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Mobile Optimized */}
      <section className="py-16 md:py-32 bg-gradient-to-br from-slate-50 via-white to-gray-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-teal-100/40 to-teal-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-orange-100/40 to-orange-200/30 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Header - Mobile Optimized */}
          <div className="text-center mb-12 md:mb-20">
            <div className="inline-flex items-center space-x-2 md:space-x-3 bg-gradient-to-r from-teal-50 via-orange-50 to-teal-50 px-4 md:px-8 py-2 md:py-4 rounded-full mb-6 md:mb-8 shadow-lg border border-teal-200/50 backdrop-blur-sm">
              <div className="w-2 h-2 md:w-3 md:h-3 bg-gradient-to-r from-teal-500 to-orange-500 rounded-full animate-pulse"></div>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-orange-700 font-black uppercase tracking-wider text-sm md:text-xl">
                How It Works
              </span>
              <div
                className="w-2 h-2 md:w-3 md:h-3 bg-gradient-to-r from-orange-500 to-teal-500 rounded-full animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>
            </div>

            <h2 className="text-2xl md:text-5xl lg:text-7xl font-black text-gray-900 mb-4 md:mb-8 leading-tight">
              <span className="text-gray-900">Simple As</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-orange-500 to-teal-600">
                1, 2, 3, 4
              </span>
            </h2>

            <p className="text-base md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
              No fine print, no surprises, no complications.
              <span className="text-orange-600 font-semibold"> Just results</span>.
            </p>
          </div>

          {/* Process Flow - Mobile Only */}
          <div className="max-w-7xl mx-auto">
            <div className="space-y-6 md:space-y-8">
              {[
                {
                  step: "01",
                  icon: "/images/step-01-form.png",
                  title: "Tell Us the Problem",
                  subtitle: "Click the button",
                  description: "Describe what you need in 2 minutes.",
                  color: "teal",
                  gradient: "from-teal-500 to-cyan-500",
                  bgGradient: "from-teal-50 to-cyan-50",
                },
                {
                  step: "02",
                  icon: "/images/step-02-money.png",
                  title: "Transparent Quote",
                  subtitle: "Fixed price",
                  description: "Receive detailed quote with no surprises and schedule at the best time.",
                  color: "orange",
                  gradient: "from-orange-500 to-red-500",
                  bgGradient: "from-orange-50 to-red-50",
                },
                {
                  step: "03",
                  icon: "/images/step-03-tool.png",
                  title: "Professional in Action",
                  subtitle: "We arrive prepared",
                  description: "Punctual technician with all necessary tools and materials.",
                  color: "teal",
                  gradient: "from-teal-500 to-cyan-500",
                  bgGradient: "from-teal-50 to-cyan-50",
                },
                {
                  step: "04",
                  icon: "/images/step-04-check.png",
                  title: "Problem Solved",
                  subtitle: "30-day guarantee",
                  description: "Service completed with quality and written warranty.",
                  color: "orange",
                  gradient: "from-orange-500 to-red-500",
                  bgGradient: "from-orange-50 to-red-50",
                },
              ].map((item, index) => (
                <div key={index} className="relative">
                  {/* Step Card - Mobile Optimized */}
                  <div className="relative bg-white rounded-2xl p-4 md:p-6 shadow-lg border-2 border-gray-100 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start space-x-3 md:space-x-4">
                      {/* Step Number */}
                      <div
                        className={`flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center shadow-lg`}
                      >
                        <span className="text-white font-black text-base md:text-lg">{item.step}</span>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 md:space-x-3 mb-2 md:mb-3">
                          <Image
                            src={item.icon || "/placeholder.svg"}
                            alt={item.title}
                            width={40}
                            height={40}
                            className="md:w-[48px] md:h-[48px] object-contain"
                          />
                          <div>
                            <h3 className="text-base md:text-xl font-black text-gray-900">{item.title}</h3>
                            <p className={`text-xs md:text-sm font-semibold text-${item.color}-600`}>{item.subtitle}</p>
                          </div>
                        </div>
                        <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Connection Line (except last) */}
                  {index < 3 && (
                    <div className="flex justify-center py-2 md:py-4">
                      <div className={`w-1 h-6 md:h-8 bg-gradient-to-b ${item.gradient} rounded-full`}></div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom CTA Section - Mobile Optimized */}
            <div className="mt-12 md:mt-20 text-center">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 shadow-2xl border border-gray-200 max-w-4xl mx-auto relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 via-orange-50/50 to-teal-50/50 rounded-2xl md:rounded-3xl"></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-center space-x-2 md:space-x-3 mb-4 md:mb-6">
                    <span className="text-2xl md:text-4xl">⚡</span>
                    <h3 className="text-xl md:text-3xl font-black text-gray-900">Ready to Get Started?</h3>
                    <span className="text-2xl md:text-4xl">⚡</span>
                  </div>

                  <p className="text-base md:text-xl text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
                    Don't waste more time with home problems.
                    <span className="font-semibold text-orange-600"> Solve it today!</span>
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-teal-500 to-orange-500 hover:from-teal-600 hover:to-orange-600 text-white font-bold text-base md:text-lg px-8 md:px-10 py-4 md:py-5 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden group"
                      onClick={handleCTAClick}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                      <span className="relative flex items-center">
                        <span className="text-lg md:text-xl mr-2 md:mr-3">🚀</span>
                        START NOW
                      </span>
                    </Button>
                  </div>

                  {/* Trust Indicators */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-200">
                    <div className="flex items-center justify-center space-x-2 text-xs md:text-sm text-gray-600">
                      <span className="text-green-500">✓</span>
                      <span className="font-medium">Free Estimate</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-xs md:text-sm text-gray-600">
                      <span className="text-green-500">✓</span>
                      <span className="font-medium">No Commitment</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-xs md:text-sm text-gray-600">
                      <span className="text-green-500">✓</span>
                      <span className="font-medium">Quick Response</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Mobile Optimized */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-teal-50 to-orange-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-teal-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-orange-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center space-x-2 bg-white px-4 md:px-6 py-2 md:py-3 rounded-full mb-4 md:mb-6 shadow-lg">
              <Star className="h-4 w-4 md:h-5 md:w-5 text-yellow-400 fill-current" />
              <span className="text-gray-700 font-semibold text-sm md:text-base">What Our Customers Say</span>
            </div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
              More than <span className="text-orange-500">500 satisfied</span> customers
            </h2>
            <p className="text-base md:text-xl text-gray-600">Average rating of 4.9/5 stars</p>
          </div>

          {/* Testimonial Carousel */}
          <TestimonialCarousel />
        </div>
      </section>

      {/* Urgency Section - Mobile Optimized */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-teal-200/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-200/20 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-blue-300/15 rounded-full blur-lg"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center space-x-2 md:space-x-3 bg-gradient-to-r from-red-100 to-orange-100 px-4 md:px-6 py-2 md:py-3 rounded-full mb-6 md:mb-8 shadow-lg border border-red-200">
              <div className="relative">
                <span className="text-2xl md:text-3xl animate-pulse">🕒</span>
                <div className="absolute -top-0.5 -right-0.5 md:-top-1 md:-right-1 w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full animate-ping"></div>
              </div>
              <span className="text-red-700 font-bold text-xs md:text-sm uppercase tracking-wide">Urgent</span>
            </div>

            <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-6 md:mb-8 leading-tight">
              The Sooner You Schedule,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                The Faster We Solve
              </span>
            </h2>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
            {/* Left Side - Problem Statement */}
            <div className="space-y-6 md:space-y-8">
              <div className="bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-xl border border-gray-200">
                <div className="flex items-start space-x-3 md:space-x-4 mb-4 md:mb-6">
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/warning-icon.png"
                      alt="Warning"
                      width={80}
                      height={80}
                      className="md:w-[120px] md:h-[120px] object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2">Got something pending at home?</h3>
                    <p className="text-sm md:text-lg text-gray-600">
                      The sooner you schedule, the sooner the headache disappears.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 md:p-6 rounded-xl md:rounded-2xl border-l-4 border-orange-400">
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    <span className="font-semibold text-orange-600">Small repairs can become big problems</span> if left
                    aside. And nothing like having everything working perfectly — no stress, no waiting, no improvising.
                  </p>
                </div>
              </div>

              {/* Time Pressure Indicators */}
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="bg-white/90 backdrop-blur-sm p-4 md:p-6 rounded-xl md:rounded-2xl shadow-lg border border-orange-100 text-center transform hover:scale-105 transition-transform duration-300">
                  <div className="mb-3 md:mb-4 flex justify-center">
                    <Image
                      src="/images/clock-12h-icon.png"
                      alt="Clock"
                      width={80}
                      height={80}
                      className="md:w-[120px] md:h-[120px] object-contain"
                    />
                  </div>
                  <div className="text-lg md:text-2xl font-bold text-orange-600 mb-1">12h</div>
                  <div className="text-xs md:text-sm text-gray-600">Average response time</div>
                </div>
                <div className="bg-white/90 backdrop-blur-sm p-4 md:p-6 rounded-xl md:rounded-2xl shadow-lg border border-orange-100 text-center transform hover:scale-105 transition-transform duration-300">
                  <div className="mb-3 md:mb-4 flex justify-center">
                    <Image
                      src="/images/calendar-today-icon.png"
                      alt="Calendar"
                      width={80}
                      height={80}
                      className="md:w-[120px] md:h-[120px] object-contain"
                    />
                  </div>
                  <div className="text-lg md:text-2xl font-bold text-orange-600 mb-1">Today</div>
                  <div className="text-xs md:text-sm text-gray-600">Scheduling available</div>
                </div>
              </div>
            </div>

            {/* Right Side - Benefits */}
            <div className="space-y-4 md:space-y-6">
              <div className="bg-gradient-to-br from-teal-500 to-teal-600 p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-2xl text-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12"></div>
                </div>

                <div className="relative z-10">
                  <div className="flex items-center space-x-2 md:space-x-3 mb-6 md:mb-8">
                    <div className="flex-shrink-0">
                      <Image
                        src="/images/rocket-icon.png"
                        alt="Rocket"
                        width={80}
                        height={80}
                        className="md:w-[120px] md:h-[120px] object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-2xl font-bold">Schedule Today and Get</h3>
                      <p className="text-teal-100 text-sm md:text-base">Exclusive advantages for those who act fast</p>
                    </div>
                  </div>

                  <div className="space-y-3 md:space-y-4">
                    {[
                      {
                        icon: "/images/lightning-icon.png",
                        title: "Priority Service",
                        desc: "Flexible according to your availability",
                      },
                      {
                        icon: "/images/target-icon.png",
                        title: "Resolution Before Weekend",
                        desc: "Perfect for those who want to relax on weekends",
                      },
                      {
                        icon: "/images/location-pin-icon.png",
                        title: "Fast Local Team",
                        desc: "Regional professionals with immediate response",
                      },
                    ].map((benefit, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 bg-white/10 rounded-xl backdrop-blur-sm"
                      >
                        <div className="flex-shrink-0">
                          <Image
                            src={benefit.icon || "/placeholder.svg"}
                            alt={benefit.title}
                            width={60}
                            height={60}
                            className="md:w-[80px] md:h-[80px] object-contain"
                          />
                        </div>
                        <div>
                          <p className="font-semibold text-sm md:text-lg text-white">{benefit.title}</p>
                          <p className="text-teal-100 text-xs md:text-sm">{benefit.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Section */}
          <div className="text-center">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 shadow-2xl border border-gray-200 max-w-4xl mx-auto">
              <div className="flex items-center justify-center space-x-2 md:space-x-3 mb-4 md:mb-6">
                <Image
                  src="/images/pointing-hand-action.png"
                  alt="Pointing hand"
                  width={80}
                  height={80}
                  className="md:w-[120px] md:h-[120px] object-contain"
                />
                <h3 className="text-xl md:text-3xl font-bold text-gray-900">Don't Leave It for Tomorrow</h3>
              </div>

              <p className="text-base md:text-xl text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto">
                Schedule today and choose the <span className="font-semibold text-orange-600">best time</span> for you.
                The sooner, the more time options you have!
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-6 md:mb-8">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold text-base md:text-lg px-8 md:px-10 py-4 md:py-5 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden group"
                  onClick={handleCTAClick}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <span className="relative flex items-center">
                    <span className="text-lg md:text-xl mr-2 md:mr-3">📞</span>
                    SCHEDULE NOW
                  </span>
                </Button>
              </div>

              {/* Urgency Indicators */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 md:pt-8 border-t border-gray-200">
                <div className="flex items-center justify-center space-x-2 md:space-x-3 p-3 md:p-4 bg-gradient-to-r from-teal-50 to-teal-100 rounded-xl border border-teal-200">
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-teal-500 rounded-full animate-pulse"></div>
                  <span className="text-xs md:text-sm font-medium text-teal-700">Available Now</span>
                </div>
                <div className="flex items-center justify-center space-x-2 md:space-x-3 p-3 md:p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl border border-orange-200">
                  <Image
                    src="/images/free-estimate-icon.png"
                    alt="Free estimate"
                    width={32}
                    height={32}
                    className="md:w-[64px] md:h-[64px] object-contain"
                  />
                  <span className="text-xs md:text-sm font-medium text-orange-700">Free Estimate</span>
                </div>
                <div className="flex items-center justify-center space-x-2 md:space-x-3 p-3 md:p-4 bg-gradient-to-r from-teal-50 to-orange-50 rounded-xl border border-teal-200">
                  <Image
                    src="/images/guarantee-shield-icon.png"
                    alt="Guarantee shield"
                    width={32}
                    height={32}
                    className="md:w-[64px] md:h-[64px] object-contain"
                  />
                  <span className="text-xs md:text-sm font-medium text-teal-700">30-Day Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-16 bg-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">👋 WE DO WHAT WE PROMISE.</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-base md:text-xl mb-3 md:mb-4">No more excuses, delays and empty promises.</p>
            <p className="text-sm md:text-lg mb-3 md:mb-4">
              Want a job <strong>WELL DONE</strong>, with scheduled time, fair price and total professionalism?
            </p>
            <p className="text-sm md:text-lg mb-6 md:mb-8">Click below and schedule in 2 minutes.</p>
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-base md:text-xl px-6 md:px-8 py-3 md:py-4"
              onClick={handleCTAClick}
            >
              <Phone className="h-5 w-5 md:h-6 md:w-6 mr-2" />
              SOLVE THIS NOW
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
            <div>
              <div className="flex items-center space-x-2 md:space-x-3 mb-3 md:mb-4">
                <Image
                  src="/images/ariel-logo.jpeg"
                  alt="Ariel Home Services Logo"
                  width={32}
                  height={32}
                  className="md:w-[40px] md:h-[40px] rounded-full bg-white p-1"
                />
                <span className="font-bold text-sm md:text-lg">Ariel Home Services</span>
              </div>
              <p className="text-gray-400 text-xs md:text-sm">
                Professional handyman services in Sarasota, FL. Licensed, insured and guaranteed.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-3 md:mb-4 text-teal-400 text-sm md:text-base">Services</h3>
              <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-gray-400">
                <li>Residential Repairs</li>
                <li>Furniture Assembly</li>
                <li>Drywall Installation</li>
                <li>Fence Repairs</li>
                <li>And much more</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3 md:mb-4 text-teal-400 text-sm md:text-base">Contact</h3>
              <div className="space-y-1 md:space-y-2 text-xs md:text-sm text-gray-400">
                <p>📞 (941) 402-6077</p>
                <p>📧 arielhomeservices1@gmail.com</p>
                <p>📍 Serving Sarasota, FL and Region</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3 md:mb-4 text-teal-400 text-sm md:text-base">Follow Us</h3>
              <div className="flex space-x-3 md:space-x-4">
                <Link href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                  <Facebook className="h-5 w-5 md:h-6 md:w-6" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                  <Instagram className="h-5 w-5 md:h-6 md:w-6" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-teal-400 transition-colors"></Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-xs md:text-sm text-gray-400">
            <p>&copy; 2024 Ariel Home Services. All rights reserved. Licensed and Insured.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
