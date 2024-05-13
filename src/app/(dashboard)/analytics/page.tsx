//import { getUserByClerkId } from '@/app/utils/auth'
//import { prisma } from '@/app/utils/db'
//import MatchCard from '@/components/MatchCard'

import MatchCard from '@/components/matches/MatchCard'
import Techiniques from '@/components/techniques/Techniques'

// const getMatches = async () => {
//     const user = await getUserByClerkId()
//     const matches = await prisma.matchHistroy.findMany({
//         where: {
//             userId: user.id,
//         },
//         orderBy: {
//             createdAt: 'desc',
//         },
//     })

//     return matches
// }

const AnalyticsPage = async () => {
    // const matches = [ {
    //     "id":
    // }]

    return (
        <div>
            <section className="mt-5">
                <h2 className="text-3xl mb-8 ml-3">Recent Matches</h2>
                <div className="flex m-4 gap-2">
                    {/* {matches.map((match) => (
                        <MatchCard key={match.id} match={match} />
                    ))} */}
                    <MatchCard />
                    <MatchCard />
                    <MatchCard />
                </div>
            </section>

            <h2 className="text-3xl mb-8 ml-3">Techniques</h2>

            <section className='className="mt-5"'>
                <Techiniques />
            </section>
        </div>
    )
}

export default AnalyticsPage
