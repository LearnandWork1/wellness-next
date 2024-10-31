import React from 'react'
import NewsletterTwo from '@/components/sections/newsletters/newsletterTwo'
import PageTitle from '@/components/sections/pageTitle'
import ServicesTwo from '@/components/sections/services/servicesTwo'

export const metadata = {
    title: "VidyaNiketan - Chindcare & Kids School Next.js Template || Services",
    description: "VidyaNiketan - Chindcare & Kids School Next.js and Tailwind CSS Template",
};

const Services = () => {
    return (
        <main>
            <PageTitle pageName={"Services"} breadcrumbCurrent={"Services"} />
            <ServicesTwo />
            <NewsletterTwo />
        </main>
    )
}

export default Services