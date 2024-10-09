import { useEffect, useState } from 'react'
import Projeto from '../../components/Projeto'
import Titulo from '../../components/Titulo'

import { Lista } from './styles'

type RepoProps = {
  name: string
  html_url: string
}

const Projetos = () => {
  const [data, setData] = useState<RepoProps[]>([])

  useEffect(() => {
    fetch('https://api.github.com/users/felipe0l/repos')
      .then((res) => res.json())
      .then((res) => setData(res))
  }, [])

  return (
    <section>
      <Titulo fontSize={16}>Projetos</Titulo>
      <Lista>
        {data.map((item) => (
          <li key={item.name}>
            <Projeto title={item.name} url={item.html_url} />
          </li>
        ))}
      </Lista>
    </section>
  )
}

export default Projetos
