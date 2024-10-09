import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'

import { Card, LinkBotao } from './styles'

export type Props = {
  title: string
  url: string
}

const Projeto = ({ title, url }: Props) => {
  return (
    <Card>
      <Titulo>{title}</Titulo>
      <Paragrafo tipo="secundario">
        <LinkBotao target="_blank" href={url}>
          {url}
        </LinkBotao>
      </Paragrafo>
    </Card>
  )
}

export default Projeto
