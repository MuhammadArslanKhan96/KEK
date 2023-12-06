'use client';
import Image from "next/image";
import React, { useEffect, useState } from "react";


const Tokens = () => {
  const [apiData, setApiData] = useState();
console.log(apiData);
  const getData = async () => {
    try {
      const data = await fetch(
        "https://api.dexscreener.com/latest/dex/pairs/ethereum/0x420583c08e3c06dbad988d5f00ca48ff86ac98ce",
      ).then((r) => r.json());

      setApiData(data);
    } catch (error:any) {
      console.log(error.message);
    }
  };


  useEffect(() => {
    getData();
  }, [])
  return (
    <div className="relative bg-black/10 p-5 w-full h-full flex flex-col justify-start rounded-lg border border-[rgb(64,68,79)] shadow-[rgba(0,0,0,0.05)_0px_6px_10px]">
      <div className="grid gap-y-5 ">
        <div className="m-0 w-full flex p-0 items-center justify-between">
          <div className="font-medium text-sm text-[rgb(250,250,250)]">Pooled Tokens</div>
          <div></div>
        </div>
        <div>
          <div className="w-full flex p-0 items-center flex-nowrap -m-1">
            <div className="flex items-center self-center !m-1">
              <Image
                width={24}
                height={24}
                src="/token.png"
                alt=""
                className="bg-white rounded-[50%] shadow-[rgba(0,0,0,0.075)_0px_6px_10px]"
              />
            </div>
            <div className="font-medium text-lg leading-[1] !m-1 text-[rgb(250,250,250)]">
              <div className="flex w-fit p-0 items-center m-0">
                455,992,120 <div className="relative ml-1">WISE</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full flex p-0 items-center flex-nowrap -m-1">
            <div className="flex items-center self-center !m-1">
              <Image
                width={24}
                height={24}
                src="/Ethereum-ETH-icon.png"
                alt=""
                className="bg-white rounded-[50%] shadow-[rgba(0,0,0,0.075)_0px_6px_10px]"
              />
            </div>
            <div className="font-medium text-lg leading-[1] !m-1 text-[rgb(250,250,250)]">
              <div className="flex w-fit p-0 items-center m-0">
                455,992,120 <div className="relative ml-1">WISE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokens;
