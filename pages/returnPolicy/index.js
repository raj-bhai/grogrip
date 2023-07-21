import React from "react";
import Head from 'next/head';
import Link from 'next/link'

function ReturnPolicy() {
    return (
        <div className="flex flex-col items-center h-screen" style={{ height: "100vh" }} >
            <Head>
                <title>Return Policy</title>
                <meta name="description" content="Grogrip Return Policy" />
                {/* Other meta tags */}
            </Head>
            <div className="max-w-full w-full flex flex-col items-center px-8 py-8 ">
                <h1 className="text-3xl font-bold mb-4">Return Policy</h1>

                <div className=" w-full mb-[10px] " >
                    <p className=" font-bold " >1. Eligibility</p>
                    <p>
                        1.1 GROGRIP MEDIA ("Company," "we," "our," or "us") offers a return policy for YouTube Automation Services provided to our clients ("Client," "you," or "your") under certain circumstances. This policy applies only to specific situations as outlined below.
                    </p>
                </div>

                <div className=" w-full mb-[10px] " >
                    <p className=" font-bold " >2. Eligible Return Situations</p>
                    <p>
                        2.1 Clients are eligible for returns in the following scenarios: a) Unsatisfactory Video Quality: If you find that the delivered video does not meet the agreed-upon quality standards and requirements, you have the option to request a return.
                    </p>
                </div>


                <div className=" w-full mb-[10px] " >
                    <p className=" font-bold " >3. Return Procedure</p>
                    <p>
                        3.1 To initiate a return, the Client must follow these steps:
                    </p>
                    <p>
                        A. Contact GROGRIP MEDIA's customer support within 7 days from the delivery date of the video.
                    </p>
                    <p>
                        B. Provide specific reasons for the return request and any relevant information or evidence to support your claim.
                    </p>
                </div>

                <div className=" w-full mb-[10px] " >
                    <p className=" font-bold " >4. Refund Options</p>
                    <p>
                        4.1 In eligible return situations, the Client has the following refund options:
                    </p>
                    <p>
                        A. Full Refund: GROGRIP MEDIA will provide a 100% refund of the paid amount for the Services.
                    </p>
                    <p>
                        B. Revisions: If the Client prefers, they can opt for unlimited revisions to the video until their requirements are met, instead of a refund.
                    </p>
                </div>

                <div className=" w-full mb-[10px] " >
                    <p className=" font-bold " >5. Non-Returnable Scenarios</p>
                    <p>
                        5.1 The return policy is not applicable in the following situations:
                    </p>
                    <p>
                        A. Content Uploaded on YouTube: If the Client uploads the video on YouTube and then requests a return, no refund will be provided due to the registration of content ID on YouTube.
                    </p>
                </div>

                <div className=" w-full mb-[10px] " >
                    <p className=" font-bold " >6. Processing Time</p>
                    <p>
                        6.1 GROGRIP MEDIA will process eligible return requests within [number of days] days from the date the request is received and approved.
                    </p>
                </div>

                <div className=" w-full mb-[10px] " >
                    <p className=" font-bold " >7. Communication</p>
                    <p>
                        7.1 We will communicate with the Client during the return process to address any questions or concerns.
                    </p>
                </div>

                <div>
                    <p className=" font-bold " >8. Exclusions</p>
                    <p>
                        8.1 The return policy applies solely to YouTube Automation Services. Other products or services provided by GROGRIP MEDIA may have separate return policies, as applicable.
                    </p>
                </div>

                <div>
                    <p className=" font-bold " >9. Changes to the Return Policy</p>
                    <p>
                        9.1 GROGRIP MEDIA reserves the right to modify or update this return policy at any time without prior notice. Any changes will be effective upon posting on our website.
                    </p>
                </div>

            </div>
        </div>
    );
}

export default ReturnPolicy;
