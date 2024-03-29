import React/* , {useState,useEffect} */ from 'react'

function LastMovieInDb({productsData}) {
  let lastProduct = productsData[productsData.length - 1]

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Último producto cargado
          </h5>
        </div>
        <div className="card-body">
          <div className="text-center">
            <img
              className="img-fluid px-3 px-sm-4 mt-3 mb-4"
              style={{ width: 40 + 'rem' }}
              src={productsData.length > 0 && lastProduct.Image}
              alt="Último producto imágen"
            />
          </div>
          <p>
            {productsData.length > 0 && lastProduct.name}
          </p>
          <p>
            {productsData.length > 0 && lastProduct.Description}
          </p>
          <p>
            {productsData.length > 0 && lastProduct.Descriptionplus}
          </p>
          <p>
           EL precio es de {productsData.length > 0 && lastProduct.Price}$
          </p>

        </div>
      </div>
    </div>
  )
}

export default LastMovieInDb
