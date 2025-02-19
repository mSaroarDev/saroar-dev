import { ArrowRight, Atom, CodeXml, Dribbble, Twitter } from "lucide-react";
import CountCard from "../components/CountCard";
import EducationCard from "../components/EducationCard";
import ServicesCard from "../components/ServicesCard";
import CarouselTestimonial from "../components/Carousel";
import BlogCard from "../components/BlogCard";
import Appnav from "../components/Appnav";
import ProgressBar from "../components/ProgressBar";
import TypeText from "../components/TypeText";
import PortfolioSection from "../components/PortfolioSection";

export default function Homepage() {
  return (
    <>
      <Appnav />

      {/* hero section start */}
      <section className="px-5 bg-slate-50">
        <main>
          <div className="h-fit md:h-[600px] w-full flex justify-between flex-col md:flex-row ">
            <div className="w-full md:w-1/2 flex items-center justify-start">
              <div className="mt-14 md:mt-0">
                <p className="text-[20px] md:text-[25px] flex items-center gap-4">
                  <span>Hello Mate</span>
                  <img
                    src="/wave.webp"
                    alt=""
                    className="w-[35px] waving-hand"
                  />
                </p>
                <p className="text-[42px] md:text-[45px] font-medium">
                  {"I'm Saroar"}
                </p>
                <p className="text-[30px] md:text-[40px] font-light flex items-center gap-3">
                  A{" "}
                  <span className="text-brandColor">
                    <TypeText />
                  </span>
                </p>
                <p className="mt-5 text-sm font-light">
                  {
                    "Hi, I'am a Full Stack Web Developer and Web Application Expert from Bangladesh. I develop quality applications that improve user experieces."
                  }
                </p>

                <div className="flex items-start md:items-center gap-5 mt-10">
                  {/* <button
                    onClick={() =>
                      document.getElementById("my_modal_5").showModal()
                    }
                    className="button-brand flex items-center gap-3 border border-bg-brandColor"
                  >
                    <span>Send Message </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </button> */}
                  <a
                    href="/cv-saroar.pdf"
                    download="CV of Saroar Jahan (Full Stack Web Developer)"
                    className="button-brand flex items-center gap-3 border border-bg-brandColor"
                  >
                    <span>Download CV</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex items-end justify-center pt-20">
              <img src="/saroar2.png" alt="" className="w-full" />
            </div>
          </div>
        </main>
      </section>
      {/* hero section end */}

      {/* about section start */}
      <section id="about" className="py-12 md:py-20 px-5 bg-white">
        <main>
          <div className="grid grid-cols-12 gap-7">
            <div className="col-span-12 md:col-span-6 flex items-end justify-center order-2 md:order-1 mt-5 md:mt-0">
              <img
                src="/saraor3.png"
                alt=""
                className="h-[400px] md:h-[500px] mt-3"
              />
            </div>
            <div className="col-span-12 md:col-span-6 flex items-center order-1 md:order-2">
              <div>
                <h6 className="text-[15px] font-medium text-brandColor uppercase">
                  About Me
                </h6>
                <h3 className="text-[27px] text-black font-medium mt-3">
                  More than 3+ Years Programming Experience
                </h3>
                <p className="font-light mt-5">
                  {`Hello, I'm Saroar Jahan, a versatile web developer proficient
                  in HTML, CSS, JavaScript, React.js, Next.js & Express Js. With
                  expertise in WordPress and Elementor, I specialize in crafting
                  dynamic and user-friendly websites. With over 3+ years of
                  programming experience, I bring creativity and technical
                  proficiency to every project, ensuring a seamless online
                  experience for your audience.`}
                </p>

                <div className="mt-5 grid grid-cols-12 gap-3">
                  <div className="col-span-12 md:col-span-6">
                    <span className="font-medium">Name:</span>{" "}
                    <span className="font-light">Muhammad Saroar</span>
                  </div>

                  <div className="col-span-12 md:col-span-6">
                    <span className="font-medium">Location:</span>{" "}
                    <span className="font-light">Rajshahi, Bangladesh</span>
                  </div>

                  <div className="col-span-12 md:col-span-6">
                    <span className="font-medium">Email:</span>{" "}
                    <span className="font-light">msaroar.dev@gmail.com</span>
                  </div>

                  <div className="col-span-12 md:col-span-6">
                    <span className="font-medium">Office:</span>{" "}
                    <span className="font-light">Darusha, Paba, Rajshahi</span>
                  </div>
                </div>

                <div className="mt-7 flex flex-col md:flex-row gap-5 md:gap-10 items-start md:items-center">
                  <button className="bg-brandColor text-white px-7 py-3 rounded flex items-center gap-3">
                    <span>Download CV</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                      />
                    </svg>
                  </button>
                  <div className="flex gap-5 items-center">
                    <span className="text-gray-800">Follow Me:</span>
                    <a href="https://www.facebook.com/msaroar.dev" className="text-gray-800">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="30"
                        height="30"
                        viewBox="0 0 48 48"
                      >
                        <linearGradient
                          id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1"
                          x1="9.993"
                          x2="40.615"
                          y1="9.993"
                          y2="40.615"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0" stopColor="#2aa4f4"></stop>
                          <stop offset="1" stopColor="#007ad9"></stop>
                        </linearGradient>
                        <path
                          fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)"
                          d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
                        ></path>
                        <path
                          fill="#fff"
                          d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"
                        ></path>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-800">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="30"
                        height="30"
                        viewBox="0 0 48 48"
                      >
                        <path
                          fill="#03A9F4"
                          d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"
                        ></path>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-800">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="30"
                        height="30"
                        viewBox="0 0 48 48"
                      >
                        <path
                          fill="#FF3D00"
                          d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"
                        ></path>
                        <path fill="#FFF" d="M20 31L20 17 32 24z"></path>
                      </svg>
                    </a>
                    <a href="https://github.com/mSaroarDev" className="text-gray-800">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="30"
                        height="30"
                        viewBox="0 0 48 48"
                      >
                        <linearGradient
                          id="rL2wppHyxHVbobwndsT6Ca_AZOZNnY73haj_gr1"
                          x1="4"
                          x2="44"
                          y1="23.508"
                          y2="23.508"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0" stopColor="#4c4c4c"></stop>
                          <stop offset="1" stopColor="#343434"></stop>
                        </linearGradient>
                        <path
                          fill="url(#rL2wppHyxHVbobwndsT6Ca_AZOZNnY73haj_gr1)"
                          d="M24,4C12.954,4,4,12.954,4,24c0,8.887,5.801,16.411,13.82,19.016h12.36	C38.199,40.411,44,32.887,44,24C44,12.954,35.046,4,24,4z"
                        ></path>
                        <path
                          d="M30.01,41.996L30,36.198c0-0.939-0.22-1.856-0.642-2.687c5.641-1.133,8.386-4.468,8.386-10.177	c0-2.255-0.665-4.246-1.976-5.92c0.1-0.317,0.174-0.645,0.22-0.981c0.188-1.369-0.023-2.264-0.193-2.984l-0.027-0.116	c-0.186-0.796-0.409-1.364-0.418-1.388l-0.111-0.282l-0.111-0.282l-0.302-0.032l-0.303-0.032c0,0-0.199-0.021-0.501-0.021	c-0.419,0-1.04,0.042-1.627,0.241l-0.196,0.066c-0.74,0.249-1.439,0.485-2.417,1.069c-0.286,0.171-0.599,0.366-0.934,0.584	C27.334,12.881,25.705,12.69,24,12.69c-1.722,0-3.365,0.192-4.889,0.571c-0.339-0.22-0.654-0.417-0.942-0.589	c-0.978-0.584-1.677-0.819-2.417-1.069l-0.196-0.066c-0.585-0.199-1.207-0.241-1.626-0.241c-0.302,0-0.501,0.021-0.501,0.021	l-0.302,0.032l-0.3,0.031l-0.112,0.281l-0.113,0.283c-0.01,0.026-0.233,0.594-0.419,1.391l-0.027,0.115	c-0.17,0.719-0.381,1.615-0.193,2.983c0.048,0.346,0.125,0.685,0.23,1.011c-1.285,1.666-1.936,3.646-1.936,5.89	c0,5.695,2.748,9.028,8.397,10.17c-0.194,0.388-0.345,0.798-0.452,1.224c-0.197,0.067-0.378,0.112-0.538,0.137	c-0.238,0.036-0.487,0.054-0.739,0.054c-0.686,0-1.225-0.134-1.435-0.259c-0.313-0.186-0.872-0.727-1.414-1.518	c-0.463-0.675-1.185-1.558-1.992-1.927c-0.698-0.319-1.437-0.502-2.029-0.502c-0.138,0-0.265,0.01-0.376,0.028	c-0.517,0.082-0.949,0.366-1.184,0.78c-0.203,0.357-0.235,0.773-0.088,1.141c0.219,0.548,0.851,0.985,1.343,1.255	c0.242,0.133,0.765,0.619,1.07,1.109c0.229,0.368,0.335,0.63,0.482,0.992c0.087,0.215,0.183,0.449,0.313,0.732	c0.47,1.022,1.937,1.924,2.103,2.023c0.806,0.483,2.161,0.638,3.157,0.683l0.123,0.003c0,0,0.001,0,0.001,0	c0.24,0,0.57-0.023,1.004-0.071v2.613c0.002,0.529-0.537,0.649-1.25,0.638l0.547,0.184C19.395,43.572,21.645,44,24,44	c2.355,0,4.605-0.428,6.703-1.176l0.703-0.262C30.695,42.538,30.016,42.422,30.01,41.996z"
                          opacity=".05"
                        ></path>
                        <path
                          d="M30.781,42.797c-0.406,0.047-1.281-0.109-1.281-0.795v-5.804c0-1.094-0.328-2.151-0.936-3.052	c5.915-0.957,8.679-4.093,8.679-9.812c0-2.237-0.686-4.194-2.039-5.822c0.137-0.365,0.233-0.75,0.288-1.147	c0.175-1.276-0.016-2.086-0.184-2.801l-0.027-0.116c-0.178-0.761-0.388-1.297-0.397-1.319l-0.111-0.282l-0.303-0.032	c0,0-0.178-0.019-0.449-0.019c-0.381,0-0.944,0.037-1.466,0.215l-0.196,0.066c-0.714,0.241-1.389,0.468-2.321,1.024	c-0.332,0.198-0.702,0.431-1.101,0.694C27.404,13.394,25.745,13.19,24,13.19c-1.762,0-3.435,0.205-4.979,0.61	c-0.403-0.265-0.775-0.499-1.109-0.699c-0.932-0.556-1.607-0.784-2.321-1.024l-0.196-0.066c-0.521-0.177-1.085-0.215-1.466-0.215	c-0.271,0-0.449,0.019-0.449,0.019l-0.302,0.032l-0.113,0.283c-0.009,0.022-0.219,0.558-0.397,1.319l-0.027,0.116	c-0.169,0.715-0.36,1.524-0.184,2.8c0.056,0.407,0.156,0.801,0.298,1.174c-1.327,1.62-1.999,3.567-1.999,5.795	c0,5.703,2.766,8.838,8.686,9.806c-0.395,0.59-0.671,1.255-0.813,1.964c-0.33,0.13-0.629,0.216-0.891,0.256	c-0.263,0.04-0.537,0.06-0.814,0.06c-0.69,0-1.353-0.129-1.69-0.329c-0.44-0.261-1.057-0.914-1.572-1.665	c-0.35-0.51-1.047-1.417-1.788-1.755c-0.635-0.29-1.298-0.457-1.821-0.457c-0.11,0-0.21,0.008-0.298,0.022	c-0.366,0.058-0.668,0.252-0.828,0.534c-0.128,0.224-0.149,0.483-0.059,0.708c0.179,0.448,0.842,0.85,1.119,1.002	c0.335,0.184,0.919,0.744,1.254,1.284c0.251,0.404,0.37,0.697,0.521,1.067c0.085,0.209,0.178,0.437,0.304,0.712	c0.331,0.719,1.353,1.472,1.905,1.803c0.754,0.452,2.154,0.578,2.922,0.612l0.111,0.002c0.299,0,0.8-0.045,1.495-0.135v3.177	c0,0.779-0.991,0.81-1.234,0.81c-0.031,0,0.503,0.184,0.503,0.184C19.731,43.64,21.822,44,24,44c2.178,0,4.269-0.36,6.231-1.003	C30.231,42.997,30.812,42.793,30.781,42.797z"
                          opacity=".07"
                        ></path>
                        <path
                          fill="#fff"
                          d="M36.744,23.334c0-2.31-0.782-4.226-2.117-5.728c0.145-0.325,0.296-0.761,0.371-1.309	c0.172-1.25-0.031-2-0.203-2.734s-0.375-1.25-0.375-1.25s-0.922-0.094-1.703,0.172s-1.453,0.469-2.422,1.047	c-0.453,0.27-0.909,0.566-1.27,0.806C27.482,13.91,25.785,13.69,24,13.69c-1.801,0-3.513,0.221-5.067,0.652	c-0.362-0.241-0.821-0.539-1.277-0.811c-0.969-0.578-1.641-0.781-2.422-1.047s-1.703-0.172-1.703-0.172s-0.203,0.516-0.375,1.25	s-0.375,1.484-0.203,2.734c0.077,0.562,0.233,1.006,0.382,1.333c-1.31,1.493-2.078,3.397-2.078,5.704	c0,5.983,3.232,8.714,9.121,9.435c-0.687,0.726-1.148,1.656-1.303,2.691c-0.387,0.17-0.833,0.33-1.262,0.394	c-1.104,0.167-2.271,0-2.833-0.333s-1.229-1.083-1.729-1.813c-0.422-0.616-1.031-1.331-1.583-1.583	c-0.729-0.333-1.438-0.458-1.833-0.396c-0.396,0.063-0.583,0.354-0.5,0.563c0.083,0.208,0.479,0.521,0.896,0.75	c0.417,0.229,1.063,0.854,1.438,1.458c0.418,0.674,0.5,1.063,0.854,1.833c0.249,0.542,1.101,1.219,1.708,1.583	c0.521,0.313,1.562,0.491,2.688,0.542c0.389,0.018,1.308-0.096,2.083-0.206v3.75c0,0.639-0.585,1.125-1.191,1.013	C19.756,43.668,21.833,44,24,44c2.166,0,4.243-0.332,6.19-0.984C29.585,43.127,29,42.641,29,42.002v-5.804	c0-1.329-0.527-2.53-1.373-3.425C33.473,32.071,36.744,29.405,36.744,23.334z M11.239,32.727c-0.154-0.079-0.237-0.225-0.185-0.328	c0.052-0.103,0.22-0.122,0.374-0.043c0.154,0.079,0.237,0.225,0.185,0.328S11.393,32.806,11.239,32.727z M12.451,33.482	c-0.081,0.088-0.255,0.06-0.389-0.062s-0.177-0.293-0.096-0.381c0.081-0.088,0.255-0.06,0.389,0.062S12.532,33.394,12.451,33.482z M13.205,34.732c-0.102,0.072-0.275,0.005-0.386-0.15s-0.118-0.34-0.016-0.412s0.275-0.005,0.386,0.15	C13.299,34.475,13.307,34.66,13.205,34.732z M14.288,35.673c-0.069,0.112-0.265,0.117-0.437,0.012s-0.256-0.281-0.187-0.393	c0.069-0.112,0.265-0.117,0.437-0.012S14.357,35.561,14.288,35.673z M15.312,36.594c-0.213-0.026-0.371-0.159-0.353-0.297	c0.017-0.138,0.204-0.228,0.416-0.202c0.213,0.026,0.371,0.159,0.353,0.297C15.711,36.529,15.525,36.62,15.312,36.594z M16.963,36.833c-0.227-0.013-0.404-0.143-0.395-0.289c0.009-0.146,0.2-0.255,0.427-0.242c0.227,0.013,0.404,0.143,0.395,0.289	C17.381,36.738,17.19,36.846,16.963,36.833z M18.521,36.677c-0.242,0-0.438-0.126-0.438-0.281s0.196-0.281,0.438-0.281	c0.242,0,0.438,0.126,0.438,0.281S18.762,36.677,18.521,36.677z"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
      {/* about section end */}

      {/* skill set section start */}
      <section id="skill" className="py-12 md:py-20 px-5 bg-body">
        <main>
          <div className="grid grid-cols-12 gap-0 md:gap-7 lg:gap-14">
            <div className="col-span-12 md:col-span-6 w-full">
              <h6 className="text-[15px] font-medium text-brandColor uppercase">
                SkillSet
              </h6>
              <h3 className="text-[27px] text-black font-medium mt-3">
                Creative & Professional Skills Experience on Various Projects
              </h3>
              <p className="font-light mt-5">
                Experienced web developer skilled in HTML, CSS, JavaScript,
                React.js, Next.js, Express Js, WordPress, and Elementor.
                Combining creativity with professionalism, I bring over 3 years
                of diverse project experience to every task, ensuring tailored
                solutions and outstanding results.
              </p>

              <div className="mt-7 flex flex-col md:flex-row gap-5 md:gap-10 items-start md:items-center">
                <button className="bg-brandColor text-white px-7 py-3 rounded flex items-center gap-3">
                  <span>Get any Project</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 w-full mt-10 md:mt-5 lg:mt-0">
              <ProgressBar percent={90} text="Webpage Design" />
              <ProgressBar percent={80} text="Frontend Development" />
              <ProgressBar percent={85} text="Backend Development" />
              <ProgressBar percent={90} text="Wordpress" />
            </div>
          </div>
        </main>
      </section>
      {/* skill set section end */}

      {/* expertise section start */}
      <section id="services" className="py-12 md:py-20 px-5 bg-white">
        <main>
          <h6 className="text-[15px] font-medium text-brandColor uppercase text-center">
            My Expertise
          </h6>
          <h3 className="text-[27px] text-black font-medium mt-3 text-center">
            Awesome Services For You
          </h3>

          {/* main content */}
          <div className="grid grid-cols-12 items-center justify-center gap-5 md:gap-10 mt-7">
            <ServicesCard
              icon={<Dribbble />}
              text="Web Design"
              description="Experienced web designer creating visually captivating sites with HTML, CSS, and JavaScript."
              link={""}
            />
            <ServicesCard
              icon={<CodeXml />}
              text="Web Development"
              description="Seasoned web developer adept in HTML, CSS, and JavaScript, crafting dynamic online experiences."
              link={""}
            />
            <ServicesCard
              icon={<Atom />}
              text="Wordpress"
              description="Skilled WordPress developer specializing in creating customizable and user-friendly websites."
              link={""}
            />
          </div>
        </main>
      </section>
      {/* expertise section end */}

      {/* count down section */}
      <section className="py-10">
        <main>
          <div className="grid grid-cols-12 border-y border-gray-300">
            <CountCard text="Happy Clients" value={10} />
            <CountCard
              text="Years of Experience"
              value={3}
              extraClassname="border-l md:border-x border-gray-300"
            />
            <CountCard
              text="Hourse Worked"
              value={"10K"}
              extraClassname="border-r border-gray-300"
            />
            <CountCard text="Award Won" value={1} />
          </div>
        </main>
      </section>
      {/* count down section end */}

      {/* education and experience start */}
      <section className="py-20">
        <main className="px-5">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12 lg:col-span-6 gap-x-14">
              <h6 className="text-[15px] font-medium text-brandColor uppercase">
                Qualification
              </h6>
              <h3 className="text-[27px] text-black font-medium mt-3">
                My Education
              </h3>

              <div className="flex flex-col gap-2 mt-14">
                <EducationCard
                  name="ADUST"
                  description="BSc in Computer Science graduate with a strong foundation in programming and technology."
                  year={"Running"}
                  subject={"BSc in Computer Science"}
                />
                <EducationCard
                  name="IHT, Rajshahi"
                  description="Diploma in Computer Science graduate proficient in fundamental programming concepts and technologies."
                  year={"2016-2020"}
                  subject={"Diploma in Computer Science"}
                />
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <h6 className="text-[15px] font-medium text-brandColor uppercase">
                Work Experience
              </h6>
              <h3 className="text-[27px] text-black font-medium mt-3">
                My Awesome Projects
              </h3>

              <div className="flex flex-col gap-2 mt-14">
                <EducationCard
                  name="Eco-Mart"
                  year={2021}
                  subject="Eco Shop"
                  description={`The application has various types of features. Customers can create accounts, add to
                    cart, place orders, and can buy products from the website. The Saler can create
                    categories, products. Saler can choose the order status. And can deliver or reject the
                    order for customer acknoledgement.
                  `}
                />

                <EducationCard
                  name="Product Buy Sell"
                  year={2022}
                  subject="Buy and Sell Old or New Products "
                  description={`This website contains features with buy and sell old or new products. The all users can
                      create account with custome credentials or google and can buy their neccessary
                      products. Anyone can sell their unneccessary products throw this website. A super admin
                      panel is included with this web application. The super admin can maintain users, ads,
                      categories and other website features.
                  `}
                />

                <EducationCard
                  name="Education & Course Management"
                  year={2023}
                  subject="DigiSkill Institute LMS (Next.js)"
                  description={`The web application is build with features that maintain a learning environment. Owener
                      can create Courses, Modules, Study plans, Assignments, Quizess and more. Any learners
                      can create accounts, buy courses. Live class, class planning is included with this projects.
                      Course owener can terminate an unpaid or due fees users at any time and grant access
                  `}
                />

                <EducationCard
                  name="Computer Training Center Management"
                  year={2024}
                  subject="DigiSkill Institute LMS (MERN Stack)"
                  description={`The web application is build with features that maintain a learning environment. Owener
                    can create Courses, Modules, Study plans, Assignments, Quizess and more. Payments,
                    Reports can be generated by Super Admin. Normal user can create and Update all data
                    according to the permission given by the Super Admin.
                  `}
                />
              </div>
            </div>
          </div>
        </main>
      </section>
      {/* education and experience end */}

      {/* contact section start */}
      <section className="py-20">
        <main className="px-5">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between bg-black/90 text-white rounded p-12">
            <div>
              <p className="uppercase">Have any project in mind</p>
              <h4 className="text-[35px] font-medium">
                Dont be hesitate to Contact <br /> with me
              </h4>
            </div>
            <div>
              <button
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
                className="button-brand flex items-center justify-center gap-2 mt-7 md:mt-0"
              >
                <span>Get in Touch </span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </main>
      </section>
      {/* contact section end */}

      <div id="portfolio"></div>
      <PortfolioSection />

      {/* testimonial section start */}
      <section className="py-9">
        <main className="flex items-center justify-center bg-gray-100 p-10">
          <CarouselTestimonial />
        </main>
      </section>
      {/* testimonial section end */}

      {/* blog section start */}
      <section id="blog" className="py-20">
        <main className="px-5">
          <h6 className="text-[15px] font-medium text-brandColor uppercase">
            Blogs & News
          </h6>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <h3 className="text-[27px] text-black font-medium my-5 md:my-0 mt-3">
              Our Recent Blogs
            </h3>
            <a href="#" className="button-brand">
              See More Blogs
            </a>
          </div>

          <div className="grid grid-cols-12 gap-5 mt-10">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </main>
      </section>
      {/* blog section end */}

      {/* footer start */}
      <section className="pt-24 bg-[#292929]">
        <main className="text-center">
          <p className="text-gray-200 uppercase text-center">Contact Me</p>
          <p className="text-[28px] text-gray-50 capitalize text-center my-5">
            Got a project? Lets Talk
          </p>
          <button
            onClick={() => document.getElementById("my_modal_5").showModal()}
            className="button-brand mb-24"
          >
            Send Message
          </button>

          <div className="px-5 border-t border-slate-600 py-5 flex items-center justify-between">
            <div className="flex items-center gap-5">
              <a href="#">
                <img src="/Facebook.svg" className="w-5" />
              </a>
              <a href="#">
                <img src="/github.svg" className="w-5" />
              </a>
              <a href="#">
                <Twitter className="w-6 h-6 text-white" />
              </a>
            </div>
            <div className="text-gray-400">Designed By Saroar Jahan</div>
          </div>
        </main>
      </section>
      {/* footer end */}

      {/* send message modal */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
