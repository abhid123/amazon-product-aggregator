import React, { useState } from 'react';
import { Input, Table, Spin, notification, Layout, Row, Col } from 'antd';
import axios from 'axios';
import './SearchPage.css'; 

const { Search } = Input;
const { Content } = Layout;

const SearchPage = () => {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);

    const handleSearch = async (value) => {
        if (!value) {
            notification.warning({ message: 'Please enter a search term.' });
            return;
        }
    
        setLoading(true);
        try {
            const response = await axios.get(`http://localhost:5000/search?query=${encodeURIComponent(value)}`);
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching data:', error.response?.data || error.message);
            notification.error({
                message: 'Failed to fetch product data',
                description: error.response?.data?.error || 'Unknown error occurred',
            });
        } finally {
            setLoading(false);
        }
    };
    

    const columns = [
        { title: 'Product Name', dataIndex: 'name', key: 'name' },
        { title: 'Price', dataIndex: 'price', key: 'price', responsive: ['md'] }, 
        { title: 'Rating', dataIndex: 'rating', key: 'rating', responsive: ['md'] }, 
        { title: 'ASIN', dataIndex: 'asin', key: 'asin' },
    ];

    return (
        <Layout className="layout">
            <Content style={{ padding: '20px 50px' }}>
                <Row justify="center">
                    <Col xs={24} sm={20} md={16} lg={12}>
                        <Search
                            placeholder="Search for Amazon products"
                            enterButton="Search"
                            size="large"
                            onSearch={handleSearch}
                            style={{ marginBottom: '20px', width: '100%' }}
                        />
                    </Col>
                </Row>
                {loading ? (
                    <Spin size="large" style={{ display: 'block', textAlign: 'center', marginTop: '20px' }} />
                ) : (
                    <Table
                        dataSource={products}
                        columns={columns}
                        rowKey="asin"
                        pagination={{ pageSize: 10 }}
                        scroll={{ x: 800 }}
                        className="product-table"
                    />
                )}
            </Content>
        </Layout>
    );
};

export default SearchPage;
