import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

const Services = () => {
  return (
    <section className='wrapper section-p'>
      <div className='grid grid-cols-3 max-md:grid-cols-1 gap-5'>
        <div className='delivery-1 text-center shadow  max-md:py-4 py-0  flex flex-col justify-center items-center bg-slate-100/90 rounded-lg col-span-1 gap-2'>
          <div className='p-5 bg-slate-50 rounded-full'>
            <TbTruckDelivery className='lg:text-4xl text-2xl text-violet-700  ' />
          </div>
          <h3 className='capitalize text-slate-900 font-normal'>
            Super fast and free Delivery
          </h3>
        </div>
        <div className='delivery-2  flex flex-col justify-center gap-5 p-5 items-center col-span-1'>
          <div className='bg-slate-100/90 flex gap-3 p-5 justify-center items-center rounded-lg'>
            <div className='p-5 bg-slate-50 rounded-full'>
              <MdSecurity className='lg:text-4xl text-2xl text-violet-700 bg-slate-50 ' />
            </div>
            <h3 className='capitalize text-slate-900 font-normal'>
              Non-contact Shipping{" "}
            </h3>
          </div>
          <div className='bg-slate-100/90 flex gap-3 p-5 justify-center items-center rounded-lg'>
            <div className='p-5 bg-slate-50 rounded-full'>
              <GiReceiveMoney className='lg:text-4xl text-2xl text-violet-700 bg-slate-50 ' />
            </div>
            <h3 className='capitalize text-slate-900 font-normal'>
              Mony-back Guaranteed
            </h3>
          </div>
        </div>
        <div className='delivery-3  text-center shadow max-md:py-5 py-0 col-span-1 flex flex-col justify-center items-center bg-slate-100 rounded-lg'>
          <div className='bg-slate-100/90 flex flex-col justify-center items-center'>
            <div className='p-5 bg-slate-50 rounded-full'>
              <RiSecurePaymentLine className='lg:text-4xl text-2xl text-violet-700 bg-slate-50 ' />
            </div>
            <h3 className='capitalize text-slate-900 font-normal'>
              Super secure payment system
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
