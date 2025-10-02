import ownerPicture1 from '../Assets/MarioandAdrianA.jpg';
import ownerPicture2 from '../Assets/MarioandAdrianB.jpg';

function AboutSection() {
  return (
    <section>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>

        <img src={ownerPicture1} className="" alt="Mario and Adrian talking" width="200px"/>
        <img src={ownerPicture2} className="" alt="Mario and Adrian laughing" width="200px"/>
    </section>
  )
}

export default AboutSection