import Link from 'next/link'

const MenuItem = ({ url, label }) => (
  <Link href={ url }>
    <a style={{ color: '#ccc', marginRight: '1rem' }}>{ label }</a>
  </Link>
)

export default () => (
  <nav>
    <MenuItem url='/' label='Inicio' />
    <MenuItem url='/consultoria' label='Consultoria' />
  </nav>
)
