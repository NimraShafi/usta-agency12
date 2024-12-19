import React from 'react';

const Footer = () => {
  return (
    <div className="flex flex-wrap justify-between items-start gap-8 p-8 text-white lg:flex-row sm:flex-col mt-10">

      {/* Column 1 */}
      <div className="w-full sm:w-1/3 lg:w-1/5 flex flex-col gap-4">
        <p className="font-semibold text-lg">Strategy</p>
        <hr className="border-0 h-[1px] bg-[rgba(169,169,169,0.2)]" />
        <p className="text-sm">Creative Direction</p>
        <p className="text-sm">Technology Strategy</p>
        <p className="text-sm">Research & Development</p>
      </div>

      {/* Column 2 */}
      <div className="w-full sm:w-1/2 lg:w-1/5 flex flex-col gap-4">
        <p className="font-semibold text-lg">Creative Direction</p>
        <hr className="border-0 h-[1px] bg-[rgba(169,169,169,0.2)]" />
        <p className="text-sm">Technology Strategy</p>
        <p className="text-sm">Research & Development</p>
        <p className="text-sm">Strategy</p>
      </div>

      {/* Column 3 */}
      <div className="w-full sm:w-1/2 lg:w-1/5 flex flex-col gap-4">
        <p className="font-semibold text-lg">Technology Strategy</p>
        <hr className="border-0 h-[1px] bg-[rgba(169,169,169,0.2)]" />
        <p className="text-sm">Creative Direction</p>
        <p className="text-sm">Research & Development</p>
        <p className="text-sm">Strategy</p>
      </div>

      {/* Column 4 */}
      <div className="w-full sm:w-1/2 lg:w-1/5 flex flex-col gap-4">
        <p className="font-semibold text-lg">Research & Development</p>
        <hr className="border-0 h-[1px] bg-[rgba(169,169,169,0.2)]" />
        <p className="text-sm">Creative Direction</p>
        <p className="text-sm">Technology Strategy</p>
        <p className="text-sm">Strategy</p>
      </div>

    </div>
  );
}

export default Footer;
