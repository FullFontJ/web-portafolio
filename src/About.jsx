function About() {
  return (
    <>
      <main className="relative w-full" id="about">
        <img className="w-full" src="/image/bg-about.jpg" alt="about" />
        <div className="absolute inset-0 bg-[#E67F50] opacity-75"></div>
        <div className="absolute top-1/3 left-1/4 text-white flex flex-col">
          <h2 className="text-lg">Hola yo soy un</h2>
          <h1 className="sm:text-3xl  md:text-4xl lg:text-7xl font-bold mt-2">Developer</h1>
          <a className="flex flex-nowrap self-end gap-2 border-2 border-black w-36 p-2 rounded-3xl text-black font-semibold text-lg mt-4 z-20" href="https://github.com/FullFontJ" target="_blank">
            <img src="/image/github.svg" alt="github" className="h-7"/>FullFontJ
          </a>
        </div>
        <img className="absolute -bottom-10 left-0 z-10 w-full" src="/image/layered-waves-haikei.svg" alt="layered"/>
      </main>
    </>
  );
}

export default About;
