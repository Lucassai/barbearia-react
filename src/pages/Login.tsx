function Login() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-t from-black to-(--dark-blue)">
      <div className="mb-8">
        <img
          src="https://ik.imagekit.io/lkxant9gz/hairdresser.png?updatedAt=1751305418410"
          alt="Barber Logo"
          className="w-24 h-24"
        />
      </div>
      <h1 className="text-white text-4xl font-bold mb-6">Login</h1>
      <form className="bg-white  p-8 rounded-lg shadow-md w-96">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your username"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className="bg-(--dark-blue) hover:bg-(--light-blue) text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
