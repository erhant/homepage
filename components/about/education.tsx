import { Text, Timeline } from "@mantine/core"
import { School } from "tabler-icons-react"

const Education = () => {
  return (
    <Timeline
      active={1}
      lineWidth={1}
      bulletSize={24}
      styles={{
        itemBulletWithChild: {
          backgroundColor: "transparent",
        },
      }}
    >
      <Timeline.Item bullet={<School size={14} />} title="Bachelor of Sciences">
        <Text>Y&#x131;ld&#x131;z Technical University - Istanbul, Turkey</Text>
        <Text size="xs" color="dimmed">
          Computer Engineering. Sep 2014 - Feb 2019
        </Text>
        <Text size="xs" color="dimmed">
          GPA 3.54 / 4.00
        </Text>
      </Timeline.Item>
      <Timeline.Item bullet={<School size={14} />} title="Master of Sciences">
        <Text>Koç University - Istanbul, Turkey</Text>
        <Text size="xs" color="dimmed">
          Computer Science &amp; Engineering. Sep 2019 - Feb 2022
        </Text>
        <Text size="xs" color="dimmed">
          GPA 3.93 / 4.00
        </Text>
      </Timeline.Item>
      <Timeline.Item bullet={<School size={14} />} title="Doctor of Philosophy">
        <Text size="xs" color="dimmed">
          maybe one day...
        </Text>
      </Timeline.Item>
    </Timeline>
  )
}

export default Education
