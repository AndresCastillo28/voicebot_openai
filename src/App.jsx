import { useState } from "react";
import { fetchData, speak, stopSpeak } from "./helpers";
import logo from "./img/voicebot.webp";
import my_logo from "./img/my_logo.png";

export const App = () => {
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const onChangePrompt = ({ target }) => {
    setPrompt(target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const response = await fetchData(prompt);
    speak({ response, setIsSpeaking });
    console.log(response);
    setPrompt("");
    setIsLoading(false);
    setIsSpeaking(true);
  };

  return (
    <div className="container-fluid bg-dark">
      <div className="container vh-100" style={{ background: "#200451" }}>
        <div className="row">
          <div
            className="col d-flex vh-100 align-items-center align-items-center"
            style={{ background: "#1FC6E1" }}
          >
            <div className="row">
              <div className="col">
                <h1 className="text-white text-center">
                  Voicebot technology implement OpenAI
                </h1>
              </div>
              <div className="col-12 text-center mt-2">
                <img src={logo} alt="" style={{ width: "140px" }} />
              </div>

            </div>
            <div className="align-self-end position-fixed">
              <img src={ my_logo } alt="" width={'100px'} />
              {/* <h2 className="bw-bold text-white fs-1">Andres Castillo</h2> */}
            </div>
          </div>
          <div className="col d-flex align-items-center">
            <div className="container">
              <form onSubmit={handleSubmit} autoComplete="off">
                <h1 className="text-white text-center">Write Something</h1>
                <div class="position-relative">
                  <textarea
                    type="text"
                    className="form-control mt-4"
                    name="prompt"
                    value={prompt}
                    onChange={onChangePrompt}
                    disabled={isLoading ? true : false}
                  ></textarea>
                </div>
                <div className="container text-center">
                  <button
                    className="btn btn-primary mt-2"
                    type="submit"
                    style={{ background: "#36DFF7" }}
                    disabled={isLoading ? true : false}
                  >
                    {
                       isLoading ? (
                        <div
                          class="spinner-border text-white"
                          role="status"
                          style={{ animationDuration: "0.8s" }}
                        >
                          <span class="visually-hidden">Loading...</span>
                        </div>
                      ) : 'Send'
                    }
                  </button>
                  
                {isSpeaking ? (
                  <button
                    onClick={(e) => stopSpeak(setIsSpeaking)}
                    className="btn btn-danger mt-2 mx-3"
                    type="button"
                  >
                    Stop
                  </button>
                ) : null}
                </div>
              </form>
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
