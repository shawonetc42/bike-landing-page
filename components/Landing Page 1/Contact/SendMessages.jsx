import React from "react";

export default function SendMessages() {
  return (
    <div className="flex flex-col max-w-screen-lg container mx-auto px-3 mt-2">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
          {/* Contact Information Section */}
          <div className="flex flex-col w-full max-md:mt-8 max-md:max-w-full">
            <div className="px-16 py-11 rounded-xl border border-solid bg-slate-50 border-neutral-200 max-md:px-5 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-[23%] max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/eacb3f3d4ba26a16a10004d34e0d9a2da6cbfb1a50f147df50677a933f612de3?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7"
                    className="object-contain shrink-0 aspect-square rounded-[35px] w-[70px] max-md:mt-10"
                    alt="Address"
                  />
                </div>
                <div className="flex flex-col ml-5 w-[77%] max-md:ml-0 max-md:w-full">
                  <div className="text-xl font-semibold leading-tight text-slate-900">
                    Address
                  </div>
                  <div className="mt-4 text-base font-medium leading-6 text-gray-500">
                    Awamileaug Drive, Kensington
                    <br />
                    London, UK
                  </div>
                </div>
              </div>
            </div>
            <div className="px-16 py-11 mt-8 rounded-xl border border-solid bg-slate-50 border-neutral-200 max-md:px-5 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/81c19aa636abf97a031fdce1e6aa9251aefd325a1b07b3e0cf6f6cc73dabc959?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7"
                    className="object-contain shrink-0 aspect-square rounded-[35px] w-[70px] max-md:mt-10"
                    alt="Phone"
                  />
                </div>
                <div className="flex flex-col ml-5 w-[70%] max-md:ml-0 max-md:w-full">
                  <div className="text-xl font-semibold leading-tight text-slate-900">
                    Phone
                  </div>
                  <div className="mt-4 text-base font-medium leading-6 text-gray-500">
                    +1 (800) 123 456 789
                    <br />
                    +1 (800) 123 456 789
                  </div>
                </div>
              </div>
            </div>
            <div className="px-16 py-11 mt-8 rounded-xl border border-solid bg-slate-50 border-neutral-200 max-md:px-5 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-[31%] max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb18af8fe034da822b519ea2c2f5b870036e2bb69fb577ebd1a9ce2e0b88187c?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7"
                    className="object-contain shrink-0 aspect-square rounded-[35px] w-[70px] max-md:mt-10"
                    alt="Email"
                  />
                </div>
                <div className="flex flex-col ml-5 w-[69%] max-md:ml-0 max-md:w-full">
                  <div className="text-xl font-semibold leading-tight text-slate-900">
                    E-mail Address
                  </div>
                  <div className="mt-4 text-base font-medium leading-6 text-gray-500">
                    info@gmail.com
                    <br />
                    info@gmail.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="flex flex-col ml-5 w-[67%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-start p-10 mx-auto w-full text-base font-semibold text-gray-500 rounded-xl border border-solid bg-slate-50 border-neutral-200 max-md:px-5 max-md:mt-8 max-md:max-w-full">
            <div className="text-3xl leading-tight text-slate-900">
              Send Us a Message
            </div>
            <div className="mt-3.5 leading-loose max-md:max-w-full">
              Your email address will not be published. Required fields are
              marked *
            </div>

            {/* Name, Email, Website Input Fields */}
            <div className="flex flex-col gap-5 self-stretch mt-5 max-md:max-w-full">
              <input
                type="text"
                placeholder="Name *"
                className="px-5 py-3 bg-white rounded-md border border-solid border-zinc-200 max-md:px-5"
              />
              <input
                type="email"
                placeholder="E-mail *"
                className="px-5 py-3 bg-white rounded-md border border-solid border-zinc-200 max-md:px-5"
              />
              <input
                type="text"
                placeholder="Website *"
                className="px-5 py-3 bg-white rounded-md border border-solid border-zinc-200 max-md:px-5"
              />
            </div>

            {/* Message Textarea */}
            <div className="flex shrink-0 self-stretch mt-5">
              <textarea
                placeholder="Your Message *"
                className="w-full px-5 py-3 bg-white rounded-md border border-solid border-zinc-200 h-[230px] max-md:max-w-full resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="flex overflow-hidden gap-2.5 px-8 py-4 mt-5 leading-none text-center text-white bg-red-500 rounded-full max-md:px-5 hover:bg-red-600 active:bg-red-700 cursor-pointer">
              <div className="grow">Submit Now</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/24dd6316cdef3f9589ce217445dcb2e90220ac3a79ba62c005af53a27bb70e34?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7"
                className="object-contain shrink-0 self-start aspect-[1.07] w-[15px]"
                alt="Arrow"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
