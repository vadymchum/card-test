import Card from '../components/Card'
import { Center } from '@chakra-ui/react'
import { CardExampleInfo } from "../variables"

export default function Home () {
  return (
    <Center>
      {
        CardExampleInfo.map((item, idx) => {
          return (
            <div key={idx}>
              <Card avatar={item.avatar}
                    question={item.question}
                    placeholder={item.placeholder}
                    button={item.button}
                    username={item.username}
                    columns={item.columns}
                    buttonBg={item.buttonBg}
                    cardBg={item.cardBg}
                    footerBg={item.footerBg}
                    time={item.time}/>
            </div>
          )
        })
      }
    </Center>
  )
}
