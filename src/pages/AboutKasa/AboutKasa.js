// import Components
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Collapsible from '../../components/Collapsible'
import Footer from '../../components/Footer'

// import modules
import '../../styles/AboutKasa.css'
//import images
import AboutBanner from '../../assets/about-kasa-banner.jpg'

//component
function AboutKasa() {
  return (
    <div>
      <Header />
      <Banner image={AboutBanner} />
      <section className="about_kasa">
        <div className="collapsible_bloc">
          <Collapsible
            label="Fiabilité"
            items={
              <p>
                Les annonces postées sur Kasa garantissent une fiabilité totale.
                Les photos sont conformes aux logements, et toutes les
                informations sont régulièrement vérifiées par nos équipes.
              </p>
            }
          />
        </div>
        <div className="collapsible_bloc">
          <Collapsible
            label="Respect"
            items={
              <p>
                La bienveillance fait partie des valeurs fondatrices de Kasa.
                Tout comportement discriminatoire ou de perturbation du
                voisinage entraînera une exclusion de notre plateforme.
              </p>
            }
          />
        </div>
        <div className="collapsible_bloc">
          <Collapsible
            label="Service"
            items={
              <p>
                Nos équipes se tiennent à votre disposition pour vous fournir
                une expérience parfaite. N'hésitez pas à nous contacter si vous
                avez la moindre question.
              </p>
            }
          />
        </div>
        <div className="collapsible_bloc">
          <Collapsible
            label="Sécurité"
            items={
              <p>
                La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes
                que pour les voyageurs, chaque logement correspond aux critères
                de sécurité établis par nos services. En laissant une note aussi
                bien à l'hôte qu'au locataire, cela permet à nos équipes de
                vérifier que les standards sont bien respectés. Nous organisons
                également des ateliers sur la sécurité domestique pour nos
                hôtes.
              </p>
            }
          />
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default AboutKasa
