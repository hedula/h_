import Container from '../../components/molecules/Container'

export default function Footer() {
  return (
    <footer>
      <Container>
        <div className="flex flex-col lg:flex-row items-center py-28">
          <h3 className="lg:pr-4 mb-10 lg:mb-0 lg:w-1/2 text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left">
            A pro blog for productive professional programmers
          </h3>
        </div>
      </Container>
    </footer>
  )
}