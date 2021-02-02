import { useEffect, useState } from 'react';
<<<<<<< HEAD
import { Card, ListGroup, Form, Container, Row, Col } from 'react-bootstrap';
import React from 'react-router-dom';
import './Ecommerce.css';
import useHttp from './Hooks/useHttp';
=======
import React from 'react-router-dom';
import axios from 'axios';
import './Ecommerce.css';
>>>>>>> 8fae074a18eb002d814af1da65e1d401d4c4f0c4
import Pagination from './Pagination';

const Ecommerce = (props) => {

<<<<<<< HEAD
    const [products, fetchProducts] = useHttp('/products');
    const [brands, fetchBrands] = useHttp('/brands');
=======
    const [products, setProducts] = useState();
>>>>>>> 8fae074a18eb002d814af1da65e1d401d4c4f0c4
    const [currPage, setCurrPage] = useState(1);
    const [productsPerPage, setProductsPerPage] = useState(9);
    const [brandNames, setBrandNames] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState();
<<<<<<< HEAD
    const [sort, setSort] = useState();
    const [totalProducts, setTotalProducts] = useState();

=======
    const [brands, setBrands] = useState();
    const [sort, setSort] = useState();
    const [totalProducts, setTotalProducts] = useState();

    useEffect(() => {
        axios.get('http://localhost:8080/products')
            .then(response => {
                setProducts(response.data);
            })
    }, []);

    useEffect(() => {
        axios.get('http://localhost:8080/brands')
            .then(response => {
                setBrands(response.data);
            })
    }, [])

>>>>>>> 8fae074a18eb002d814af1da65e1d401d4c4f0c4
    const handlePrevious = () => {
        if (currPage !== 1) {
            setCurrPage(currPage - 1);
        }
    }
    const handleNext = (max) => {
        if(currPage !== max){
            setCurrPage(currPage + 1);
        }
    }
    const paginate = (number) => {
        setCurrPage(number);
    }

    useEffect(() => {
        if (products) {
            const newProducts = [...products];
            let filteredBrands = newProducts;
            if(brandNames.length !== 0){
                filteredBrands = newProducts.filter(product => {
                    return brandNames.findIndex(brand => brand === product.brand.name) !== -1;
                    
                })
            };
            if(sort && sort === "Low to high") {
                filteredBrands.sort((a, b) => {return a.price - b.price});
            } else if(sort === "High to low") {
                filteredBrands.sort((a, b) => {return b.price - a.price});
            };
            setTotalProducts(filteredBrands.length);
            const filterProducts = filteredBrands.slice((currPage-1)*productsPerPage, currPage*productsPerPage);
            setFilteredProducts(filterProducts);
        }
    }, [products, currPage, brandNames, sort, productsPerPage]);

    const goToProduct = (id) => {
        props.history.push('/product/' + id);
    }

    const filterByBrand = (name) => {
    
        const index = brandNames.findIndex(brand => brand === name);
        let newBrands;
        if(index === -1){
            newBrands = [...brandNames];
            newBrands.push(name);
            setBrandNames(newBrands);
        }
        else {
            newBrands = [...brandNames]; 
            newBrands = newBrands.filter(brand => {
                return brand !== name;
            });
            setBrandNames(newBrands);
        };

        setCurrPage(1);
    }

    const sortByPrice = (option) => {
        setSort(option);
        setCurrPage(1);
    }

    const changeLayout = (val) => {
        setProductsPerPage(3*val);
        setCurrPage(1);
    }

    return (
        <div>
            <main className="wrapper">
                <div>
<<<<<<< HEAD
                <Card style={{ width: "18rem" }}>
                    <Card.Header>Brands</Card.Header>
                    <ListGroup variant="flush">
                        {brands ? brands.map(brand => {
                            return <ListGroup.Item key={brand.id} className="list-group-item">
                                <Form.Check type="checkbox" name="brand" onChange={() => {filterByBrand(brand.name)}} label={brand.name}/>
                            </ListGroup.Item>;
                        }) : null}

                    </ListGroup>
                </Card>
                <Card style={{ width: "18rem" }}>
                    <Card.Header>Price</Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <Form.Check type="radio" name="price" onChange={() => sortByPrice("Low to high")} label="Low to high"/>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Form.Check type="radio" name="price" onChange={() => sortByPrice("High to low")} label="High to low"/>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
                </div>
                {filteredProducts ?
                <Container>
                    <Row>
                        <Col sm={5}></Col>
                        <Col sm={3}>Change Layout</Col>
                        <Col sm={2}><button onClick={() => changeLayout(3)}>3 in row</button></Col>
                        <Col sm={2}><button onClick={() => changeLayout(4)}>4 in row</button></Col>
                    </Row>
                    <Row>
=======
                <div className="card" style={{ width: "18rem" }}>
                    <div className="card-header">Brands</div>
                    <ul className="list-group list-group-flush">
                    
                        {brands ? brands.map(brand => {
                            return <li key={brand.id} className="list-group-item">
                                <input type="checkbox" name="brand" onChange={() => {filterByBrand(brand.name)}}/>{brand.name}
                            </li>;
                        }) : null}

                    </ul>
                </div>
                <div className="card" style={{ width: "18rem" }}>
                    <div className="card-header">Price</div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <input type="radio" name="price" onChange={() => sortByPrice("Low to high")}/>Low to high
                        </li>
                        <li className="list-group-item">
                            <input type="radio" name="price" onChange={() => sortByPrice("High to low")}/>High to low
                        </li>
                    </ul>
                </div>
                </div>
                {filteredProducts ?
                <div className="container">
                    <div className="row">
                        <div className="col-sm-5"></div>
                        <div className="col-sm-3">Change Layout</div>
                        <div className="col-sm-2"><button onClick={() => changeLayout(3)}>3 in row</button></div>
                        <div className="col-sm-2"><button onClick={() => changeLayout(4)}>4 in row</button></div>
                    </div>
                    <div className="row">
>>>>>>> 8fae074a18eb002d814af1da65e1d401d4c4f0c4
                        {filteredProducts.map(product => {
                            return (
                                <div key={product.id} className={productsPerPage === 9 ? "card col-4" : "card col-3"} onClick={() => { goToProduct(product.id) }}>
                                    <img className="card-img-top" src={product.imageUrl} alt="Card image" />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.name}</h5>
                                        <p className="card-text">${product.price}</p>
                                        <p className="card-text">{product.description}</p>
                                    </div>
                                </div>
                            );
                        })}
<<<<<<< HEAD
                    </Row>
                </Container>
=======
                    </div>
                </div>
>>>>>>> 8fae074a18eb002d814af1da65e1d401d4c4f0c4
                    : null}
            </main>
            {filteredProducts?
                 <Pagination productsPerPage={productsPerPage} totalProducts={totalProducts} paginate={paginate} handlePrevious={handlePrevious} handleNext={handleNext}/>
                 : null}
        </div>
    );
}

export default Ecommerce;