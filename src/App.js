import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';

function App(){

  const [songs, setSongs] = useState([]);

  function sendSong() {
    let song = {
      'title':'Bye Bye Bye',
      'album': 'No Strings Attached',
      'artist': 'NSYNC',
      'release_date': '2000-01-17'
    }
  console.log(song)
  createSong(song)
  }

  useEffect(() =>{
    getAllSongs(); 
  }, [])

  async function getAllSongs(){
    let responce = await axios.get('http://127.0.0.1:8000/api/songs_lib/');
    setSongs(responce.data)
    console.log(responce.data)
  }

  async function createSong(newSong){
    let responce = await axios.post('http://127.0.0.1:8000/api/songs_lib/', newSong)
    console.log(responce.data)
    await getAllSongs();
  }
    return (
      <div className="App">
        <button onClick={() => sendSong()}>Submit</button>
      </div>
    );
  }

export default App;
