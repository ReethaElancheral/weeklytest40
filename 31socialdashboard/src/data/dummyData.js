import avatar2 from '../assets/images/avatar2.png'
import avatar1 from '../assets/images/avatar1.png'
import avatar3 from '../assets/images/avatar3.png'
import post1 from '../assets/images/post1.png'
import post2 from '../assets/images/post2.png'


export const user = {
  name: "Reetha Mannavan",
  avatar: avatar1,
  bio: "Web developer. Coffee lover ☕. Tech explorer.",
};

export const posts = [
  {
    id: 1,
    author: "Mannavan",
    avatar: avatar3,
    content: "Morning Bliss!!!",
    image: post1,
    likes: 12,
    comments: ["Awesome!", "Me too!"],
  },
  {
    id: 2,
    author: "Carol",
    avatar: avatar2,
    content: "Latest Benz Model✨",
    image: post2,
    likes: 8,
    comments: ["🔥🔥", "Looks cool!"],
  },
];
