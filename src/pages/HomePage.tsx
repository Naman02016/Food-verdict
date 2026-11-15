function HomePage() {
  return (
    <main className="min-h-screen bg-[#F4F1EA] flex flex-col items-center justify-center relative overflow-hidden">

      {/* Food Decorations */}
      <div className="absolute top-10 left-10 text-6xl">🍕</div>
      <div className="absolute top-10 right-10 text-6xl">🍔</div>
      <div className="absolute bottom-10 left-10 text-6xl">🍟</div>
      <div className="absolute bottom-10 right-10 text-6xl">🍜</div>

      {/* Heading */}
      <h1 className="text-5xl font-extrabold tracking-wide text-[#495747] mb-4">
        FOOD VERDICT
      </h1>

      <p className="text-[#77766F] text-lg mb-12">
        Too hungry to decide? Let us help!
      </p>

      {/* Buttons */}
      <div className="flex flex-col gap-6 w-72">

        <button className="bg-[#495747] text-[#FFFEFA] py-5 rounded-2xl text-xl font-bold hover:bg-[#3B493A] transition">
          Random Pick
        </button>

        <button className="bg-[#C97849] text-[#FFFEFA] py-5 rounded-2xl text-xl font-bold hover:bg-[#B5683E] transition">
          Verdict Quiz
        </button>

      </div>

    </main>
  )
}

export default HomePage