import { pageMetadata } from "@/lib/story/metadata";
import { SECTORS } from "@/lib/story/sectors";
import { SectorPage } from "@/components/story/SectorPage";
const story=SECTORS.care;
export const metadata=pageMetadata("Care workforce compliance | Certifyd",story.description,"/industries/care/");
export default function Page(){return <SectorPage story={story}/>}
