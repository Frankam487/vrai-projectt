import CoiffureDetail from '../components/CoiffureDetail'; // Importation du composant réutilisable

const Nkotless1 = () => {
  return (
    <CoiffureDetail
      image="../../public/pic1.jpg"
      title="Nkotless Braids Medium"
      description="Les Nkotless Braids Medium sont parfaites pour un look moderne et élégant, tout en étant faciles à entretenir."
      features={[
        'Idéales pour un entretien facile',
        'Style moderne et élégant',
        'Adaptées à tous types de cheveux',
        "Durabilité de plusieurs semaines avec peu d'entretien",
      ]}
      route="/reserver"
    />
  );
};

export default Nkotless1;