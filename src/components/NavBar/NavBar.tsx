"use client";

import IUserSession from "@/interfaces/IUserSession";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

function NavBar() {
  const [userData, setUserData] = useState<IUserSession | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window != "undefined" && window.localStorage) {
      const userData = JSON.parse(localStorage.getItem("userSession")!);
      setUserData(userData);
    }
  }, [pathname]);
  return (
    <nav className="w-screen h-32 bg-[#164E78]">
      <div className="flex flex-row justify-around items-center w-2/3 mx-auto my-14 p-2 bg-[#EEE] rounded-lg shadow-md">
        <Link href={"/"}>
          <h3 className="text-start font-poppins font-extrabold text-[#164E78]">
            Ecommerce
          </h3>
        </Link>
        <div className="w-3/5">
          <input
            type="text"
            name="search"
            className="w-full h-10 rounded-lg p-2 border border-gray-300 focus:outline-none focus:border-[#164E78] transition"
            placeholder="Search..."
          />
        </div>

        {userData?.token ? (
          <ul className="flex flex-row justify-evenly items-center pt-2">
            <li>
              <Link href={"/cart"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <g filter="url(#filter0_d_54_19)">
                    <path
                      d="M5 1.46428C5 0.77723 5.49553 0.224487 6.11147 0.224487H8.21862C9.23746 0.224487 10.1405 0.885712 10.562 1.87755H29.5958C30.8138 1.87755 31.703 3.169 31.3834 4.48112L29.4847 12.3487C29.091 13.9707 27.7712 15.102 26.2661 15.102H12.9053L13.1554 16.5743C13.2573 17.158 13.7157 17.5816 14.2483 17.5816H27.5998C28.2157 17.5816 28.7113 18.1344 28.7113 18.8214C28.7113 19.5085 28.2157 20.0612 27.5998 20.0612H14.2483C12.646 20.0612 11.2705 18.7904 10.9741 17.0392L8.58448 3.03986C8.55206 2.84356 8.39923 2.70408 8.21862 2.70408H6.11147C5.49553 2.70408 5 2.15134 5 1.46428ZM10.9278 24.1939C10.9278 23.8683 10.9853 23.5458 11.097 23.245C11.2087 22.9441 11.3725 22.6708 11.5789 22.4405C11.7853 22.2103 12.0304 22.0276 12.3001 21.903C12.5698 21.7784 12.8588 21.7143 13.1508 21.7143C13.4427 21.7143 13.7317 21.7784 14.0014 21.903C14.2711 22.0276 14.5162 22.2103 14.7226 22.4405C14.929 22.6708 15.0928 22.9441 15.2045 23.245C15.3162 23.5458 15.3737 23.8683 15.3737 24.1939C15.3737 24.5195 15.3162 24.8419 15.2045 25.1428C15.0928 25.4436 14.929 25.717 14.7226 25.9472C14.5162 26.1775 14.2711 26.3601 14.0014 26.4847C13.7317 26.6093 13.4427 26.6735 13.1508 26.6735C12.8588 26.6735 12.5698 26.6093 12.3001 26.4847C12.0304 26.3601 11.7853 26.1775 11.5789 25.9472C11.3725 25.717 11.2087 25.4436 11.097 25.1428C10.9853 24.8419 10.9278 24.5195 10.9278 24.1939ZM26.4883 21.7143C27.0779 21.7143 27.6433 21.9755 28.0602 22.4405C28.4771 22.9056 28.7113 23.5362 28.7113 24.1939C28.7113 24.8515 28.4771 25.4822 28.0602 25.9472C27.6433 26.4122 27.0779 26.6735 26.4883 26.6735C25.8988 26.6735 25.3334 26.4122 24.9165 25.9472C24.4996 25.4822 24.2654 24.8515 24.2654 24.1939C24.2654 23.5362 24.4996 22.9056 24.9165 22.4405C25.3334 21.9755 25.8988 21.7143 26.4883 21.7143Z"
                      fill="#164E78"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_54_19"
                      x="0.591836"
                      y="0.224487"
                      width="35.2655"
                      height="35.2653"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4.40816" />
                      <feGaussianBlur stdDeviation="2.20408" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_54_19"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_54_19"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </Link>
            </li>
            <li>
              <Link href={"/favorites"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <g filter="url(#filter0_d_54_21)">
                    <path
                      d="M7.03022 15.9265L16.3648 26.1171C16.7523 26.5399 17.2637 26.7755 17.7958 26.7755C18.3279 26.7755 18.8393 26.5399 19.2267 26.1171L28.5613 15.9265C30.1317 14.217 31.0203 11.8188 31.0203 9.31197V8.96161C31.0203 4.73919 28.4115 1.13895 24.8523 0.444277C22.4967 -0.0148134 20.0997 0.885245 18.4157 2.8545L17.7958 3.57938L17.1759 2.8545C15.4918 0.885245 13.0949 -0.0148134 10.7393 0.444277C7.18003 1.13895 4.57129 4.73919 4.57129 8.96161V9.31197C4.57129 11.8188 5.45981 14.217 7.03022 15.9265Z"
                      fill="#164E78"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_54_21"
                      x="0.163126"
                      y="0.326538"
                      width="35.2655"
                      height="35.2653"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4.40816" />
                      <feGaussianBlur stdDeviation="2.20408" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_54_21"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_54_21"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </Link>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
              >
                <g filter="url(#filter0_d_54_23)">
                  <path
                    d="M18.3676 13.3469C20.3718 13.3469 22.2939 12.6503 23.7111 11.4102C25.1282 10.1702 25.9244 8.48836 25.9244 6.73468C25.9244 4.98101 25.1282 3.29915 23.7111 2.05912C22.2939 0.819082 20.3718 0.122437 18.3676 0.122437C16.3634 0.122437 14.4412 0.819082 13.0241 2.05912C11.6069 3.29915 10.8107 4.98101 10.8107 6.73468C10.8107 8.48836 11.6069 10.1702 13.0241 11.4102C14.4412 12.6503 16.3634 13.3469 18.3676 13.3469ZM15.6695 15.8265C9.85429 15.8265 5.14307 19.9488 5.14307 25.0372C5.14307 25.8844 5.92827 26.5714 6.89649 26.5714H29.8386C30.8068 26.5714 31.592 25.8844 31.592 25.0372C31.592 19.9488 26.8808 15.8265 21.0656 15.8265H15.6695Z"
                    fill="#164E78"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_54_23"
                    x="0.734903"
                    y="0.122437"
                    width="35.2655"
                    height="35.2653"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4.40816" />
                    <feGaussianBlur stdDeviation="2.20408" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_54_23"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_54_23"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <Link href={"/register"}>
                <button>register</button>
              </Link>
            </li>
            <li>
              <Link href={"/login"}>
                <button>sing in</button>
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
