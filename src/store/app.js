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
          "Deploy and test unique broadcast graphics software solutions to enterprise customers\n" +
          "(CBS, FOX, NBC, Bally Sports etc.) with hundreds of millions of TV viewers",
          "Utilize Python (Pandas, Flask) and TypeScript programming languages",
          "Employ data-driven architecture and systems design, including RESTful APIs,\n" +
          "microservices architecture, GraphQL, SQL, NoSQL, and In-memory stores",
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
      },
      {
        title: "AV Project Manager & Systems Engineer",
        company: "Technical Operations Inc.",
        start_year: "2012",
        end_year: "2013",
        description: null,
        responsibilities: [
          "Design and oversee AV installations for corporations and schools",
          "Service calls and consulting on IT systems"
        ]
      },
      {
        title: "Lead Audio Visual Technician",
        company: "Presentation Products Inc. & Shadowbox Design Mgmt. & PSA",
        start_year: "2009",
        end_year: "2012",
        description: null,
        responsibilities: [
          "Lead AV technician & audio specialist (A1) for corporate and commercial events, conferences, presentations and meetings, primarily at Scholastic Inc.",
          "Install SMART boards, Crestron systems, projectors, digital signage, configuring DSPs, Clearone and Cisco teleconferencing",
          "Work with PA systems, mics, antenna systems, projectors, screens, video distribution & switcher systems and custom cable creation Polycom & Tandberg teleconferencing & TriCaster systems"
        ]
      },
      {
        title: "Chief Audio Engineer & Mixer ",
        company: "Recording studios and live venues",
        start_year: "2005",
        end_year: "2009",
        description: null,
        responsibilities: [
          "Joes Public Theater, Kumble Theater (LIU), The Hook, Rocks Off etc..."
        ]
      },

    ]
  }),
})
