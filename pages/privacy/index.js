import React from "react";
import Head from 'next/head';
import Link from 'next/link'

function PrivacyPolicy() {
    return (
        <div className="flex flex-col  items-center h-screen" style={{ height: "100vh" }} >
            <Head>
                <title>Privacy Policy</title>
                <meta name="description" content="Grogrip Privacy policy" />
                {/* Other meta tags */}
            </Head>
            <div className="max-w-full w-full flex flex-col items-center px-8 py-8 ">
                <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
                <div className=" w-full mb-[10px] " >
                    <p className=" font-bold " >1. Introduction</p>
                    <p>
                        1.1 GROGRIP MEDIA ("Company," "we," "our," or "us") is committed to protecting the privacy and security of the personal information of our clients ("Client," "you," or "your"). This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information in connection with our YouTube Automation Services.
                    </p>
                </div>

                <div className=" w-full mb-[10px] " >
                    <p className=" font-bold " >2. Information We Collect</p>
                    <p>
                        2.1 We may collect various types of personal information from you, including but not limited to:
                    </p>
                    <p className="ml-4  " >- Contact information (e.g., name, email address, phone number)</p>
                    <p className="ml-4  " >- Payment and billing details (if applicable)</p>
                    <p className="ml-4  " >- Content and materials provided by the Client for video production</p>
                    <p className="ml-4  " >- Communication history with GROGRIP MEDIA</p>
                </div>

                <div className=" w-full mb-[10px] " >
                    <p className=" font-bold " >3. How We Use Your Information</p>
                    <p>
                        3.1 We use the collected information for the following purposes:
                    </p>
                    <p className="ml-4  " >- To provide and deliver our YouTube Automation Services</p>
                    <p className="ml-4  " >- To communicate with you regarding your orders and services</p>
                    <p className="ml-4  " >- To process payments and billing for the Services</p>
                    <p className="ml-4  " >- To improve the quality and effectiveness of our Services</p>
                    <p className="ml-4  " >- To address any inquiries, issues, or complaints</p>
                </div>

                <div className=" w-full mb-[10px] " >
                    <p className=" font-bold " >4. Data Security</p>
                    <p>
                        4.1 GROGRIP MEDIA takes reasonable measures to protect the personal information of our clients. We implement appropriate technical and organisational security measures to safeguard against unauthorised access, disclosure, alteration, or destruction of data.
                    </p>
                </div>

                <div className=" w-full mb-[10px] " >
                    <p className=" font-bold " >5. Data Sharing and Disclosure</p>
                    <p>
                        5.1 We may share your personal information with third-party service providers, such as payment processors or delivery services, solely for the purpose of providing the Services.
                    </p>
                    <p>
                        5.2 GROGRIP MEDIA will not sell, rent, or lease your personal information to any third party.
                    </p>
                    <p>
                        5.3 We may disclose your personal information if required by law, court order, or governmental authority, or to protect our legal rights, property, or safety.
                    </p>
                </div>

                <div className=" w-full mb-[10px] " >
                    <p className=" font-bold " >6. Data Retention</p>
                    <p>
                        6.1 We will retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
                    </p>
                </div>

                <div className=" w-full mb-[10px] " >
                    <p className=" font-bold " >7. Your Choices</p>
                    <p>
                    7.1 You have the right to:
                    </p>
                    <p className="ml-4  " >- Access and update your personal information</p>
                    <p className="ml-4  " >- Withdraw consent to the processing of your personal information (where applicable)</p>
                    <p className="ml-4  " >- Request the deletion of your personal information (subject to legal limitations)</p>
                </div>

                <div className=" w-full mb-[10px] " >
                    <p className=" font-bold " >8. Third-Party Links</p>
                    <p>
                    8.1 Our website may contain links to third-party websites. Please be aware that we are not responsible for the content or privacy practices of such sites. We encourage you to review the privacy policies of these third-party websites.
                    </p>
                </div>

                <div className=" w-full mb-[10px] " >
                    <p className=" font-bold " >9. Changes to this Privacy Policy</p>
                    <p>
                    9.1 GROGRIP MEDIA reserves the right to update or modify this Privacy Policy at any time. Any changes will be effective upon posting on our website. We encourage you to review this Privacy Policy periodically for any updates.
                    </p>
                </div>

                <div className=" w-full mb-[10px] " >
                    <p className=" font-bold " >10. Contact Information</p>
                    <p>
                    10.1 If you have any questions, concerns, or requests related to this Privacy Policy or the privacy practices of GROGRIP MEDIA, please contact us at support@grogrip.com.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default PrivacyPolicy;
