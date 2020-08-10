import lambdaNotesPic from "./img/lambdanotes.png"
import mappajob from "./img/mappajob.png"
import livestream from "./img/livestreampic.jpeg"
import saintstown from "./img/saintstown.jpg"

export default [
  {
    title: "Lambda Notes",
    stack: "ReactJS, NodeJS, ExpressJS, PostgreSQL",
    text: `Lambda Notes is a note taking application that allows users to organize their information in an efficient manner. Users are able to post notes to a REST API and have those notes be displayed for everyone to see. Lambda Notes also has other features that create a more enjoyable experience for users such as support for premade themes, tagging support for notes, and the ability to search by note title or tag. I created this project using Reactjs, SQLite, Nodejs, and Expressjs.`,
    github: "https://github.com/easyra/back-end-project-week",
    liveSite: "https://lambdanotes-ezra.netlify.com/",
    img: lambdaNotesPic,
  },
  {
    title: "Mappajob",
    stack: "Firebase, Realtime Database, ExpressJS, ReactJS, NodeJS",
    text:
      "MappaJob is a map-based application geared towards helping job seekers find employers and vice-versa in a specific geographic area. This project was created by a team of four using a FERN stack consisting of the technologies: Firebase, Express.js, React, and Node.js. My responsibilities involved work in the both the front-end and back-end of this projects. Some of these responsibilities include designing a maintainable backend REST API, Implementing reusable React Components for interactive user experience, reviewing contributions and pull requests for the project and more.",
    github: "https://github.com/Lambda-School-Labs/Labs8-DeveloperMap",
    img: mappajob,
  },
  {
    title: "Livestreamer Site",
    stack: "Firebase, Realtime Database, ExpressJS, ReactJS, NodeJS",
    text:
      "This project is a website that allows a content creator to advertise their content to their fanbase. The website displays a variety of content from the owner’s social media and allows for multiple avenues for fans to financially support said content. Users can subscribe or donate money, keep track of new content being created, and are even capable of signing into a realtime chat room. This site was made using ReactJS as the frontend, and NodeJS/Firebase as the backend, with the FB Realtime Database as the primary database. ",
    github: "https://github.com/easyra/mockrabbit",
    liveSite: "https://mockrabbit.netlify.app/",
    img: livestream,
  },
  {
    title: "Saints Town Production",
    stack: "ReactJS, GatsbyJS",
    text:
      "This is a site for the company Saints Town Productions and the author, Randall Courtland Davis. This site allows users to find information about Randall and his new book, Dear Future Wife. This site includes reviews, excerpts and any future interviews involving the author. As well as some of the previous projects the author has worked on. ",
    github: "https://github.com/easyra/saintstown-gatsby",
    liveSite: "https://saintstown.com",
    img: saintstown,
  },
]
