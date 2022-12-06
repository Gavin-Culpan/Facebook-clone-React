import React from "react";
import Story from "./Story";
import "./StoryReel.css";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://imageio.forbes.com/blogs-images/forbestechcouncil/files/2019/01/canva-photo-editor-8-7.jpg?format=jpg&width=960"
        profileSrc="https://media-exp1.licdn.com/dms/image/D4D03AQFM3r6yPC_Q4g/profile-displayphoto-shrink_800_800/0/1668773062483?e=1675296000&v=beta&t=sMnskHW1MqQmeg3jdfDhmGznYFwPm5vFAiPLP7ZE504"
        title="Gavin Culpan"
      />
      <Story
        image="https://guvonhotels.co.za/wp-content/uploads/2019/04/The-Fairway-Spa.jpg"
        profileSrc="https://upload.wikimedia.org/wikipedia/commons/d/da/Britney_Spears_2013_%28Straighten_Crop%29.jpg"
        title="Britney Spears"
      />
      <Story
        image="https://cdn.pocket-lint.com/r/s/1200x630/assets/images/149902-apps-news-feature-facebook-image3-twxybwtm1m.jpg"
        profileSrc="https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg"
        title="Mark Zuckerberg"
      />
      <Story
        image="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ibFZeQh4S.b4/v79/800x-1.jpg"
        profileSrc="https://upload.wikimedia.org/wikipedia/commons/e/e1/Elon_Musk_%28cropped%29.jpg"
        title="Elon Musk"
      />
      <Story
        image="https://www.gannett-cdn.com/media/2019/06/30/USATODAY/usatsports/gettyimages-153718849.jpg?crop=1365,768,x0,y0&width=1365&height=768&format=pjpg&auto=webp"
        profileSrc="https://upload.wikimedia.org/wikipedia/commons/5/56/Donald_Trump_official_portrait.jpg"
        title="Donald Trump"
      />
    </div>
  );
}

export default StoryReel;
