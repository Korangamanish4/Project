import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import Header from '../component/Header';
import './Common.css';

const Album = () => {

    const [products, setProducts] = useState([]);
    const [showData, setShowData] = useState(false)
    const navigate = useNavigate()
    const { userId } = useParams()
    const userAPI = `https://jsonplaceholder.typicode.com/albums?userId=${userId}`

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

    const handlePageChange = (id) => {
        navigate(`/albums/userId=${userId}/albumDetails/albumId=${id}`);
    }

    return (
        <div>
            <Header />
            {showData &&
                <div className="main">
                    {products.length && products.map((item) => {
                        return (
                            <div className='albumCards' key={item.id} onClick={() => handlePageChange(item.id)}>
                                <div className='albumId'>
                                    Album Id : {item.id}
                                </div>
                                <div className='albumTitle'>
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

export default Album