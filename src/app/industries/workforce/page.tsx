import { pageMetadata } from "@/lib/story/metadata";
import { SECTORS } from "@/lib/story/sectors";
import { SectorPage } from "@/components/story/SectorPage";
const story=SECTORS.workforce;
export const metadata=pageMetadata("Workforce compliance | Certifyd",story.description,"/industries/workforce/");
export default function Page(){return <SectorPage story={story}/>}
