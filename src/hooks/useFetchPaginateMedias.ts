import { useEffect, useState } from 'react'
import { API_SERVER } from '../constants';
import {  IMediaPagedResponseItem } from '../types/MediaItem';

const useFetchPaginateMedias = (page: number, folderId: any) => {

    const [status, setStatus] = useState<string>("idle"); 
    const [currentPage, setCurrentPage] = useState<number>(0); 
    const [previousPage, setPreviousPage] = useState<number>(0); 
    const [hasMore, setHasMore] = useState<boolean>(false);
    const [content, setContent] = useState<IMediaPagedResponseItem[]>([]); 

    useEffect(() => {

    if(!page || !folderId) return;
    
    const fetchPagedData = async () => {

        const response = await fetch(`${API_SERVER}wp-json/api/v1/images/${folderId}?page=${page}`)
        const data = response.json(); 

    }

    fetchPagedData(); 
  
    }, [folderId, page])

    return {status, currentPage, previousPage, hasMore, content}; 

}

export default useFetchPaginateMedias