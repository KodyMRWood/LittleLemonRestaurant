import { useEffect, useState } from "react";
import userPic from "../Assets/userIcon.svg";


const testimonialReviews = {
  great:"The food here is amazing! Definitely recommend!",
  good:"Food is good, and ambiance is really nice.",
  okay:"Not bad. I had has better italian food but also worse",
  bad:"I did not like the food here. Too salty!",
  awful:"Worst food I have ever had! Do not come (why is this on their website)"
}

  function getReview(rating){
    if(rating >=0 && rating<=1)
      {
        return testimonialReviews.awful;
      }
      if(rating >1 && rating<=2)
      {
        return testimonialReviews.bad;
      }
      if(rating >2 && rating<=3)
      {
        return testimonialReviews.okay;
      }
      if(rating >3 && rating<=4)
      {
        return testimonialReviews.good;
      }
      if(rating >4 && rating<=5)
      {
        return testimonialReviews.great;
      }
  }


function Testimonial() {
  const [randomUser, setRandomUsers] = useState(null);


    const [rating, setRating] = useState(Math.floor(Math.random()*10) *0.5);
    const initReview = getReview(rating);

  async function fetchTestimonial()
  {
    try{

      const response = await fetch("https://randomuser.me/api/?inc=name,picture&format=json&noinfo");

      if(!response.ok)
        {
          throw new Error(`Response status: ${response.status}`);
        }
        const result = await response.json();
        setRandomUsers(result.results[0]);
    }
    catch(error){
      console.error(`Error was found with the fetch call ${error}`);
    }
  }

  useEffect(()=>{
    fetchTestimonial();
  }, []);

  return (
    <article className="testimonial">
        <img src={randomUser?.picture?.large || userPic} className="testimonial-image" alt="Image of customer who left this review"/>
        <h4 className="testimonial-name">{randomUser ? `${randomUser.name.first} ${randomUser.name.last}` : "Name"}</h4>
        <p className="testimonial-rating"> {rating}/5.0</p>
        <p className="testimonial-description">{initReview}</p>
    </article>
  )
}

export default Testimonial