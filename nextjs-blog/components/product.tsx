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
            <img src={props.src} alt="product image" className="product-image" width="130" height="auto" />
            <div className="product-content">
                <h3 className="product-title">{props.title}</h3>
                <div className="product-tags">
                    {props.tags && props.tags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                    ))}
                </div>
            </div>
        </div>

        // {tags.map((props.tag) => (
        //     <div className='flex flex-row'>
        //     <Tag name={props.tag} />
        //     </div>
        // ))}
    );
};

export default Product;


