import { useState } from "react";
export const Reviews = () => {
  const [items, setItems] = useState([
    {
      name: "Steve Stringham",
      desc: "Alvin did a great job analyzing the performance and function of my 7.3L engine.  After his consultation I agreed on a repair plan and my truck is running better then it has in years.  Thank you Spokane Powerstroke!",
    },
    {
      name: "Mr.Johnson",
      desc: "Awesome place! Alvin knows his stuff. He has been working on Ford diesel's since the 90's before powerstroke came out. Glad to see him run this shop.",
    },
    {
      name: "Brandon Johnson",

      desc: "Best Ford Diesel mechanic shop in Spokane Washington, very easy going guys that are very easy to work with",
    },
    {
      name: "Glenn Jacklin",
      desc: "My wife and I were looking for used ford diesel pick up, a friend suggested I call Alvin for advice....we called him on Saturday morning, his day off, he took the call and spent an hour or more in the phone with us telling us what to look for, watch out for, etc.  downloaded major information to us, and we weren’t even a customer at the time.  Since then, I have taken it to Alvin for egr work, new head gasket and stud bolts, etc, and the work they have done has been flawless.... very knowledgeable and reasonably priced for sure!  Strong recommendation to use these guys.",
    },
    {
      name: "Ron Medlen",
      desc: "Excellent customer service. Great mechanical aptitude. If you want your work done right and at a better than dealer price, take your vehicle in to this Top Notch shop.",
    },
    {
      name: "Chris Walsh",
      desc: "Al, Brandon and the guys that power stroke are the very best, excellent mechanics, fair rates, excellent service you won't do better than these guys.",
    },
    {
      name: "Raymond Leonard",

      desc: "This shop is the best.   The first time I needed help Alvin actually talked me through doing the repair on the phone just to get me back on the road.  I wasn't  even a customer yet and he was willing to take the time.  Since then I have had several things looked at and repaired on my old 7.3 F350 and excursion.   Always helpful and reasonable prices and great work from the team.",
    },
    {
      name: "JoLyn Blancher",

      desc: "Called into the shop this morning to ask some general questions about an issue with our F-350. Alvin was so awesome!!! He was full of knowledge, kindness, honesty, and very helpful when both my husband and I called in. We will absolutely be going to Spokane PowerStoke with any needs or problems that arise with our truck. Great first impression!!! Thanks, Alvin!",
    },
    {
      name: "STEAM BROTHERS LLC",

      desc: "Do the job rite, honest and great service. Would definitely recommend.👍👍👍",
    },
    {
      name: "Chris Harper",

      desc: "Alvin always does a great job at a fair price.  Super experienced and has a quick turnaround.",
    },
    {
      name: "Rowdy Bovan",

      desc: "Great service and communication from Alvin. He got my truck back on the road quickly and at a fair price. I really appreciate it thanks again!",
    },
    {
      name: "Kent Firestone",

      desc: "Great job truck runs perfect",
    },
    {
      name: "Timothy Daniels",

      desc: "These guys are great.  They diagnosed the problem and had it fixed promptly.  And the price was fair!",
    },
    {
      name: "Pamela Murray",

      desc: "Spokane powerstroke service is top notch.  Unfortunately,  we have had to visit many Spokane diesel shops for repairs and this shop is by far the best. The service and diesel expertise this shop gave us was unprecedented.  This is the best diesel shop in town!!!",
    },
    {
      name: "Dave Benham",

      desc: "These guys are solid and one stop place for powerstroke work and repair.  Talk to Brandon hes 100% knowledgable and honest.",
    },
    {
      name: "Robert Weathermon",

      desc: "Talk to Brandon or Alvin. They are the best.",
    },
    {
      name: " Dale I",

      desc: "Alvin is one of the best mechanics I know. Honest and willing to take the effort to solve the cause of the problem. Fair rates and top service equals quality.",
    },
    {
      name: "Brady Kriegh",

      desc: "Alvin is great. Fast service at very fair price. Highly recommend taking your vehicle to him.",
    },
  ]);

  return <div>
      {items.map((items) => {
          <div className="review">
          <h4>{items.name}</h4>
          <p>{items.desc}</p>
          </div>
      })}
  </div>;
};
// same as last time
