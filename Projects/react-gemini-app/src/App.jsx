import { useState, useEffect } from "react"

function App() {
  const [image, setImage] = useState(null)
  const [imageURL, setImageURL] = useState("")
  const [value, setValue] = useState("")
  const [response, setResponse] = useState("")
  const [error, setError] = useState("")

  const surpriseOptions = [
    'Does the image have a bird?',
    'Is the image fabulously pink?',
    'Does the image have puppies?'
  ]

  const surprise = () =>{
    const randValue = surpriseOptions[Math.floor(Math.random() * surpriseOptions.length)]
    setValue(randValue)
  }

  const uploadImage = async (e) => {
    const file = e.target.files[0]
    if (file) {
      const formData = new FormData()
      formData.append('file', file)

      setImage(file)
      setImageURL(URL.createObjectURL(file))


      try {
        const options = {
          method: 'POST',
          body: formData
        }
        const response = await fetch('http://localhost:8000/upload', options)
        const data = await response.json()
        console.log(data)
      } catch (err) {
        console.error(err)
        setError("Something didn't work! Please try again.")
      }
    }
    else{
      setError('Error occured uploading the image! Try again.')
    }
  }

  const analyzeImage = async () => {
    if(!image) {
      setError('Error! Must have an existing image.')
      return
    }

    try {
      const options = {
        method: 'POST',
        body: JSON.stringify({message: value}),
        headers: {
          'Content-Type': 'application/json'
        }
      }
      const response = await fetch('http://localhost:8000/gemini', options)
      const data = await response.text()
      setResponse(data)
    } catch (err) {
      console.error(err)
      setError("Something didn't work! Please try again.")
    }
  }

  const clear = () => {
    setImage(null)
    setImageURL('')
    setResponse('')
    setError('')
    setValue('')
  }

  useEffect(() => {
    // Cleanup the URL when the component is unmounted or when the image changes
    return () => {
      if (imageURL) {
        URL.revokeObjectURL(imageURL)
      }
    }
  }, [imageURL])

  return (
    <>
      <div className="app">

        <section className="search-section">
          <div className="image-container">
            {image && <img src={imageURL} width={300} height={300} />}
          </div>
          <p className="extra-info">
            <span>
              <label htmlFor="files">Upload an image</label>
              <input onChange={uploadImage} id="files" type="file" accept="image/*" />
            </span>
            to ask questions about.
          </p>
          <p>What do you want to know about the image?
            <button className="surprise" onClick={surprise} disabled={response}>
              Surprise me
            </button>
          </p>
          <div className="input-container">
            <input type="text"
              value={value}
              placeholder="What is in the image..."
              onChange={e => setValue(e.target.value)}
            />
            {(!response && !error) && <button onClick={analyzeImage}>Ask me</button>}
            {(!response || !error) && <button onClick={clear}>Clear</button>}
          </div>
          {error && <p>{error}</p>}
          {response && <p>{response}</p>}
        </section>

      </div>
    </>
  )
}

export default App
