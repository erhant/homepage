import Project from "../components/project"
import { Grid } from "@mantine/core"

const projects = [
  {
    title: "Test",
    description: "something something fkdsjhkjdhgkjsh",
  },
]

const Projects = () => {
  return (
    <Grid>
      {projects.map((p, i) => {
        return (
          <Grid.Col xs={12} md={6} lg={3}>
            <Project title={p.title} description={p.description} />
          </Grid.Col>
        )
      })}
    </Grid>
  )
}

export default Projects
