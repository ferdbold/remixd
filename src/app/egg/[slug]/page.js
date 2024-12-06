import EggContent from "@/app/egg/[slug]/content";

const Egg = ({ params }) =>
	<div className>
		<EggContent slug={params.slug} />
	</div>

export default Egg;
