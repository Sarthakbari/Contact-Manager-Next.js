import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 sm:py-12 lg:px-12">
      <div className="mx-auto flex min-h-[80vh] max-w-6xl flex-col items-center justify-center">
        
        {/* Heading */}
        <div className="mb-8 text-center sm:mb-10">
          <h1 className="text-3xl font-bold text-blue-600 sm:text-4xl md:text-5xl lg:text-6xl">
            Welcome to Contact Manager
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base md:text-lg">
            Manage your contacts easily and efficiently.
          </p>
        </div>

        {/* Content Section */}
        <div className="flex w-full flex-col items-center gap-8 md:flex-row md:justify-between md:gap-12">
          
          {/* Text */}
          <div className="w-full text-center md:w-1/2 md:text-left">
            <h2 className="text-2xl font-semibold text-gray-800 sm:text-3xl">
              Manage Your Contacts Easily
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base md:text-lg">
              Contact Manager helps you organize and manage your contacts
              easily. Add, edit, view, and delete contacts from one simple
              application.
            </p>

            <p className="mt-5 text-base font-medium text-gray-500 sm:text-lg">
              Keep your contacts organized and accessible anytime.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
              <a
                href="/contact"
                className="rounded-lg bg-blue-600 px-6 py-3 text-center font-medium text-white transition hover:bg-blue-700"
              >
                View Contacts
              </a>

              <a
                href="/contact/new"
                className="rounded-lg border border-blue-600 px-6 py-3 text-center font-medium text-blue-600 transition hover:bg-blue-50"
              >
                Add Contact
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="flex w-full justify-center md:w-1/2">
            <Image
              src="/laptop-img.jpg"
              alt="Contact Manager on laptop"
              width={500}
              height={500}
              className="h-auto w-full max-w-xs rounded-xl object-cover shadow-lg sm:max-w-sm md:max-w-md"
              priority
            />
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-10 text-center sm:mt-12">
          <p className="text-sm text-gray-400 sm:text-base md:text-lg">
            Start managing your contacts today!
          </p>
        </div>
      </div>
    </main>
  );
}