import { useLoaderData } from "react-router-dom"
import CampaignCard from "../components/CampaignCard"
import Heading from "../components/Heading"
import useTitle from "../hook/useTitle"

const Campaigns = () => {
      useTitle("Donation campaigns")
      const data = useLoaderData()

      return (
            <section className="max-w-6xl mx-auto py-12">
                  <div className="pb-7">
                        <Heading title={"Donation Campaigns"}
                              subtitle={"Explore ongoing campaigns and join us in making a difference."} />
                  </div>
                  <div className="w-10/12 sm:w-8/12 md:w-9/12 lg:w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                              data.map(campaign => <CampaignCard key={campaign.id} campaign={campaign} />)
                        }
                  </div>
            </section>
      )
}

export default Campaigns