import HeroSection from '../../components/common/HeroSection'
import EcosystemValueStrip from '../../components/common/EcosystemValueStrip'
import FeaturedEvents from '../../components/events/FeaturedEvents'
import OpportunityShowcase from '../../components/opportunities/OpportunityShowcase'
import EcosystemJourney from '../../components/common/EcosystemJourney'
import WhyIncomate from '../../components/common/WhyIncomate'
import StakeholderSection from '../../components/common/StakeholderSection'
import CategoryStrip from '../../components/common/CategoryStrip'
import FinalCTA from '../../components/common/FinalCTA'
function Home() {
  return (
    <div>
      <HeroSection />
      <CategoryStrip />
      <EcosystemValueStrip />
      <FeaturedEvents />
      <OpportunityShowcase />
      <EcosystemJourney />
      <WhyIncomate />
      <StakeholderSection />
      <FinalCTA />
    </div>
  )
}

export default Home