
import Feed from "@components/Feed";
const Home = () => {
  return (
    <>
      <section className="w-full flex flex-col">
        <h1 className="mt-5 text-5xl font-extrabold leading-[1] text-black sm:text-6xl text-center">
          Discover & Share
        <br className="max-md:hidden"/>
        <span className="mt-5 text-5xl font-extrabold leading-[1] sm:text-6xl text-yellow-400 bg-clip-text text-center">
          AI-Powered Prompts
        </span>
        </h1>
        <p className="pt-4 desc text-center">Prompterest is an open-source AI prompting tool for modern world to discover, create and share creative prompts</p>
        <Feed/>
      </section>

    </>
  )
}

export default Home