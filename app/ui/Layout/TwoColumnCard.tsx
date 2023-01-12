


export default function TwoColumnCard({ children, sectionTitle, sectionDescription 
}: {
  children: React.ReactNode;
  sectionTitle: string;
  sectionDescription: string;
}) {
  return (
    <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <h3 className="text-lg font-medium leading-6 text-gray-900">{sectionTitle}</h3>
          <p className="mt-1 text-sm text-gray-500">
            { sectionDescription }
          </p>
        </div>
        <div className="mt-5 space-y-6 md:col-span-2 md:mt-0">
          {/* <div>
            <label htmlFor="about" className="block text-sm font-medium text-gray-700">
              About
            </label>
            <div className="mt-1">
              <textarea
                id="about"
                name="about"
                rows={3}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="you@example.com"
                defaultValue={''}
              />
            </div>
            <p className="mt-2 text-sm text-gray-500">Brief description for your profile. URLs are hyperlinked.</p>
          </div> */}

          {/* <div>
            <label className="block text-sm font-medium text-gray-700">Photo</label>
            <div className="mt-1 flex items-center space-x-5">
              <span className="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </span>
              <button
                type="button"
                className="rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Change
              </button>
            </div>
          </div> */}
          {children}
          
        </div>
      </div>
    </div>
  )
}