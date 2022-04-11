import { Text, Stepper, MediaQuery } from "@mantine/core"
import { Tie } from "tabler-icons-react"

const Experience = () => {
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
      <Stepper.Step
        icon={<Tie size={18} />}
        label="Full-stack Developer"
        allowStepSelect={false}
        description={
          <>
            <Text>Macerita - Istanbul, Turkey</Text>
            <Text size="xs" color="dimmed">
              Self-Employed. Apr 2022 - <i>present</i>
            </Text>
          </>
        }
      ></Stepper.Step>
      <Stepper.Step
        icon={<Tie size={18} />}
        label="Graduate Research & Teaching Assistant"
        allowStepSelect={false}
        description={
          <>
            <Text>Koç University - Istanbul, Turkey</Text>
            <Text size="xs" color="dimmed">
              Full-time. Sep 2019 - Feb 2022
            </Text>
          </>
        }
      ></Stepper.Step>
      <Stepper.Step
        icon={<Tie size={18} />}
        label="Backend Developer"
        allowStepSelect={false}
        description={
          <>
            <Text>Sociable, Inc. - Istanbul, Turkey</Text>
            <Text size="xs" color="dimmed">
              Full-time. Jul 2018 - Seb 2018
            </Text>
          </>
        }
      ></Stepper.Step>
      <Stepper.Step
        icon={<Tie size={18} />}
        label="Software Specialist"
        allowStepSelect={false}
        description={
          <>
            <Text>Ata Technology Platforms - Istanbul, Turkey</Text>
            <Text size="xs" color="dimmed">
              Part-time. Sep 2016 - Apr 2017
            </Text>
          </>
        }
      ></Stepper.Step>
    </Stepper>
  )
}

export default Experience
