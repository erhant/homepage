import { Text, Title, Box, Anchor } from "@mantine/core"
import { BoxSx } from "@mantine/core/lib/components/Box/use-sx/use-sx"
const boxStyle: BoxSx = { borderLeft: "0.2em outset", paddingLeft: "2em", marginTop: "2em" }

const AboutDetail = () => {
  return (
    <>
      <Box sx={boxStyle}>
        <Title>Who am I?</Title>
        <Text>who am I</Text>
      </Box>

      <Box sx={boxStyle}>
        <Title>What do I do?</Title>
        <Text>I do</Text>
      </Box>

      <Box sx={boxStyle}>
        <Title>When did I start it?</Title>
        <Text></Text>
      </Box>

      <Box sx={boxStyle}>
        <Title>Why do I do it?</Title>
        <Text>I love programming, maths and all that jazz. It is a good century to be loving these things.</Text>
      </Box>

      <Box sx={boxStyle}>
        <Title>Where am I from?</Title>
        <Text>I am from Istanbul, Turkey. 🇹🇷</Text>
      </Box>
    </>
  )
}

export default AboutDetail
