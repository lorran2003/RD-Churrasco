import { useState } from "react";
import { BuffetChurrasco } from "./BuffetChurrasco";
import { BuffetFeijoada } from "./BuffetFeijoada";
import { BuffetFestaInfantil } from "./BuffetFestaInfantil";

export function Buffet() {

    const [component, setComponent] = useState('churrasco');

    function renderComponent() {
        switch (component) {

            case "churrasco":
                return <BuffetChurrasco />;

            case "feijoada":
                return <BuffetFeijoada />;

            case "festaInfantil":
                return <BuffetFestaInfantil />

            default:
                return <BuffetChurrasco />
        }
    }

    return (

        <section className="greatVibesRegular text-2xl sm:text-3xl">

            <div className="bg-zinc-800 mb-2 py-2
                          sm:w-2/5 sm:m-auto sm:rounded-md">

                <h1 className="text-4xl text-center">Nosso menu</h1>

                <nav className="sm:flex sm:justify-center sm:items-center sm:gap-5">

                    <button className={`text-4xl flex justify-start items-center gap-2 pl-5 py-2
                            before:w-3 before:h-3 before:block before:bg-[#e90e24] before:rounded-full before:duration-500 duration-500 hover:text-zinc-50/40
    
                                ` + (component === "churrasco" ? "before:opacity-100" : "before:opacity-40")} onClick={() => setComponent("churrasco")}>

                        <p className={"after:duration-500 after:block after:w-full after:h-0.5 " + (component === 'churrasco' ? " after:bg-[#e90e24]" : "after:bg-zinc-800")}>

                            Churrasco

                        </p>

                    </button>

                    <button className={"text-4xl flex justify-start items-center gap-2 pl-5 py-2 before:w-3 before:h-3 before:block before:bg-[#D70319] before:rounded-full before:duration-500 duration-500 hover:text-zinc-50/40 " + (component === "feijoada" ? "before:opacity-100" : "before:opacity-40")} onClick={() => setComponent("feijoada")}>

                        <p className={"after:duration-500 after:block after:w-full after:h-0.5 " + (component === 'feijoada' ? " after:bg-[#e90e24]" : "after:bg-zinc-800")}>

                            Feijoda

                        </p>

                    </button>

                    <button className={"text-4xl flex justify-start items-center gap-2 pl-5 py-2 before:w-3 before:h-3 before:block before:bg-[#D70319] before:rounded-full before:duration-500 duration-500 hover:text-zinc-50/40 " + (component === "festaInfantil" ? "before:opacity-100" : "before:opacity-40")} onClick={() => setComponent("festaInfantil")}>

                        <p className={"after:duration-500 after:block after:w-full after:h-0.5 " + (component === 'festaInfantil' ? " after:bg-[#e90e24]" : "after:bg-zinc-800")}>

                            Festa infantil

                        </p>

                    </button>

                </nav>
            </div>

            {renderComponent()}

        </section>
    )
}