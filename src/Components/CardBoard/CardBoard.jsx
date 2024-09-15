export const CardBoard = () => {
    return (
        <div class=" pt-12 px-8 flex flex-wrap  items-start overflow-x-auto overflow-y-hidden flex-1 gap-3 h-[calc(100vh-85px)] mb-20">
            <div class="flex  items-start  h-full rounded-[10px] " style={{ background: 'rgb(238, 242, 245)' }}>
                <div class="colmuns h-full overflow-y-hidden overflow-x-hidden flex flex-col items-center w-[305px] p-2">
                    <div class="flex items-center">
                        <p class="w-[234px] ">Weekly Tasks</p>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="cursor-pointer pr-1" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg>
                    </div>
                    <div class="flex flex-col items-center w-full gap-2 pt-4"><
                        div class="flex items-center text-gray-600 cursor-pointer">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="cursor-pointer pr-1" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg>
                        Add Task
                    </div>
                    </div>
                </div>

                <div class="flex items-start h-full rounded-[10px]" style={{ background: 'rgb(238, 242, 245)' }}><div class="colmuns h-full overflow-y-hidden overflow-x-hidden flex flex-col items-center w-[305px] p-2"><div class="flex items-center"><p class="w-[234px] ">To Do</p><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="cursor-pointer pr-1" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg></div><div class="flex flex-col items-center w-full gap-2 pt-4"><div class="flex items-center text-gray-600 cursor-pointer"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="cursor-pointer pr-1" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg>Add Task</div></div></div></div>


                <div class="flex items-start h-full rounded-[10px]" style={{ background: 'rgb(215, 231, 242)' }}><div class="colmuns h-full overflow-y-hidden overflow-x-hidden flex flex-col items-center w-[305px] p-2"><div class="flex items-center"><p class="w-[234px] ">In Progress</p><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="cursor-pointer pr-1" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg></div><div class="flex flex-col items-center w-full gap-2 pt-4"><div class="flex items-center text-gray-600 cursor-pointer"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="cursor-pointer pr-1" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg>Add Task</div></div></div></div>


                <div class="flex items-start h-full rounded-[10px]" style={{ background: 'rgb(238, 242, 245)' }}><div class="colmuns h-full overflow-y-scroll overflow-x-hidden flex flex-col items-center w-[305px] p-2"><div class="flex items-center"><p class="w-[234px] ">Test</p><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="cursor-pointer pr-1" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg></div><div class="flex flex-col items-center w-full gap-2 pt-4"><div class="flex items-center text-gray-600 cursor-pointer"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="cursor-pointer pr-1" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg>Add Task</div></div></div></div>


                <div class="flex items-start h-full rounded-[10px]" style={{ background: 'rgb(217, 234, 230)' }}><div class="colmuns h-full overflow-y-scroll overflow-x-hidden flex flex-col items-center w-[305px] p-2"><div class="flex items-center"><p class="w-[234px] ">Review</p><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="cursor-pointer pr-1" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg></div><div class="flex flex-col items-center w-full gap-2 pt-4"><div class="flex items-center text-gray-600 cursor-pointer"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="cursor-pointer pr-1" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg>Add Task</div></div></div></div><div class="w-fit text-xs text-gray-500 flex-shrink border-b-2 flex gap-2 items-center cursor-pointer"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-[#b0b7ca] cursor-pointer " height="20" width="20" xmlns="http://www.w3.org/2000/svg"><title>add colmun</title><path fill="none" stroke-width="2" d="M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M12,18 L12,6 M6,12 L18,12"></path></svg> Add Colmun</div>

            </div>
                        </div>
            

    )
}
