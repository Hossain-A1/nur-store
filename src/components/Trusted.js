import {SiTarget,SiNike} from "react-icons/si"
const Trusted = () => {
  return (
    <section className="section-p mb-10 bg-slate-100/50">
<div className="flex flex-col items-center justify-center gap-5">
  <h2 className="text-xl font-medium">Trusted by 1000+ companies</h2>
  <div className="max-md:flex flex flex-row max-md:flex-col justify-around items-center md:gap-10 gap-20">
    <SiNike className="text-8xl text-slate-900"/>
    <h2 className="capitalize text-slate-500 text-4xl font-bold">wayfair</h2>
    <SiTarget className="text-6xl text-rose-700 font-bold"/>
    <h2 className="capitalize text-slate-500 text-4xl ">etsy</h2>
    <h2 className="text-4xl uppercase font-bold text-slate-500">asos</h2>
  </div>
</div>
    </section>
  )
}

export default Trusted