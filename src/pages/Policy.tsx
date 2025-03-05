import Card from "../components/card/Card"

export function Policy() {
    return (
        <div className="w-full max-w-3xl mx-auto px-4">
            <Card className="py-6 px-8 space-y-4">
                <div className="py-2 text-center">
                    <h1 className="text-2xl font-semibold">Privacy Policy</h1>
                    <p className="text-sm text-zinc-500">Last updated: March 4, 2025</p>
                </div>
                <ul className="space-y-4 text-justify text-pretty text-sm ">
                    <li>
                        <h3 className="font-semibold text-lg">Introduction</h3>
                        Welcome to LiftStats. Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you visit our the "LiftStats".
                    </li>
                    <li>
                        <h3 className="font-semibold text-lg">Information We Collect</h3>
                        Since our website does not require user accounts, we do not collect personally identifiable information (e.g., name, email, or password). However, we may collect limited information through the following means:
                        Cookies and Tracking Technologies: We use cookies to enhance user experience, analyze site traffic, and improve our services.
                        Usage Data: We may collect anonymous usage data such as browser type, operating system, and time spent on pages to improve our tools.
                        Third-Party Analytics: We use tools like Google Analytics to understand user interactions with the Website.
                    </li>
                    <li>
                        <h3 className="font-semibold text-lg">How We Use Your Information</h3>
                        The collected data is used to: Improve website functionality and user experience.
                        Analyze trends and optimize our tools.
                        Ensure website security and prevent fraud.
                    </li>
                    <li>
                        <h3 className="font-semibold text-lg">Cookies and Tracking Technologies</h3>
                        Cookies are small files stored on your device that help improve functionality and user experience. You can disable cookies through your browser settings, but doing so may limit some features of the Website.
                    </li>
                    <li>
                        <h3 className="font-semibold text-lg">Third-Party Services</h3>
                        We may use third-party services (such as Google Analytics) to analyze traffic and improve user experience. These third parties may collect and process data according to their own privacy policies.
                    </li>
                    <li>
                        <h3 className="font-semibold text-lg">Data Security</h3>
                        We take reasonable measures to protect collected data, but no method of transmission over the internet is 100% secure. We do not store or process sensitive personal data.
                    </li>
                    <li>
                        <h3 className="font-semibold text-lg">Your Rights and Choices</h3>
                        Since we do not collect personal information, there is no need for account deletion requests. However, you can manage cookies and opt out of analytics tracking via browser settings or third-party opt-out tools.
                    </li>
                    <li>
                        <h3 className="font-semibold text-lg">Changes to This Privacy Policy</h3>
                        We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated effective date.
                    </li>
                </ul>

            </Card>
        </div>
    )
}