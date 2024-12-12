export const Types = ({type}) => {
  return (
    <span className={`text-xs text-center capitalize font-medium me-2 px-2.5 py-0.5 rounded bg-gray-700 text-blue-400 border border-blue-400 my-2 ${type}`}>{type}</span>
  )
}
