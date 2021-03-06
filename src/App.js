import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';
import SearchBar from './Components/SearchBar/SearchBar';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import CreateSong from './Components/CreateSong/CreateSong';

function App(){

  const [songs, setSongs] = useState([]);

  // function sendSong() {
  //   let song = {
  //     'title':'Bye Bye Bye',
  //     'album': 'No Strings Attached',
  //     'artist': 'NSYNC',
  //     'release_date': '2000-01-17'
  //   }
  // console.log(song)
  // createSong(song)
  // }

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

  const filterSongs = (searchTerm) => {
    console.log(searchTerm);
    let matchingSongs = songs.filter((songs) => {
      if(songs.title.toLowerCase().includes(searchTerm.toLowerCase()) ||songs.artist.toLowerCase().includes(searchTerm.toLowerCase()) || songs.album.toLowerCase().includes(searchTerm.toLowerCase()) ||songs.release_date.toLowerCase().includes(searchTerm.toLowerCase()) || songs.genre.toLowerCase().includes(searchTerm.toLowerCase()) ){
      return true
      }
      else return false
  })
  setSongs(matchingSongs)
}
    return (
      <div>
       <div>
         <NavigationBar />
       </div>
       <div>
         <DisplayMusic songs={songs}/>
       </div>
       <div>
         <SearchBar filterSongs={filterSongs} getAllSongs={getAllSongs}/>
       </div>
       <div>
         <CreateSong createSong={createSong}/>
       </div>
      </div>
    );
  }

export default App;
