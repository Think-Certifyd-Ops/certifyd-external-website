import { pageMetadata } from "@/lib/story/metadata";
import { SECTORS } from "@/lib/story/sectors";
import { SectorPage } from "@/components/story/SectorPage";
const story=SECTORS.recruitment;
export const metadata=pageMetadata("Recruitment compliance | Certifyd",story.description,"/industries/recruitment/");
export default function Page(){return <SectorPage story={story}/>}
