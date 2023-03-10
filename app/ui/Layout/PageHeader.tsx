import { BuildingOfficeIcon,  } from "@heroicons/react/24/outline";


export interface PageHeaderProps{
  title: string,
}

export default function PageHeaderContent(props: PageHeaderProps){
 const {title} =props;
  return (
    <div className="bg-white shadow">
    <div className="px-4 sm:px-6 lg:mx-auto lg:max-w-6xl lg:px-8">
      <div className="py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200">
        <div className="min-w-0 flex-1">
          {/* Profile */}
          <div className="flex items-center">
            {/* <img
              className="hidden h-16 w-16 rounded-full sm:block"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.6&w=256&h=256&q=80"
              alt=""
            /> */}
            <div>
              <div className="flex items-center">
                {/* <img
                  className="h-16 w-16 rounded-full sm:hidden"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
                  alt=""
                /> */}
                <h1 className="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:leading-9">
                  {title}
                </h1>
              </div>
              <dl className="mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
                <dt className="sr-only">Company</dt>
                <dd className="flex items-center text-sm font-medium capitalize text-gray-500 sm:mr-6">
                  <BuildingOfficeIcon
                    className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  Your Studio
                </dd>
                <dt className="sr-only">Account status</dt>
                <dd className="mt-3 flex items-center text-sm font-medium capitalize text-gray-500 sm:mr-6 sm:mt-0">
                  {/* <CheckCircleIcon
                    className="mr-1.5 h-5 w-5 flex-shrink-0 text-green-400"
                    aria-hidden="true"
                  /> 
                  Verified account*/}
                </dd>
              </dl>
            </div>
          </div>
        </div>
        <div className="mt-6 flex space-x-3 md:mt-0 md:ml-4">
          {/* <button
            type="button"
            className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
          >
            Add money
          </button>
          <button
            type="button"
            className="inline-flex items-center rounded-md border border-transparent bg-cyan-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
          >
            Send money
          </button> */}
        </div>
      </div>
    </div>
  </div>
  )
}