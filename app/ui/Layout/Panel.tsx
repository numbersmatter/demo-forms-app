

export interface PanelProps{
  panelTitle: string,
}

export default function Panel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" overflow-hidden mx-4 rounded-lg bg-white shadow">
    <div className="px-4 py-5 sm:px-6">
      {/* Content goes here */}
  
      {children}
    </div>
    <div className="px-4 py-5 sm:p-6">{/* Content goes here */}</div>
  </div>

  )
}