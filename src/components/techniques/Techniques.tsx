//import { Input } from '@/components/ui/input'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import Cut2ProficiencyChart from './Cut2ProficiencyChart'
import CutProficiencyChart from './CutProficiencyChart'

const Techiniques = async () => {
    return (
        <div>
            <section className="flex my-4 px-4 gap-3">
                <Card className="w-1/2 ">
                    <CardHeader>
                        <CardTitle>Migi-Kesa</CardTitle>
                    </CardHeader>
                    <div className="h-[300px]">
                        <CutProficiencyChart />
                    </div>
                </Card>

                <Card className="w-1/2 ">
                    <CardHeader>
                        <CardTitle>Hidari-Kesa</CardTitle>
                    </CardHeader>
                    <div className="h-[300px]">
                        <Cut2ProficiencyChart />
                    </div>
                </Card>

                <Card className="w-1/2 ">
                    <CardHeader>
                        <CardTitle>Migi-Yoko</CardTitle>
                    </CardHeader>
                    <div className="h-[300px]">
                        {/* <CutProficiencyChart /> */}
                        <Cut2ProficiencyChart />
                    </div>
                </Card>
            </section>

            {/* <section className="flex my-4 px-4 gap-2">
                <div className=" w-1/3 h-[250px] ">
                    <CuttingProficiency
                        firstTechnique={techniques?.firstCutting}
                        secondTechnique={techniques?.secondCutting}
                        thirdTechnique={techniques?.thirdCutting}
                    />
                </div>
                <div className=" w-1/3 h-[250px] ">
                    <BlockProficiency
                        firstTechnique={techniques?.firstBlockTechnique}
                        secondTechnique={techniques?.secondBlockTechnique}
                        thirdTechnique={techniques?.thirdBlockTechnique}
                    />
                </div>
                <div className=" w-1/3 h-[250px] ">
                    <StanceProficiency
                        firstTechnique={techniques?.firstSwordStance}
                        secondTechnique={techniques?.secondSwordStance}
                        thirdTechnique={techniques?.thirdSwordStance}
                    />
                </div>
            </section> */}
            {/* <div className="px-4 ">
                <Input
                    type="text"
                    className="px-4 py-2 rounded-md"
                    placeholder="Search..."
                />
            </div> */}
        </div>
    )
}

export default Techiniques
