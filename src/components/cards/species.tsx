import Species from "@/interfaces/species_types";
import { Card, CardBody, } from "@heroui/react";

export default function SpeciesCard({ species_data }: Readonly<Species>) {
    return (
        <Card className="py-4">
            <CardBody className="overflow-visible py-2">
                <p className="uppercase font-bold text-2xl flex justify-center items-center">{species_data.name}</p>
                <div className="flex justify-center items-center">
                <div className=" grid grid-cols-2 gap-4 mt-4">
                    <div>
                        <p className="text-tiny uppercase font-bold">Classification</p>
                        <small className="text-default-500">{species_data.classification}</small>
                    </div>
                    <div>
                        <p className="text-tiny uppercase font-bold">Designation</p>
                        <small className="text-default-500">{species_data.designation}</small>
                    </div>
                    <div>
                        <p className="text-tiny uppercase font-bold">Eye color</p>
                        <small className="text-default-500">{species_data.eye_colors}</small>
                    </div>
                    <div>
                        <p className="text-tiny uppercase font-bold">Hair color</p>
                        <small className="text-default-500">{species_data.hair_colors}</small>
                    </div>
                    <div>
                        <p className="text-tiny uppercase font-bold">Skin color</p>
                        <small className="text-default-500">{species_data.skin_colors}</small>
                    </div>
                    <div>
                        <p className="text-tiny uppercase font-bold">Language</p>
                        <small className="text-default-500">{species_data.language}</small>
                    </div>
                    <div>
                        <p className="text-tiny uppercase font-bold">Average height</p>
                        <small className="text-default-500">{species_data.average_height} Cm</small>
                    </div>
                    <div>
                        <p className="text-tiny uppercase font-bold">Average lifespan</p>
                        <small className="text-default-500">{species_data.average_lifespan} years</small>
                    </div>
                </div>

                </div>
            </CardBody>
        </Card>
    );

}
