import { BanknotesIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import TableList from "~/ui/Layout/TableList"

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}


export default function RequestFormHomePage() {
  // provide a list of links to forms that the client can request

  const tableHeaders = [
    {
      label: "form name",
      hideOnSmall: false,
    },
    {
      label: "form id",
      hideOnSmall: false,
    },
    {
      label: "form description",
      hideOnSmall: true,
    },
  ];

  const forms = [
    {
      id: "1",
      name: "Some name",
      description: "some text here"
    },
  ]

  return (
    <div>
      <h2 className="mx-auto mt-8 max-w-6xl px-4 text-lg font-medium leading-6 text-gray-900 sm:px-6 lg:px-8">
        Recent activity
      </h2>
      <TableList tableHeaders={tableHeaders}>
        {
          forms.map((form) =>
            <tr key={form.id} className="bg-white">
              <td className="w-full max-w-0 whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                <div className="flex">
                  <a href={"link"} className="group inline-flex space-x-2 truncate text-sm">
                    <BanknotesIcon
                      className="h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <p className="truncate text-gray-500 group-hover:text-gray-900">
                      {form.name}
                    </p>
                  </a>
                </div>
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-right text-sm text-gray-500">
                <span className="font-medium text-gray-900">text A</span> { ' '}
                text B
              </td>
              <td className="hidden whitespace-nowrap px-6 py-4 text-sm text-gray-500 md:block">
                <span
                  className={classNames(
                    'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize'
                  )}
                >
                  text status
                </span>
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-right text-sm text-gray-500">
                text time
              </td>
            </tr>
          )
        }

      </TableList>
    </div>
  )
}
