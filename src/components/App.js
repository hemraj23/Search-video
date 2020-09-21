import React from 'react';
import SeachBar from './SearchBar';
import YouTube from '../apis/YouTube';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';

class App extends React.Component{
    state = { videos : [], selectedVideo:null }

    componentDidMount(){
        this.onTermSubmit('dx theme');
    }
    
    onTermSubmit = async (term) =>{
        const response = await YouTube.get('search/',{
            params:{
                q:term
            }
        });
        
        //console.log(responce.data.items);
        
        this.setState({ 
            videos : response.data.items,
            selectedVideo : response.data.items[0]
        });
    } 
    
    onVideoSelect = (video) =>{
        this.setState({selectedVideo:video});
    }

    render(){
        return(
            <div className="ui container">
                <SeachBar onFormSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="row">
                        <div className="eleven wide column">
                            <VideoDetails video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}  />
                        </div>
                    </div>
                </div> 
            </div>
        );
    }
}

export default App;

