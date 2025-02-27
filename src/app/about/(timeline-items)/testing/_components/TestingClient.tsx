import Image from "next/image";

export default function TestingClient() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-black to-blue-900 py-24 px-4 relative overflow-hidden text-gray-100">
            <h2 className="text-3xl font-semibold text-blue-300 text-center mb-6">
                Website Testing & Evaluation
            </h2>

            {/* Summary of Software Evaluation */}
            <div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-blue-300 mb-2">Summary of Software Evaluation</h3>
                <p className="text-gray-300">
                    To assess the website’s performance, the proponents used <strong>Google PageSpeed Insights</strong> by <i>Google</i>,
                    a benchmarking tool that evaluates a website&apos;s <strong>Performance, Accessibility, and Best Practices</strong>.
                    The results from the evaluation of the deployed website are displayed below.
                </p>
                <div className="flex justify-center mt-4">
                    <Image src="/diagrams/pagespeed-score.svg" alt="PageSpeed Insights Results" width={700} height={400} className="rounded-lg shadow-md bg-white" />
                </div>
                <p className="text-sm text-gray-400 mt-2 text-center">Fig. 1 - PageSpeed Insights Website Evaluation</p>
            </div>

            {/* Reliability Testing */}
            <div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-lg font-semibold text-blue-300 mb-2">Reliability Testing</h3>
                <p className="text-gray-300">
                    The website’s reliability was tested using <strong>Webserver Stress Tool 8 - Enterprise Edition</strong>,
                    where <strong>400 concurrent users accessed the site over a 3-minute period</strong> to check its stability.
                    The test results confirmed that the website <strong>handled concurrent users efficiently</strong>, maintaining an
                    <strong>average response time below 500ms</strong>.
                </p>
                <div className="flex justify-center mt-4">
                    <Image src="/diagrams/reliability-testing.svg" alt="Reliability Testing Results" width={700} height={400} className="rounded-lg shadow-md bg-white" />
                </div>
                <p className="text-sm text-gray-400 mt-2 text-center">Fig. 3 - Reliability Testing Results</p>
            </div>

            {/* 4.2.4 Usability Testing */}
            <div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-lg font-semibold text-blue-300 mb-2">4.2.4 Usability Testing</h3>
                <p className="text-gray-300">
                    Usability testing was conducted following <strong>ISO-9126 usability standards</strong>.
                    A survey was distributed to <strong>test users</strong>, evaluating the website’s <strong>ease of navigation, design clarity, and responsiveness</strong>.
                    The majority of users rated the website as <strong>highly accessible</strong>, with an <strong> average usability score of 4.7/5</strong>.
                </p>
                <div className="flex justify-center mt-4">
                    <Image src="/diagrams/usability-testing.svg" alt="Usability Testing Survey Results" width={700} height={400} className="rounded-lg shadow-md bg-white" />
                </div>
                <p className="text-sm text-gray-400 mt-2 text-center">Fig. 4 - Usability Testing Survey Results</p>
            </div>

            {/* Conclusion */}
            <div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-lg font-semibold text-blue-300 mb-2">Conclusion</h3>
                <p className="text-gray-300">
                    The website successfully passed all testing criteria, including **performance, reliability, usability, and security**.
                    Following several optimizations, the website now delivers **faster response times, improved user experience, and strong security measures**.
                    These results validate the websit&apos;s **readiness for public deployment**.
                </p>
            </div>
        </div>
    );
}
