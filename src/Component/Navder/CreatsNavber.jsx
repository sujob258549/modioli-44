import { useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { IoMdCloseCircleOutline } from "react-icons/io";
import LiNave from "./LiNave";

const CreatsNavber = () => {
    const routers = [
        { id: 1, brand: "Home", path: "/" },
        { id: 2, brand: "Abou us", path: "/Abou us" },
        { id: 3, brand: "Contract", path: "/Contract" },
        { id: 4, brand: "Gallery", path: "/Gallery" },
        { id: 5, brand: "Video", path: "*" }
    ];
    const [open, setOpen] = useState(true);
    return (

        <div >
            <div className="">

                <div onClick={() => setOpen(!open)} className="block md:hidden">
                    {
                        open === true ?
                            <FiAlignJustify className="text-2xl"></FiAlignJustify> :
                            <IoMdCloseCircleOutline className="text-2xl"></IoMdCloseCircleOutline>
                    }
                </div>
                <ul className={`md:flex md:gap-5 md:static md:bg-inherit  bg-slate-300 px-8 py-3 mt-1 rounded-xl md:py-5 pl-5 duration-1000 absolute ${open ? '-top-96' : 'top-16'}`}>
                    {
                        routers.map(item => <LiNave key={item.id} routes={item}></LiNave>)

                    }
                </ul>
            </div>
        </div>
    );
};

export default CreatsNavber;