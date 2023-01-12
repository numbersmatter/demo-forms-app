/* eslint-disable jsx-a11y/no-redundant-roles */

export interface ISmallScreenList {
  children: React.ReactNode
}


export default function SmallScreenList(props: ISmallScreenList) {
  const {children} = props;

  return (
    <div className="shadow sm:hidden">
      <ul role="list" className="mt-2 divide-y divide-gray-200 overflow-hidden shadow sm:hidden">
        {children}
      </ul>

      <nav
        className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3"
        aria-label="Pagination"
      >
        <div className="flex flex-1 justify-between">
          <a
            href="#"
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-500"
          >
            Previous
          </a>
          <a
            href="#"
            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-500"
          >
            Next
          </a>
        </div>
      </nav>
    </div>
  )
}