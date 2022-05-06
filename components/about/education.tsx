import { Text, Stepper } from "@mantine/core"
import { FC } from "react"
import { School } from "tabler-icons-react"

const ICON_SIZE = 20
const Education: FC = () => {
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
        icon={<School size={ICON_SIZE} />}
        label="Master of Sciences"
        allowStepSelect={false}
        description={
          <>
            <Text>Koç University - Istanbul, Turkey</Text>
            <Text size="xs" color="dimmed">
              Computer Science &amp; Engineering. Sep 2019 - Feb 2022
            </Text>
            <Text size="xs" color="dimmed">
              GPA 3.93 / 4.00
            </Text>
          </>
        }
      ></Stepper.Step>
      <Stepper.Step
        icon={<School size={ICON_SIZE} />}
        label="Erasmus+ Exchange Student"
        allowStepSelect={false}
        description={
          <>
            <Text>Warsaw Univeristy of Technology - Warsaw, Poland</Text>
            <Text size="xs" color="dimmed">
              Computer Engineering. Feb 2018 - Jun 2018
            </Text>
          </>
        }
      ></Stepper.Step>
      <Stepper.Step
        icon={<School size={ICON_SIZE} />}
        label="Bachelor of Sciences"
        allowStepSelect={false}
        description={
          <>
            <Text>Y&#x131;ld&#x131;z Technical University - Istanbul, Turkey</Text>
            <Text size="xs" color="dimmed">
              Computer Engineering. Sep 2014 - Feb 2019
            </Text>
            <Text size="xs" color="dimmed">
              GPA 3.54 / 4.00
            </Text>
          </>
        }
      ></Stepper.Step>
    </Stepper>
  )
}

export default Education
