

const Button = ({children, className}) => {
  return (
    <article className={`btn ${className}`}>
        {children}
    </article>
  )
}

export default Button