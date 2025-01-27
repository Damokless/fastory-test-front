import Planets from "@/interfaces/planets_type";
import { Card, CardBody, } from "@heroui/react";

export default function PlanetCard({ planet_data }: Readonly<Planets>) {
    return (
        <Card className="py-4">
            <CardBody className="overflow-visible py-2">
                <p className="uppercase font-bold text-2xl flex justify-center items-center">{planet_data.name}</p>
                <div className=" grid grid-cols-2 gap-4 w-full mt-4">
                    <div>
                        <p className="text-tiny uppercase font-bold">Diameter</p>
                        <small className="text-default-500">{planet_data.diameter} Km</small>
                    </div>
                    <div>
                        <p className="text-tiny uppercase font-bold">Water surface</p>
                        <small className="text-default-500">{planet_data.surface_water} %</small>
                    </div>
                    <div>
                        <p className="text-tiny uppercase font-bold">Climate</p>
                        <small className="text-default-500">{planet_data.climate}</small>
                    </div>
                    <div>
                        <p className="text-tiny uppercase font-bold">Terrain</p>
                        <small className="text-default-500">{planet_data.terrain}</small>
                    </div>
                    <div>
                        <p className="text-tiny uppercase font-bold">Population</p>
                        <small className="text-default-500">{planet_data.population}</small>
                    </div>
                    <div>
                        <p className="text-tiny uppercase font-bold">Gravity</p>
                        <small className="text-default-500">{planet_data.gravity}</small>
                    </div>
                    <div>
                        <p className="text-tiny uppercase font-bold">Orbital period</p>
                        <small className="text-default-500">{planet_data.orbital_period} days</small>
                    </div>
                    <div>
                        <p className="text-tiny uppercase font-bold">rotation period</p>
                        <small className="text-default-500">{planet_data.rotation_period} hours</small>
                    </div>
                </div>
            </CardBody>
        </Card>
    );

}
