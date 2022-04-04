import { Text, Paper, Title } from "@mantine/core"

type Props = {
  title: string
  description: string
}
const Project = ({ title, description }: Props) => {
  return (
    <Paper shadow="lg" radius="lg" p="lg">
      <Title>{title}</Title>
      <Text>{description}</Text>
    </Paper>
  )
}

export default Project
