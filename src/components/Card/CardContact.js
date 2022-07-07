import React from 'react'

export default function CardContact() {
  return (
    <form>
      <div className=" space-y-8 md:space-y-0 md:flex md:space-x-8  ">
        <div>
          <input
            type="text"
            id="name"
            className="bg-gray-50 border-2 border-l-gray-900 border-t-gray-900 border-r-gray-400 border-b-gray-400 text-gray-900 text-sm rounded-lg focus:ring-bluegeneraleinformation focus:border-blue-500 block w-full p-2.5 md:w-[285px]      "
            placeholder="Name"
            required
          />
        </div>

        <div className="mb-6">
          <input
            type="email"
            id="email"
            className="bg-gray-50 border-2 border-l-gray-900 border-t-gray-900 border-r-gray-400 border-b-gray-400 text-gray-900 text-sm rounded-lg focus:ring-bluegeneraleinformation focus:border-blue-500 block w-full p-2.5  md:w-[285px]    "
            placeholder="Email address"
            required
          />
        </div>
      </div>

      <div className="  items-start mt-8">
        <div>
          <input
            type="text"
            id="subject"
            className="bg-gray-50 border-2 border-l-gray-900 border-t-gray-900 border-r-gray-400 border-b-gray-400 text-gray-900 text-sm rounded-lg focus:ring-bluegeneraleinformation focus:border-bluering block w-full md:w-[600px] p-2.5    "
            placeholder="Subject"
            required
          />
        </div>
        <div className=" mt-8 mb-3">
          <textarea
            className="w-full md:w-[600px] form-control rounded-lg border-graytitleh2 border-2"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Message"
          ></textarea>
        </div>
      </div>
      <button
        type="submit"
        className="text-white bg-violetnav hover:bg-graytitleh2 focus:ring-4 focus:outline-none focus:ring-bluering font-medium  text-sm  sm:w-auto px-20 py-4 text-center "
      >
        Send message
      </button>
    </form>
  );
}
