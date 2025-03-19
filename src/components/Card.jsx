import React from 'react'
import bookimage from "../../public/bookimg.jpg"
function Card({item, url}) {
  return (
    <>
      <div class="hover:scale-105 transition-all relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
  <div class="relative p-2.5 h-96 overflow-hidden rounded-xl bg-clip-border">
    <img
      src={url ? url : bookimage}
      alt="card-image"
      className="h-full w-full object-cover rounded-md"
      loading='lazy'
    />
  </div>
  <div class="p-4">
    <div class="mb-2 flex items-center justify-between">
      <p class="text-slate-800 text-xl font-semibold">
        {item.name}
      </p>
      <p class="text-cyan-600 text-xl font-semibold">
        ${item.price}
      </p>
    </div>
    <p class="text-slate-600 leading-normal font-light">
      With plenty of talk and listen time, voice-activated Siri access, and
      an available wireless charging case.
    </p>
    <button class="rounded-md w-full mt-6 bg-cyan-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-cyan-700 focus:shadow-none active:bg-cyan-700 hover:bg-cyan-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
      Preview here 
    </button>
  </div>
</div>
    </>
  )
}

export default Card
