

export default function Experience(){
  return(
    <div className="flex flex-col m-4 text-yellow-200">
      <h1 className="font-bold text-xl text-white mb-2">Experience</h1>
      <div className="my-4">
        <h3 className="text-white font-bold">Junior Software Engineer - Employnet</h3>
        <p className="text-xs mb-2">Aug. 2021 - Sept. 2024</p>
        <p className="text-white">Related Projects:</p>
        <ul className="text-xs">
          <li>HQ App</li>
          <li>OAP Reconciliation Tool</li>
          <li>Works Better</li>
          <li>Flutter Timeclock</li>
        </ul>
      </div>

      <div className="my-4">
        <h3 className="text-white  font-bold">Founder/Developer - Scout Design</h3>
        <p className="text-xs mb-2">Jan. 2021 - June 2024</p>
        <p className="text-white">Related Projects:</p>
        <ul className="text-xs">
          <li>X-Text</li>
        </ul>
      </div>

      <div className="my-4">
        <h3 className="text-white font-bold">Estimator - Valley Entry Systems</h3>
        <p className="text-xs mb-2">Sept. 2019 - May 2021</p>
        <p className="text-white">Related Projects:</p>
        <ul className="text-xs">
          <li>Estimation Calculator</li>
        </ul>
      </div>
    </div>
  )
}