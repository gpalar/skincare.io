import React from 'react';

interface productinterface {
    src: string;
    title: string;
    tags: string[];
}

function Product(props: productinterface) {
    return (
        <div className="product">
            <img src={props.src} alt="product image" className="product_image" />
            <div className="product_content align-left">
                <div className='w-full'>
                    <h3 className="product_title">{props.title}</h3>
                    <div className="product_tags">
                        {props.tags && (props.tags).filter((x) => x != '').map((tag, index) => (
                            <span key={index} className="tag">{tag}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;


