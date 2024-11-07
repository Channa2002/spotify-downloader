import { AiFillSpotify } from "react-icons/ai";
import './App.css'
import axios from "axios";
import { useState } from "react";

function App() {
 
  const [Url, setUrl] = useState("");

  const handleUrl = (e) => {
    e.preventDefault();
    setUrl(e.target.value);
  }
 
  const downloadSong = async () => {
    setUrl("");
    const options = {
      method: 'GET',
      url: 'https://spotify-downloader9.p.rapidapi.com/downloadSong',
      params: {
        songId: Url
      },
      headers: {
        'x-rapidapi-key': import.meta.env.VITE_API_KEY,
        'x-rapidapi-host': 'spotify-downloader9.p.rapidapi.com'
      }
    };

    try {
      const res = await axios.request(options);
      console.log(res.data.data.downloadLink);
      window.location.href = res.data.data.downloadLink;
    } catch (error) {
      console.log(error)
    }
  }
  
   
  return (
    <>
       <div className='h-screen w-screen bg-gradient-to-r from-lime-300 to-slate-100 flex items-center justify-center flex-col gap-y-2'>

        <div className="flex items-center justify-center gap-x-2 text-xl font-bold">
        <AiFillSpotify size={50} />
        <p>Song Downloader</p>
        </div>

        <div className="flex gap-2">
          <input type="url"  className="h-10 w-[450px] border-none outline-none px-5 rounded-lg" onChange={handleUrl} value = {Url}/>
          <button className="bg-orange-500 h-10 px-2 rounded-lg font-bold hover:bg-black text-cyan-50" onClick={downloadSong} >Download</button>
        </div>
         
       </div>
    </>
  )
}

export default App
