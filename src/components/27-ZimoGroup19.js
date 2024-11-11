import React, { useState } from "react";
import Image from "next/image";

function ZimoGroup27() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTermopen, setIstermopen] = useState(false);
  return (
    <div className="bg-zinc-300 h-dvh grid grid-row-12">
      <div className=" row-span-11 flex justify-center items-center px-6">
        <Image
          src="/27-ZimoGroup19/Path 27237.png"
          width={300}
          height={300}
          alt="background image"
        />
      </div>
      <div className=" row-span-1 flex lg:justify-between items-center justify-center flex-col lg:flex-row px-6">
        <div className="">
          <Image
            src="/27-ZimoGroup19/Group 6438.png"
            width={300}
            height={300}
            alt="background image"
          />
        </div>
        <div className=" flex flex-row font-light text-sm">
          <div>
            <button className="px-4 py-2 text-black hover:text-white font-light text-sm"
            onClick={() => setIstermopen(true)}>
              TERMS OF SERVICE
            </button>
            {isTermopen && <TermsModal onClose={() => setIstermopen(false)} />}
          </div>
          <div className="px-4 py-2 text-black ">|</div>
          <div
            
          >
            <button className="px-4 py-2 text-black hover:text-white font-light text-sm"
            onClick={() => setIsOpen(true)}>
            PRIVACY POLICY
            </button>
           {isOpen && <Modal onClose={() => setIsOpen(false)} />}

          </div>
        </div>
      </div>
    </div>
  );
}

export default ZimoGroup27;












function Modal({ onClose }) {
  return (
    <div className="bg-black h-full fixed inset-0 flex flex-col z-50 overflow-auto">
      <div className=" flex items-center justify-end p-2">
        <button
          className="text-white hover:text-black hover:bg-white rounded-xl hover:border hover:border-white p-1 font-bold"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div class="lg:grid lg:grid-cols-12 lg:grid-rows-12 h-full lg:h-dvh bg-black flex flex-col">
        
        <div className="  lg:col-span-12 lg:row-span-2 flex lg:flex-row flex-col  p-4 justify-between items-center  ">
          <div className="flex justify-start ">
          <Image
              src="/29_ZimoGroup19.2/cookiespolicy.png"
              width={200}
              height={200}
              alt="zimo"
            />
          </div>
          <div className="flex flex-col justify-between ">
          <div className="pt-4">
            <Image
              src="/28_ZimoGroup19.1/Group 3005.png"
              width={90}
              height={90}
              alt="zimo"
            />
          </div>
          <div className="text-white">PRIVACY POLICY</div>
          </div>
          <div></div>
        </div>
        <div class=" lg:col-span-3 lg:row-span-9 flex lg:justify-end items-center justify-center">
          <Image
            src="/28_ZimoGroup19.1/Group 4553.png"
            width={200}
            height={200}
            alt="zimo group"
          />
        </div>
        <div class=" lg:col-span-4 lg:row-span-9  flex lg:justify-end items-center justify-center lg:p-0 lg:pl-6 p-6">
          <Image
            src="/29_ZimoGroup19.2/zimoPrivacy.png"
            width={400}
            height={400}
            alt="zimo privacy policy"
          />
        </div>
        <div class=" lg:col-span-1 lg:row-span-9 lg:flex lg:justify-center lg:items-center hidden">
          <Image
            src="/28_ZimoGroup19.1/Line 99.png"
            width={0.7}
            height={0.7}
            alt="section line"
          />
        </div>
        <div class=" lg:col-span-4 lg:row-span-9 flex lg:justify-start items-center justify-center lg:p-0 lg:pr-6 p-6">
          <Image
            src="/29_ZimoGroup19.2/zemoprivacy2.png"
            width={400}
            height={400}
            alt="zimo privay policy"
          />
        </div>
        <div class=" col-span-12 row-span-1 flex justify-end items-center p-6">
          <Image
            src="/28_ZimoGroup19.1/date.png"
            width={100}
            height={100}
            alt="date"
          />
        </div>
      </div>
    </div>
  );
}


//TERMS AND CONDITIONS  
function TermsModal({ onClose }) {
  return (
    <div className="bg-black h-full fixed inset-0 flex flex-col z-50 overflow-auto">
      <div className=" flex items-center justify-end p-2">
        <button
          className="text-white hover:text-black hover:bg-white rounded-xl hover:border hover:border-white p-1 font-bold"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div class="lg:grid lg:grid-cols-12 lg:grid-rows-12 h-full lg:h-dvh bg-black flex flex-col">
        <div class="  lg:col-span-12 lg:row-span-2 flex flex-col justify-between p-4 items-center ">
          <div className="pt-4">
            <Image
              src="/28_ZimoGroup19.1/Group 3005.png"
              width={90}
              height={90}
              alt="zimo"
            />
          </div>
          <div className="text-white">TERMS OF SERVICE</div>
        </div>
        <div class=" lg:col-span-3 lg:row-span-9 flex lg:justify-end items-center justify-center">
          <Image
            src="/28_ZimoGroup19.1/Group 4553.png"
            width={200}
            height={200}
            alt="zimo group"
          />
        </div>
        <div class=" lg:col-span-4 lg:row-span-9  flex lg:justify-end items-center justify-center lg:p-0 lg:pl-6 p-6">
          <Image
            src="/28_ZimoGroup19.1/welcome.png"
            width={400}
            height={400}
            alt="zimo term and services"
          />
        </div>
        <div class=" lg:col-span-1 lg:row-span-9 lg:flex lg:justify-center lg:items-center hidden">
          <Image
            src="/28_ZimoGroup19.1/Line 99.png"
            width={0.7}
            height={0.7}
            alt="section line"
          />
        </div>
        <div class=" lg:col-span-4 lg:row-span-9 flex lg:justify-start items-center justify-center lg:p-0 lg:pr-6 p-6">
          <Image
            src="/28_ZimoGroup19.1/terms.png"
            width={400}
            height={400}
            alt="zimo term and services"
          />
        </div>
        <div class=" col-span-12 row-span-1 flex justify-end items-center p-6">
          <Image
            src="/28_ZimoGroup19.1/date.png"
            width={100}
            height={100}
            alt="date"
          />
        </div>
      </div>
    </div>
  );
}
