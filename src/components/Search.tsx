"use client";
import { Autocomplete, AutocompleteItem, Avatar } from "@heroui/react";

export default function Search() {

	function fetchGeocode() {
        console.log('test')
	}
	async function get_data_selected_city(id: any) {
        console.log(id)
	}
	return (
		<div className="w-full h-full flex flex-col justify-center items-center gap-3 mb-12 md:mb-0">
			<Autocomplete
				className=" w-5/6"
				isLoading={false}
				label="Search a city"
				placeholder="Paris"
				variant="bordered"
				onInputChange={fetchGeocode}
				onKeyDown={(e: any) => e.continuePropagation()}
				onSelectionChange={get_data_selected_city}
			>
					<AutocompleteItem key={1} textValue={'test'}>
						<div className="flex gap-2 items-center">
							<div className="flex flex-col">
								<span className="text-small">
									{'Paris'}, {'france'}
								</span>
								<span className="text-tiny text-default-400">
									{'18'}, {'4'}
								</span>
							</div>
						</div>
					</AutocompleteItem>
			</Autocomplete>
		</div>
	);
}
