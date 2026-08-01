function Error({message}) {

  return (
    <div className="
    max-w-md mx-auto mt-10
    bg-red-500/20
    backdrop-blur-lg
    border border-red-400/40
    text-white
    p-6
    rounded-3xl
    text-center
    animate-bounce
    ">

      <div className="text-5xl mb-3">
        ⚠️
      </div>


      <h2 className="text-xl font-bold">
        Something went wrong
      </h2>


      <p className="mt-2 text-red-100">
        {message}
      </p>

    </div>
  )
}

export default Error;