import { useHistory } from 'react-router-dom'
import ReactPaginate from 'react-paginate'

import React from 'react'
import Layout from '../layout/Layout'
import { useQuery } from '@apollo/react-hooks'
import { GET_POSTS } from '../requests/graphql'
import Post from './Post'
import { IPost } from '../types/Post'
//TOOD Connect to posts grapsql api https://vpilip.com/how-build-simple-pagination-in-nextjs/

const Posts = () => {

    const {loading, data, error} = useQuery(GET_POSTS)
    
    //Mock values to paginations
    const currentPage = 0
    const pageCount = 10

    const history  = useHistory()

    const pagginationHandler = () => {}

    const onClick = () => {
        history.goBack()
    }

    return (
        <Layout>
                 <div className="min-h-screen flex flex-col justify-center items-center mt-20">
                 <div className="flex flex-row space-between pb-20 pt-20 w-8/12 justify-between">
                 <h1 className="uppercase text-2xl font-extrabold" style={{
                        color: '#3559A4'
                    }}>Aktualnośći</h1>
                    <div>
                        <p className="font-extrabold text-lg cursor-pointer" onClick={onClick}>Powrót</p>
                    </div>
                 </div>
                    <div className="w-auto flex flex-col items-center w-8/12 ">
                   
                       {data ? data.posts.nodes.map((item: any) => (
                           <Post content={item.content} id={item.id} title={item.title} />
                       )) : null }
                        <div className="pt-5 pb-5 text-sm md:text-lg ">
                            <ReactPaginate
                                previousLabel={'previous'}
                                nextLabel={'next'}
                                breakLabel={'...'}
                                breakClassName={'break-me'}
                                activeClassName={'active'}
                                containerClassName={'pagination'}
                                initialPage={currentPage - 1}
                                pageCount={pageCount}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={1}
                                onPageChange={pagginationHandler}
                        />                         
                        </div>
                </div>
                </div>
        </Layout>
    )
}

export default Posts