

const SectionHead = ({className, title, detail}) => {
  return (
    <div className={`section__head ${className}`}>
        <h3>{title}</h3>
        <h2>{detail}</h2>
    </div>
  )
}

export default SectionHead