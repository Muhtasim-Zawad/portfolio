import React from "react";

export default function Divider() {
	return (
		<div className="w-full flex items-center justify-center py-8 md:py-12">
			<div className="w-3/4 max-w-md md:max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-[#e1ff51]/40 to-transparent" />
		</div>
	);
}
