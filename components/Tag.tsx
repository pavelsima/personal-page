import Link from 'next/link'
import { kebabCase } from 'pliny/utils/kebabCase'

interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="chip chip-sm" style={{ marginRight: '6px', marginBottom: '6px' }}>
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
