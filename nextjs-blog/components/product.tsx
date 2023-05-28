import React from 'react';

interface productinterface {
    src: string;
    title: string;
    tags: string[];
}

function Product(props: productinterface) {
    //const { imageSrc, title, tags } = props;

    return (
        <div className="product">
            <img src={props.src} alt="product image" className="product_image" width="170" height="auto" />
            <div className="product_content">
                <h3 className="product_title">{props.title}</h3>
                <div className="product_tags">
                    {props.tags && props.tags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Product;


