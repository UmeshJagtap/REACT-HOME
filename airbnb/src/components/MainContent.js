import Card from './Card';

export default function MainContent() {
  return (
    <div className="container">
      <Card
        img="./images/OIP (1).jpg"
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life lessons with Katie Zaferes"
        price={136}
      />
      <Card
        img="./images/OIP (5).jpg"
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life lessons with Katie Zaferes"
        price={136}
      />
      <Card
        img="./images/OIP (2).jpg"
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life lessons with Katie Zaferes"
        price={136}
      />
      <Card
        img="./images/OIP (7).jpg"
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life lessons with Katie Zaferes"
        price={136}
      />
    </div>
  );
}
