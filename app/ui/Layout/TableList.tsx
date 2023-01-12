/* eslint-disable jsx-a11y/no-redundant-roles */

export interface ITableList {
  children: React.ReactNode
  tableHeaders: { label: string, hideOnSmall: boolean }[]
}


export default function TableList(props: ITableList) {
  const { children, tableHeaders } = props;

  const alwaysShowCss = "bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900"
  const hideSmallCss = "hidden bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900 md:block"

  const getCss = (hideOnSm: boolean) => hideOnSm ? hideSmallCss : alwaysShowCss

  return (
    <div className="hidden sm:block">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mt-2 flex flex-col">
          <div className="min-w-full overflow-hidden overflow-x-auto align-middle shadow sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  {
                    tableHeaders.map((headerCol) =>
                      <th key={headerCol.label}
                        className={getCss(headerCol.hideOnSmall)}
                        scope="col"
                      >
                        {headerCol.label}
                      </th>

                    )
                  }
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {children}
              </tbody>
            </table>
            {/* Pagination */}
            <nav
              className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
              aria-label="Pagination"
            >
              <div className="hidden sm:block">
                <p className="text-sm text-gray-700">
                  Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
                  <span className="font-medium">20</span> results
                </p>
              </div>
              <div className="flex flex-1 justify-between sm:justify-end">
                <a
                  href="#"
                  className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Previous
                </a>
                <a
                  href="#"
                  className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Next
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}