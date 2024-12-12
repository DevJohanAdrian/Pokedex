import ProgressBar from "@ramonak/react-progress-bar"

export const Stats = ({base, name }) => {
  return (
    <div className="w-80">
         {name}
        <ProgressBar completed={base} animateOnRender={true} />
       </div>
  )
}
