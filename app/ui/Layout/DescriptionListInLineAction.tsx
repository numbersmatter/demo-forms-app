import { Link } from "@remix-run/react";




export interface DescriptionList {
  sectionTitle: string,
  sectionDescription: string,
  fields: {label: string, value: string}[]
}

export default function DescriptionListInLineAction(props: DescriptionList) {

  const { sectionTitle, sectionDescription, fields } = props;

  return (
    <div className="bg-white px-4 py-5  sm:px-6  md:px-12">
      <div>
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          {sectionTitle}
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          {sectionDescription}
        </p>
      </div>
      <div className="mt-5 border-t border-gray-200">
        <dl className="divide-y divide-gray-200">
          {
            fields.map((field, ind) => 
          <div  key={ind} className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
            <dt className="text-sm font-medium text-gray-500">{field.label}</dt>
            <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <span className="flex-grow">{field.value}</span>
              <span className="ml-4 flex-shrink-0">
                <Link
                  to={`${field.value}`}
                  className="rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Edit
                </Link>
              </span>
            </dd>
          </div>

            )
          }
        </dl>
      </div>
    </div>
  )
}
