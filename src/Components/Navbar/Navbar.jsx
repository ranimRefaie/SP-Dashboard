import avatar from '../../assets/3d_avatar_26.png'

const Navbar = () => {
    return (
        <div className="w-full h-20 left-[260px] p-2  border-b border-[#EFEFEF]">
            <div className="flex w-full justify-between items-center">
                <div className="relative  w-[52%] h-[48px]">
                    <input type="search" placeholder="Search  projects ,name" className="outline-none ring-1 ring-[transparent] focus:ring-[#5a5a5a] placeholder:text-[#A4A4A4] pl-10 w-full h-full border rounded-lg bg-[#FAFAFA] border-[#E6E6E6]" />
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="absolute top-[19%] left-2 text-[#A4A4A4]" height="30" width="30" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path></svg>
                </div>
                <div className="flex items-center justify-center gap-3 pr-4  w-[30%]"><
                    div className="bg-[#F3F3F3] rounded-[5px] w-[75%] p-4 flex items-center gap-3  h-[40px]">
                    <div className="w-[35px] h-[35px] rounded-full object-contain">
                        <img src={avatar} alt="" className="w-[36px] h-[36px] rounded-full" />
                    </div><div className="flex flex-col justify-center text-xs">
                        <h3 className="font-bold text-sm">osama habka</h3>
                        <span className="font-semibold text-[10px] text-[#B3B3B3]">Admin</span>
                    </div>
                </div>
                    <div className="select flex-center relative">
                        <div className="bg-[#F3F3F3] rounded-[5px] items-center h-[40px] p-4 flex gap-3">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" font-size="25" class="text-[#8E8E8E]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M439.39 362.29c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71zM67.53 368c21.22-27.97 44.42-74.33 44.53-159.42 0-.2-.06-.38-.06-.58 0-61.86 50.14-112 112-112s112 50.14 112 112c0 .2-.06.38-.06.58.11 85.1 23.31 131.46 44.53 159.42H67.53zM224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64z"></path>
                            </svg>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" font-size="14" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z">
                            </path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar