import React from "react";
import { useRouter } from "next/router";

const Loginpop = () => {
    const router = useRouter()
    return (
        <div class="fixed inset-0 flex items-center justify-center z-50">
            <div class="modal-background absolute inset-0 "></div>

            <div class="modal-content p-8 z-[10000] ">
                <div
                    onClick={() => {
                        router.push('/login')
                    }}
                >
                    <h2 class=" text-[25px] sm:text-[40px] md:text-[50px] cursor-pointer lg:text-[60px] text-white my-font-bold font-bold mb-4"
                    >Please Login to Continue</h2>
                </div>
            </div>
        </div>

    )
}

export default Loginpop