
import { useState } from "react"
import { CardFinal } from "./components/CardFinal"
import { CardInicial } from "./components/CardInicial"

export function App() {
  const [submited, setSubimited] = useState(false)
  const [rateNote, setRateNote] = useState(0)

  return(
    submited === false ? ( 
      <CardInicial setSubimited={setSubimited} rateNote={rateNote} setRateNote={setRateNote}/>
    ) : (
      <CardFinal rateNote={rateNote}/>
 
    )

  )
}