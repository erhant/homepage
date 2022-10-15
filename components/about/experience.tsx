import { Text, Stepper } from "@mantine/core"
import { FC } from "react"
import { Tie } from "tabler-icons-react"

const ICON_SIZE = 20

const experiences: {
  title: string
  company: string
  position: string
}[] = [
  {
    title: "Blockchain Developer",
    company: "Dynasty Studios - Istanbul, Turkey",
    position: "Full-time. Aug 2022 - present",
  },
  {
    title: "Full-Stack Developer",
    company: "Macerita - Istanbul, Turkey",
    position: "Self-Employed. Mar 2022 - Jun 2022",
  },
  {
    title: "Graduate Research & Teaching Assistant",
    company: "Koç University - Istanbul, Turkey",
    position: "Full-time. Sep 2019 - Feb 2022",
  },
  {
    title: "Backend Developer",
    company: "Sociable, Inc. - Istanbul, Turkey",
    position: "Full-time. Jul 2018 - Seb 2018",
  },
  {
    title: "Software Specialist",
    company: "Ata Technology Platforms - Istanbul, Turkey",
    position: "Part-time. Sep 2016 - Apr 2017",
  },
]
const Experience: FC = () => {
  return (
    <Stepper
      orientation="vertical"
      active={-1}
      styles={{
        stepIcon: {
          backgroundColor: "transparent",
        },
      }}
    >
      {experiences.map(({ title, company, position }, i) => (
        <Stepper.Step
          key={i}
          icon={<Tie size={ICON_SIZE} />}
          label={title}
          allowStepSelect={false}
          description={
            <>
              <Text>{company}</Text>
              <Text size="xs" color="dimmed">
                {position}
              </Text>
            </>
          }
        />
      ))}
    </Stepper>
  )
}

export default Experience
