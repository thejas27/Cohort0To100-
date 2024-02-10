import { Card } from './Card'

function App() {
  const cardProps = {
    name:'Thejas',
    description:'A student in 100xDevs cohort 2.0',
    intrests:['Java', 'Web Dev'],
    linkedin:"https://www.linkedin.com/in/thejas27",
    twitter:'',
    otherSocial:''

  }

  return (
    <>
      <Card {...cardProps}/>
    </>
  )
}

export default App
