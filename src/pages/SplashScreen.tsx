function SplashScreen() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#F4F1EA]">

      {/* Chef Illustration */}
      <div className="relative flex flex-col items-center">

        <div className="h-80 w-64 rounded-2xl bg-[#E8E2D8] flex items-center justify-center">
          <span className="text-[#77766F]">Chef Illustration</span>
        </div>

        {/* Title */}
        <h1 className="absolute bottom-0 translate-y-1/2 text-5xl font-extrabold tracking-wider text-[#495747] whitespace-nowrap">
          FOOD VERDICT
        </h1>

      </div>

    </main>
  )
}

export default SplashScreen