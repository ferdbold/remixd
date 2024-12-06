import EggContent from "@/app/egg/[slug]/content";

const Egg = ({ params }) =>
	<EggContent slug={params.slug} />

export default Egg;
