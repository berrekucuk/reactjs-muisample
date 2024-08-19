import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

function Posts() {

    const { data, isLoading, error } = useQuery({
        queryKey: 'posts',
        queryFn: async () => {
            return axios.get('https://jsonplaceholder.typicode.com/posts')
                .then(res => res.data)
        },
        // refetchInterval: 3000 Her 3 saniyede bir yeniden yükleme yapar.
    })

    const refresh = () => {
        queryClient.invalidateQueries(['posts'])
    }

    return <>
        <Button onClick={refresh}>Refresh</Button>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
            </thead>
            <tbody>
                {isLoading && <tr><td>Loading...</td></tr>}
                {data && data.map(post => <tr key={post.id}>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td>{post.body}</td>
                </tr>)}
            </tbody>
        </table>
    </>
}

export default Posts