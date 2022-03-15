import React, { useState } from 'react';

const CreateSongForm = (props) => {

    const [title, setTitle] = useState(''); 
    const [album, setAlbum] = useState('');
    const [genre, setGenre] = useState('');
    const [release_date, setReleaseDate] = useState('');
    const [artist, setArtist] = useState('');

    function handleSubmit(formEvent){
        formEvent.preventDefault();  // prevents page refresh
        let newSong = {      //  staging data together to send to app.js
            title: title,
            album: album,
            genre: genre,
            release_date: release_date,
            artist: artist,
        };
        console.log(newSong);     
        CreateSongForm()  // calling function on app.js, sending our post data to be stored 
    }

    return ( 
        <div>
            <h3>Create A Song</h3>
    
            <form onSubmit={handleSubmit}>
                <div className='border-box'>
                    <div className='form-group row'>
                        <label htmlFor='input name' className='col-sm-1 col-form-label'> Title</label>
                        <div className='col-sm-10'>                
                            <input type='text' onChange={(event) => setTitle(event.target.value)} value={title}/>    {/*  sending data to hook on line 5 */}
                        </div>
                    </div>
                    <div className='form-group row'>
                        <label htmlFor='input name' className='col-sm-1 col-form-label'> Album</label>
                        <div className='col-sm-10'>                
                            <input type='text' onChange={(event) => setAlbum(event.target.value)} value={album}/>    {/*  sending data to hook on line 5 */}
                        </div>
                    </div>
                    <div className='form-group row'>
                        <label htmlFor='input name' className='col-sm-1 col-form-label'> Genre</label>
                        <div className='col-sm-10'>                
                            <input type='text' onChange={(event) => setGenre(event.target.value)} value={genre}/>    {/*  sending data to hook on line 5 */}
                        </div>
                    </div>
                    <div className='form-group row'>
                        <label htmlFor='input name' className='col-sm-1 col-form-label'> Release Date</label>
                        <div className='col-sm-10'>                
                            <input type='date' onChange={(event) => setReleaseDate(event.target.value)} value={release_date}/>    {/*  sending data to hook on line 5 */}
                        </div>
                    </div>
                    <div className='form-group row'>
                        <label htmlFor='input name' className='col-sm-1 col-form-label'> Artist</label>
                        <div className='col-sm-10'>                
                            <input type='text' onChange={(event) => setArtist(event.target.value)} value={artist}/>    {/*  sending data to hook on line 5 */}
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-10">
                            <button type="submit" className="btn btn-primary">Create Song</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>

     );
}
 
export default CreateSongForm;