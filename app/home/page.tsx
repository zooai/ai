import Header  from '@/components/header'
import Top  from '@/components/home/top'
import Create from '@/components/home/create'
import StartButton from '@/components/home/start-button'
import Analyze from '@/components/home/analyze'
import Unleash from '@/components/home/unleash'
import Solution from '@/components/home/solution'
import Steps from '@/components/home/steps'
import Tasks from '@/components/home/tasks'
import Plans from '@/components/home/plans'
import Review from '@/components/home/review'
import Investment from '@/components/home/investment'
import QAList from '@/components/home/qa'
import SubFooter from '@/components/home/sub_footer'
import Footer from '@/components/home/footer'
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
    <Steps />
    <Tasks />
    <Plans />
    <Review />
    <Investment />
    <QAList />
    <SubFooter />
    <Footer />
    </div>
  )
}
