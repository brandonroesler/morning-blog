import React, { Component } from 'react'

export default class Main extends Component {
    state = {
        post: [
            {
                title : 'My Day',
                author : 'Brandon',
                post : "My day is here and I'm still breathing"
            }
        ]
    }

    handleClick  = (event) => {
        this.setState( {
            name : 'Not Brandon'
        })
    }

    render() {
        const posts = this.state.post.map((post, index) => {
            return(
                <li>
                    <h3>{post.title}</h3>
                </li>
            )
        })

        return (
            <div>
                <heading>
                <h1>The Baseball Blog</h1>
                </heading>
                <section>
                    <ul>
                        {posts}
                    </ul>
                </section>
            </div>
        )
    }
}
