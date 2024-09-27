import { IoAdd } from "react-icons/io5";
import { AiOutlineMore } from "react-icons/ai";

export const CardBoard = () => {
  const cards = [
    { id: 1, name: "Weekly Tasks", bg: "rgb(215, 231, 242)" },
    { id: 2, name: "To Do", bg: "rgb(215, 231, 242)" },
    { id: 3, name: "In Progress", bg: "rgb(215, 231, 242)" },
    { id: 4, name: "Test", bg: "rgb(215, 231, 242)" },
    { id: 5, name: "Review", bg: "rgb(215, 231, 242)" },
  ];
  return (
    <div
      className={` flex h-screen overflow-x-auto p-5`}
      style={{ whiteSpace: "nowrap" }}
    >
      {cards.map((index) => (
        <div
          key={index.id}
          className={`rounded-lg  w-96 mr-3 flex flex-col justify-start items-center p-2`}
          style={{ background: index.bg }}
        >
          <div className="flex justify-between w-[90%]">
            <p className="">{index.name}</p>
            <button>
              <IoAdd size={25} />
            </button>
          </div>
          <div className="flex flex-col w-full my-4">
            <div class="cursor-pointer bg-white w-full p-2 rounded-xl flex flex-col gap-2 border border-[#e5edf7]">
              <div class="flex items-center">
                <div>
                  <input class="hidden complete" type="checkbox" />
                  <label class="flex items-center h-10 px-1 rounded cursor-pointer ">
                    <span class="checkbox-inner flex items-center justify-center w-5 h-5 text-transparent border-2 border-gray-300 rounded-full"></span>
                  </label>
                </div>
                <div class="flex justify-between items-center w-[95%]">
                  <h1 class="text-lg font-medium">Title</h1>
                  <div class="relative">
                    <AiOutlineMore />
                  </div>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <div class="flex items-center relative">
                    <div
                      id="basic-button "
                      title="name"
                      style={{ background: "rgb(255, 32, 78)" }}
                      class="border-l-[1px] border-white cursor-pointer w-8 h-8 flex items-center justify-center rounded-[50%] text-sm text-white"
                    >
                      na
                    </div>
                    <div
                      id="basic-button "
                      title="name"
                      style={{ background: "rgb(255, 32, 78)" }}
                      class="absolute top-0 left-4 border-l-[1px] border-white cursor-pointer w-8 h-8 flex items-center justify-center rounded-[50%] text-sm text-white"
                    >
                      na
                    </div>
                    <div
                      id="basic-button "
                      title="name"
                      style={{ background: "rgb(255, 32, 78)" }}
                      class="absolute top-0 left-8 border-l-[1px] border-white cursor-pointer w-8 h-8 flex items-center justify-center rounded-[50%] text-sm text-white"
                    >
                      na
                    </div>
                    <p class="w-8 h-8 text-center rounded-full absolute top-0 left-6 flex items-center justify-center gap-1  text-gray-600 text-sm   ml-6 bg-white border">
                      +2
                    </p>
                  </div>
                  <p class="flex items-center gap-1 text-sm text-gray-400 ml-12">
                    {" "}
                    1/2 h{" "}
                  </p>
                </div>
                <p class=" cursor-pointer bg-gray-300 rounded-[10px] text-black text-xs p-1">
                  #Tag
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center text-gray-600 cursor-pointer">
            <button className="flex">
              {" "}
              <IoAdd size={25} />
              Add Task
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

{
  /* <div class=" pt-12 px-8 flex flex-wrap  items-start overflow-x-auto overflow-y-hidden flex-1 gap-3 h-[calc(100vh-85px)] mb-20">
<div
  class="flex  items-start  h-full rounded-[10px] "
  style={{ background: "rgb(238, 242, 245)" }}
>
  <div class="colmuns h-full overflow-y-hidden overflow-x-hidden flex flex-col items-center w-[305px] p-2">
    <div class="flex items-center">
      <p class="w-[234px] ">Weekly Tasks</p>
      <IoAdd />
    </div>
    <div class="flex flex-col items-center w-full gap-2 pt-4">
      <div
        title="Double click for detils"
        class="cursor-pointer bg-white w-full p-2 rounded-xl flex flex-col gap-2 border border-[#e5edf7]"
      >
        <div
          style={{
            position: "fixed",
            zIndex: "9999",
            inset: "16px",
            pointerEvents: "none",
          }}
        ></div>
        <div class="flex items-center">
          <div>
            <input
              class="hidden complete"
              type="checkbox"
              id="check-roundd54193da-a2bf-446a-8cd5-f3a9994da166"
            />
            <label
              class="flex items-center h-10 px-1 rounded cursor-pointer "
              for="check-roundd54193da-a2bf-446a-8cd5-f3a9994da166"
            >
              <span class="checkbox-inner flex items-center justify-center w-5 h-5 text-transparent border-2 border-gray-300 rounded-full"></span>
            </label>
          </div>
          <div class="flex justify-between items-center w-[95%]">
            <h1 class="text-lg font-medium">Title</h1>
            <div class="relative">
              <IoAdd />
            </div>
          </div>
        </div>
        <p class="text-xs">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
          sint quas officiis nesciunt reprehenderit error unde hic nobis
          dolores.
        </p>
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <div class="flex items-center relative">
              <div
                id="basic-button "
                title="name"
                style={{ background: " rgb(3, 174, 210)" }}
                class="border-l-[1px] border-white cursor-pointer w-8 h-8 flex items-center justify-center rounded-[50%] text-sm text-white"
              >
                na
              </div>
              <div
                id="basic-button "
                title="name"
                style={{ background: " rgb(3, 174, 210)" }}
                class="absolute top-0 left-4 border-l-[1px] border-white cursor-pointer w-8 h-8 flex items-center justify-center rounded-[50%] text-sm text-white"
              >
                na
              </div>
              <div
                id="basic-button "
                title="name"
                style={{ background: " rgb(3, 174, 210)" }}
                class="absolute top-0 left-8 border-l-[1px] border-white cursor-pointer w-8 h-8 flex items-center justify-center rounded-[50%] text-sm text-white"
              >
                na
              </div>
              <p class="w-8 h-8 text-center rounded-full absolute top-0 left-6 flex items-center justify-center gap-1  text-gray-600 text-sm   ml-6 bg-white border">
                +2
              </p>
            </div>
            <p class="flex items-center gap-1 text-sm text-gray-400 ml-12">
              {" "}
              1/2 h{" "}
            </p>
          </div>
          <p class=" cursor-pointer bg-gray-300 rounded-[10px] text-black text-xs p-1">
            #Tag
          </p>
        </div>
      </div>

      <div class="flex items-center text-gray-600 cursor-pointer">
        <IoAdd />
        Add Task
      </div>
    </div>
  </div>

  <div
    class="flex items-start h-full rounded-[10px]"
    style={{ background: "rgb(238, 242, 245)" }}
  >
    <div class="colmuns h-full overflow-y-hidden overflow-x-hidden flex flex-col items-center w-[305px] p-2">
      <div class="flex items-center">
        <p class="w-[234px] ">To Do</p>
        <IoAdd />
      </div>
      <div class="flex flex-col items-center w-full gap-2 pt-4">
        <div class="flex items-center text-gray-600 cursor-pointer">
          <IoAdd />
          Add Task
        </div>
      </div>
    </div>
  </div>

  <div
    class="flex items-start h-full rounded-[10px]"
    style={{ background: "rgb(215, 231, 242)" }}
  >
    <div class="colmuns h-full overflow-y-hidden overflow-x-hidden flex flex-col items-center w-[305px] p-2">
      <div class="flex items-center">
        <p class="w-[234px] ">In Progress</p>
        <IoAdd />
      </div>
      <div class="flex flex-col items-center w-full gap-2 pt-4">
        <div class="flex items-center text-gray-600 cursor-pointer">
          <IoAdd />
          Add Task
        </div>
      </div>
    </div>
  </div>

  <div
    class="flex items-start h-full rounded-[10px]"
    style={{ background: "rgb(238, 242, 245)" }}
  >
    <div class="colmuns h-full overflow-y-scroll overflow-x-hidden flex flex-col items-center w-[305px] p-2">
      <div class="flex items-center">
        <p class="w-[234px] ">Test</p>
        <IoAdd />
      </div>
      <div class="flex flex-col items-center w-full gap-2 pt-4">
        <div class="flex items-center text-gray-600 cursor-pointer">
          <IoAdd />
          Add Task
        </div>
      </div>
    </div>
  </div>

  <div
    class="flex items-start h-full rounded-[10px]"
    style={{ background: "rgb(217, 234, 230)" }}
  >
    <div class="colmuns h-full overflow-y-scroll overflow-x-hidden flex flex-col items-center w-[305px] p-2">
      <div class="flex items-center">
        <p class="w-[234px] ">Review</p>
        <IoAdd />
      </div>
      <div class="flex flex-col items-center w-full gap-2 pt-4">
        <div class="flex items-center text-gray-600 cursor-pointer">
          <IoAdd />
          Add Task
        </div>
      </div>
    </div>
  </div>
  <div class="w-fit text-xs text-gray-500 flex-shrink border-b-2 flex gap-2 items-center cursor-pointer">
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 24 24"
      class="text-[#b0b7ca] cursor-pointer "
      height="20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>add colmun</title>
      <path
        fill="none"
        stroke-width="2"
        d="M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M12,18 L12,6 M6,12 L18,12"
      ></path>
    </svg>{" "}
    Add Colmun
  </div>
</div>
</div> */
}
