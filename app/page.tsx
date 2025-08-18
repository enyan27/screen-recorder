import React from 'react'

const Page = () => {
  return (
    <div className="min-h-screen w-full bg-[#fefcff] relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        radial-gradient(circle at 30% 70%, rgba(173, 216, 230, 0.35), transparent 60%),
        radial-gradient(circle at 70% 30%, rgba(255, 182, 193, 0.4), transparent 60%)`,
        }}
      />

      <h1 className="flex justify-center pt-12 text-4xl font-bold text-gray-800">
        Dreamy Sky Pink Glow
      </h1>

      {/* https://patterncraft.fun/ */}
    </div>
  )
}

export default Page;