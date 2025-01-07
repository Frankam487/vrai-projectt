import CoiffureDetail from '../components/CoiffureDetail'; // Importation du composant réutilisable

const Passion1 = () => {
  return (
    <CoiffureDetail
      image="../../public/homme.jpg"
      title="Fulani Small"
      description="Les Fulani Courtes sont parfaites pour un look moderne et élégant, tout en étant faciles à entretenir."
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

export default Passion1;
