"use client";
import Setvalue from "@/interfaces/setvalue";
import { Autocomplete, AutocompleteItem } from "@heroui/react";
import { useState } from "react";

export default function Search({setValue} : Readonly<Setvalue>) {
    const [allData, setAllData] = useState([])
    const [timer, setTimer] = useState<number>();
    const [isDisabled, setIsDisabled] = useState<boolean>(false)


    async function get_data_selected_id(id: any) {
        if (id !== null) {
            setValue(await fetch(`http://localhost:4000/get-data-by-id/${id}`).then(resp => resp.json()).then(data => {return data}))
        }
    }
    async function getdata(text: string) {
        setIsDisabled(true)
        clearTimeout(timer);
        const newTimer = window.setTimeout(async () => {
            const response = await fetch(`http://localhost:4000/get-all-data/${text}`);
            const data: [] = await response.json();
            setAllData(data)
        }, 250);
        setTimer(newTimer);
        setIsDisabled(false)

    }
    console.log(allData)
    return (
        <div className="w-full h-full flex flex-col justify-center items-center gap-3 mb-12 md:mb-0">
            <Autocomplete
                className=" w-5/6"
                isLoading={isDisabled}
                label="Search the Empire database"
                placeholder="R2-D2"
                variant="bordered"
                items={allData}
                onInputChange={getdata}
                onKeyDown={(e: any) => e.continuePropagation()}
                onSelectionChange={get_data_selected_id}
            >
                {allData.length > 0 ? allData.map((item: any) => (
                    item.length > 0 ? item.map((element : any) => (
                        <AutocompleteItem key={element.url.slice(0, -1).replace('https://swapi.dev/api/','')} textValue={element.name ?? element.title}>
						<div className="flex gap-2 items-center">
							<div className="flex flex-col">
								<span className="text-small">
									{element.name ?? element.title}
								</span>
                                <span className="text-tiny text-default-400">
									{element.url.match(/(?<=https:\/\/swapi\.dev\/api\/)(.*?)(?=\/\d+\/)/gm)}
								</span>
							</div>
						</div>
					</AutocompleteItem>
                    )) : ''
				)) : <></>}
            </Autocomplete>
        </div>
    );
}
