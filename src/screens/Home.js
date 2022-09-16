import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Header from '../component/Header';
import './Common.css';

const userAPI = " https://jsonplaceholder.typicode.com/users "

const Home = () => {
    const [products, setProducts] = useState([]);
    const [showData, setShowData] = useState(false)
    const navigate = useNavigate()

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
        navigate(`/albums/userId=${id}`);
    }

    return (
        <div>
            <Header />
            {showData &&
                <div className='main'>
                    {products.length && products.map((item) => {
                        return (
                            <div className='cards' key={item.id} onClick={() => handlePageChange(item.id)}>
                                <div className='userName'>
                                    <h1>{item.name}</h1>
                                </div>
                                <div className='email'>
                                    <p1>Email :</p1>
                                    <p2>{item.email}</p2>
                                </div>
                                <div className='company'>
                                    <p1>Company Name :</p1>
                                    <p2> {item.company.name}</p2>
                                </div>
                                <div className='phone'>
                                    <p1>Phone No :</p1>
                                    <p2>{item.phone}</p2>
                                </div>
                                <div className='website'>
                                    <p1>Website :</p1>
                                    <p2>{item.website}</p2>
                                </div>
                                <div className='address'>
                                    <p1>City :</p1>
                                    <p2>{item.address.city}</p2>
                                </div>
                            </div>
                        )
                    })}
                </div>
            }
        </div>
    );
}

export default Home