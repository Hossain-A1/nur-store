import Button from "../components/Button"
const Footer = () => {
  return (
    <footer>
      <div className="grid grid-cols-2">
        <div>
          <h3>Ready to get started</h3>
          <h3>Talk to us today</h3>
        </div>
        <div>
          <Button href="/contact"btn color="violet_btn" placeholder="Get started"/>

          
        </div>
      </div>
    </footer>
  )
}

export default Footer