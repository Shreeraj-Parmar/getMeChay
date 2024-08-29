import React from "react";

const Username = ({ params }) => {
  return (
    <>
      <div className="cover w-full bg-red-50 relative">
        <img
          className="w-full object-cover h-[350px] "
          src="https://centerforsurfresearch.org/wp-content/uploads/2020/04/GoPro-Surfing_Review-e1586594642405.jpg"
          alt=""
        />
        <div className="absolute right-[45%] -bottom-12  border-white border-2 rounded-full ">
          <img
            className="rounded-full "
            width={150}
            height={150}
            src="https://avatars.mds.yandex.net/i?id=4c47e137d7b3f2251374adb86f3c05c9fcbd9219-12366556-images-thumbs&n=13"
            alt=""
          />
        </div>
      </div>
      <div className="info flex justify-center items-center flex-col text-white my-14">
        <div className=" font-bold   text-lg">@{params.username}</div>
        <div className=" text-slate-500">
          Lorem ipsum dolor sit amet consectetur.
        </div>
        <div className="text-slate-300">
          Lorem ipsum. dolor sit amet. consectetur .adipisicing elit.
        </div>
      </div>
      <div className="flex justify-center mb-2 ">
        <div className="payment flex gap-3 w-[80%]  text-white ">
          <div className="supporters rounded-lg w-1/2 bg-slate-900 p-7 ">
            {/* show all the payments done by users */}
            <h2 className="text-xl mb-2">Supporters</h2>
            <ul className="space-y-2 mx-5 text-lg">
              <li className=" flex gap-2  items-center">
                <img
                  width={33}
                  src="https://avatars.mds.yandex.net/i?id=4c47e137d7b3f2251374adb86f3c05c9fcbd9219-12366556-images-thumbs&n=13"
                  alt="useravtar"
                />
                <span>
                  shubham doneted <span className=" font-bold">$400 </span> with
                  message ""
                </span>
              </li>
              <li className=" flex gap-2  items-center">
                <img
                  width={33}
                  src="https://avatars.mds.yandex.net/i?id=4c47e137d7b3f2251374adb86f3c05c9fcbd9219-12366556-images-thumbs&n=13"
                  alt="useravtar"
                />
                <span>
                  shubham doneted <span className=" font-bold">$400 </span> with
                  message ""
                </span>
              </li>
              <li className=" flex gap-2  items-center">
                <img
                  width={33}
                  src="https://avatars.mds.yandex.net/i?id=4c47e137d7b3f2251374adb86f3c05c9fcbd9219-12366556-images-thumbs&n=13"
                  alt="useravtar"
                />
                <span>
                  shubham doneted <span className=" font-bold">$400 </span> with
                  message ""
                </span>
              </li>
            </ul>
          </div>
          <div className="makePayment rounded-lg w-1/2 bg-slate-900 text-white  p-7">
            <h2 className="text-2xl font-bold my-5">Make payment</h2>
            <div className="flex gap-2 flex-col">
              <div>
                <input
                  type="text"
                  className="w-full p-3 rounded-lg bg-slate-800"
                  name=""
                  id=""
                  placeholder="Enter name"
                />
              </div>
              <input
                type="text"
                className="w-full p-3 rounded-lg bg-slate-800"
                name=""
                id=""
                placeholder="Enter message"
              />
              <input
                type="text"
                className="w-full p-3 rounded-lg bg-slate-800"
                name=""
                id=""
                placeholder="Enter Amount"
              />
              <button
                type="button"
                class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Pay
              </button>
            </div>
            <div className="flex gap-2 mt-3">
              <button className="bg-slate-800  p-3 rounded-lg">Pay $10</button>
              <button className="bg-slate-800  p-3 rounded-lg">Pay $20</button>
              <button className="bg-slate-800  p-3 rounded-lg">Pay $50</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Username;
