import People from "@/interfaces/people_types";
import { Card, CardHeader, CardBody, Image, CardFooter, Divider } from "@heroui/react";

export default function PeopleCard({ people_data }: Readonly<People>) {
    return (
        <Card className="py-4">
            <CardBody className="overflow-visible py-2">
                <Image
                    alt="Card background"
                    className="object-cover rounded-lg"
                    src={`https://vieraboschkova.github.io/swapi-gallery/static/assets/img/${people_data.url.slice(0, -1).replace('https://swapi.dev/api/', '')}.jpg`}
                    width={270}
                />
            </CardBody>
            <CardHeader className="pb-0 pt-2 px-3 flex-col items-start mb-4">
                <p className="text-tiny uppercase font-bold">{people_data.name}</p>
                <small className="text-default-500">{people_data.gender}</small>
            </CardHeader>
            <div className="pb-0 pt-2 px-3 flex-col items-start">
                <p className="text-tiny uppercase font-bold">Information</p>
                <Divider className="flex self-center mb-4 w-11/12" />
            </div>
            <CardFooter className="flex flex-col">
                <div className=" grid grid-cols-2 gap-4 w-full">
                    <div>
                        <p className="text-tiny uppercase font-bold">Weight</p>
                        <small className="text-default-500">{people_data.mass} Kg</small>
                    </div>
                    <div>
                        <p className="text-tiny uppercase font-bold">Height</p>
                        <small className="text-default-500">{people_data.height} Cm</small>
                    </div>
                    <div>
                        <p className="text-tiny uppercase font-bold">Eye color</p>
                        <small className="text-default-500">{people_data.eye_color}</small>
                    </div>
                    <div>
                        <p className="text-tiny uppercase font-bold">Skin color</p>
                        <small className="text-default-500">{people_data.skin_color}</small>
                    </div>
                    <div>
                        <p className="text-tiny uppercase font-bold">Hair color</p>
                        <small className="text-default-500">{people_data.hair_color}</small>
                    </div>
                    <div>
                        <p className="text-tiny uppercase font-bold">Birth year</p>
                        <small className="text-default-500">{people_data.birth_year}</small>
                    </div>
                </div>
            </CardFooter>
        </Card>
    );

}
