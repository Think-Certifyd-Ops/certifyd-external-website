import {DemoBooking} from "@/components/contact/DemoBooking";
import {ContactForm} from "@/components/contact/ContactForm";
import {pageMetadata} from "@/lib/story/metadata";
import {StoryShell,StorySection} from "@/components/story/StoryParts";
export const metadata=pageMetadata("Book a workforce compliance demo | Certifyd","Book a Certifyd demo. Choose a time and explore onboarding, workforce records, renewals, worker documents and site check-in.","/contact/");
export default function Page(){return <StoryShell><section className="story-wrap demo-booking-page" id="booking"><DemoBooking/></section>
<StorySection id="enquiry" title="Send us a question."><p>For account help, email <a href="mailto:team@certifyd.io">team@certifyd.io</a>. For other questions, use the form below.</p><div className="story-form"><ContactForm/></div></StorySection>
</StoryShell>}
