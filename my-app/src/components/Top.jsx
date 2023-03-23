import image1 from "./bg_header.jpg"
function Top() {
    return (
        <>
            <div id="top"
                style={{ backgroundImage: `url(${image1})` }}
            >
                <h1 id='text1'>AWESOME, CUSTOMIZABLE, FREE</h1>
                <p id="text2">PROGRESSUS: free business bootstrap template by GetTemplate</p>
                <div >
                    <button id='P-button1'>MORE INFO</button>
                    <button id='P-button2'>DOWNLOAD NOW</button>
                </div>

            </div>
        </>
    )
}

export default Top