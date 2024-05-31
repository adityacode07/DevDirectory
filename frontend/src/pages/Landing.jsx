import { Link } from "react-router-dom";

export default function Landing() {
  return (
     <div className="flex flex-col min-h-[100dvh] text-gray-50" style={{background: 'radial-gradient(circle at 10% 10%, rgba(48, 48, 50) 0%, rgba(0, 0, 0) 70%)'}}>
      <header className="px-4 lg:px-6 h-14 flex items-center">
      <div className="mr-auto flex items-center gap-2 text-lg font-semibold">
      <PackageIcon className="w-5 h-5" />
      <span>Dev Directory</span>
    </div>
    

    
        
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <div className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Explore
          </div>
          <div className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Resources
          </div>
          <div className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </div>
          <div className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </div>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 sm:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                  Discover and Share
                </h1>
                <p className="max-w-[700px] text-gray-400 md:text-xl">
                  Explore a vast collection of learning resources curated by developers for developers.
                </p>
              </div>
              <Link to="/home"
  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-50 px-8 text-sm font-medium text-gray-950 shadow transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50"
>
  Join Now
</Link>

            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800">
        <p className="text-xs text-gray-500">© 2024 Dev Directory. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <div className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </div>
          <div className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </div>
        </nav>
      </footer>
    </div>
  )
}

function CodeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}
function PackageIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  )
}