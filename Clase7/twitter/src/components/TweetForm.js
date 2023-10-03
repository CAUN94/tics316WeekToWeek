import React, {useState} from "react";

function TweetForm(props){
    const {onTweetSubmit} = props
    const [tweet,setTweet] = useState('');

    const handleTweetChange = (e) =>{
        setTweet(e.target.value)
    };

    const handleTweetSubmit = (e) =>{
        e.preventDefault();
        if(tweet.trim() != '') {
            onTweetSubmit(tweet)
            setTweet('')
        }
    };
    
    return(
        <div class="col-md-3">
            <div class="card">
            <div class="card-body">
                <h5 class="card-title">Nueva publicación</h5>
                <form onSubmit={handleTweetSubmit}>
                <div class="mb-3">
                    <textarea 
                        className="form-control" 
                        rows="3" 
                        placeholder="¿Qué estas pensando?"
                        value = {tweet}
                        onChange={handleTweetChange}
                        ></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Publicar</button>
                </form>
            </div>
            </div>
        </div>
    )
}

export default TweetForm;