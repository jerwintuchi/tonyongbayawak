import Image from "next/image";
import StressTestingTable from "./StressTestingTable";
import Link from "next/link";
import PortabilityTestingAccordion from "./PortabilityTestingAccordion";
import BackToTimeline from "@/components/buttons/back-timeline-btn";

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
                    The website’s performance was evaluated using <strong>Google PageSpeed Insights</strong>, which assessed
                    <strong> Performance, Accessibility, and Best Practices</strong>. The results indicate an optimized and efficient website.
                </p>
                <div className="flex justify-center mt-4">
                    <Image src="/diagrams/performance-result.svg" alt="PageSpeed Insights Results" width={700} height={400} className="rounded-lg shadow-md bg-white" />
                </div>
                <p className="text-sm text-gray-400 mt-2 text-center">Fig. 1 - Performance Score</p>
                <p className="text-gray-300 mt-4">
                    Due to streamlit’s app use of web scraping, impacted the website’s initial loading performance,
                    PageSpeed insights recorded 6.1 seconds for the page to become interactive. We made use of streamlit’s caching function on the initial load of the website,
                    so that the next time it would take to render the website’s contents will be faster.
                </p>

                <div className="flex justify-center mt-4">
                    <Image src="/diagrams/accessibility-result.svg" alt="PageSpeed Insights Results" width={700} height={400} className="rounded-lg shadow-md bg-white" />
                </div>
                <p className="text-sm text-gray-400 mt-2 text-center">Fig. 2 - Accessibility Score</p>
                <p className="text-gray-300 mt-4">
                    PageInsights only found minor flaws like the website does not have a discernible name, background and forecast contract does not have enough ratio.
                    Other than that, the proponents mostly manually checked the accessibility of the website as recommended by PageInsights, and the proponents did not find
                    any issues, neither the respondents as the majority of them did not have a hard time accessing through the website.
                </p>

                <div className="flex justify-center mt-4">
                    <Image src="/diagrams/best-practices-result.svg" alt="PageSpeed Insights Results" width={700} height={400} className="rounded-lg shadow-md bg-white" />
                </div>
                <p className="text-sm text-gray-400 mt-2 text-center">Fig. 3 - Best Practices Score</p>
                <p className="text-gray-300 mt-4">
                    This aspect mostly relies on trust and safety, and security against attacks. PageInsights scored the website a high score of 92 since the proponents
                    used best practices when developing the web app, like using HTTPS, not using unnecessary permissions, avoiding known security vulnerabilities
                    and deprecated APIs.
                </p>
            </div>

            {/* Reliability Testing */}
            <div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-lg font-semibold text-blue-300 mb-2">Reliability Testing</h3>
                <p className="text-gray-300">
                    The website’s reliability was evaluated using <strong>Webserver Stress Tool 8 - Enterprise Edition</strong>.
                    A <strong>3-minute load test with 400 concurrent users</strong> was conducted, confirming that the website maintains an
                    <strong>average response time below 500ms</strong>, ensuring stable performance under heavy load.
                </p>
                <StressTestingTable />
                <div className="flex justify-center mt-4">
                    <Image src="/diagrams/cpu-load.svg" alt="Reliability Testing Results" width={700} height={400} className="rounded-lg shadow-md bg-white" />
                </div>
                <p className="text-sm text-gray-400 mt-2 text-center">Fig. 2 - Local Cpu Load Testing Results</p>

                <div className="flex justify-center mt-4">
                    <Image src="/diagrams/hits.svg" alt="Reliability Testing Results" width={700} height={400} className="rounded-lg shadow-md bg-white" />
                </div>
                <p className="text-sm text-gray-400 mt-2 text-center">Fig. 3 - No. of Hits Testing Results</p>

                <p className="px-4 text-gray-300 mt-4">
                    The test results indicate that the Streamlit-based web application performed efficiently under stress, handling up to 400 simultaneous users with
                    minimal degradation in system memory and CPU load. The first graph shows stable resource utilization, suggesting optimized backend processing and
                    lightweight request handling. The second graph highlights a steady hit rate with click time remaining consistent, indicating a well-optimized server
                    response time. The high best-practices score of 92 reflects proper coding standards, efficient request handling, and effective deployment strategies
                    on Streamlit. Overall, the system demonstrated reliability and scalability, making it well-suited for moderate-to-high traffic scenarios.
                </p>

            </div>

            {/* Usability Testing */}
            <div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-lg font-semibold text-blue-300 mb-2">Usability Testing</h3>
                <p className="text-gray-300">
                    Usability testing followed <strong>ISO-9126 usability standards</strong>, assessing navigation, design clarity, and responsiveness.
                    Results from surveyed users showed an <strong>average usability score of 4.7/5</strong>, highlighting strong accessibility and user satisfaction.
                </p>
                <p className="text-gray-300 mt-4">
                    The reliability of the questionnaire in terms of inter-correlation of the 36 of items within the questionnaire is validated by Cronbach’s Alpha α. Using IBM SPSS,
                    the generated cronbach alpha is displayed below.
                </p>
                <div className="flex justify-center mt-4">
                    <Image src="/diagrams/cronbach-alpha.svg" alt="Usability Testing Survey Results" width={200} height={200} className="rounded-lg shadow-md bg-white" />
                </div>
                <p className="text-sm text-gray-400 mt-2 text-center">Fig. 4 -Cronbach Alpha</p>

                <p className="text-gray-300 mt-4">
                    There is a high internal consistency between the individual items that were constructed by the researchers, which goes to show that the questionnaire
                    that were used for evaluating AXS Investor’s behavior in terms of decision making confidence when it comes to Selling, Buying, Holding or Liquidating Assets
                    fully captures what each item in the questionnaire are meant to obtain. Also, this supports that the Usability section within the questionnaire can generally
                    provide a representation of the quality of interaction between the respondents and the system/website.<br /><br />

                    The generalized response from each subsection of the questionnaires using Question Item Mean (see. <Link href="/about/research-phase#mean-formula" className="text-blue-300 hover:underline">Mean Formula</Link>) are all 4 which implies that the general
                    attitude of the respondents towards the <strong>Design, Content, Navigation, and Performance</strong> of the system is <span className="text-green-500"><strong>Positive</strong></span>.

                </p>
            </div>

            {/* Portability Testing */}
            <div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-lg font-semibold text-blue-300 mb-2">Portability Testing</h3>
                <p className="text-gray-300">
                    Portability testing was conducted to ensure seamless operation across various devices and browsers.
                    The system was tested on <strong>Windows, macOS, Linux, iOS, and Android</strong>, confirming consistent performance and UI integrity.
                </p>
                <PortabilityTestingAccordion />
            </div>

            {/* Conclusion */}
            <div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-lg font-semibold text-blue-300 mb-2">Conclusion</h3>
                <p className="text-gray-300">
                    The website successfully passed all testing criteria, including <strong>performance, reliability, usability, portability, and security</strong>.
                    Following several optimizations, the website now delivers <strong>faster response times, and improved user experience</strong>.
                    These results confirm the website’s <strong>readiness for public deployment</strong> and its ability to support large-scale usage effectively.
                </p>
            </div>

            <div className="flex justify-center mt-6">
                <BackToTimeline />
            </div>
        </div >
    );
}
