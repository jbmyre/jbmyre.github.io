// Utilities
import { defineStore } from 'pinia'

export const useWorkHistory = defineStore('app', {
  state: () => ({
    jobs: [
      {
        title: "Senior Broadcast Solutions Software Engineer",
        company: "Sportradar AG",
        start_year: "2018",
        end_year: "Present",
        description: "Design, develop and work in an agile team to build to scale comprehensive data\n" +
          "graphics applications that create and deliver customized solutions to major networks\n" +
          "in a dynamic live sports environment.",
        responsibilities: [
          "Deploy and test unique broadcast graphics software solutions to enterprise customers (CBS, FOX, NBC, Bally Sports etc.) with hundreds of millions of TV viewers" +
          "Utilize Python (Pandas, Flask) and TypeScript programming languages",
          "Employ data-driven architecture and systems design, including RESTful APIs microservices architecture, GraphQL, SQL, NoSQL, and In-memory stores",
          "Implement AWS services such as S3, Lambda, Step functions, and API Gateway to build scalable and reliable serverless applications",
          "Develop and maintain CI/CD pipelines using AWS CodePipeline and CodeBuild",
          "Utilize AWS CloudFormation to define and deploy infrastructure as code"

        ]
      },
      {
        title: "Senior Broadcast/ Systems Engineer",
        company: "CBS Sports Network",
        start_year: "2013",
        end_year: "2018",
        description: null,
        responsibilities: [
          "Support on-air transmission and team of engineers with post production facilities, media asset management with Adobe Premiere, Avid, Chyron & graphics rendering",
          "Project Management including research, consulting, planning and design of technology upgrades",
          "Maintain technologies vital to live and file-based digital work flows",
          "Design and Develop internal applications in Python, Javascript, SQL & PostgreSQL",
          "Oversee and maintain NAS, SAN, Windows & Linux servers, network & virtual environment"
        ]
      }
      // {
      //   title: "",
      //   company: "",
      //   start_year: "",
      //   end_year: "",
      //   description: null,
      //   responsibilities: [
      //     ""
      //   ]
      // },
      // {
      //   title: "",
      //   company: "",
      //   start_year: "",
      //   end_year: "",
      //   description: null,
      //   responsibilities: [
      //     ""
      //   ]
      // }

    ]
  }),
})
