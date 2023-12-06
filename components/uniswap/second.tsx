'use client';
import React, { useEffect } from "react";

const Chart = () => {



  return (
    // <div className="relative flex h-full w-full flex-col justify-start rounded-lg border border-[rgb(64,68,79)] bg-black/10 p-5 shadow-[rgba(0,0,0,0.05)_0px_6px_10px]">
    //   <div className="h-full max-h-[340px]">
    //     <div className="mb-10 flex w-full flex-row">
    //       <div className="-m-1.5 flex w-full flex-wrap items-center p-0">
    //         <div className="!m-1.5 w-fit whitespace-nowrap rounded-md border border-[rgb(86,90,105)] p-1.5 font-medium text-[rgb(250,250,250)]">
    //           Liquidity
    //         </div>
    //         <div className="!m-1.5 w-fit whitespace-nowrap rounded-md border border-[rgb(86,90,105)] p-1.5 font-medium text-[rgb(250,250,250)]">
    //           Volume
    //         </div>
    //         <div className="!m-1.5 w-fit whitespace-nowrap rounded-md border border-[rgb(86,90,105)] p-1.5 font-medium text-[rgb(250,250,250)]">
    //           ETH/WISE
    //         </div>
    //         <div className="!m-1.5 w-fit whitespace-nowrap rounded-md border border-[rgb(86,90,105)] p-1.5 font-medium text-[rgb(250,250,250)]">
    //           WISE/ETH
    //         </div>
    //       </div>
    //       <div className="sc-ifAKCX sc-bZQynM sc-dnqmqq ilnINf">
    //         <div className="!m-1.5 w-fit whitespace-nowrap rounded-md border border-[rgb(86,90,105)] p-1.5 font-medium text-[rgb(250,250,250)]">
    //           1W
    //         </div>
    //         <div className="!m-1.5 w-fit whitespace-nowrap rounded-md border border-[rgb(86,90,105)] p-1.5 font-medium text-[rgb(250,250,250)]">
    //           1M
    //         </div>
    //         <div className="!m-1.5 w-fit whitespace-nowrap rounded-md border border-[rgb(86,90,105)] p-1.5 font-medium text-[rgb(250,250,250)]">
    //           All
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <iframe
        height="100%"
        width="100%"
        id="geckoterminal-embed"
        src="https://www.geckoterminal.com/eth/pools/0x420583c08e3c06dbad988d5f00ca48ff86ac98ce?embed=1&info=0&swaps=1"
        frameBorder={0}
        allow="clipboard-write"
        allowFullScreen
        className="min-h-[70vh] mt-4"
      ></iframe>
  );
};

export default Chart;
