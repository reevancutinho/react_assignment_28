// import React from "react";
// import { Formik } from "formik";
// import axios from "axios";

// function FormikComponent1() {
//     const [product, setProduct] = React.useState([])
//     const [load, setLoad] = React.useState(false);

//     React.useEffect(() => {
//         if (!load) {
//             axios.get('https://62567c3652d8738c692f7888.mockapi.io/products').then(res => setProduct(res.data));
//         }
//         setLoad(true);
//     })

//     const initialValue = {id: '',name: '',price: '',manufacturer: ''}

//     const handleSubmit = (formData,{resetForm}) => {
//         if (formData.id !== undefined && formData.id !== '') {
//             axios.put(`https://62567c3652d8738c692f7888.mockapi.io/products/${formData.id}`,
//                 {
//                     name: formData.name,
//                     price: formData.price,
//                     manufacturer: formData.manufacturer,
//                 }
//             ).then(res => {
//                 var index = product.findIndex((row) => row.id === res.data.id);
//                 var products = product;
//                 products[index] = res.data;
//                 setProduct(products);
//                 setLoad(false)
//             });
            
//         }
//         else {
//             console.log("post");
//             axios.post(`https://62567c3652d8738c692f7888.mockapi.io/products`,
//                 {
//                     name: formData.name,
//                     price: formData.price,
//                     manufacturer: formData.manufacturer,
//                 }
//             ).then(res => {
//                 var products = product;
//                 products.push(res.data);
//                 setProduct(products);
//                 setLoad(false)
//             });
//         }


//     }

//     const handleDelete = (id) => {
//         axios.delete(`https://62567c3652d8738c692f7888.mockapi.io/products/${id}`);
//         var products = product.filter((row) => row.id !== id);
//         setProduct(products);
//     }
//     const onPopulateData = (id) => {
//         const selectedData = product.filter((row) => row.id === id)[0];
//         console.log(selectedData.id, selectedData.name);
//         initialValue = selectedData;

//     }

//     const validate = (formData) => {
//         var errors = {};
//         if (formData.name === '') errors.name = 'Name is Required';
//         if (formData.price === '') errors.price = 'Price is Required';
//         if (formData.manufacturer === '') errors.manufacturer = 'Manufacturer is Required';
//         return errors;
//     };

//     return (
//         <>
//             <h2>CRUD Using Formik1</h2>
//             <Formik
//                 initialValues={initialValue}
//                 enableReinitialize
//                 validate={(formData) => validate(formData)}
//                 onSubmit={(formData,{resetForm}) => {handleSubmit(formData,{resetForm})}}
//             >
//                 {({
//                     values,
//                     errors,
//                     touched,
//                     handleChange,
//                     handleBlur,
//                     handleSubmit,
//                     handleReset,
//                     isSubmitting,
//                     setValues,
//                 }) => (
//                     <form onSubmit={handleSubmit}>
//                         <div>
//                             <label> Name </label>
//                             <input
//                                 type="text"
//                                 name="name"
//                                 value={values.name}
//                                 onChange={handleChange}
//                                 onBlur={handleBlur}
//                             />
//                         </div>
//                         <span style={{ color: 'red' }}>
//                             {touched.name && errors.name}
//                         </span><br />
//                         <div>
//                             <label> Price </label>
//                             <input
//                                 type="text"
//                                 name="price"
//                                 value={values.price}
//                                 onChange={handleChange}
//                                 onBlur={handleBlur}
//                             />
//                         </div>
//                         <span style={{ color: 'red' }}>
//                             {touched.price && errors.price}
//                         </span><br />
//                         <div>
//                             <label> Manufacturer </label>
//                             <input
//                                 type="text"
//                                 name="manufacturer"
//                                 value={values.manufacturer}
//                                 onChange={handleChange}
//                                 onBlur={handleBlur}
//                             />
//                         </div>
//                         <span style={{ color: 'red' }}>
//                             {touched.manufacturer && errors.manufacturer}
//                         </span><br />
//                         <div>
//                             <button type="submit"> Submit </button> &nbsp; &nbsp;
//                             <button type="button" onClick={handleReset}> Reset </button> &nbsp; &nbsp;
//                         </div>
//                         <br /> <br />
//                         <div style={{ display: 'flex', justifyContent: 'center' }}>
//                             <table border={1}>
//                                 <thead>
//                                     <tr>
//                                         <td> Id </td>
//                                         <td> Name </td>
//                                         <td> Price </td>
//                                         <td> Manufacturer </td>
//                                         <td> Actions </td>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {product.map((row) => (
//                                         <tr>
//                                             <td> {row.id} </td>
//                                             <td> {row.name} </td>
//                                             <td> {row.price} </td>
//                                             <td> {row.manufacturer} </td>
//                                             <td>
//                                                 <button onClick={() => setValues({id:row.id,name:row.name,price:row.price,manufacturer:row.manufacturer})}>Edit</button>{' '}
//                                                 &nbsp;
//                                                 <button onClick={() => handleDelete(row.id)}>Delete</button>
//                                             </td>
//                                         </tr>
//                                     ))}
//                                 </tbody>
//                             </table>
//                         </div>
//                     </form>
//                 )}
//             </Formik>
//         </>
//     )

// }

// export default FormikComponent1;