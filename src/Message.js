// es7 snippets
import React, { forwardRef } from 'react'
import { Card, CardContent, Typography } from '@material-ui/core';
import './Message.css'

const Message = forwardRef(({message, username }, ref) => {
    console.log(username);
    const isUser = username === message.username;

    return (
        <div ref={ref} className={`message ${isUser && 'message__user'}`}>
            <Card className={isUser ? "message__userCard" : 'message__guestCard'}>
                <CardContent>
                    <Typography 
                        variant="h5"
                        color="white"
                        component="h2"
                    >
                        {!isUser && `${message.username || "Unknown User"} says: `} {message.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
})

export default Message
