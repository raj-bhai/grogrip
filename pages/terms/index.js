import React from "react";
import Head from 'next/head';
import Link from 'next/link'

function Terms() {
    return (
        <div className="flex flex-col  items-center h-screen" style={{ height: "100vh" }} >
            <Head>
                <title>Terms and Condition</title>
                <meta name="description" content="Grogrip Terms and Condition" />
                {/* Other meta tags */}
            </Head>
            <div className="max-w-full w-full flex flex-col items-center px-8 py-8 ">
                <h1 className="text-3xl font-bold mb-4">Terms and Conditions for GROGRIP MEDIA</h1>
                <div className=" w-full mb-[10px] " >
                    <p className=" font-bold " >1. Introduction</p>
                    <p>
                        1.1 These terms and conditions ("Terms") govern the use of YouTube Automation services ("Services") provided by GROGRIP MEDIA ("Company," "we," "our," or "us") to its clients ("Client," "you," or "your"). By using our Services, you agree to be bound by these Terms.
                    </p>
                </div>

                <div className=" w-full mb-[10px] " >
                    <p className=" font-bold " >2. Services Offered</p>
                    <p>
                        2.1 GROGRIP MEDIA offers YouTube Automation Services, which include full production for YouTube videos. The services provided may include, but are not limited to, scripts, voice-over, video creation, and thumbnail design. Additionally, SEO services are available for an extra fee, either as an add-on or included in certain packages. Along with complete Automated Channel Services.
                    </p>
                </div>

                <div className=" w-full mb-[10px] " >
                    <p className=" font-bold " >3. Payment Terms</p>
                    <p>
                        3.1 Clients have two payment options:
                    </p>
                    <p>
                        A. 100% upfront payment
                    </p>
                    <p>
                        B. 50% upfront payment and 50% after delivery.
                    </p>
                    <p>
                        3.2 Payments can be made through [payment methods accepted by GROGRIP MEDIA].
                    </p>
                </div>

                <div className=" w-full mb-[10px] " >
                    <p className=" font-bold " >4. Quality Assurance and Revisions</p>
                    <p>
                        4.1 GROGRIP MEDIA strives to deliver high-quality videos that meet the Client's expectations.
                    </p>
                    <p>
                        4.2 If the Client is not satisfied with the video's quality, they can request unlimited revisions based on their package to align the video with their requirements until satisfaction.
                    </p>
                </div>

                <div className=" w-full mb-[10px] " >
                    <p className=" font-bold " >5. Refund Policy</p>
                    <p>
                        5.1 The refund policy is as follows:
                    </p>
                    <p>
                        A. If the Client requests a refund before the video is uploaded to YouTube, a 100% refund will be provided.
                    </p>
                    <p>
                        B. If the Client uploads the video on YouTube and then requests a refund, no refund will be provided due to the registration of content ID on YouTube.
                    </p>
                </div>

                <div className=" w-full mb-[10px] " >
                    <p className=" font-bold " >6. Copyright and Content Ownership</p>
                    <p>
                        6.1 The Client retains all rights to the content provided to GROGRIP MEDIA for video production. GROGRIP MEDIA will not use the Client's content for any purpose other than fulfilling the agreed-upon Services.
                    </p>
                    <p>
                        6.2 GROGRIP MEDIA holds the rights to any original content produced as part of the Services, including scripts, voice-over, video, and thumbnail, until full payment is received.
                    </p>
                </div>

                <div className=" w-full mb-[10px] " >
                    <p className=" font-bold " >7. Confidentiality</p>
                    <p>
                        7.1 Both GROGRIP MEDIA and the Client agree to keep all communications and information exchanged during the course of providing the Services confidential.                    </p>
                </div>

                <div className=" w-full mb-[10px] " >
                    <p className=" font-bold " >8. Dispute Resolution</p>
                    <p>
                        8.1 In the event of any disputes or disagreements, both parties agree to first attempt to resolve the matter amicably through good-faith negotiations.                    </p>
                </div>

                <div className=" w-full mb-[10px] " >
                    <p className=" font-bold " >9. Limitation of Liability</p>
                    <p>
                        9.1 GROGRIP MEDIA will not be liable for any indirect, consequential, or special damages arising out of the use or inability to use our Services.
                    </p>
                </div>

                <div className=" w-full mb-[10px] " >
                    <p className=" font-bold " >10. Governing Law and Jurisdiction</p>
                    <p>
                        10.1 These Terms shall be governed by and construed in accordance with the laws of Indian Jurisdiction. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts in Indian Jurisdiction.
                    </p>
                </div>

                <div className=" w-full mb-[10px] " >
                    <p className=" font-bold " >11. Modification of Terms</p>
                    <p>
                        11.1 GROGRIP MEDIA reserves the right to modify or update these Terms at any time without prior notice. Any changes will be effective upon posting on our website.
                    </p>
                </div>

                <div className=" w-full mb-[10px] " >
                    <p className=" font-bold " >12. Entire Agreement</p>
                    <p>
                        12.1 These Terms constitute the entire agreement between the Client and GROGRIP MEDIA regarding the Services and supersede all prior agreements, written or oral.                    </p>
                </div>
            </div>
        </div>
    );
}

export default Terms;
