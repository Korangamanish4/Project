import React, { useState, useEffect, useContext } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import Header from '../component/Header';
import { userContext } from '../store/context';
import './Common.css';

const Album = () => {

    const [products, setProducts] = useState([]);
    const [showData, setShowData] = useState(false)
    const navigate = useNavigate()
    const { userId } = useParams()
    const setIsLoading = useContext(userContext)
    const userAPI = `https://jsonplaceholder.typicode.com/albums?userId=${userId}`

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
            setIsLoading(false)
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