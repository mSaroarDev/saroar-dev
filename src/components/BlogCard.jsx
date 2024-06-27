import { MessagesSquare } from "lucide-react";

export default function BlogCard() {
  return (
    <>
    <a href="#" className="col-span-12 md:col-span-4 lg:col-span-3 rounded overflow-hidden border border-slate-100 hover:shadow-sm">
        <div className="w-full h-[200px]">
            <img src="/portfolio1.jpg" className="w-full h-full object-cover" />
        </div>

        <div className="p-4">
            <p className="text-gray-300 text-xs">06 Feb, 2024</p>
            <h2 className="text-[15px] font-bold my-5">JavaScript Making a New World of Programming</h2>
            <div className="flex items-center justify-between mt-5">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full overflow-hidden">
                        <img src="/saroar2.png" className="w-full h-full object-cover" />
                    </div>
                    <p className="text-sm text-gray-400">John Doe</p>
                </div>
                <div className="flex items-center gap-2 text-xs">
                <MessagesSquare className="w-3 h-3" />
                <span>10</span>
                </div>
            </div>
        </div>
    </a>
    </>
  )
}