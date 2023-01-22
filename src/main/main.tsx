import { TextField, Button } from '@mui/material';
import React, { useState } from 'react';
import { TwitterAPIService } from '../services/twitterClient';

interface Props {}

interface Post {
    title: string;
    author: string;
    created_utc: number;
    url: string;
    permalink: string;
    thumbnail: string;
    preview: {
        images: [
            {
                source: {
                    url: string;
                };
            }
        ];
    };
}

const Main: React.FC<Props> = (props) => {
    const [text, setText] = useState('');
    const snoowrap = require('snoowrap');
    const rwClient = new TwitterAPIService(
        process.env.REACT_APP_TW_API_KEY ?? '',
        process.env.REACT_APP_TW_API_KEY_SECRET ?? '',
        process.env.REACT_APP_TW_ACCESS_TOKEN ?? '',
        process.env.REACT_APP_TW_ACCESS_TOKEN_SECRET ?? ''
    );

    const tweet = async () => {
        try {
            await rwClient.post('hola mundo');
        } catch (error) {}
    };

    // const r = new snoowrap({
    //     userAgent: process.env.REACT_APP_RED_USER_AGENT,
    //     clientId: process.env.REACT_APP_RED_CLIENT_ID,
    //     clientSecret: process.env.REACT_APP_RED_CLIENT_SECRET,
    //     username: process.env.REACT_APP_RED_USERNAME,
    //     password: process.env.REACT_APP_RED_PASSWORD,
    // });

    // const get = () =>
    //     r
    //         .getSubreddit('SupermodelCats')
    //         .getNew()
    //         .then((posts: Array<Post>) => {
    //             const latestPost = posts[0];
    //             console.log('|posts', posts);
    //             console.log('|latestPost', latestPost);
    //             console.log('|latestPost.title', latestPost.title);
    //             console.log(
    //                 '|latestPost?.preview?.images[0]?.source?.url',
    //                 latestPost?.preview?.images[0]?.source?.url
    //             );
    //         });

    const handleClick = () => {
        // get();
        tweet();
        // console.log('|r', r);
    };

    return (
        <div>
            <TextField
                id='standard-basic'
                label='Text Input'
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <Button variant='contained' color='primary' onClick={handleClick}>
                Click me
            </Button>
        </div>
    );
};

export default Main;
