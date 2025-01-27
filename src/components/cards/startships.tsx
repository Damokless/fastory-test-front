import Spaceships from "@/interfaces/startships_types";
import { Card, CardBody, } from "@heroui/react";

export default function StarshipsCard({ starships_data }: Readonly<Spaceships>) {
    return (
        <Card className="py-4">
            <CardBody className="overflow-visible py-2">
                <p className="uppercase font-bold text-2xl flex justify-center items-center">{starships_data.name}</p>
                <div className=" grid grid-cols-2 gap-4 w-full mt-4">
                    <div>
                        <p className="text-tiny uppercase font-bold">Model</p>
                        <small className="text-default-500">{starships_data.model}</small>
                    </div>
                    <div>
                        <p className="text-tiny uppercase font-bold">Starship class</p>
                        <small className="text-default-500">{starships_data.starship_class}</small>
                    </div>
                    <div>
                        <p className="text-tiny uppercase font-bold">Manufacturer</p>
                        <small className="text-default-500">{starships_data.manufacturer}</small>
                    </div>
                    <div>
                        <p className="text-tiny uppercase font-bold">Cost to build</p>
                        <small className="text-default-500">{starships_data.cost_in_credits} credits</small>
                    </div>
                    <div>
                        <p className="text-tiny uppercase font-bold">Crew needed to pilot</p>
                        <small className="text-default-500">{starships_data.crew}</small>
                    </div>
                    <div>
                        <p className="text-tiny uppercase font-bold">Passengers</p>
                        <small className="text-default-500">{starships_data.passengers}</small>
                    </div>
                    <div>
                        <p className="text-tiny uppercase font-bold">Max atmosphering speed</p>
                        <small className="text-default-500">{starships_data.max_atmosphering_speed}</small>
                    </div>
                    <div>
                        <p className="text-tiny uppercase font-bold">MGLT</p>
                        <small className="text-default-500">{starships_data.MGLT}</small>
                    </div>
                    <div>
                        <p className="text-tiny uppercase font-bold">Cargo capacity</p>
                        <small className="text-default-500">{starships_data.cargo_capacity}</small>
                    </div>
                    <div>
                        <p className="text-tiny uppercase font-bold">Provide consumables for</p>
                        <small className="text-default-500">{starships_data.consumables}</small>
                    </div>
                </div>
            </CardBody>
        </Card>
    );

}
