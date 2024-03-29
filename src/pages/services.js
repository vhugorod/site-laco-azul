import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Services from "../components/Services"

const ServicesPage = ({
  data:{allStrapiServices:{nodes:services}}
}) => {
  return (
    <Layout>
      <section className="services-page">
        <Services services={services} title="Todos serviços" />
      </section>
    </Layout>
  )
}
export const query = graphql`
{
  allStrapiServices {
    nodes {
      title
      description
      image {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default ServicesPage
