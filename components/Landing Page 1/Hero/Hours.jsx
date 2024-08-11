import React from "react";

export default function Hours() {
  const specifications = [
    { value: "349 CC", label: "ENGINE" },
    { value: "13 ltrs", label: "Fuel Capacity" },
    { value: "5 speed", label: "Gears" },
    { value: "6100 rpm", label: "Max Power" },
  ];

  return (
    <div className="flex flex-col justify-center items-center py-12">
      <div className="border outline outline-[#35A7A0] rounded-lg p-6 max-w-4xl">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {specifications.map((spec, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="text-2xl font-semibold text-gray-800">
                {spec.value}
              </div>
              <div className="mt-2 text-sm text-gray-500">{spec.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
