
export interface ITableRowCon {
  tableHeader: string,
  tableSubheader: string,
  children: React.ReactNode
}

export default function TableRowContainer( props: ITableRowCon){
  const {tableHeader, tableSubheader} = props;

  return (
      <div className="bg-white px-4 py-5  sm:px-6  md:px-12">
        <div>
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            {tableHeader}
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            {tableSubheader}
          </p>
        </div>
        <div className="mt-5 border-t border-gray-200">
          <dl className="divide-y divide-gray-200">
            {
             props.children
            }
          </dl>
        </div>
      </div>
    )
  }