import React, { useEffect } from "react";
import Vara from "vara";




function VaraText({ text, domLoad }) {
    useEffect(() => {
        if (domLoad) {
            const vara = new Vara(
                "#vara-container",
                "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json",
                [
                    {
                        text: text,
                        fontSize: 12,
                        strokeWidth: 3,
                        color: "#2E86C1",
                        letterSpacing:2,
                        duration:1000
                    },
                ]
            );
        }
        // return () => {
        //     Vara.destroy(); // destroy the Vara instance when the component is unmounted
        // };
    }, [domLoad]);

    return domLoad ? <div id="vara-container" className="z-[20]"></div> : null;
}

export default VaraText