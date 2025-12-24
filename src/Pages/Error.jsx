import GitHub from "../assets/GitHub.png"
 
 const Error = () => {
  return (
   <section className="h-screen  bg-white3">
    <div className="center-container">
        <div className="flex flex-col justify-center items-center gap-8 text-center">
            <h2 className="text-black  text-7xl mt-10">404</h2>
            <h3 className="text-[1rem] font-bold text-black4">File not found</h3>
            <p className="text-black4 text-[1rem]">The site configured at this address does not contain the requested file.</p>
            <p className="text-black4 text-[1rem]">If this is your site, make sure that the filename case matches the URL as well as any file permissions.</p>
            <p className="text-black4 text-[1rem]">For root URLs 
               <span className="text-[.8rem]">( <span className="text-[1rem]">like</span> http://example.com/ ) </span>  
                you must provide an <span className="text-[.8rem]">index.html</span> file.</p>
          <div className="flex flex-wrap justify-center items-center gap-1 ">
                <a href="https://help.github.com/pages/" className="text-blue2 text-[1rem] hover:underline">Read the full documentation</a>
                <span className="text-black4 text-[1rem]"> for more information about using </span>                
                <span className="text-black4 font-bold">GitHub Pages.</span>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-black4 text-[1rem]">
          <a href="#" className="hover:underline">GitHub Status </a>
          <span > — </span>
          <a href="#" className="hover:underline"> @githubstatus</a>
        </div>
           <div><img src={GitHub} alt="GitHubImage"  loading="lazy" 
          className="object-cover w-10 h-10 cursor-pointer" /></div>
        </div>
    </div>
     
   </section>
  )
}
export default Error