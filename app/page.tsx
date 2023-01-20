"use client";

import Footer from "./Footer";
import { useState } from "react";

const Page = () => {
  const units = ["250ml", "8.45oz", "1.042cup", "16.91tablespoons"];
  const cans = 12;
  const [unit, setUnit] = useState(0);
  const switchUnit = () => {
    if (unit < units.length - 1) {
      setUnit(unit + 1);
    } else {
      setUnit(0);
    }
  };

  return (
    <main className="w-screen h-screen m-auto bg-gray-900 flex flex-col justify-center items-center">
      <div className="flex justify-center items-center space-x-[0.5vw] w-max h-max relative z-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="242.13"
          height="183.62"
          viewBox="0 0 242.13 183.62"
        >
          <defs>
            <clipPath id="clip-path">
              <rect
                id="Rectangle_2"
                data-name="Rectangle 2"
                width="484.26"
                height="183.62"
              />
            </clipPath>
            <clipPath id="clip-redbull">
              <rect width="242.13" height="183.62" />
            </clipPath>
          </defs>
          <g id="redbull" clip-path="url(#clip-redbull)">
            <rect width="242.13" height="183.62" fill="#fff" />
            <g id="redbull-2" data-name="redbull" clip-path="url(#clip-path)">
              <rect
                id="Rectangle_1"
                data-name="Rectangle 1"
                width="484.26"
                height="183.62"
                fill="#111827"
              />
              <g
                id="red-bull-logo_logotyp.us"
                data-name="red-bull-logo@logotyp.us"
                transform="translate(-90.567 -162.119)"
              >
                <path
                  id="Path_5"
                  data-name="Path 5"
                  d="M150.983,253.928a91.733,91.733,0,1,1,26.868,64.943,91.811,91.811,0,0,1-26.868-64.943"
                  transform="translate(90.95)"
                  fill="#ffd300"
                />
                <path
                  id="Path_6"
                  data-name="Path 6"
                  d="M259.962,179.93c1.424.71,2.846,1.422,4.506,2.37,6.883,4.747,11.39,8.778,21.828,17.556,3.082,3.085,6.642,8.068,9.251,11.151,5.7,7.118,9.729,12.1,10.439,18.027,1.661,11.86,3.321,18.507,7.83,30.606.471,1.185,2.37,2.846,3.557,4.269,2.846,3.558,4.033,9.251,9.251,12.338a41.483,41.483,0,0,1,4.27,2.609c1.424,1.183-.949,5.457-8.3,4.508,3.8,1.9,3.323,6.169-2.136,6.406a24.206,24.206,0,0,1-18.741-7.357c-.714-.707-2.848,2.136-6.645,3.56-3.8,1.9-9.015,0-13.048.714-3.794.707-8.778,3.082-12.809,3.321-7.118.239-8.066-4.747-8.066-9.017v-1.9a41.894,41.894,0,0,1-3.321,7.118c-.951,2.136-2.375,4.747-4.982,5.7l-7.593.951c-5.933,2.609-11.86,4.506-18.032,6.64a12.7,12.7,0,0,1-10.2-2.133,17.949,17.949,0,0,1-4.508-5.93c-1.185-.473-2.846,0-4.272-.473a5.359,5.359,0,0,1-2.609-1.9l-5.22-8.778a5.9,5.9,0,0,1,0-4.031,5.69,5.69,0,0,1,5.22-2.848c3.8-.239,8.066-1.424,11.863,0,1.661-1.9,4.27-1.661,6.642-2.136-.948-1.422-2.372-2.134-3.56-3.321-6.879,1.66-14.472.473-21.114-.712-6.169-1.422-11.387,2.136-17.556,1.185l-1.9,4.033c-2.848,3.082-3.085,8.3-7.352,10.439-3.087.712-5.46,2.848-8.069,4.27-4.745,2.612-11.151,1.422-16.369.473a10.549,10.549,0,0,0-5.457.712c-1.661,1.187-3.558,3.084-5.457,4.508-3.085,1.185-5.694,3.794-9.015,4.033-1.9,0-3.8-1.187-5.694-.712-2.373,2.612-3.558,6.879-7.354,8.064s-8.539.239-12.336-.71c-1.185.473-1.9,1.422-3.321,1.185a29.431,29.431,0,0,1-7.593-2.846,6.043,6.043,0,0,1-1.422-3.084c0-1.661,1.422-3.087,2.134-4.509.239-1.661.239-4.031.951-5.7,1.185-2.609,3.794-4.267,6.406-5.455a6.141,6.141,0,0,1,3.084-4.509c3.085-1.66,6.406-5.457,10.439-3.321l4.27,3.557c3.8-1.66,2.848-5.457,4.745-8.542.949-2.136,2.136-4.506,4.509-4.506,1.661-.239,3.558.239,5.218,0,2.372-.714,4.982-1.66,6.645-3.56l-.237-1.422c-2.372-4.509-3.085-9.963-3.323-15.423-4.27.475-8.778,1.188-13.286.239-6.64-.951-13.048-6.169-15.657-12.811-2.846-6.406-1.661-15.423,2.846-20.877a77,77,0,0,1,11.863-11.387c-1.424-.475-3.082-.239-4.506-.712-6.169-.949-12.336-6.408-13.76-12.575a15.116,15.116,0,0,1,1.9-11.151c.712-.71,1.424-1.422,2.609-.948,3.085,1.185,4.035,2.846,6.879,4.27l1.661.951c7.827,2.609,18.268,2.609,21.353,12.336,1.9,7.591-2.846,13.287-8.3,17.556-4.27,3.082-8.539,6.879-10.675,11.387-.949,3.321-.475,6.642,2.372,9.015,2.848,2.846,7.83,2.846,11.387,1.424,6.645-2.848,12.814-7.12,18.741-11.626,5.7-4.27,12.575-5.93,19.929-6.169a20.263,20.263,0,0,0,8.778-4.27c4.509-4.27,9.251-7.83,14.945-9.251,2.609-.475,5.22-.714,7.829-.951,2.136-.949,3.558-3.555,5.218-4.745,7.829-6.881,18.268-6.642,26.573-12.1,4.745-3.557,9.963-5.93,16.13-5.694a26.818,26.818,0,0,1,7.83,1.66Zm7.83,80.658c-5.218.239-8.539,1.424-12.1,1.9.236,3.323,2.136,6.169,4.745,9.724,1.424-5.455,5.93-7.591,7.354-11.624"
                  transform="translate(0 19.436)"
                  fill="#ffd300"
                />
                <path
                  id="Path_7"
                  data-name="Path 7"
                  d="M253.246,261.122c2.37,3.557,3.8,7.12,5.93,10.914,2.133-4.033,4.033-7.83,5.93-10.2-.237-.239-6.4.475-11.86-.712m4.982,17.556c-.239.707-.712.946-1.661.946.71,3.323-1.661,9.492-7.591,9.729-4.038.239-10.678-3.8-14.474-4.036-4.035-.236-11.387,2.846-15.657-3.56-5.7,6.883-12.336,8.78-18.029,8.544-3.321,0-6.879-1.9-1.9-6.169-10.914,3.558-10.914-3.8-9.015-5.218a45.765,45.765,0,0,0,6.64-5.694c15.186-15.9,9.49-43.417,26.1-61.683,6.406-7.118,11.626-11.148,24.674-20.4,4.506-3.084,9.015-7.591,13.284-10.677l.239.473V180.7c2.612-1.9,4.982-3.794,7.829-4.506a23.11,23.11,0,0,1,15.9,4.267,29.256,29.256,0,0,1,6.172,5.932c1.422,1.422,3.553,1.422,5.452,2.134a40.084,40.084,0,0,1,14.711,5.93c3.085,1.9,5.7,5.218,9.49,5.7a34.765,34.765,0,0,1,12.575,4.506c4.745,3.084,9.015,6.881,14.711,7.829,11.387,1.185,20.877,7.591,29.892,14,5.218,3.085,11.387,6.642,17.8,4.509a6.369,6.369,0,0,0,3.794-4.036c.473-4.267-2.134-7.591-4.743-10.675-5.459-6.406-14.947-11.86-13.762-21.114,1.663-6.881,9.254-10.914,15.184-12.811,3.321-1.183,7.354-.712,10.2-3.557,1.424-.949,2.134-4.27,4.506-3.085,1.9,1.188,2.136,3.56,2.372,5.694.951,6.645-.473,13.287-6.64,17.085-2.845,1.9-5.93,2.609-9.254,3.321,4.982,4.033,9.963,9.014,12.809,14.708a24.138,24.138,0,0,1,2.848,9.965c-.237,7.118-4.508,13.287-10.675,16.844a24.856,24.856,0,0,1-11.86,2.611c-1.66,0-3.084-.475-4.508-.475a31.99,31.99,0,0,1,0,11.626c-.239,1.9-1.422,4.033-1.422,6.408.948,1.183,2.37,1.183,3.555,1.183,3.085,0,6.881-.239,8.542,3.085,1.424,3.084,2.134,6.642,3.321,9.727.476.473.714,1.663,1.424,1.424,2.136-1.9,4.27-4.508,7.354-3.8,2.848,1.9,5.694,4.035,8.542,6.169a5.229,5.229,0,0,1,1.188,2.846c2.37.951,5.452,2.609,6.169,5.459.468,1.9.234,3.794.71,5.455.712,1.9,2.611,4.269,1.183,6.642l-.948.709-9.015,2.85a3.288,3.288,0,0,1-2.136-1.187c-4.742-.239-10.436,1.187-14.23-2.136a20.644,20.644,0,0,1-4.035-4.979c-2.843,1.424-6.881,2.372-9.724.471-5.932-4.5-11.862-9.012-19.931-8.776-3.557.712-7.827,1.661-11.387.239-3.318-2.375-7.118-3.56-9.727-7.122-3.794-4.031-3.794-8.776-5.218-13.757-5.218,1.185-10.911.473-16.132.239a42.8,42.8,0,0,0-12.336,1.421,68.6,68.6,0,0,1-15.659,1.185l-2.609,1.9c1.183.239,2.372.239,3.321,1.188l.951.944c4.267.478,9.251-.234,13.287.717a4.167,4.167,0,0,1,2.372,2.133,3.772,3.772,0,0,1-.239,3.558c-2.134,2.846-3.321,6.169-6.169,8.539-.71.951-2.843-.234-3.085,1.424-.946,4.269-4.979,7.832-9.015,8.778a11.53,11.53,0,0,1-4.979-.476c-4.982-1.658-9.968-3.082-14.947-4.506-1.658-.473-3.082-2.134-4.506-3.085-2.133,0-5.221.712-6.642-1.185a6.931,6.931,0,0,1-1.66-2.848c-1.675-2.136-2.863-5.935-3.572-9.253"
                  transform="translate(148.111 20.089)"
                  fill="#ffd300"
                />
                <g
                  id="Group_2"
                  data-name="Group 2"
                  transform="translate(94.399 196.996)"
                >
                  <path
                    id="Path_8"
                    data-name="Path 8"
                    d="M255.29,208.3a20.949,20.949,0,0,1,.473,12.1.443.443,0,0,1-.712,0,77.457,77.457,0,0,0-2.609-9.963c-.712-1.9-3.084-3.557-2.136-5.7a2.237,2.237,0,0,1,2.136-.237,22.591,22.591,0,0,1,2.848,3.8m37.958,33.21c2.611,3.085,4.508,6.408,3.56,10.439-.475.712-.239,2.134-1.424,2.372-.475.239-.949-.239-.949-.712-.236-2.134-.236-4.506-1.424-6.169-1.424-1.421-3.085-4.27-5.455-4.27-1.66.475-2.848,2.377-3.8,3.558,0,.241-.239.241-.475,0-.948-2.37.949-4.267,1.661-6.167,1.424-1.422,1.185-5.457,4.27-4.27,2.136,1.426,2.612,3.8,4.033,5.218m-4.979,28.231c.236,1.424.236,3.56-1.187,4.509a11.542,11.542,0,0,1-4.979.475c-.475-.239-.951-.475-.714-.951a7.837,7.837,0,0,1,5.223-4.982c.471,0,1.419,0,1.658.948M115.085,183.153c5.694,1.422,11.863,1.422,16.132,5.928,2.372,2.846,2.609,7.829.712,10.675-3.321,5.7-9.963,8.544-14,13.526-4.031,3.321-5.455,8.542-4.27,13.76a11.758,11.758,0,0,0,10.439,7.827c7.118.239,12.338-3.319,18.029-6.642,5.7-4.033,10.914-9.251,17.32-10.912,4.27-1.426,9.015-.712,13.284-2.372,4.508-.949,8.066-4.747,11.626-8.066a20.313,20.313,0,0,1,14-4.979c4.745.71,7.354-3.56,10.675-6.41,5.457-4.979,12.575-5.452,18.978-8.3,4.509-1.424,8.068-4.745,12.338-6.879,4.033-1.663,9.49-2.136,13.523-.475a36.2,36.2,0,0,1,7.829,4.27l19.217,16.132a2.775,2.775,0,0,0,1.422,1.424C287.8,208.3,293.49,214.708,298,222.06a32.6,32.6,0,0,1,2.846,8.068c.948,10.914,3.8,20.4,7.354,29.892.951,1.424,2.848,2.612,3.8,4.033,3.085,4.27,4.979,9.727,9.963,12.575l2.848,1.424a.723.723,0,0,1,0,.948l-.475.473c-5.93.951-10.436-2.609-13.523-6.881-1.9-3.794-4.506-7.827-8.776-9.49a.824.824,0,0,0-.475.239c.475,1.424,1.9,2.373,2.37,3.558a29.079,29.079,0,0,1,3.8,8.3c.949,3.087,4.27,5.221,6.879,6.881l3.8,1.9a.892.892,0,0,1,.237,1.422l-.473.239A21.008,21.008,0,0,1,301.552,279a5.3,5.3,0,0,0-4.033-2.134c-2.848,2.609-5.7,4.982-9.49,5.218-4.033-.712-8.3-.712-11.863.712-3.321,1.185-6.645,2.609-10.2,2.609a4.521,4.521,0,0,1-4.272-2.372c0-2.136-1.424-4.509-.236-6.64l2.372-3.557c0-.473-.239-.951-.712-.951-.951-.239-2.611,1.424-3.082-.239.236-3.557,3.794-5.93,6.167-8.3a15.116,15.116,0,0,1,3.8-7.827.759.759,0,0,0-.714-.714,61.142,61.142,0,0,1-9.49,1.185c-2.611,1.426-5.93,2.375-9.015,1.426-.712-.475-.475-1.187-.239-1.663a20.469,20.469,0,0,0,3.56-15.657c-.239-.239-.239-.714-.714-.714s-.473.475-.71.714a32.577,32.577,0,0,1-5.22,13.76c-2.136,2.134-5.455,2.134-8.3,2.848a2.03,2.03,0,0,0-1.424,1.661c0,1.9,1.185,3.084,1.9,4.743L245.8,274.5c.239,3.082-1.185,6.169-1.9,9.014.236.473.712.237,1.187,0a16.783,16.783,0,0,0,4.509-7.354,6.04,6.04,0,0,0-.714-3.56l-6.4-12.809c.473-.71,1.424-.71,2.133-.951a14.349,14.349,0,0,1,4.27,1.188c1.424,3.794,3.084,7.83,5.694,11.148.475,2.136,1.187,4.982-.234,6.645a53.214,53.214,0,0,1-4.745,7.827c-1.663,1.66-4.033,1.422-6.408,1.66h-.712c-5.7,3.085-11.626,4.982-17.793,6.881-2.611,1.185-5.7.236-7.829-1.424s-3.085-4.031-4.509-6.167c-1.66-2.136-4.267-.239-6.167-1.422a90.021,90.021,0,0,1-4.745-8.068,1.974,1.974,0,0,1,.712-1.9,32.324,32.324,0,0,1,6.879-.948,7.377,7.377,0,0,1,5.93,1.66c2.846,3.321,4.033,7.829,8.3,9.963a16.851,16.851,0,0,0,9.015-2.134c1.661-.948,3.558-2.372,3.558-4.508-.237-4.267-3.082-7.591-6.642-9.963a31.688,31.688,0,0,1-9.963-7.827c-1.426-1.9-1.661-4.033-2.373-5.93a1.116,1.116,0,0,0-1.424-.241c-1.421,1.187-.236,3.321-.236,4.747.236.948.712,2.131.236,2.848-2.133,1.661-4.979.707-7.593.946-5.218-.239-10.2-2.37-15.657-1.9-5.221.237-12.336,3.8-16.132-1.421-1.9-4.979-1.424-10.912-.473-15.9a1.022,1.022,0,0,0-.951-.948.865.865,0,0,0-1.185.473c-1.424,4.982-1.661,10.438-2.846,15.657-1.9,4.508-5.221,9.251-9.727,11.624-4.033,2.136-8.778,2.848-13.76,3.326-9.015.237-17.317,1.9-23.011,9.724-.473.714-1.185,1.422-.948,2.372.236.237.948.473,1.185.237,6.169-6.876,14-9.724,23.013-9.249,8.539,0,17.081-1.424,22.535-8.78a40.1,40.1,0,0,0,3.558-5.218c.949,0,1.661,1.187,2.372,1.663.236,2.609-1.9,4.267-2.848,6.406-1.185,2.373-2.372,5.218-4.745,6.64-2.846.712-5.221,2.612-7.827,4.035a14.509,14.509,0,0,1-9.017.951c-3.8-.712-9.014-1.66-12.811,0-1.9,1.183-3.558,3.321-5.457,4.509-2.609,1.183-4.982,3.321-8.066,3.082-2.134-.473-4.745-1.9-6.642,0-2.372,2.134-2.848,5.932-5.93,7.354-3.558,1.9-7.354,0-10.914-.237.475-3.56.949-6.881,3.321-9.49a7.446,7.446,0,0,0,3.8-1.427A15.877,15.877,0,0,0,112,282.8c3.085-1.9,6.644-3.323,8.542-6.642,1.424-3.082,1.424-5.93,3.8-8.778l1.185-.476,6.406-.473a32.808,32.808,0,0,0,7.354-4.272,3.406,3.406,0,0,0,.714-3.08,51.793,51.793,0,0,1-2.848-8.542c-.712-3.321-.237-6.644-.712-10.439-.239-.239-.475-.948-.949-.948-4.27.948-8.305,2.134-13.048,1.422-6.406-.712-13.048-4.982-15.423-11.387-2.134-5.459-1.661-13.289,2.373-17.793,3.8-4.745,8.539-8.3,13.287-12.338.712-.475.712-1.422.949-2.136,0-.949-.949-1.661-1.661-2.131-2.846-.714-6.167.237-9.015-.953a14.548,14.548,0,0,1-9.49-11.621,9.215,9.215,0,0,1,1.424-6.169c3.806,3.319,6.652,6.167,10.212,7.115M100.85,289.2v.712A89.515,89.515,0,0,0,98,299.4a19.9,19.9,0,0,1-5.7-1.663c-.473-.471,0-.946,0-1.422,2.136-1.9,1.424-4.267,1.9-6.879.239-1.422,1.661-2.611,3.085-3.323,1.661.237,2.611,1.9,3.56,3.085m10.439-9.966c-1.187,2.375-2.848,5.22-5.457,6.642a4.6,4.6,0,0,1-3.082-.237c-.475-.471-1.424-.951-1.424-1.9.237-.948-.239-2.134.712-2.611a41.5,41.5,0,0,0,5.694-4.033c.473-.237,1.424-.473,1.661,0,.946.717,1.661,1.192,1.9,2.138m118.854-.946c.236.946,1.66,2.134.712,3.082a9.356,9.356,0,0,1-6.642,2.136c-1.9-1.424-1.661-4.035-3.321-5.932-.475-1.422-2.611-1.422-2.136-2.843l.712-.475a43.522,43.522,0,0,0,7.83-.473c2.609-.241,1.9,2.843,2.846,4.506"
                    transform="translate(-92.099 -176.038)"
                    fill="#e21b4d"
                  />
                  <path
                    id="Path_9"
                    data-name="Path 9"
                    d="M232.647,238.51a26.278,26.278,0,0,1,3.557,6.169,1.575,1.575,0,0,1-.239,1.426c-.237.471-.712.948-1.424.471-1.66-.471-1.422-3.084-3.555-2.845-1.424,0-2.375,1.185-3.56,1.9-2.134,1.9-4.979,3.8-5.455,6.642-.475.951-.241,2.611-1.187,3.087a.906.906,0,0,1-1.185-.712,12.709,12.709,0,0,1,3.557-9.965c2.611-2.134,4.506-5.218,6.645-7.829a2.693,2.693,0,0,1,2.846,1.66m.948,31.552c.473.951,1.422,2.136.714,3.323-.953.709-2.614.239-3.8.239-1.422-.717-1.9-2.612-1.9-4.272a1.3,1.3,0,0,1,.475-1.185,5.6,5.6,0,0,1,4.509,1.895m35.585-72.6c.712.953,0,1.9-.473,2.614-3.321,3.082-7.354,6.4-9.729,10.2a13.085,13.085,0,0,0-2.131,4.033c0,.237-.239.237-.475.237-.712-1.9.239-4.033.712-5.928,1.66-4.509,5.455-8.778,9.492-11.86.468-.241,2.129-.48,2.6.7M282.7,182.284c2.611,1.66,3.557,5.218,6.642,5.93,5.218,1.185,10.439,2.375,15.184,4.745a49.287,49.287,0,0,1,9.492,6.645c2.843,1.422,6.406,1.422,9.49,2.37,4.506,1.185,8.066,4.506,12.1,7.118,5.221,4.033,12.575,3.56,18.507,6.169,9.49,3.084,17.081,10.439,25.859,14.708,4.5,2.375,11.39,3.323,15.893.714,3.087-2.136,4.982-4.982,4.272-9.014-1.663-9.727-12.338-14.711-17.317-22.777a10.728,10.728,0,0,1-1.187-6.64c1.9-4.748,6.881-7.354,11.151-9.015,3.321-1.66,7.591-1.185,10.675-3.087a15.171,15.171,0,0,0,2.846-2.37c.71,0,.71.71.949,1.183.949,5.7,0,11.628-4.982,14.947-1.9,1.421-4.269,1.9-6.406,2.372-1.9.712-5.694-.712-5.457,2.609.473,1.663,1.9,2.611,3.085,3.8,6.644,5.457,12.811,12.575,13.521,21.114.239,6.645-4.267,12.338-9.963,15.184a23.553,23.553,0,0,1-14,1.185c-1.185-.237-3.082-1.424-4.033.236-.239,1.9.951,3.324.951,4.982a24.886,24.886,0,0,1-.473,10.2c-.475,2.373-2.845,5.216-.714,7.591,2.138,3.321,6.408,2.37,9.966,2.846,1.9.239,2.614,2.372,3.084,3.794.712,1.9.712,4.036,1.422,5.46,0,3.557,4.035,4.979,5.932,7.352,2.372,2.611,4.506,7.118,8.542,6.881a27.135,27.135,0,0,1,2.611,8.778l-.478.475c-3.321,0-7.827.948-10.2-1.424-2.848-1.9-3.8-7.117-8.066-5.7a6.752,6.752,0,0,1-6.642.951c-2.131-.712-3.557-2.611-5.454-3.8a25.449,25.449,0,0,0-20.641-4.743c-4.27,1.183-7.591-1.9-10.914-3.8-4.508-1.9-5.7-6.64-6.642-10.677l-.712-4.979a1.571,1.571,0,0,1,.949-1.183h.712c2.611,5.928,7.6,12.572,14,14.706,5.93,2.375,11.39-.712,17.8.475,5.93.712,10.673,4.508,15.181,8.066.473,0,.712-.239.951-.714v-.471c-5.459-6.881-13.05-10.439-21.828-9.727-7.352,1.424-14.469-.951-18.739-7.12a29.819,29.819,0,0,1-4.745-11.385,69.178,69.178,0,0,0-3.323-14.235c-.471-.239-.948-.712-1.422-.473l-.473.712c.71,4.508,2.134,9.963.473,14.708-1.185,3.8-4.979,5.221-8.539,5.459s-6.879-.475-10.677-.475c-8.542-.239-16.132,3.085-24.908,2.372.71-2.134,2.131-4.272,1.422-6.642-.239-.473-.949-.473-1.422-.473-1.665.948-1.426,3.084-2.375,4.506a14.981,14.981,0,0,1-9.012,6.642,48.989,48.989,0,0,0-7.12,6.881,3.5,3.5,0,0,0-.471,3.085c1.661,4.267,6.637,4.747,10.436,5.93a4.307,4.307,0,0,0,4.506-2.134c1.66-2.611,1.9-6.881,5.7-7.354h8.3a3.168,3.168,0,0,1,1.661,1.424l-.237,1.183c-1.9,2.136-2.609,5.218-4.979,6.642-1.422.475-3.084,0-4.035,1.185-.473,2.848-1.185,5.93-4.036,7.354-2.133,1.9-5.213.951-7.591.236-4.506-1.66-9.015-2.609-13.521-4.033-1.9-.473-2.611-2.843-4.745-3.321-1.9-.475-4.036.951-5.694-.712a24.7,24.7,0,0,1-1.9-5.933,15.593,15.593,0,0,1-1.422-4.742,5.969,5.969,0,0,1,.471-3.56L266.1,260.34a3.759,3.759,0,0,1,1.663-1.663,17.327,17.327,0,0,1,4.508,1.663l-.239.707-6.406,9.729c-1.424,3.085,0,6.64,1.422,9.251.239.239.473.714.712.475a16.58,16.58,0,0,1,0-5.93,21.566,21.566,0,0,1,2.609-5.221L275.348,262a4.609,4.609,0,0,0-.473-4.27c-2.134-2.131-5.218-2.846-7.117-5.691-4.033-5.46-4.509-11.863-4.979-18.744a1.751,1.751,0,0,0-1.187-1.422c-.473-.239-.946.473-1.183.712-1.187,4.506-.475,9.963.71,14a41.955,41.955,0,0,0,3.557,9.017c.239.471-.239,1.183-.709,1.422a43.855,43.855,0,0,1-9.727-.473c-4.27-.712-7.357-4.035-10.917-6.642-.471-.239-.709.237-.948.473.948,4.745,6.169,7.591,7.83,11.86.948,3.558,4.509,6.169,5.221,9.966a1.954,1.954,0,0,1-.948,1.424c-1.185.237-2.375-.475-3.558.237-.241,2.133,1.183,4.267.234,6.167-1.183,1.9-2.843,4.038-4.979,4.038-4.27-1.426-8.542-3.323-12.811-4.508a55.839,55.839,0,0,0-9.015.471c-2.846-.471-4.745-3.082-6.879-4.506a1.794,1.794,0,0,0-1.9.239c-4.745,4.745-9.963,9.963-17.081,9.727-.475,0-.714-.475-.714-.951v-.471c3.085-2.85,6.881-5.7,8.3-9.729.948-3.321,3.794-5.7,4.979-8.778.236-.471-.237-.709-.707-.948l-.717.475c-3.555,3.555-6.164,7.591-8.776,11.385A11.161,11.161,0,0,1,190.42,279.8c-.473-.234-.473-.946-.237-1.422,14.711-9.015,16.369-25.147,20.4-39.857,2.846-9.727,4.979-19.687,12.572-27.519,11.387-12.572,25.622-19.929,38.2-30.843,1.9-1.66,3.8-3.321,6.167-3.321,6.164-.478,10.911,1.9,15.179,5.452M418.169,287.145c1.183,1.66.709,4.269,1.183,6.167.239,1.424,2.134,2.614,1.185,4.035l-5.218,1.661c-.951,0-.476-1.185-.951-1.661a44.447,44.447,0,0,0-2.134-8.066c-.236-1.658,1.424-2.846,2.609-3.794,1.185-.478,2.136.946,3.326,1.658m-12.1-10.678c1.9,1.661,4.506,2.848,5.93,4.982.237.951-.476,1.9-.951,2.614a3.941,3.941,0,0,1-2.848,1.183,3.618,3.618,0,0,1-2.845-1.663c-1.185-1.9-2.846-3.558-3.321-5.457.714-1.183,2.375-3.08,4.035-1.658m-114.348-1.9a21.378,21.378,0,0,1-1.9,6.64c-.707,1.424-2.846.951-4.267.712-1.424-.473-3.8-.712-4.035-2.843a8.082,8.082,0,0,1,1.663-5.22c2.134-.237,4.745.236,6.879-.237.946,0,1.661.237,1.661.948"
                    transform="translate(55.333 -174.935)"
                    fill="#e21b4d"
                  />
                </g>
              </g>
              <path
                id="Rectangle_1-2"
                data-name="Rectangle 1"
                d="M0,0H287V250H0Z"
                transform="translate(242 -32.231)"
                fill="#111827"
              />
            </g>
          </g>
        </svg>

        <div className="flex justify-start items-start flex-col">
          <h1 className="text-[10vw] mb-[-3vw] mt-[-7vh] font-semibold text-redbullYellow">
            {cans}
          </h1>
          <h2 className="font-medium text-redbullRed">
            <button onClick={switchUnit}>{units[unit]}</button> RedBull cans in
            2023 ({0.97 * cans} €)
          </h2>
        </div>
      </div>
      <div className="m-auto absolute bottom-[1vw] w-screen h-screen flex justify-center items-end z-10">
        <Footer />
      </div>
    </main>
  );
};

export default Page;
