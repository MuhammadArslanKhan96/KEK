'use client';
import React from "react";

const Chart = () => {
  return (
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
