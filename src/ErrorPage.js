import Button from "./components/Button"

const ErrorPage = () => {
  return (
    <section className='min-h-screen wrapper section-p'>
 <div className="">
        <div className="flex flex-col items-center justify-center gap-2">
          <h2 className="text-4xl font-medium">404</h2>
          <h3>UH OH! You're lost.</h3>
          <p className="w-2/3">
            The page you are looking for does not exist. How you got here is a
            mystery. But you can click the button below to go back to the
            homepage.
          </p>

         <Button to="/" color="violet_btn" placeholder="Go back to home" />
        </div>
      </div>

    </section>
  )
}

export default ErrorPage