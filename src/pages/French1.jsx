import CoiffureDetail from '../components/CoiffureDetail'; // Importation du composant réutilisable

const French1 = () => {
  return (
    <CoiffureDetail
      image="../../public/fss.jpg"
      title="Fulani Small"
      description="Les Fulani Small sont parfaites pour un look moderne et élégant, tout en étant faciles à entretenir."
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

export default French1;
