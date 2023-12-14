

import { useState, useEffect } from 'react'
import { CompanyHeader } from '../../../CompanyHeader'
import { getOurCompanyPage, server } from '../../..//api/axios';
import { useQuery } from '@tanstack/react-query';
import Footer from '../../..//footer/Footer';
import Nav from '../../..//nav/Nav';
import { BadgeCardApi } from '../../../cards/BadgeCardApi'
import { TextInput, Box, Button, Loader, Text } from '@mantine/core';

function UpdateCompany() {
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [organisasjonsnummer, setOrganisasjonsnummer] = useState(928257045)
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    ApiCall()
  }, [])

  const {
    isLoading,
    isError,
    error,
    data: companies,
    isFetching,
    isPreviousData,
  } = useQuery(['/', organisasjonsnummer], () => getOurCompanyPage(organisasjonsnummer), {
    keepPreviousData: true
  })

  console.log("companies", companies)

  if (isLoading) return <p>Loading Users...</p>

  if (isError) return <p>Error: {error.message}</p>
  //console.log("companies ", companies)

  function ApiCall() {
    let company = window.localStorage.getItem("clicked company")
    console.log("window.localStorage.getItem ", company);
    setOrganisasjonsnummer(company)

  }
  console.log("console.log(companies)", companies)

  function handleImageChange(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  }
  
  async function handleSubmit(e) {
    e.preventDefault();
    await server.post(`/api/${organisasjonsnummer}`, { description, image })
      .then(response => {
        // Handle successful response
        setSuccess(true);
      })
      .catch(error => {
        // Handle error
        alert(error);
      });
  }

  return (
    <div>
      <Nav />
      <BadgeCardApi
        key={companies.organisasjonsnummer}
        id={companies.organisasjonsnummer}
        image={companies.image || process.env.PUBLIC_URL + '/img/noImage.png'}
        url={companies.hjemmeside}
        title={companies.navn}
        country={companies.postadresse.kommune}
        source={companies.stiftelsesdato}
        description={companies.naeringskode1.beskrivelse}
        sector={companies.organisasjonsform.beskrivelse}
      />
        {success && <p>Post request successful!</p>}
      <form onSubmit={handleSubmit}>
        <Text>
          Description:
          <TextInput type="text" value={description} onChange={e => setDescription(e.target.value)} />
        </Text>
        <Text>
          Image:
          <TextInput type="file" onChange={handleImageChange} />
        </Text>
        <Button type="submit">Submit</Button>
      </form>

      <Footer />
    </div>
  )
}

export default UpdateCompany