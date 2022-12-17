import Image from 'next/image'
import React from 'react'

const Services = () => {

    const Card = ({icon,title,desc}) =>{
        return(
            <>
             <div className='basis-1/2 flex border-2 border-transparent hover:border-slate-300 hover:cursor-default'>
                    <div className='basis-3/12 pl-5'>
                        <div>
                            <Image alt='Icon' width={50} height={50} src={`${icon}`}/>
                        </div>
                    </div>
                    <div className='basis-7/12'>
                        <p className='text-xl font-semibold'>{title}</p>
                        <p className='text-[16px]'>{desc}</p>
                    </div>
                </div>
            </>
        )
    }

  return (
    <>
        <div className='flex min-h-[200px] items-center'>
            <div className='basis-1/3 pl-20'>
                <p className='text-blue-600 font-semibold text-[16px]'>Our Service</p>
                <p className='font-semibold text-4xl w-56'>We Offer Best Service</p>
            </div>
            <div className='basis-2/3 flex flex-wrap h-auto gap-y-14 py-10'>
               <Card icon="/weatherImg.jpg" title="Calculated Weather" desc="A new way to travel by air the easy and fast way."/>
               <Card icon="/flightImg.jpg" title="Best Experience Flight" desc="A new way to travel by air the easy and fast way."/>
               <Card icon="/placeImg.jpg" title="Best Place to Stay" desc="A new way to travel by air the easy and fast way. "/>
               <Card icon="/easyImg.jpg" title="Easy-To-Use" desc="A new way to travel by air the easy and fast way. "/>
            </div>
        </div>
    </>
  )
}

export default Services