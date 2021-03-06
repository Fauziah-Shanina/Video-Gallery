import React,{Component} from 'react';
import ReactDom from 'react-dom';
//We have to write the path reference when we import custom components
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';





//INSERT API KEY HERE
//Create a new component . This component shoulde produce some html

//const is similar to var , it has been used because we are not going to reassign the app in next time
//what function returns is an jsx code, it seems like an html code
//ES5 ---- const App = function () {return ...}
//ES6 ---- const App = ()=>        {return ...            }

//for multilines jsx do we use () after return keyword / If we don't have to use () we must make sure that div keyword be wrote next to return
class App extends Component{

  constructor (props)
  {
    super (props);
    this.state = {videos : [],
     selectedVideo: null
    }

    YTSearch ({key:API_KEY, term : 'sparebanken vest'} ,(videos) =>
    {
      this.setState ({videos:videos,
       selectedVideo:videos[0]
      });
    });

  }
  render (){
  return (
    <div>
       <SearchBar />
       <VideoDetail video= {this.state.selectedVideo}/>
       <VideoList videos= {this.state.videos} onVideoSelect ={(selectedVideo)=> this.setState({selectedVideo})}/>
     </div>);
}
}


//Take this component's generated html and put it on the page (in the DOM)/ rendering
//render function renders the first parameter (component instance) into the second parameter (exist html node )
ReactDom.render (<App />, document.querySelector('.container'));
