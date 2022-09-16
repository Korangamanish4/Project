import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import Header from '../component/Header';
import './Common.css';

const AlbumDetails = () => {
    const [products, setProducts] = useState([]);
    const [showData, setShowData] = useState(false)
    const { id } = useParams()
    const userAPI = `https://jsonplaceholder.typicode.com/photos?albumId=${id}`

    useEffect(() => {
        getData(userAPI)
    }, [])

    const getData = async (url) => {
        try {
            const res = await fetch(url)
            const value = await res.json()
            console.log("VALUE ", value)
            setProducts(value)
            setShowData(true)
        } catch (error) {
            console.log("ERROR ", error)
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
                                    <img src={item.url} />
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