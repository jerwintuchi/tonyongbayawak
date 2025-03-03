import Image from "next/image";
import { ExternalLink } from "lucide-react";

export default function CSExpoNews() {
    return (
        <section className="max-w-4xl mx-auto p-6">
            {/* News Banner */}
            <div className="relative w-full h-96 rounded-lg overflow-hidden">
                <Image
                    src="/cs-expo/logo-nobg.png" // Replace with a relevant image
                    alt="CS Expo News"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg brightness-75"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
                    <h1 className="text-3xl md:text-4xl font-bold">CS Expo & DevDay 2023</h1>
                    <p className="text-lg mt-2 max-w-2xl">
                        Featuring innovations in technology, FEU Tech’s CS Expo was highlighted in Inquirer POP!
                    </p>
                </div>
            </div>

            {/* Article Preview */}
            <div className="mt-8 space-y-4 text-gray-300">
                <p>
                    The <strong>CS Expo & DevDay 2023</strong> showcased groundbreaking innovations from students and industry experts.
                    Inquirer POP! covered the event, emphasizing the latest advancements in technology and student-led projects.
                </p>
                <p>
                    Read more about the journey to the <strong>FEUture</strong> and how FEU Tech continues to lead in technological education.
                </p>
            </div>

            {/* CTA Button */}
            <div className="mt-6 text-center">
                <a
                    href="https://pop.inquirer.net/341852/journey-to-the-feuture-feu-tech-kicks-off-cs-expo-and-devday-2023-featuring-innovations-in-technology"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
                >
                    <ExternalLink size={18} />
                    Read Full Article
                </a>
            </div>
        </section>
    );
}
