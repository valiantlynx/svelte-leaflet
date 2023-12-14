import { useState, useEffect } from 'react'
import { CompanyHeader } from '../components/CompanyHeader'

import Footer from '../components/footer/Footer'
import { BadgeCard } from '../components/cards/BadgeCard'
import Nav from '../components/nav/Nav'
import client from '../hooks/sanity'

function CompanyPage() {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        sanityApiCall()
    }, [])

    function sanityApiCall() {
        let company = window.localStorage.getItem("clicked company")
        //console.log(company );

        client.fetch(`*[_id == "${company}" ]`).then(data => {
            // use the data in your component
            //console.log(data)
            const titles = data[0]
            //console.log(titles)
            setCategories(titles)
        })

    }
    //console.log(categories)



    return (
        <div>
            <Nav />
            <CompanyHeader company={categories} />
            <Footer />
        </div>
    )
}

export default CompanyPage