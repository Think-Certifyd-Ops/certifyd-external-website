import { pageMetadata } from "@/lib/story/metadata";
import { SECTORS } from "@/lib/story/sectors";
import { SectorPage } from "@/components/story/SectorPage";
const story=SECTORS.nhs;
export const metadata=pageMetadata("NHS workforce records | Certifyd",story.description,"/industries/nhs/");
export default function Page(){return <SectorPage story={story}/>}
