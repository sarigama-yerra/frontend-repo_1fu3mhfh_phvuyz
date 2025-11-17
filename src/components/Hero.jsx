export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-white to-sky-50" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-gray-900">
              Gallery-grade art prints for modern spaces
            </h1>
            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              Hand-picked works from emerging artists. Museum-quality paper, rich archival inks, and sizes that fit any room.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="#prints" className="inline-flex items-center justify-center rounded-md bg-gray-900 text-white px-5 py-3 text-sm font-medium hover:bg-black transition">
                Shop featured
              </a>
              <a href="#about" className="inline-flex items-center justify-center rounded-md bg-white text-gray-900 ring-1 ring-inset ring-gray-300 px-5 py-3 text-sm font-medium hover:bg-gray-50 transition">
                Learn more
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5">
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop"
                alt="Featured abstract print"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
