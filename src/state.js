import { reactive } from 'vue'

export const state = reactive({
    voices: ['Home', 'Apple', 'Microsoft', 'Android', 'Forums', 'Contact Us'],
    forums: [
        {
            img: '/icons/file-solid.svg',
            title: 'News & Community'
        },
        {
            img: '/icons/apple.svg',
            title: 'Apple Forum'
        },
        {
            img: '/icons/windows.svg',
            title: 'Microsoft Forum'
        },
        {
            img: '/icons/android.svg',
            title: 'Android Forum'
        },
        {
            img: '/icons/mug-saucer-solid.svg',
            title: 'General Discussion'
        },
        {
            img: '/icons/uncharted.svg',
            title: 'Aps & Software'
        },
        {
            img: '/icons/laptop-solid.svg',
            title: 'Gadgets & Stuff'
        },
        {
            img: '/icons/wrench-solid.svg',
            title: 'Tutorials & Guides'
        },


    ],
    latestNews: [
        {
            img: '/img/post_feat_img_25-320x202.jpg',
            title: 'Lorem Ipsum',
            date: 'October 11th, 2015 | 2 Comments',
            paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, odio!'
        },
        {
            img: '/img/post_feat_img_24-320x202.jpg',
            title: 'Lorem Ipsum',
            date: 'October 11th, 2015 | 2 Comments',
            paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, odio!'
        },
        {
            img: '/img/post_feat_img_20-320x202.jpg',
            title: 'Lorem Ipsum',
            date: 'October 11th, 2015 | 2 Comments',
            paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, odio!'
        },
        {
            img: '/img/post_feat_img_22-320x202.jpg',
            title: 'Lorem Ipsum',
            date: 'October 11th, 2015 | 2 Comments',
            paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, odio!'
        },
        {
            img: '/img/post_feat_img_21-320x202.jpg',
            title: 'Lorem Ipsum',
            date: 'October 11th, 2015 | 2 Comments',
            paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, odio!'
        },
        {
            img: '/img/post_feat_img_25-320x202.jpg',
            title: 'Lorem Ipsum',
            date: 'October 11th, 2015 | 2 Comments',
            paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, odio!'
        }
    ],
})