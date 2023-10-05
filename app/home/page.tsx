import Header  from '@/components/header'
import Top  from '@/components/home/top'
import Create from '@/components/home/create'
import StartButton from '@/components/home/start-button'
import Analyze from '@/components/home/analyze'
import Unleash from '@/components/home/unleash'
import Solution from '@/components/home/solution'
import Tasks from '@/components/home/tasks'
import Plans from '@/components/home/plans'
import Review from '@/components/home/review'
import Investment from '@/components/home/investment'
import QAList from '@/components/home/qa'
export default async function SignInPage() {
  return (
    <div className='bg-black flex flex-col'>
    <Header />
    <Top />
    <Create />
    <StartButton />
    <Analyze />
    <StartButton />
    <Unleash />
    <Solution />
    <Tasks />
    <Plans />
    <Review />
    <Investment />
    <QAList />
    </div>
  )
}
