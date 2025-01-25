"use client";
import { Autocomplete, AutocompleteItem, Avatar } from "@heroui/react";
import { useState } from "react";

export default function Search() {
    const [allData, setAllData] = useState([])
    const [name, setName] = useState<string>('')
    const [timer, setTimer] = useState<number>();
    const [isDisabled, setIsDisabled] = useState<boolean>(false)


    async function get_data_selected_city(id: any) {
        console.log(id)
    }
    async function getdata(text: string) {
        setName(text)
        setIsDisabled(true)
        clearTimeout(timer);
        const newTimer = window.setTimeout(async () => {
            const response = await fetch(`http://localhost:4000/get-all-data/${text}`);
            const data: [] = await response.json(); // Assume API returns an array of CityData
            setAllData(data); // Now it matches the state type
        }, 250);
        setTimer(newTimer);
        setIsDisabled(false)

    }
    return (
        <div className="w-full h-full flex flex-col justify-center items-center gap-3 mb-12 md:mb-0">
            <Autocomplete
                className=" w-5/6"
                isLoading={isDisabled}
                label="Search the Empire database"
                placeholder="Paris"
                variant="bordered"
                inputValue={name}
                items={allData}
                onInputChange={getdata}
                onKeyDown={(e: any) => e.continuePropagation()}
                onSelectionChange={get_data_selected_city}
            >
                {allData.map((item: any) => (
                    item.map((element : any) => (
                        <AutocompleteItem key={element.name} textValue={element.name}>
						<div className="flex gap-2 items-center">
							<Avatar
								alt={item.country}
								className="flex-shrink-0"
								size="sm"
								src={`https://vieraboschkova.github.io/swapi-gallery/static/assets/img/${element.url.slice(0, -1).replace('https://swapi.dev/api/','')}.jpg`}
							/>
							<div className="flex flex-col">
								<span className="text-small">
									{element.name},
								</span>
								<span className="text-tiny text-default-400">
									{element.mass} Kg, {element.height} Cm
								</span>
							</div>
						</div>
					</AutocompleteItem>
                    ))
				))}
            </Autocomplete>
        </div>
    );
}
