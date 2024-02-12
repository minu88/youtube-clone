import React from "react";

const commentsData = [
    {
        name: "Minu John",
        text: "Comment Section to check nested comment... this is the text of comment",
        replies: [
            {
                name: "Minu John",
                text: "Comment Section to check nested comment... this is the text of comment", 
                replies: [
                    {
                        name: "Rinosh John",
                        text: "Comment Section to check nested comment... this is the text of comment",
                        replies: []
                    }
                ]
            }
        ]
    },
    {
        name: "Nimmy John",
        text: "Comment Section to check nested comment... this is the text of comment",
        replies: [
            {   
                name: "Reni John",
                text: "Comment Section to check nested comment... this is the text of comment",
                replies: [
                    {   
                        name: "Rinosh John",
                        text: "Comment Section to check nested comment... this is the text of comment",
                        replies: [
                            {
                                name: "Alina John",
                                text: "Comment Section to check nested comment... this is the text of comment",
                                replies: [
                                    {
                                        name: "Akshay Saini",
                                        text: "Comment Section to check nested comment... this is the text of comment"
                                    }
                                ] 
                            }
                        ] 
                    }    
                ] 
            },
            {
                name: "Minu John",
                text: "Comment Section to check nested comment... this is the text of comment",
                replies: []
            }

        ]
    },
    {
        name: "Sheela John",
        text: "Comment Section to check nested comment... this is the text of comment",
        replies: [
            {
                name: "Minu John",
                text: "Comment Section to check nested comment... this is the text of comment", 
                replies: []
            }
        ]
    },
    {
        name: "Jerrin John",
        text: "Comment Section to check nested comment... this is the text of comment",
        replies: [
            {
                name: "Minu John",
                text: "Comment Section to check nested comment... this is the text of comment", 
                replies: []
            }
        ]
    }
]

const Comments = () => {
    return (
        <div>
            <div>Hello</div>
        </div>
    )
}

const CommentsContainer = () => {
    return (
        <div>
            <div className="font-bold text-xl my-3">Comments: </div>
        </div>
    )
}

export default CommentsContainer;