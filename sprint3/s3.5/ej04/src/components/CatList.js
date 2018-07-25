import React from 'react';
import RandomCat from './RandomCat';

const CatList = ({width, heigth}) => {


       
     return(
            <section className="section-cats">
                <h1>All Cats Are Beautiful</h1>
                <ul className="section-cats_list">
                    <li><RandomCat ancho = {width} alto = {200} /></li>
                    <li><RandomCat ancho = {width} alto = {400}/></li>
                    <li><RandomCat /></li>
                </ul>
            </section>
       );
};

export default CatList;