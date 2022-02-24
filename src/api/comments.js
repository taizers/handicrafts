import axios from 'axios';
import {API_URL} from "../constants";
import data from '../moki.json';
import {filter, forIn, isArray} from "lodash";

export const getCommentsApi = async (payload) => {


        let commentsArr = [];

        data.comments.forEach((comment) => {
            const users = data.users.map((user) => {
                if (user.id === comment.userId) {
                    return user
                }
            });
            const posts = data.posts.map((post) => {
                if (post.id === comment.postId) {
                    return post
                }
            });

            const post = posts[0];
            const user = users[0];
            let mas = [];
            let mas2 = [];

            forIn(user, (value, key) => {
                mas.push(value);
            })
            forIn(post, (value, key) => {
                mas2.push(value);
            })
            commentsArr.push({
                ...comment,
                avatar: mas[4],
                postTitle: mas2[1],
                userName: mas[3],
                userLogin: mas[1],
            });
        });

        return  commentsArr;


/*    if (payload) {
        return await axios.get(API_URL + "comments/" + payload)
        .then(response => response.data)
    } else {
        return await axios.get( API_URL + "comments/")
        .then(response => response.data)
    } */
    
};

export const deleteCommentApi = async (payload) => {
    return await axios.delete(API_URL + "comments/" + payload)
    .then(response => response.data)
};

export const editCommentApi = async (payload) => {
    const { id, comment } = payload
    return await axios.put(API_URL + "comments/" + id, { comment })
    .then(response => response.data)
};

export const createCommentApi = async (payload) => {
    return await axios.post(API_URL + "comments/",{payload})
    .then(response => response.data)
};
