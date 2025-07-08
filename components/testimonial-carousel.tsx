"use client"

import { Star } from "lucide-react"

interface Testimonial {
  name: string
  location: string
  service: string
  text: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    name: "Carla M.",
    location: "Sarasota",
    service: "Furniture Assembly",
    text: "They arrived on time, assembled everything in 3 hours and even cleaned up afterwards. True professionalism!",
    rating: 5,
  },
  {
    name: "Bryan H.",
    location: "Siesta Key",
    service: "Airbnb Maintenance",
    text: "I use them for my Airbnb maintenance. Quick service, professional, no stress.",
    rating: 5,
  },
  {
    name: "Joanne P.",
    location: "Venice",
    service: "Plumbing Repair",
    text: "Emergency with leaking pipe before an event. They came the next day and saved my party!",
    rating: 5,
  },
  {
    name: "Michael R.",
    location: "Bradenton",
    service: "TV Installation",
    text: "75-inch TV installed perfectly. They hid the cables and taught me how to use it.",
    rating: 5,
  },
  {
    name: "Sandra K.",
    location: "Longboat Key",
    service: "Deck Repair",
    text: "Deck with loose boards became like new. Detailed quote and result better than the original.",
    rating: 5,
  },
  {
    name: "Robert T.",
    location: "Anna Maria",
    service: "Electrical Installation",
    text: "3 ceiling fans installed in one day. Clean work, fast and fair price.",
    rating: 5,
  },
  {
    name: "Maria S.",
    location: "Palmetto",
    service: "Door Repair",
    text: "Door that wouldn't close for months was fixed in 30 minutes. Amazing!",
    rating: 5,
  },
  {
    name: "David L.",
    location: "Ellenton",
    service: "Shelf Installation",
    text: "Shelves perfectly aligned and secure. Impeccable work.",
    rating: 5,
  },
]

export default function TestimonialCarousel() {
  // Duplicate array to create the illusion of an infinite loop
  const loop = [...testimonials, ...testimonials]

  return (
    <div className="relative overflow-hidden">
      {/* Infinite Scroll Container */}
      <div className="flex animate-scroll space-x-4 md:space-x-6 whitespace-nowrap">
        {loop.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-[280px] md:w-[350px] flex-shrink-0"
          >
            {/* Card Header */}
            <div className="p-4 md:p-6 pb-3 md:pb-4">
              {/* Stars */}
              <div className="flex mb-3 md:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 md:h-5 md:w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote - Dynamic Height */}
              <div className="mb-4 md:mb-6">
                <p className="text-gray-700 text-sm md:text-base leading-relaxed whitespace-normal">
                  &quot;{testimonial.text}&quot;
                </p>
              </div>
            </div>

            {/* Card Footer */}
            <div className="px-4 md:px-6 pb-4 md:pb-6">
              <div className="flex items-center justify-between pt-3 md:pt-4 border-t border-gray-100">
                {/* Author Info */}
                <div className="flex-1">
                  <div className="font-bold text-gray-900 text-sm md:text-base">{testimonial.name}</div>
                  <div className="text-gray-500 text-xs md:text-sm">{testimonial.location}</div>
                </div>

                {/* Service Badge */}
                <div className="flex-shrink-0 ml-3 md:ml-4">
                  <div className="bg-gradient-to-r from-teal-100 to-orange-100 px-2 md:px-3 py-1 md:py-1.5 rounded-full">
                    <span className="text-xs font-semibold text-gray-700 whitespace-nowrap">{testimonial.service}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Fade Edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-teal-50 via-teal-50/80 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-orange-50 via-orange-50/80 to-transparent z-10" />
    </div>
  )
}
