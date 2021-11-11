import { useState, useEffect } from "react";
import Image from 'next/image'
import stars from '../../public/assets/stars.png'
export const Reviews = () => {
  const [open, setOpen] = useState(false)
  const [items, setItems] = useState([
    {
      Customer: "Blue Collar Trades LLC",
      desc: "They always do a great job!",
    },
    {
      Customer: "Jim Larkain",
      desc: "Alvin is a wizard! Best mechanic in town and the prices are fair too. Alvin had never done us wrong and we won't go anywhere else.",
    },
    {
      Customer: "Steve Stringham",
      desc: "Alvin did a great job analyzing the performance and function of my 7.3L engine.  After his consultation I agreed on a repair plan and my truck is running better then it has in years.  Thank you Spokane Powerstroke!",
    },
    {
      Customer: "Mr.Johnson",
      desc: "Awesome place! Alvin knows his items. He has been working on Ford diesel's since the 90's before powerstroke came out. Glad to see him run this shop.",
    },
    {
      Customer: "Brandon Johnson",

      desc: "Best Ford Diesel mechanic shop in Spokane Washington, very easy going guys that are very easy to work with",
    },
    {
      Customer: "Glenn Jacklin",
      desc: "My wife and I were looking for used ford diesel pick up, a friend suggested I call Alvin for advice....we called him on Saturday morning, his day off, he took the call and spent an hour or more in the phone with us telling us what to look for, watch out for, etc.  downloaded major information to us, and we weren’t even a customer at the time.  Since then, I have taken it to Alvin for egr work, new head gasket and stud bolts, etc, and the work they have done has been flawless.... very knowledgeable and reasonably priced for sure!  Strong recommendation to use these guys.",
    },
    {
      Customer: "Ron Medlen",
      desc: "Excellent customer service. Great mechanical aptitude. If you want your work done right and at a better than dealer price, take your vehicle in to this Top Notch shop.",
    },
    {
      Customer: "Chris Walsh",
      desc: "Al, Brandon and the guys that power stroke are the very best, excellent mechanics, fair rates, excellent service you won't do better than these guys.",
    },
    {
      Customer: "Raymond Leonard",

      desc: "This shop is the best.   The first time I needed help Alvin actually talked me through doing the repair on the phone just to get me back on the road.  I wasn't  even a customer yet and he was willing to take the time.  Since then I have had several things looked at and repaired on my old 7.3 F350 and excursion.   Always helpful and reasonable prices and great work from the team.",
    },
    {
      Customer: "JoLyn Blancher",

      desc: "Called into the shop this morning to ask some general questions about an issue with our F-350. Alvin was so awesome!!! He was full of knowledge, kindness, honesty, and very helpful when both my husband and I called in. We will absolutely be going to Spokane PowerStoke with any needs or problems that arise with our truck. Great first impression!!! Thanks, Alvin!",
    },
    {
      Customer: "STEAM BROTHERS LLC",

      desc: "Do the job rite, honest and great service. Would definitely recommend.👍👍👍",
    },
    {
      Customer: "Chris Harper",

      desc: "Alvin always does a great job at a fair price.  Super experienced and has a quick turnaround.",
    },
    {
      Customer: "Rowdy Bovan",

      desc: "Great service and communication from Alvin. He got my truck back on the road quickly and at a fair price. I really appreciate it thanks again!",
    },
    {
      Customer: "Kent Firestone",

      desc: "Great job truck runs perfect",
    },
    {
      Customer: "Timothy Daniels",

      desc: "These guys are great.  They diagnosed the problem and had it fixed promptly.  And the price was fair!",
    },
    {
      Customer: "Pamela Murray",

      desc: "Spokane powerstroke service is top notch.  Unfortunately,  we have had to visit many Spokane diesel shops for repairs and this shop is by far the best. The service and diesel expertise this shop gave us was unprecedented.  This is the best diesel shop in town!!!",
    },
  ]);
  
 if (open === false) {
   return (
   <div>
  
      {items.slice(1, 4).map(({Customer, desc}) => {
        return (
          <div key={Customer} className="customerReview">
            <Image src={stars} alt="customer-review" />
            <h4>{Customer}</h4>
            <p>{desc}</p></div>
        )
      })}
       <button onClick={() => setOpen(!open)}>Show all reviews</button> 
    </div> )
 }  else {
   return (
   <div>{items.map(({Customer, desc}) => {
      return (
        <div key={Customer} className="customerReview">
            <h4>{Customer}</h4>
            <p>{desc}</p></div>
      )
    })}
    
 
    <button onClick={() => setOpen(!open)}>Collapse Reviews</button> 
    
  </div> ) }


    
  
};
// same as last time
