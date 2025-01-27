import Vehicles from "@/interfaces/vehicles_types";
import { Card, CardBody, } from "@heroui/react";

export default function VehiclesCard({ vehicles_data }: Readonly<Vehicles>) {
    return (
        <Card className="py-4">
            <CardBody className="overflow-visible py-2">
                <p className="uppercase font-bold text-2xl flex justify-center items-center">{vehicles_data.name}</p>
                <div className=" grid grid-cols-2 gap-4 w-full mt-4">
                    <div>
                        <p className="text-tiny uppercase font-bold">Model</p>
                        <small className="text-default-500">{vehicles_data.model}</small>
                    </div>
                    <div>
                        <p className="text-tiny uppercase font-bold">Starship class</p>
                        <small className="text-default-500">{vehicles_data.vehicle_class}</small>
                    </div>
                    <div>
                        <p className="text-tiny uppercase font-bold">Manufacturer</p>
                        <small className="text-default-500">{vehicles_data.manufacturer}</small>
                    </div>
                    <div>
                        <p className="text-tiny uppercase font-bold">Cost to build</p>
                        <small className="text-default-500">{vehicles_data.cost_in_credits} credits</small>
                    </div>
                    <div>
                        <p className="text-tiny uppercase font-bold">Crew needed to pilot</p>
                        <small className="text-default-500">{vehicles_data.crew}</small>
                    </div>
                    <div>
                        <p className="text-tiny uppercase font-bold">Passengers</p>
                        <small className="text-default-500">{vehicles_data.passengers}</small>
                    </div>
                    <div>
                        <p className="text-tiny uppercase font-bold">Max atmosphering speed</p>
                        <small className="text-default-500">{vehicles_data.max_atmosphering_speed}</small>
                    </div>
                    <div>
                        <p className="text-tiny uppercase font-bold">Length</p>
                        <small className="text-default-500">{vehicles_data.length}</small>
                    </div>
                    <div>
                        <p className="text-tiny uppercase font-bold">Cargo capacity</p>
                        <small className="text-default-500">{vehicles_data.cargo_capacity}</small>
                    </div>
                    <div>
                        <p className="text-tiny uppercase font-bold">Provide consumables for</p>
                        <small className="text-default-500">{vehicles_data.consumables}</small>
                    </div>
                </div>
            </CardBody>
        </Card>
    );

}
