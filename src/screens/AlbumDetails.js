import React, { useState, useEffect, useContext } from 'react'
import { useParams } from "react-router-dom";
import Header from '../component/Header';
import { userContext } from '../store/context';
import './Common.css';

const AlbumDetails = () => {
    const [products, setProducts] = useState([]);
    const [showData, setShowData] = useState(false)
    const { id } = useParams()
    const setIsLoading = useContext(userContext)
    const userAPI = `https://jsonplaceholder.typicode.com/photos?albumId=${id}`

    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
            getData(userAPI)
        },[3000])
    })

    const getData = async (url) => {
        try {
            const res = await fetch(url)
            const value = await res.json()
            console.log("VALUE ", value)
            setProducts(value)
            setShowData(true)
            setIsLoading(false)
        } catch (error) {
            console.log("ERROR ", error)
            setIsLoading(false)
        }
    }

    return (
        <div>
            <Header />
            {showData &&
                <div className="main">
                    {products.length && products.map((item) => {
                        return (
                            <div className='albumDetailsCards' key={item.id} >
                                <div className='image'>
                                    <img alt='' src={item.url} />
                                </div>
                                <div className='albumDetailsTitle'>
                                    {item.title}
                                </div>
                            </div>
                        )
                    })}
                </div>
            }
        </div>
    );
}

export default AlbumDetails