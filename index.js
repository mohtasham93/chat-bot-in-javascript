function chatbot() {
    const input = document.getElementById("input");
    const inputValue = input.value;
    console.log(inputValue)

    const response = axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent"
        , {
            "contents": [
                {
                    "parts": [
                        {
                            "text": inputValue
                        }
                    ]
                }
            ],
        },
        {
            headers: {
                " X-goog-api-key": "AIzaSyBydQpbpSGs6UvbdrDs3Ge0rpP04kY7DNw",
                                "Content-Type": "application/json"
            }
        }
    )
        .then(
            (response) => {
                console.log("Response;");

                const inputV = document.getElementById("inputResponse")
                const aireply = response.data.candidates[0].content.parts[0].text;
                inputV.innerHTML = aireply;
            }

        )
        .catch(
            (error) => {
                console.log("Error;", error);
            }
        )

}
chatbot();
