import { products } from "../../data/data"
import CounterAndAddToChart from "../CounterAndAddToChart"

function LeftPane() {
  return (
    <div>
        <h1 className="text-neutral-400 font-bold">
            Sneaker Company
        </h1>
        <h2 className="text-neutral-900 font-bold text-4xl">{products.title}</h2>
        <p className="text-neutral-400">{products.description}</p>
        <CounterAndAddToChart />
    </div>
  )
}

export default LeftPane